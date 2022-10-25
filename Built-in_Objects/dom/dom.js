// DOM - document object model
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view"); // html collection
console.log(views);

const sameViews = document.querySelectorAll("div"); // nodelist
console.log(sameViews);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  //evenDivs[i].style.width = "120px";
  //evenDivs[i].style.height = "120px";
}
const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent = "hello world";

const navbar = document.querySelector("nav");

navbar.innerHTML = `<h1>hello!</h1><p>this should align right</p>`;
console.log(navbar);
navbar.style.justifyContent = "space-between";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

//--------
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
  view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
  const navDiv = document.createElement("div");
  navDiv.textContent = iter;
  navDiv.style.backgroundColor = "#000";
  navDiv.style.width = "100px";
  navDiv.style.height = "100px";
  navDiv.style.margin = "10px";
  navDiv.style.display = "flex";
  navDiv.style.justifyContent = "center";
  navDiv.style.alignItems = "center";
  parent.append(navDiv);
};
for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}
