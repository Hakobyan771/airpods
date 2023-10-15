const choseColor = document.querySelectorAll('.chose__color-btn');
const contentItem = document.querySelectorAll('.content__item');


choseColor.forEach(function(element){
    element.addEventListener('click', open)
});

function open(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);


    choseColor.forEach(function(item){
        item.classList.remove('chose__color-btn--active')
    })

    target.classList.add('chose__color-btn--active')

   contentItem.forEach(function(item){
    item.classList.remove('content__item--active')
   });

   contentActive.forEach(function(item){
    item.classList.add('content__item--active')
   })

}