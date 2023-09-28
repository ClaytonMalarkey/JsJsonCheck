let selection = {
    title : "landing page",
    price : 1500,
    img_ulr : "imgs/landingpage.jpg",
    description : "call to action logo what you offer great starting point for the little guy"
};
let selection_json = JSON.stringify(selection);
Cookies.set(`selection`, selection_json);

