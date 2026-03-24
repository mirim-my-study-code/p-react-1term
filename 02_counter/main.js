// console.log("좌두");

// html의 요소를 js로 가져오고 -> 숫자를 증가 -> 숫자를 표시

// const countNumberSelect = document.getElementById("count_number");
// const countButtonSelect = document.getElementById("count_btn");
// let currentNumber = countNumberSelect;

// countButtonSelect.addEventListener('click', ()=>{
//     currentNumber++;
// })

// countNumberSelect.innerText = String(currentNumber).padStart(2, '0');


// 쌤코드입니다
// 태그를 식별자로 사용 / 태그가 여러개일 수 있기에 all을 사용
// const resultH1 = document.querySelectorAll("h1")[0];
// const resultH1 = document.querySelector("h1");
// const resultH1 = document.getElementsByTagName("h1");
// const resultH1 = document.getElementById("result"); // 얘가 더 빠름
// const resultH1 = result; // id 값을 그냥 넣어도됌
const resultH1 = document.querySelector("#result");
let count = 0;
const plusButton = document.getElementsByTagName("button")[0];
// const

// plusButton.addEventListener("click", ()=>{ // addEventListener("click", 함수명) < 함수를 직접 호출하면 안됌
//     count ++;
//     resultH1.innerHTML = count;
// })

// plusButton.onclick = () =>{
//     count ++;
//     resultH1.innerHTML = count;
// }

// arrow함수를 (함수정의)() < 이런식으로 하면 호출됌


// function plus(){
//     count++;
//     resultH1.innerHTML = count;
// }

// function minus(){
//     count--;
//     resultH1.innerHTML = count;
// }

function plus(number = 1){
    count += number;
    resultH1.innerHTML = count;
}


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

document.addEventListener("mousemove", (e) => {
  particles.push({
    x: e.clientX,
    y: e.clientY,
    size: Math.random() * 3 + 1,
    alpha: 1
  });
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.y += 1;
    p.alpha -= 0.02;

    ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    if (p.alpha <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();


const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});