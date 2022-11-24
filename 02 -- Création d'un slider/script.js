let droit  = document.getElementById('droite');
let gauche = document.getElementById('gauche');
let images = document.getElementsByClassName('image');
let n = -1;

droit.addEventListener('click', function() {   
    n += 1;
    if(n >= (images.length)-1) {
        n = -1;
        let derniere = (images.length)-1;
        images[derniere].style.display = "none";
        images[0].style.display = "block";
    } else {
        images[n].style.display = "none";
        images[n+1].style.display = "block"; 
    }    
});

gauche.addEventListener('click', function() {
    for(let x = 0; x <= (images.length)-1; x+= 1) {
        images[x].style.display = "none";
    }
    if(n == -1) {
        let z = (images.length)-1;
        images[z].style.display = "block";
        n = (images.length)-2;
    } else {
        images[n].style.display = "block";
        n -= 1;
    }
});