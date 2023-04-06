let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
let stop = document.getElementById("stopButton").textContent;

stopButton.addEventListener("click", function () {
  stopLight.classList.toggle("stop");

  if (stopLight.classList.contains("stop")) {
    console.log(`${stop} bulb on`);
  } else {
    console.log(`${stop} bulb off`);
  }
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
  
  if (slowLight.classList.contains("slow")) {
    console.log(`${slow} bulb on`);
  } else {
    console.log(`${slow} bulb off`);
  }
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

  if (goLight.classList.contains("go")) {
    console.log(`${go} bulb on`);
  } else {
    console.log(`${go} bulb off`);
  }
});

goButton.addEventListener("mouseenter", function () {
  console.log(`Entered ${go} Button`);
});

goButton.addEventListener("mouseleave", function () {
  console.log(`Left ${go} Button`);
});








