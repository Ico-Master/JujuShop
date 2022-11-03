const search = document.querySelector('#search');
const clearBtn = document.querySelector('.btn');
const itemsContainer = document.querySelector('.section container');
const pagination = document.querySelector('.pagination');

const items = itemsContainer.querySelectorAll('.product-container');

Array.from(items).forEach(function(item){
    //console.log(item);
    item.addEventListener('mouseenter', scaleOut);
    item.addEventListener('mouseleave', scaleInt);
})

function scaleOut(e){
    //console.log(e.)
    e.target.style.transform = 'scale(1.05)'
    e.target.style.transition ='0.7s'
}

function scaleInt(e){
    //console.log(e.)
    e.target.style.transform = 'scale(1)'
    e.target.style.transition ='0.7s'
}

search.addEventListener('input', searchEvent);

function searchEvent(e){
    //console.log(e.target.value)
    const text = e.target.value.toLowerCase();
}