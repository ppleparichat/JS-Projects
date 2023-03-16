const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTopFunc);

function showBtn() {
  let pageHeight = rootEl.scrollHeight - rootEl.clientHeight;
  let result = rootEl.scrollTop / pageHeight;

  if (result > 0.3) {
    scrollBtn.classList.add("showBtn");
  } else {
    scrollBtn.classList.remove("showBtn");
  }
}

function scrollToTopFunc() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
