// let img = document.querySelector("#imagem_big")
// img.setAttribute('src', 'assets/tenis-1-galeria.png')  esse funciona também

// outras duas formas do código funcionar

// function changeImgUm() {
//         document.querySelector("#imagem_big").setAttribute('src', 'assets/tenis-1-galeria.png')
// }
// function changeImgDois() {
//         document.querySelector("#imagem_big").setAttribute('src', 'assets/tenis-2-galeria.png')
// }
// function changeImgTres() {
//         document.querySelector("#imagem_big").setAttribute('src', 'assets/tenis-3-galeria.png')
// }

let imgBig = document.querySelector('#imagem_big');

let imgUm = document.querySelector('.imagemUm');
imgUm.addEventListener("click", function(){
     imgBig.setAttribute('src', 'assets/tenis-1-galeria.png');
})

let imgDois = document.querySelector('.imagemDois');
imgDois.addEventListener("click", function(){
        imgBig.setAttribute('src', 'assets/tenis-2-galeria.png');
})

let imgTres = document.querySelector('.imagemTres');
imgTres.addEventListener("click", function(){
        imgBig.setAttribute('src', 'assets/tenis-3-galeria.png');
})
        







