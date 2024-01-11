const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const p = document.getElementById('p');
const next = document.getElementById('next');

let currenta=1;

next.addEventListener('click' , () => {
    currenta++ ;
    if(currenta>circles.lenght){
        currenta = circles.lenght;

    }

    update();
})

p.addEventListener('click' , () => {
    currenta--;
    if(currenta<1){
        currenta = 1;

    }

    update();
})

function update(){
    circles.forEach((circle, idx) => {
        if (idx < currenta){
            circle.classList.add('active');
        } else{
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    if (currenta===1) {
        p.disabled = true;
    }else if (currenta===circles.length) {
        next.disabled = true;
    } else {
        p.disabled = false;
        next.disabled = false;
    }
}

