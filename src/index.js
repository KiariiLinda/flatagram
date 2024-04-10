const title = document.getElementById("card-title");
const likes = document.getElementById("like-count");
const likebtn = document.getElementById("like-button");
const commentList = document.getElementById("comments-list");
const li = document.getElementById("comments-list");
const imagePic = document.getElementById("card-image");
fetch("http://localhost:3000/images")
  .then((response) => response.json())
  .then((images) => {
    images.forEach((image) => {
      imagePic.src = image.image;
      title.textContent = image.title;
    });
  });


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const commentData = document.getElementById("comment").value;
  console.log(commentData);

  fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageId: 1, content: commentData }),
  })
    .then((response) => response.json())
    .then((response) => {
      alert("comment added successfully");
    });
});

fetch("http://localhost:3000/comments")
  .then((response) => response.json())
  .then((comments) => {
    comments.forEach((comment) => {
      console.log(comment);
      commentList.innerHTML += `<li>${comment.content}<br></li>`;
    });
  });
const numberOfLikes = document.getElementById("like-count");

function addLikes() {
  let likes = 0;

  // Function to handle the click event
  function handleLikeClick() {
    // likes count increment
    likes++;

    // Display update
    updateDisplay();
  }

  // Function to update the display with the current likes count
  function updateDisplay() {
    const likesDisplay = document.getElementById("like-count");
    likesDisplay.textContent = `${likes} likes`;
  }

  // Click event handler
  const likeButton = document.getElementById("like-button");
  likeButton.addEventListener("click", handleLikeClick);
}
addLikes();
