//let emailtext = document.getElementById("emailText");
let Input = document.getElementById("input1");
let Input2 = document.getElementById("input2");

let Form = document.getElementsByTagName("form");
let Email = document.getElementById("email");
let Password = document.getElementById("password");
let PasswordText = document.getElementById("passwordText");

let Login = document.getElementById("login");

let animatedText = document.getElementById("emailText");

let animatedText2 = document.getElementById("passwordText");

let animatedSpans = animatedText.getElementsByTagName("span");

let animatedSpans2 = animatedText2.getElementsByTagName("span");

Login.addEventListener("click", changePosition);

/*Login.addEventListener("click", () => {
  Input2.style.display = "unset";
  Input2.focus();
  Input2.style.top = "-15px";
  PasswordText.style.height = "20px";

  for (var i = 0; i < animatedSpans2.length; i++) {
    let animated2 = animatedSpans2[i];
    setTimeout(() => {
      animated2.style.transform = "translateY(-20px)";
    }, "100" * i);
  }
});*/

let passwordElement = false;
let passwordClicked = false;

Email.addEventListener("click", changePosition);
Password.addEventListener("click", changePosition2);
Password.onclick = function () {
  passwordElement = true;
  passwordClicked = true;
  checekr4 = true;
};

/*console.log(
  document.addEventListener("click", () => {
    console.log("pissed");
  })
);*/

let count = 0;
let checker2 = false;

let keypressCount = 0;
let keydownCount = 0;

let keypressCount2 = 0;
let keydownCount2 = 0;
let checker3 = false;

/*(function isLetter(str) {
  console.log(str);
  console.log(str.length === 1);
  console.log(str.match(/[a-z]/i));
  return str.length === 1 && str.match(/[a-z]/i);
}*/

let solution = false;

Input.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "Backspace") {
    keydownCount++;
  } else if (/^[a-zA-Z]$/i.test(key)) {
    keypressCount++;
    checker2 = true;

    Login.addEventListener("click", changePosition2);
  }
  if (keypressCount == keydownCount) {
    checker2 = false;
    solution = true;
  }
});

Input2.addEventListener("keydown", (e) => {
  let key2 = e.key;

  if (key2 === "Backspace") {
    keydownCount2++;
  } else if (/^[a-zA-Z]$/i.test(key2)) {
    keypressCount2++;
    checker3 = true;
  }
  if (keypressCount2 == keydownCount2) {
    checker3 = false;
  }
});

if (checker2 == true && checker3 == false) {
}

/*Input.addEventListener("keypress", (e) => {
  keypressCount++;
  checker2 = true;
});*/

document.addEventListener("click", (event) => {
  count++;

  if (check == true || checker2 == true) {
    check = false;
    return;
  }

  if (count > 1) {
    let isClickInsideElement = Input.contains(event.target);

    if (!isClickInsideElement) {
      for (var i = 0; i < animatedSpans.length; i++) {
        let animated = animatedSpans[i];
        setTimeout(() => {
          animated.style.transform = "translateY(0px)";
          if (Input.style.display == "unset") {
            count = 0;
            Input.style.display = "none";
          }
        }, "100" * i);
      }
    }
  }
});

document.addEventListener("click", (event) => {
  if (
    checker3 == true ||
    checker4 == true ||
    (passwordElement == true && passwordClicked == false)
  ) {
    checker4 = false;

    //passwordElement = false;
    return;
  }

  let isClickInsideElement = Password.contains(event.target);

  if (!isClickInsideElement) {
    for (var i = 0; i < animatedSpans2.length; i++) {
      let animated2 = animatedSpans2[i];

      setTimeout(() => {
        animated2.style.transform = "translateY(0px)";
      }, "100" * i);
    }
  }
});

let check = false;

function changePosition() {
  check = true;
  if (checker2 == false) {
    Input.style.display = "unset";
    Input.focus();

    Input.style.top = "-17.5px";

    //Email.style.backgroundColor = "yellow";

    animatedText.style.height = "20px";

    for (var i = 0; i < animatedSpans.length; i++) {
      let animated = animatedSpans[i];
      setTimeout(() => {
        animated.style.transform = "translateY(-20px)";
      }, "100" * i);
    }
  }
}

let checker4 = false;

let countChangePosition = 0;

function changePosition2() {
  if (solution == true) {
    solution = false;
    return;
  }
  //console.log(passwordElement);
  console.log(checker2 == true);
  console.log(passwordElement == true);
  console.log(countChangePosition == 0);
  if (checker2 == true || passwordElement == true || countChangePosition == 0) {
    countChangePosition++;
    solution = false;
    Input2.style.display = "unset";
    Input2.focus();
    Input2.style.top = "-15px";
    PasswordText.style.height = "20px";
    checker4 = true;

    /*PasswordText.style.transform = "translateY(-20px)";*/

    for (var i = 0; i < animatedSpans2.length; i++) {
      let animated2 = animatedSpans2[i];

      setTimeout(() => {
        animated2.style.transform = "translateY(-20px)";
      }, "100" * i);
    }
  }
}
