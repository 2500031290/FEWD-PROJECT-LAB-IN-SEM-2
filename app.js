const fruits = [ "Apple", "Banana", "Mango", "Orange", "Grapes" ];
const fruitList = document.getElementById("fruitList");

fruits.forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  fruitList.appendChild(li);
});
