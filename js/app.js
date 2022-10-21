var icon = document.querySelector('.fa');
var ul = document.getElementById('list');
var header = document.querySelector('header');
var li = document.querySelector('.button');


icon.addEventListener('click',change);

function change(){
    ul.classList.toggle('list-active');
    header.classList.add('change');
}

//change when scrool
window.addEventListener("scroll", function(){
    header.classList.toggle("shadow", window.scrollY > 0);
})


ul.addEventListener("click", (e) => {
    console.log(e.target.className)
    if(e.target.classList != "chosen-lang"){
        ul.classList.remove('list-active');
    }
})
