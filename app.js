//let emailtext = document.getElementById("emailText");
let Input = document.getElementsByTagName("input");
let Form = document.getElementsByTagName("form");
let Email = document.getElementById("email");

let E = document.getElementById("E");
let m = document.getElementById("m");
let a = document.getElementById("a");
let i = document.getElementById("i");
let l = document.getElementById("l");

let guideText = document.getElementById("guide");
let animatedText = document.getElementById("emailText");

let guideSpans = guideText.getElementsByTagName("span");
let animatedSpans = animatedText.getElementsByTagName("span");

email.addEventListener("click", changePosition);

function changePosition() {
  //emailtext.style.top = "-20px";
  E.style.top = "-20px";
  Input[0].style.display = "unset";
  Input[0].focus();
  Email.style.top = "27%";
  Input[0].style.top = "-15px";
}

const placeSpans = () => {
  for (var i = 0; i < guideSpans.length; i++) {
    let guide = guideSpans[i];
    let animated = animatedSpans[i];

    let rect = guide.getBoundingClientRect();

    animated.style.left = rect.left + "px";
  }
};

placeSpans();
