// do something!
import axios from "axios";

let currentPage = 1;
const limit = 5;
const apiKey = "efba51b4bc9a4c458b9aa8c0f9e74852";

const NewList = () => {
  const loadNews = async (category = "all", currentPage) => {
    const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${
      category === "all" ? "" : category
    }&page=${currentPage}&pageSize=${limit}&apiKey=${apiKey}`;
    try {
      const { news } = await axios.get(url);
      return news;
    } catch (error) {
      console.log(error);
    }
  };

  const $root = document.querySelector("#root");
  $root.innerHTML = `
	<div class="news-list-container">
    <article class="news-list">
      <section class="news-item">
        <div class="thumbnail">
          <a href="https://www.ajunews.com/view/20220220180410403" target="_blank" rel="noopener noreferrer">
            <img
              src="https://image.ajunews.com/content/image/2022/02/20/20220220180523846963.jpg"
              alt="thumbnail" />
          </a>
        </div>
        <div class="contents">
          <h2>
	          <a href="https://www.ajunews.com/view/20220220180410403" target="_blank" rel="noopener noreferrer">
            	[뉴욕증시 주간전망] 러시아-우크라이나 긴장 속 변동성 지속 - 아주경제
            </a>
          </h2>
          <p>
            이번 주(21일~25일·현지시간) 뉴욕 증시는 러시아와 우크라이나 간 지정학적 긴장과 우크라이나 간 미국
            연방준비제도(Fed·연준)의 긴축 우려에 계속해서...
          </p>
        </div>
      </section>
    </article>
    <div class="scroll-observer">
      <img src="img/ball-triangle.svg" alt="Loading..." />
    </div>
  </div>
	`;
};

