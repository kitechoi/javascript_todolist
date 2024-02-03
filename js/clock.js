const clock = document.querySelector("h2#clock");

// clock.innerText = "lalalala";


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");  //padstart(길이,미달시추가할문자), string만 쓸 수 있는 함수라서 string 변환 필요.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //getClock()를 즉시 부름으로써 1초 기다림없이 바로 시작되도록.
setInterval(getClock, 1000);    //실시간 1초마다 재호출


// function sayHello() {
//     console.log("hello");
// }
// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);