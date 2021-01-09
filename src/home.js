export default function homePage(){
  const content = document.getElementById("content");
  const headline = document.createElement("h1");
  headline.textContent = "Restaurant Headline";
  const foodImg = document.createElement("img");
  foodImg.setAttribute("src", "../src/photo-1559847844-5315695dadae.jpg");
  content.append(headline, foodImg);
}

