window.onload = choosePic;

var myPics = new Array(
  "https://d221.github.io/random-mal-bg/img/bg1.jpg",
  "https://d221.github.io/random-mal-bg/img/bg2.jpg",
  "https://d221.github.io/random-mal-bg/img/bg3.jpg",
  "https://d221.github.io/random-mal-bg/img/bg4.jpg",
  "https://d221.github.io/random-mal-bg/img/bg5.jpg",
  "https://d221.github.io/random-mal-bg/img/bg6.jpg",
  "https://d221.github.io/random-mal-bg/img/bg7.jpg",
  "https://d221.github.io/random-mal-bg/img/bg8.jpg",
  "https://d221.github.io/random-mal-bg/img/bg9.jpg",
  "https://d221.github.io/random-mal-bg/img/bg10.jpg",
  "https://d221.github.io/random-mal-bg/img/bg11.jpg",
  "https://d221.github.io/random-mal-bg/img/bg12.jpg",
  "https://d221.github.io/random-mal-bg/img/bg13.jpg",
  "https://d221.github.io/random-mal-bg/img/bg14.jpg",
  "https://d221.github.io/random-mal-bg/img/bg15.jpg",
  "https://d221.github.io/random-mal-bg/img/bg16.jpg",
  "https://d221.github.io/random-mal-bg/img/bg17.jpg",
  "https://d221.github.io/random-mal-bg/img/bg18.jpg",
  "https://d221.github.io/random-mal-bg/img/bg19.jpg",
  "https://d221.github.io/random-mal-bg/img/bg20.jpg",
  "https://d221.github.io/random-mal-bg/img/bg21.jpg",
  "https://d221.github.io/random-mal-bg/img/bg22.jpg",
  "https://d221.github.io/random-mal-bg/img/bg23.jpg",
  "https://d221.github.io/random-mal-bg/img/bg24.jpg",
  "https://d221.github.io/random-mal-bg/img/bg25.jpg",
  "https://d221.github.io/random-mal-bg/img/bg26.jpg",
  "https://d221.github.io/random-mal-bg/img/bg27.jpg",
  "https://d221.github.io/random-mal-bg/img/bg28.jpg",
  "https://d221.github.io/random-mal-bg/img/bg29.jpg",
  "https://d221.github.io/random-mal-bg/img/bg30.jpg",
  "https://d221.github.io/random-mal-bg/img/bg31.jpg",
  "https://d221.github.io/random-mal-bg/img/bg32.jpg",
  "https://d221.github.io/random-mal-bg/img/bg33.jpg",
  "https://d221.github.io/random-mal-bg/img/bg34.jpg"
);

function choosePic() {
  var randomNum = Math.floor(Math.random() * myPics.length);
  document.getElementById("myPicture").src = myPics[randomNum];
}
