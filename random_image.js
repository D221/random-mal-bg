window.onload = choosePic;

var myPics = new Array(
  "img/bg (1).jpg",
  "img/bg (2).jpg",
  "img/bg (3).jpg",
  "img/bg (4).jpg",
  "img/bg (5).jpg",
  "img/bg (6).jpg",
  "img/bg (7).jpg",
  "img/bg (8).jpg",
  "img/bg (9).jpg",
  "img/bg (10).jpg",
  "img/bg (11).jpg",
  "img/bg (12).jpg",
  "img/bg (13).jpg",
  "img/bg (14).jpg",
  "img/bg (15).jpg",
  "img/bg (16).jpg",
  "img/bg (17).jpg",
  "img/bg (18).jpg",
  "img/bg (19).jpg",
  "img/bg (20).jpg",
  "img/bg (21).jpg",
  "img/bg (22).jpg",
  "img/bg (23).jpg",
  "img/bg (24).jpg",
  "img/bg (25).jpg",
  "img/bg (26).jpg",
  "img/bg (27).jpg",
  "img/bg (28).jpg",
  "img/bg (29).jpg",
  "img/bg (30).jpg",
  "img/bg (31).jpg",
  "img/bg (32).jpg",
  "img/bg (33).jpg",
  "img/bg (34).jpg"
);

function choosePic() {
  var randomNum = Math.floor(Math.random() * myPics.length);
  document.getElementById("myPicture").src = myPics[randomNum];
}
