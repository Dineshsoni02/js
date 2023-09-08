const getAmazonProduct = () => {
  const data = document.querySelectorAll(".s-result-item");
  const res = [];
  data.forEach((card, i) => {
    const title = card.querySelector(
      ".a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2"
    )?.textContent;
    const imgEl = card.querySelector(".s-image");
    const imgSr = imgEl?.getAttribute ? imgEl?.getAttribute("src") : "";
    const priceEl = card.querySelector(".a-price")?.textContent;
    const price = priceEl?.length > 1 ? priceEl?.split("₹", 2) : " ";
    const p = price.length > 1 ? "₹" + price[1] : "₹___";
    res[i] = { title, imgSr, price: p };
  });
  return res;
};
getAmazonProduct();

//Myntra
const getMyntraProduct = () => {
  const resItem = document.querySelectorAll(".product-base");
  const res = [];
  resItem.forEach((card, i) => {
    const title = card.querySelector(".product-product").textContent;
    const brandName = card.querySelector(".product-brand").textContent;
    const imgEL = card.querySelector("img.img-responsive");
    const image = imgEL.getAttribute ? imgEL.getAttribute("src") : "";
    const price = card.querySelector(".product-discountedPrice").textContent;
    res[i] = { brandName, title, image, price };
  });
  return res;
};
getMyntraProduct();

//AJIO
const getAjioProduct = () =>{
  const resItem = document.querySelectorAll('.rilrtl-products-list__link');
  const res = [];
  resItem.forEach((card,i)=>{
      const title  = card.querySelector('.nameCls').textContent;
      const brandName = card.querySelector('.brand').textContent;
      const imgEL = card.querySelector('img.rilrtl-lazy-img') ;    
      const image = imgEL.getAttribute? imgEL.getAttribute('src') :"";
      const price = card.querySelector('.price').textContent;
      res[i] = {brandName,title,image,price};
  })
return res;
}
getAjioProduct();