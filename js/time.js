let timer;

const 시작_시간 = new Date();

function setTime() {
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);
  const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
  const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `time : ${분}:${초}`;
}

timer = setInterval(setTime, 1000);
// console.log(timer);

// const 시작_시간 = new Date();

// function setTime() {
//   const 현재_시간 = new Date();
//   const 흐른_시간 = new Date(현재_시간 - 시작_시간);
//   const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
//   const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
//   const timeH1 = document.querySelector(".time");
//   timeH1.innerText = `time: ${분}:${초}`;
// }
