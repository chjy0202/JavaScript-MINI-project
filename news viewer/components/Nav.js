// do something!
import { state } from "../state.js";
import NewsList from "./NewsList.js";

let proxyState = new Proxy(state, {});

const Nav = ($container) => {
  const categories = {
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

  const $categoryList = $container.querySelector(".category-list");
  const $newsList = $container.querySelector(".news-list");
  $categoryList.innerHTML = `
    <ul>
      ${Object.entries(categories.category)
        .map(
          (item) =>
            `<li id=${item[0]} class="category-item ${
              state.category === item[0] ? 'active' : ''}">${item[1]}</li>`
        )
        .join("")}
    </ul>
    `;

  $categoryList.addEventListener("click", (e) => {
    if (e.target.tagName !== "LI") return;
    if (e.target.matches(".active")) return;
    // state.category = e.target.id;
    $container.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    if (proxyState.category !== e.target.id) {
      proxyState.category = e.target.id;
      $newsList.innerHTML = "";
      NewsList($container);
    }
  });
};

export default Nav;
