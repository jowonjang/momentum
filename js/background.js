const images = ["루카.jpeg", "마미.jpeg", "스미.jpeg", "치즈루.jpeg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage)

document.body.appendChild(bgImage)