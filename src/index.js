const content = document.getElementById("content");
const headline = document.createElement("h1");
headline.textContent = "Restaurant Headline";
const foodImg = document.createElement("img");
foodImg.setAttribute("src", "../src/photo-1559847844-5315695dadae.jpg");
content.append(headline, foodImg);
const menu = document.createElement("nav");
menu.append(ulBuilder(5, ["hello", "this", "is", "a", "menu"]));
content.append(menu);




function ulBuilder (size, arr) {
  let list = document.createElement("ul");
  for(let i = 0; i < size; i++){
    let temp = document.createElement("li");
    temp.textContent = arr[i];    
    list.append(temp);
  }
  return list;    
}


