const form = document.getElementById("infoForm");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const container = document.getElementById("container");

// kiểm tra email
function isValidEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn không cho form gửi đi và tải lại trang
  const email = emailInput.value;

  if (!isValidEmail(email)) {
    errorMessage.style.display = "block"; //hiện dòng cảnh báo
    errorMessage.textContent = "Vui lòng nhập đúng định dạng email!";
  } else {
    errorMessage.style.display = "none";
    form.parentElement.style.display = "none"; // ẩn form
    container.style.display = "block"; // hiện thông tin cá nhân
  }
});
// khi chuột di vào
function handleOnMouseOver(section) {
  const viewMore = section.querySelector(".view-more");
  const timelineList = section.querySelector(".timeline-list");

  // Chỉ hiển thị View More khi nội dung đang bị ẩn
  if (viewMore && timelineList && timelineList.style.display === "none") {
    viewMore.style.display = "inline-block";
  }
}

// khi chuột di ra
function handleOnMouseOut(section) {
  const viewMore = section.querySelector(".view-more");
  //nút view more bị ẩn
  if (viewMore) viewMore.style.display = "none";
}

// xử lí view more
function handleViewMore(button) {
  const section = button.closest(".section");
  const viewLess = section.querySelector(".view-less");
  const timelineList = section.querySelectorAll(".timeline-list");

  // duyệt từng phần tử trong timelineList và hiện nó lên
  timelineList.forEach((el) => (el.style.display = "block"));
  button.style.display = "none"; // ẩn nút View More
  if (viewLess) viewLess.style.display = "inline-block"; // hiện View Less
}

// xử lí view less
function handleViewLess(button) {
  const section = button.closest(".section");
  const viewMore = section.querySelector(".view-more");
  const timelineList = section.querySelectorAll(".timeline-list");

  timelineList.forEach((el) => (el.style.display = "none"));
  button.style.display = "none"; // ẩn nút View Less
  if (viewMore) viewMore.style.display = "none"; // View More sẽ hiện lại khi hover
}
