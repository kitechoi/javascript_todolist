const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

// <img src="img/2.jpg"> 와 같은 코드 만드는 3줄코드----
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
// -------------------------------------------------
