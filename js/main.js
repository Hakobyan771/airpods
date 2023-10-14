const choseColor = document.querySelectorAll('.chose__color-btn');
const content = document.querySelectorAll('.content__item');


choseColor.forEach(function(element){
    element.addEventListener('click', open)
});

function open(evt){
    const target = evt.currentTarget;

    choseColor.forEach(function(item){
        item.classList.remove('chose__color-btn--active')
    })

    target.classList.add('chose__color-btn--active')

}