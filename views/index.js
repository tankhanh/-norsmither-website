const changeColorMenu = document.getElementById("color-menu");
const clickMenu = document.querySelector(".js-click-menu");
const openFormMenu = document.querySelector(".js-menu");
const clickClose = document.querySelector(".js-click-close");
const clickHome = document.querySelector(".js-home");
const clickIntroduce = document.querySelector(".js-introduce");
const clickProduct = document.querySelector(".js-product");
const clickContact = document.querySelector(".js-contact");

const notiSuccess = document.querySelector(".haha");
// const notiFail = document.querySelector(".noti-fail");
const notiFail = document.querySelector(".hihi");
const hideSuccess = document.querySelector("#successfully");
const hideFail = document.querySelector("#fail");

const submitSend = document.querySelector(".submit-send");
const formEmail = document.querySelector("#form").innerHTML;
const loadPage = document.querySelector(".onload");
//Thông báo
function openNoti() {
  if (formEmail === !null) {
    notiSuccess.classList.add("js-open-success");
    // set thời gian ẩn thông báo thành công
    setTimeout(() => {
      hideSuccess.style.animation = `hideNotification ease 1.5s forwards`;
    }, 1000);
    setTimeout(() => {
      notiSuccess.classList.remove("js-open-success");
    }, 1000 + 1000);
  }
}
// // set thời gian ẩn thông báo lỗi
// setTimeout(() => {
//   notiFail.classList.add("js-open-fail");
//   hideFail.style.animation = `hideNotification ease 3s forwards`;
// }, 3000);
// setTimeout(() => {
//   notiFail.classList.remove("js-open-fail");
//   // hideFail.style.animation = `hideNotification ease 1.5s forwards`;
// }, 3000 + 3000);
submitSend.addEventListener("click", openNoti);
// click menu
function openMenu() {
  openFormMenu.classList.add("js-open-menu");
  clickMenu.innerHTML = "";
}
clickMenu.addEventListener("click", openMenu);
//click close
function closeMenu() {
  openFormMenu.classList.remove("js-open-menu");
  clickMenu.innerHTML = "MENU";
}
clickClose.addEventListener("click", closeMenu);
//click Home
function closeMenuHome() {
  openFormMenu.classList.remove("js-open-menu");
  clickMenu.innerHTML = "MENU";
}
clickHome.addEventListener("click", closeMenuHome);
//click Introduce
function closeMenuIntroduce() {
  openFormMenu.classList.remove("js-open-menu");
  clickMenu.innerHTML = "MENU";
}
clickIntroduce.addEventListener("click", closeMenuIntroduce);
//click Home
function closeMenuHome() {
  openFormMenu.classList.remove("js-open-menu");
  clickMenu.innerHTML = "MENU";
}
clickHome.addEventListener("click", closeMenuHome);
//click Product
function closeMenuHome() {
  openFormMenu.classList.remove("js-open-menu");
  clickMenu.innerHTML = "MENU";
}
clickProduct.addEventListener("click", closeMenuHome);
//click Contact
function closeMenuHome() {
  openFormMenu.classList.remove("js-open-menu");
  clickMenu.innerHTML = "MENU";
}
clickContact.addEventListener("click", closeMenuHome);

function colorMenu() {
  const scrolled = window.scrollY;
  if (scrolled > 660) {
    changeColorMenu.style.color = "black";
  } else if (scrolled < 660) {
    changeColorMenu.style.color = "white";
  }
}
window.addEventListener("scroll", colorMenu);
