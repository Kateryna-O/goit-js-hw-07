const allCategoriesList = document.getElementById("categories");

const allItemList = allCategoriesList.querySelectorAll("li.item");

console.log("Number of categories:" + allItemList.length);

allItemList.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const itemSub = item.querySelectorAll("li");
  console.log("Category:" + categoryName);
  console.log("Elements:" + itemSub.length);
});
