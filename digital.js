document.addEventListener("DOMContentLoaded", function () {
  const search = window.location.search;
  const projectKey = search.slice(1);

  // Ẩn tất cả
  document.querySelector(".cv").style.display = "none";
  document.querySelector(".pets").style.display = "none";
  document.querySelector(".news").style.display = "none";

  // Hiện đúng phần được chọn
  if (projectKey === "project-cv") {
    document.querySelector(".cv").style.display = "block";
  } else if (projectKey === "project-pets") {
    document.querySelector(".pets").style.display = "block";
  } else if (projectKey === "project-news") {
    document.querySelector(".news").style.display = "block";
  }
});
