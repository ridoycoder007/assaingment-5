function updateVal(button) {
  const six = document.getElementById("six").innerText;
  const convertSix = parseFloat(six);
  const twentyThree = document.getElementById("twenty-three").innerText;
  const converttwentyThree = parseFloat(twentyThree);

  if (convertSix) {
    alert("Board Updated Sucessfully!");
    const sum = convertSix - 1;
    document.getElementById("six").innerText = sum;

    const subTract = converttwentyThree + 1;
    document.getElementById("twenty-three").innerText = subTract;

    const fixTitle = document.getElementById("fix-mobile").innerText;
    const taskBox = button.closest(".box4");
    const taskTitle = taskBox.querySelector("h3").innerText;

    const time = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    const newElement = document.getElementById("newElement");

    const newElem = document.createElement("p");
    newElem.innerText = `You have completed the task ${taskTitle}  ${time}`;
    newElem.style.backgroundColor = "#F4F7FF";
    newElem.style.margin = "10px";
    newElem.style.borderRadius = "15px";
    newElem.style.padding = "20px 7px 20px 7px";

    newElement.appendChild(newElem);
    button.disabled = true;
  } else {
    console.log("ho geya");
  }
}

document.getElementById("btn0").addEventListener("click", function () {
  alert("seceond alert");
});

document.getElementById("btn2").addEventListener("click", function () {
  const newElement = document.getElementById("newElement");

  newElement.innerHTML = "";
});

const buttons = document.querySelectorAll(".btn");

for (const btn of buttons) {
  btn.addEventListener("click", function (even) {
    updateVal(even.target);
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("random-color").addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

function displayDate() {
  const today = new Date();

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  document.getElementById("date-display").innerText = formattedDate;
}

displayDate();

document.getElementById("box2").addEventListener("click", function () {
  window.location.href = "another.html";
});
