let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
let stop = document.getElementById("stopButton").textContent;

stopButton.addEventListener("click", function () {
  stopLight.classList.toggle("stop");
});

stopButton.addEventListener("mouseenter", function () {
  console.log(`Entered ${stop} Button`);
});

stopButton.addEventListener("mouseleave", function () {
  console.log(`Left ${stop} Button`);
})

let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");
let slow = document.getElementById("slowButton").textContent;

slowButton.addEventListener("click", function () {
  slowLight.classList.toggle("slow");
});

slowButton.addEventListener("mouseenter", function () {
  console.log(`Entered ${slow} Button`);
});

slowButton.addEventListener("mouseleave", function () {
  console.log(`Left ${slow} Button`);
});


let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");
let go = document.getElementById("goButton").textContent;


goButton.addEventListener("click", function () {
  goLight.classList.toggle("go");
});

goButton.addEventListener("mouseenter", function () {
  console.log(`Entered ${go} Button`);
});

goButton.addEventListener("mouseleave", function () {
  console.log(`Left ${go} Button`);
});








