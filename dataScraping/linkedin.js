// const list = document.querySelectorAll(".discover-fluid-entity-list--item");
// list.forEach((card) => {
//   const userCard = card.querySelector(".ember-view");
//   console.log(userCard);
// });

// const list = document.querySelectorAll(".discover-fluid-entity-list--item");
// list.forEach((card) => {
//   const userCard = card.querySelector(".ember-view");
//   const info = ["software engineer", "Developer", "sde", "student"];
//   const occupation = userCard.querySelector(
//     ".discover-person-card__occupation"
//   );
//   const occuInfo = occupation.textContent;
//   console.log(occuInfo.includes(info));
// });

// const list = document.querySelectorAll(".discover-fluid-entity-list--item");
// list.forEach((card) => {
//   const userCard = card.querySelector(".ember-view");
//   const info = ["software engineer", "developer", "sde", "student"];
//   const occupation = userCard.querySelector(
//     ".discover-person-card__occupation"
//   );
//   const occuInfo = occupation.textContent.toLowerCase();
//   console.log(info);
//   console.log(occuInfo.trim().split(" ").includes(info));
// });

// const list = document.querySelectorAll(".discover-fluid-entity-list--item");
// list.forEach((card) => {
//   const userCard = card.querySelector(".ember-view");
//   const info = ["software engineer", "developer", "sde", "student"];
//   const occupation = userCard.querySelector(
//     ".discover-person-card__occupation"
//   );
//   const occuInfo = occupation.textContent.toLowerCase().trim();
//   info.forEach((keyword) => {
//     console.log(occuInfo, occuInfo.includes(keyword));
//   });
// });

// // console.log(info)
// // console.log(occuInfo.trim().includes(info));

// const list = document.querySelectorAll(".discover-fluid-entity-list--item");
// list.forEach((card) => {
//   const userCard = card.querySelector(".ember-view");
//   const info = ["software engineer", "developer", "sde", "student"];
//   const occupation = userCard.querySelector(
//     ".discover-person-card__occupation"
//   );
//   const occuInfo = occupation.textContent.toLowerCase().trim().split(" ");
//   info.forEach((keyword) => {
//     console.log(occuInfo, occuInfo.includes(`${"software engineer","software developer", "sde", "student"}`));
//   });
// }); 



// const list = document.querySelectorAll(".discover-fluid-entity-list--item");
// list.forEach((card) => {
//   const userCard = card.querySelector(".ember-view");
//   const info = ["software engineer", "developer", "sde", "student"];
//   const occupation = userCard.querySelector(
//     ".discover-person-card__occupation"
//   );
//   const occuInfo = occupation.textContent.toLowerCase().trim().split(" ");
//   info.forEach((keyword) => {
//     console.log(occuInfo, occuInfo.includes(`${"software engineer","software developer", "sde", "student"}`));
//   });
//    const connectButton = card.querySelector(".discover-entity-type-card__bottom-container button");
//    console.log(connectButton);
// }); 

// const list = document.querySelectorAll(".discover-fluid-entity-list--item");
// list.forEach((card) => {
//   const userCard = card.querySelector(".ember-view");
//   const info = ["software engineer", "developer", "sde", "student"];
//   const occupation = userCard.querySelector(
//     ".discover-person-card__occupation"
//   );
//   const occuInfo = occupation.textContent.toLowerCase().trim().split(" ");
//   // info.forEach((keyword) => {
//     //   console.log(occuInfo, occuInfo.includes(`${"software engineer","software developer", "sde", "student"}`));
//     // });
//    const connectButton = card.querySelector(".discover-entity-type-card__bottom-container button");
//     // connectButton.click()
//    console.log(connectButton);
// }); 


// const list = document.querySelectorAll(".discover-fluid-entity-list--item");
// list.forEach((card) => {
//   const userCard = card.querySelector(".ember-view");
//   const info = ["software engineer", "developer", "sde", "student"];
//   const occupation = userCard.querySelector(
//     ".discover-person-card__occupation"
//   );
//   // const occuInfo = occupation.textContent.toLowerCase().trim().split(" ");
//   const occuInfo = occupation.textContent.toLowerCase().trim();
//   info.forEach((word) => {
//     console.log(occuInfo, occuInfo.includes(word));
//   });
//    const connectButton = card.querySelector(".discover-entity-type-card__bottom-container button");
//     // connectButton.click()
//    // console.log(connectButton);
// }); 

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
    connectButton.click()
      }
  });
}); 

