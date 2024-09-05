console.log("안녕하세요")

const btn = document.querySelector("button");
const iner = document.querySelector("#in");

btn.addEventListener('click', act);

function act(){
  iner.textContent = "버튼을 눌렀습니다";
}