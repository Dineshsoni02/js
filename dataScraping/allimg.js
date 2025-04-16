const img_urls = () => {
    const imgn = document.querySelectorAll('img') || document.querySelectorAll('picture');
    const data = [];
imgn.forEach((item,i)=>{
    const url = item.getAttribute('src') || item.getAttribute('srcset');
     const datacomp = item.getAttribute('data-comp') || " " ;
    
    data[i] = {
        url,
        datacomp
    }
        
})
    return data;
}
img_urls();