const ammountOfListItem = document.querySelectorAll(
  "#categories li.item"
).length;
console.log(`Number of categories: ${ammountOfListItem}`);

const listItems = document.querySelectorAll("#categories li.item");
listItems.forEach((item) => {
  const categoriesTitle = item.querySelector("h2").textContent;
  const nestedItems = item.querySelectorAll("ul li").length;
  console.log(`Category: ${categoriesTitle} Elements: ${nestedItems}`);
});

