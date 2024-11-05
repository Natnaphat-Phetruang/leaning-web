document.addEventListener("DOMContentLoaded", function () {
  const clearButton = document.getElementById("clear-button");
  function getComments() {
    let comments = localStorage.getItem("comments");
    return comments ? JSON.parse(comments) : [];
  }

  function saveComment(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  function displayComments() {
    const comments = getComments();
    const commentsDiv = document.getElementById("comments"); // Corrected ID
    commentsDiv.innerHTML = "";

    comments.forEach((comment) => {
      const p = document.createElement("p");
      p.textContent = comment.text;
      commentsDiv.appendChild(p);
    });
  }

  const form = document.getElementById("new-comment");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const commentText = document.getElementById("comment-text").value;

    let comments = getComments();

    comments.push({ text: commentText });
    saveComment(comments);

    document.getElementById("comment-text").value = "";

    displayComments();
  });
  clearButton.addEventListener("click", function () {
    // Add event listener for clear button
    clearComments();
  });
});

function clearComments() {
  localStorage.removeItem("comments"); // Remove comments from localStorage
  document.getElementById("comments").innerHTML = ""; // Clear comments section
  document.getElementById("comment-text").value = ""; // Clear text input
}
