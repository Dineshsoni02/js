    const getAmazonProduct = () => {
      const data = document.querySelectorAll('.s-result-item');
      const res = [];
      data.forEach((card,i) =>{
        const title = card.querySelector('.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2')?.textContent;
        const imgEl = card.querySelector('.s-image');
        const imgSr = imgEl?.getAttribute ? imgEl?.getAttribute('src') :"";
        const priceEl = card.querySelector('.a-price')?.textContent;
        const price = priceEl?.length>1? priceEl?.split("₹",2):" ";
        const p = price.length>1? "₹"+ price[1]:"₹___";
        res[i]=  {title,imgSr,"price":p}
        
    })
        return res;
      };
      getAmazonProduct();

