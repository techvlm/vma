// deno-lint-ignore-file
// add active class in selected thumbnails
function img(any){
    document.querySelector('.vlmchange').src = any;
}
function color(col){
    const bg = document.querySelector('.vlmbg');
    bg.style.background = col;
}
let el = document.querySelectorAll('#vlmthumb li');

for(let i = 0; i< el.length; i++){
    el[i].onclick= function(){
        var c = 0;
        while(c < el.length){
            el[c++].className = "check";
        }
        el[i].className = 'check active'
    }
}
// my function 2
// select the first div to maintain the code
const vlmheader = document.querySelector('.vlmheader');
const vlmmenu1 = document.querySelector('.wholesection');

document.querySelector('#vlmmenu').addEventListener('click', ()=>{
    vlmheader.style.display = 'block';
    vlmmenu1.style.display = 'none'
});

// 

// select the second div to maintain the code
const vlmheader2 = document.querySelector('.vlmheader');
const vlmselect2 = document.querySelector('.wholesection');
const vlmmenu2 = document.querySelector('.vlmapp');

document.querySelector('#vlmbook').addEventListener('click', ()=>{
    vlmmenu2.style.display = 'block'
    vlmheader2.style.display = 'none';
    vlmselect2.style.display = 'none'
});

// 

const layer1 = document.getElementById("vlayer1");
scroll = window.pageYOffset;
document.addEventListener('scroll', async (ev) =>{
    const offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 +scroll + '%')
});

const layer2 = document.getElementById("vlayer2");
scroll = window.pageYOffset;
document.addEventListener('scroll', async (ev) =>{
    const offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 +scroll/5 + '%');
    layer2.style.left = scroll/50 + '%';

});

const text = document.getElementById("text");
scroll = window.pageYOffset;
document.addEventListener('scroll', async (ev) =>{
    const offset = window.pageYOffset;
    scroll = offset;
    text.style.width = (100 +scroll/50 + '%');
    text.style.top = -scroll/10 + '%';

});





 