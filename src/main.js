const input = document.querySelector("#ranger input");
const h1 = document.querySelector("#js-h h1");
const span = document.querySelector("#ranger span");
const color = document.querySelector("#color input");
const family = document.querySelector("#font-family");
const align = document.querySelector("#text-alignment");
const bgColor = document.querySelector("#bg-color input");

input.oninput = (e) => {
  const val = e.target.value;
  span.innerHTML = val;
  h1.style.fontSize = `${val}px`;
};

color.oninput = (e) => {
  const val = e.target.value;
  h1.style.color = `${val}`;
};

family.oninput = (e) => {
  const val = e.target.value;
  h1.style.fontFamily = `${val}`;
};

align.oninput = (e) => {
  const val = e.target.value;
  h1.style.textAlign = `${val}`;
};

bgColor.oninput = (e) => {
  const val = e.target.value;
  h1.style.backgroundColor = `${val}`;
};
