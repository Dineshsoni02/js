const list = document.querySelectorAll(".discover-fluid-entity-list--item");
list.forEach((card)=>{
    const userCard = card.querySelector('.ember-view');
    console.log(userCard)
});