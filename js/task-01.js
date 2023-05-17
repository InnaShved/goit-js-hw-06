const categoriesList = document.querySelectorAll('#categories li.item');

// number of items in ul width id=categories
const categoriesAmount = categoriesList.length;
console.log(`Number of categories: ${categoriesAmount}`);

// look for all h2 and number of items in each category
function describeTitles(items) {
       items.forEach(function (item) {
        console.log(`Category: ${item.querySelector('h2').textContent}`);
        console.log(`Elements: ${item.querySelectorAll('li').length}`);
    });
};

describeTitles(categoriesList);



