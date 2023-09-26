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
             const connectButton = card.querySelector(".discover-entity-type-card__bottom-container button");
   console.log(connectButton);
    // connectButton.click()
      }
  });
}); 

const scrollFunc = () => {
  const list = document.querySelectorAll(".artdeco-modal__content.discover-cohort-recommendations-modal__content");
  setTimeout(() => { 
    list.scrollTop -= 10;
  }, 1000);
}
scrollFunc();

