// do something!
import { state } from "../state.js";

let currentPage = 1;
const limit = 5;
const apiKey = "520551562b1e4036958e81384ed5ef58";
// const apiKey = "efba51b4bc9a4c458b9aa8c0f9e74852";

const NewsList = ($container) => {
  const $newsList = $container.querySelector(".news-list");
  const $scrollObserver = $container.querySelector(".scroll-observer");
  // const selectedCategory = null;
  // const totalNews = 5;

  const creatNewsItem = (article) => {
    // const { title, description, url, urlToImage } = article
    // for (const i = 0; i < article.length; i++) {
    const $article = document.createElement("article");
    $article.innerHTML = article
      .map(
        ({ title, description, url, urlToImage }) => `
          <section class="news-item">
            <div class="thumbnail">
              <a href="${url}" target="_blank" rel="noopener noreferrer">
                <img
                  src="${urlToImage}"
                  alt="thumbnail" />
              </a>
            </div>
            <div class="contents">
              <h2>
                <a href="${url}" target="_blank" rel="noopener noreferrer">
                	${title}
                </a>
              </h2>
              <p>
                ${description}
              </p>
            </div>
          </section>
        `
      )
      .join("");
    $newsList.append($article);
  };

  const loadNews = async (category, currentPage) => {
    const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${
      category === "all" ? "" : category
    }&page=${currentPage}&pageSize=${limit}&apiKey=${apiKey}`;
    try {
      const news = await axios.get(url);
      return news.data.articles;
    } catch (error) {
      console.log(error);
    }
  };

  const showNews = async (category, currentPage) => {
    try {
      const articles = await loadNews(category, currentPage);
      creatNewsItem(articles);
    } catch (error) {
      console.log(error);
    }
  };

  const observer = new IntersectionObserver((enteries) => {
    enteries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          showNews(state.category, ++currentPage);
        }
      },
      { threshold: 0.5 }
    );
  });

  observer.observe($scrollObserver);
};

export default NewsList;
