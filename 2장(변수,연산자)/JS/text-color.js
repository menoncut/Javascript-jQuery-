//heading변수를 선언하고 h1태그를 저장. heading변수는 type이 object(객체)가 된다.
var heading = document.querySelector("#heading");
//h1태그를 클릭하면 글자색깔을 red로 변경하시오.
heading.onclick = function () {
  heading.style.color = "red";
};
