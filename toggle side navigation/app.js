// do something!
(function () {
  const get = (target) => document.querySelector(target);

  const $body = get("body");
  const $btn = get(".toggle");
  const $nav = get("nav");
  let navState = localStorage.getItem("navState");

  const navOnOff = () => {
    if (navState) {
      $nav.classList.add("active");
      localStorage.setItem("navState", true);
    } else {
      $nav.classList.remove("active");
      localStorage.setItem("navState", false);
    }
  };

  const navStateCheck = () => {
    const state = navState;
    navState = state === null ? false : state;

    navOnOff();
    $body.style.visibility = "visible";
  };

  const toggle = () => {
    navState = !navState;
    navOnOff();
    $body.classList.remove("preload");
  };

  const init = () => {
    window.addEventListener("DOMContentLoaded", navStateCheck);
    $btn.addEventListener("click", toggle);
    // $body.style.visibility = "visible";
  };

  init();
})();
