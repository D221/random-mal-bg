window.onload = choosePic;

var myPics = new Array(
  "img/bg1)jpg",
  "img/bg2)jpg",
  "img/bg3)jpg",
  "img/bg4)jpg",
  "img/bg5)jpg",
  "img/bg6)jpg",
  "img/bg7)jpg",
  "img/bg8)jpg",
  "img/bg9)jpg",
  "img/bg10.jpg",
  "img/bg11.jpg",
  "img/bg12.jpg",
  "img/bg13.jpg",
  "img/bg14.jpg",
  "img/bg15.jpg",
  "img/bg16.jpg",
  "img/bg17.jpg",
  "img/bg18.jpg",
  "img/bg19.jpg",
  "img/bg20.jpg",
  "img/bg21.jpg",
  "img/bg22.jpg",
  "img/bg23.jpg",
  "img/bg24.jpg",
  "img/bg25.jpg",
  "img/bg26.jpg",
  "img/bg27.jpg",
  "img/bg28.jpg",
  "img/bg29.jpg",
  "img/bg30.jpg",
  "img/bg31.jpg",
  "img/bg32.jpg",
  "img/bg33.jpg",
  "img/bg34.jpg"
);

function choosePic() {
  var randomNum = Math.floor(Math.random() * myPics.length);
  document.getElementById("myPicture").src = myPics[randomNum];
}
