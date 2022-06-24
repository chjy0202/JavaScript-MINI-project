const AnalogClock = ($container) => {
  // do something!
  $container.innerHTML = `
  <div class="hand hour"></div>
  <div class="hand minute"></div>
  <div class="hand second"></div>
  <div class="time time1">|</div>
  <div class="time time2">|</div>
  <div class="time time3">|</div>
  <div class="time time4">|</div>
  <div class="time time5">|</div>
  <div class="time time6">|</div>
  <div class="time time7">|</div>
  <div class="time time8">|</div>
  <div class="time time9">|</div>
  <div class="time time10">|</div>
  <div class="time time11">|</div>
  <div class="time time12">|</div>
  `;

  const timestamp = () => {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const degHour = hour * 30 + min * 0.5 + sec * (0.5 / 60);
    const degMin = min * 6 + sec * 0.1;
    const degSec = sec * 6;

    $hourHand.style.setProperty("--deg", degHour);
    $minHand.style.setProperty("--deg", degMin);
    $secHand.style.setProperty("--deg", degSec);
  };

  const hands = $container.querySelectorAll(".hand");
  const $hourHand = hands[0];
  const $minHand = hands[1];
  const $secHand = hands[2];

  setInterval(timestamp, 1000);
};

export default AnalogClock;
