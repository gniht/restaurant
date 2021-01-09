const content = document.getElementById("content");
const headline = document.createElement("h1");
headline.textContent = "Our menu items";
const menu = document.createElement("nav");
menu.append(ulBuilder(5, ["hello", "this", "is", "a", "menu"]));
content.append(headline, menu);

