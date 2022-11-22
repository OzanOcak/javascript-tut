localStorage.setItem("name", "burton");
localStorage.setItem("name2", "batman");

console.log(localStorage.length); //2
// localStorage.clear();

localStorage.removeItem("name2");

let name1 = localStorage.getItem("name");

let title = document.querySelector("#title");

if (name1) {
  title.innerHTML = `hello ${name1}!`;
}

//-------

// session storage

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submit.addEventListener("click", () => {
  sessionStorage.setItem("name", input.value);
});

remove.addEventListener("click", () => {
  sessionStorage.removeItem("name");
});

const name = sessionStorage.getItem("name");

// ------------
