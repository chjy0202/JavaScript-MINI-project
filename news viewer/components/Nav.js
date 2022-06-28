// do something!
// import { state } from "./state.js";

const Nav = ($container) => {
  const $categories = {
    category: {
      all: "전체보기",
      business: "비즈니스",
      entertainment: "엔터테인먼트",
      health: "건강",
      science: "과학",
      sports: "스포츠",
      technology: "기술",
    },
  };

  const $root = $container.querySelector("#root");
  $root.innerHTML = `
  <nav class="category-list">
    <ul>
      ${Object.entries($categories.category)
        .map(
          (item) => `<li id=${item[0]} class="category-item">${item[1]}</li>`
        )
        .join("")}
    </ul>
  </nav>
  `;

  // const $nav = $container.querySelector("nav");
  // $nav.addEventListener("click", (e) => {
  //   if(e.target.node)
  // })
  // document.querySelector(${}).classList.add('active');
};

export default Nav;
