let droit    = document.getElementById('droit');
let gauche   = document.getElementById('gauche');
let controle = document.getElementById('controle2');
let images   = document.getElementsByClassName('image');
let n = -1;

for(let rond = 0; rond < images.length; rond += 1) {
    controle.innerHTML += `<span id="${rond}"></span>`;
}
let span = document.querySelectorAll('#controle2 span');
span[0].classList.add('active');

droit.addEventListener('click', function() {   
    n += 1;
    if(n >= (images.length)-1) {
        n = -1;
        let derniere = (images.length)-1;       
        images[derniere].style.display = "none";
        images[0].style.display = "block";
        span[0].classList.add('active');
        span[derniere].classList.remove('active');
    } else {
        images[n].style.display = "none";
        images[n+1].style.display = "block"; 
        span[n].classList.remove('active');
        span[n+1].classList.add('active');
    } 
});

gauche.addEventListener('click', function() {
    for(let x = 0; x <= (images.length)-1; x+= 1) {
        images[x].style.display = "none";
    }
    if(n == -1) {
        let z = (images.length)-1;
        images[z].style.display = "block";
        span[z].classList.add('active');
        span[0].classList.remove('active');
        n = (images.length)-2;
    } else {
        images[n].style.display = "block";
        span[n].classList.add('active');
        span[n+1].classList.remove('active');
        n -= 1;
    }
});


for(let spa of span) {
    spa.addEventListener('click', function() {
        for(let a = 0; a < images.length; a += 1) {
            span[a].classList.remove('active');
            images[a].style.display = "none";
        }
        let spanID = this.id;
        span[spanID].classList.add('active');
        images[spanID].style.display = "block";

        n = spanID-1;
    });
}