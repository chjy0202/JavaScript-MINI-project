// do something!
const StarRating = ($container) => {
  const $links = document.querySelectorAll("link");
  const newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = "star-rating/theme.css";
  const $lastLink = $links[$links.length - 1];
  $lastLink.parentNode.insertBefore(newLink, $lastLink.nextSibling);

  const $starRating = document.createElement("div");
  $starRating.classList = "star-rating-container";
  $container.appendChild($starRating);

  const limitRating = $container.getAttribute("data-max-rating");
  for (let i = 0; i < limitRating; i++) {
    const stars = document.createElement("i");
    stars.classList.add("bx", "bxs-star");
    stars.setAttribute("data", `${i + 1}`);
    $starRating.appendChild(stars);
  }

  // const $stars = $container.querySelectorAll("i");
  const $stars = [...$container.querySelectorAll("i")];

  const set = (state) => {
    for (let i = 0; i < $stars.length; i++) {
      if ($stars[i].classList.contains(state)) {
        $stars[i].classList.remove(state);
      } else return;
    }
  };
  const isShow = (state, e) => {
    const num = $stars.indexOf(e.target);
    for (let i = 0; i <= num; i++) {
      $stars[i].classList.toggle(state);
    }
    if (state === "selected") {
      $container.dispatchEvent(
        new CustomEvent("rating-change", {
          detail: num + 1,
        })
      );
    }
  };

  $starRating.onmouseover = (e) => {
    set("hovered");
    isShow("hovered", e);
  };
  $starRating.onmouseleave = () => {
    set("hovered");
  };
  $starRating.onclick = (e) => {
    set("selected");
    isShow("selected", e);
  };
};

export default StarRating;
