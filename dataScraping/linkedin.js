const list = document.querySelectorAll(".discover-fluid-entity-list--item");
list.forEach((card) => {
  const userCard = card.querySelector(".ember-view");
  const info = ["software" , "engineer", "developer", "sde", "student"];
  const occupation = userCard.querySelector(
    ".discover-person-card__occupation"
  );
   const occuInfo = occupation.textContent.toLowerCase().trim();
  info.forEach((word) => {
      if(occuInfo.includes(word)){
             const connectButton = card.querySelector(".discover-entity-type-card__bottom-container button");
   console.log(connectButton);
    // connectButton.click()
      }
  });
}); 
const scrollUser = ()=>{
  const scrollInterval = setInterval(() => {
    window.scrollBy(0,100);
  }, 100);
  
  setTimeout(() => {
    clearInterval(scrollInterval) 
  }, 3000);
}
scrollUser();
const list = document.querySelectorAll(".discover-fluid-entity-list--item");
list.forEach((card) => {
  const userCard = card.querySelector(".ember-view");
  const info = ["software" , "engineer", "developer", "sde", "student"];
  const occupation = userCard.querySelector(
    ".discover-person-card__occupation"
  );
   const occuInfo = occupation.textContent.toLowerCase().trim();
  info.forEach((word) => {
      if(occuInfo.includes(word)){
           const connectButton = card.querySelector(".discover-entity-type-card__bottom-container button");
   console.log(connectButton);
    // connectButton.click()
      }
  });
}); 
const list = document.querySelectorAll(".discover-fluid-entity-list--item");
list.forEach((card) => {
  const userCard = card.querySelector(".ember-view");
  const info = ["software" , "engineer", "developer", "sde", "student"];
  const occupation = userCard.querySelector(
    ".discover-person-card__occupation"
  );
   const occuInfo = occupation.textContent.toLowerCase().trim();
  info.forEach((word) => {
      if(occuInfo.includes(word)){
           let connectButton = card.querySelector(".discover-entity-type-card__bottom-container button");
            if(connectButton.textContent = 'Connect'){
             console.count(connectButton.length);
            }
    // connectButton.click()
      }
  });
}); 
