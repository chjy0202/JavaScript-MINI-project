// do something!
import { Nav, NewsList } from "./components/index.js";

const $container = document.querySelector("#root");
$container.innerHTML = `
	<nav class="category-list"></nav>
	<div class="news-list-container">
		<article class="news-list"></article>
		<div class="scroll-observer">
			<img src="img/ball-triangle.svg" alt="Loading..." />
		</div>
	</div>
`;

const init = () => {
  Nav($container);
  NewsList($container);
};

window.addEventListener("DOMContentLoaded", () => {
  init();
});
