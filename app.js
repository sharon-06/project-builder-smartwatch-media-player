var updateTime = setInterval(showTimeDay, 1000);

//showing time and day
function showTimeDay() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

  document.getElementById("topTime").innerHTML = time;

  document.getElementById("time").innerHTML = time;

  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("day").innerHTML = weekDays[today.getDay()];
}

let message = document.getElementById("messageDisplay");
let innerMsg = document.getElementById("innermessage");
let hr = document.createElement("hr");
var msg = document.createElement("p");

function showMessage() {
  document.getElementById("timeDisplay").style.display = "none";
  document.getElementById("musicDisplay").style.display = "none";
  document.getElementById("messageDisplay").style.display = "block";
  document.getElementById("music").style.color = "gray";
  document.getElementById("clock").style.color = "gray";
  document.getElementById("message").style.color = "white";
}
function showJavaMsg() {
  document.getElementById("btnMessage").disabled = true;
  document.getElementById("btnMusic").disabled = true;
  message.style.display = "none";
  innerMsg.style.display = "block";
  msg.innerText =
    "Java is high-level programming language developed by sun Microsystems";
  innerMsg.appendChild(msg);
  innerMsg.appendChild(hr);
}
function showHtmlMsg() {
  msg.innerText = "";
  document.getElementById("btnMessage").disabled = true;
  document.getElementById("btnMusic").disabled = true;
  message.style.display = "none";
  innerMsg.style.display = "block";
  msg.innerText =
    "HTML stands for Hyper Text Markup Language. HTML describes the structure of a Web page.";
  innerMsg.appendChild(msg);
  innerMsg.appendChild(hr);
}
function showCssMsg() {
  msg.innerText = "";
  document.getElementById("btnMessage").disabled = true;
  document.getElementById("btnMusic").disabled = true;
  message.style.display = "none";
  innerMsg.style.display = "block";
  msg.innerText = "Css is a cascading style sheet used for styling purpose.";
  innerMsg.appendChild(msg);
  innerMsg.appendChild(hr);
}
function showWatch() {
  msg.innerText = "";
  document.getElementById("btnMessage").disabled = false;
  document.getElementById("btnMusic").disabled = false;
  document.getElementById("messageDisplay").style.display = "none";
  document.getElementById("musicDisplay").style.display = "none";

  innerMsg.style.display = "none";
  document.getElementById("timeDisplay").style.display = "block";
  showTimeDay();
  document.getElementById("music").style.color = "white";
  document.getElementById("clock").style.color = "white";
  document.getElementById("message").style.color = "white";
}

var tracks = [
  {
    id: "1",
    name: "Desh Mere",
    trackSrc: "assests/deshmere.mp3",
    artist: "Arijit Singh",
    imgSrc: "https://pagalworld.com.se/siteuploads/thumb/sft7/3254_4.jpg",
  },
  {
    id: "2",
    name: "The Disco Song",
    trackSrc: "assests/TheDiscoSong.mp3",
    artist: "Nazia Hassan",
    imgSrc: "https://i1.sndcdn.com/artworks-000113753028-xt747y-t500x500.jpg",
  },
  {
    id: "3",
    name: "Velle",
    trackSrc: "assests/Velle.mp3",
    artist: "Shekhar Ravjiani,Vishal Dadlani",
    imgSrc: "https://i0.wp.com/www.hindiadda.com/wp-content/uploads/ha/2020/01/Vele-Lyrics-Student-of-The-Year-Shekhar-Ravjiani-Vishal-Dadlani-scaled.jpg?fit=1024%2C576&ssl=1",
  },
 
];
function playMusic() {
  document.getElementById("timeDisplay").style.display = "none";
  document.getElementById("messageDisplay").style.display = "none";
  document.getElementById("musicDisplay").style.display = "block";
  document.getElementById("message").style.color = "gray";
  document.getElementById("clock").style.color = "gray";
  document.getElementById("music").style.color = "white";
}

let play = document.getElementById("play-pause");
let ol = document.getElementById("orderList");

tracks.forEach((track) => {
  let li = document.createElement("li");
  var audio = document.querySelector("audio");
  li.innerHTML =
    track.id + " . " + track.name + "<span>- " + track.artist + "</span>";
  var img = document.getElementById("songimg");

  li.onclick = function () {
    var trackname = document.getElementById("trackname");
    trackname.innerText = track.name;

    img.setAttribute("src", track.imgSrc);

    audio.pause();
    audio.setAttribute("src", track.trackSrc);
    audio.load();
    audio.play();
    play.innerHTML = "Pause";
  };

  ol.appendChild(li);
});
//changing state of button
function playtrack() {
  let audio = document.querySelector("audio");
  if (audio.paused) {
    play.innerHTML = "Pause";
    audio.play();
  } else {
    play.innerHTML = "Play";
    audio.pause();
  }
}