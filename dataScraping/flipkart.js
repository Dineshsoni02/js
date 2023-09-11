const getJSONDataFromFlipkart=async(keyword="iphone 14")=>{
    const res=await fetch(`https://www.flipkart.com/search?q=${keyword}`);
    const text=await res.text();

    const slice1=text.slice(text.indexOf("window._INITIAL_STATE_ = "));
    const slice2=slice1.slice(slice1.indexOf("{"),slice1.indexOf("</script>")-1);

    const parsed=JSON.parse(slice2);

    return parsed;

}
getJSONDataFromFlipkart();