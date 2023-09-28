let item_json = Cookies.get(`selection`);
let item = JSON.parse(item_json);
document.body.insertAdjacentHTML(`beforeend`, `<h1>${item[`title`]}</h1>`);
document.body.insertAdjacentHTML(`beforeend`, `<img src=${item[`img_ulr`]}>`);
document.body.insertAdjacentHTML(`beforeend`, `<p>${item[`description`]}</p>`);
document.body.insertAdjacentHTML(`beforeend`, `<h4>${item[`price`]}</h4>`);