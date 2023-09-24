// CARROSSEL DESTAQUES

function mudaCon(id,outroId) {
  
  id.style.transform = "translatex(-110%)"


  outroId.style.transform = "translatex(0) translatey(-100%)"
}

function voltarCon(id,outroId) {

  id.style.transform = "translatex(-110%)"


  outroId.style.transform = "translatex(0%) translatey(-100%)"
}


function voltarCon1(id,outroId) {

  id.style.transform = "translatex(0)"


  outroId.style.transform = "translatex(110%) translatey(-100%)"
}


function mudaCon1(id,outroId) {

  id.style.transform = "translatex(0) translatey(-100%)"

  outroId.style.transform = "translatex(-110%)  translatey(-100%)"
}


function voltarCon2(id,outroId) {

  id.style.transform = "translatex(110%) translatey(-100%)"


  outroId.style.transform = "translatex(0) translatey(-100%)"
}


function voltarCon3(id,outroId) {

  id.style.transform = "translatex(0) translatey(-100%)"


  outroId.style.transform = "translatex(110%) translatey(-100%)"
}


function mudaCon2(id,outroId) {

  id.style.transform = "translatey(-100%) translatex(110%)"

  outroId.style.transform = "translatex(0)"
}

// SLIDE 1-4S


// CARROSSEL 2 LANÇAMENTOS

function mudaCard() {
  const id1 = document.getElementById("card1")
  id1.style.transform = "translatex(-110%)"

  const id2 = document.getElementById("card2")
  id2.style.transform = "translatex(0) translatey(-100%) "
}

function mudaCard2() {
  const id3 = document.getElementById("card2")
  id3.style.transform = "translatey(-100%) translatex(-110%)"

  const id4 = document.getElementById("card3")
  id4.style.transform = "translatex(0) translatey(-100%) "

  const id5 = document.getElementById("mudaCard3")
  id5.style.opacity = "30%"
}

function voltarCard2() {
  const id6 = document.getElementById("card2")
  id6.style.transform = "translatey(-100%) translatex(110%)"

  const id7 = document.getElementById("card1")
  id7.style.transform = "translatex(0)"
}

function voltarCard3() {
  const id8 = document.getElementById("card3")
  id8.style.transform = "translatey(-100%) translatex(110%)"

  const id9 = document.getElementById("card2")
  id9.style.transform = "translatex(0) translatey(-100%)"
}

//  CARROSSEL 2 MOBILE

$(document).ready(function () {
  $(".carousel2").slick({
    dots: false,
    arrows: false,
    swipe: true,
    draggable: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  })
})

//CARROSSEL 3 FAVORITOS
// BOTÃO 1

function executarfuncao2() {
  funcao5()
  setTimeout(funcao6, 6)
}

function funcao5() {
  const id1 = document.getElementById("carrossel-galeria")
  id1.style.display = "flex"
  const id2 = document.getElementById("carrossel-galeria")
  id2.style.opacity = "0%"

  const id3 = document.getElementById("carrossel-galeria2")
  id3.style.display = "none"

  const id4 = document.getElementById("carrossel-galeria3")
  id4.style.display = "none"

  const id5 = document.getElementById("botao1")
  id5.style.background = "#00ff88"

  const id6 = document.getElementById("botao2")
  id6.style.background = "none"

  const id7 = document.getElementById("botao3")
  id7.style.background = "none"
}

function funcao6() {
  const id = document.getElementById("carrossel-galeria")
  id.style.opacity = "100%"
}

// BOTÃO 2

function executarfuncao() {
  funcao1()
  setTimeout(funcao2, 6)
}

function funcao1() {
  const id1 = document.getElementById("carrossel-galeria2")
  id1.style.display = "flex"
  const id2 = document.getElementById("carrossel-galeria2")
  id2.style.opacity = "0%"

  const id3 = document.getElementById("carrossel-galeria")
  id3.style.display = "none"

  const id4 = document.getElementById("carrossel-galeria3")
  id4.style.display = "none"

  const id5 = document.getElementById("botao1")
  id5.style.background = "none"

  const id6 = document.getElementById("botao2")
  id6.style.background = "#00ff88"

  const id7 = document.getElementById("botao3")
  id7.style.background = "none"
}

function funcao2() {
  const id = document.getElementById("carrossel-galeria2")
  id.style.opacity = "100%"
}

// Botão 3
function executarfuncao3() {
  funcao3()
  setTimeout(funcao4, 6)
}

function funcao3() {
  const id8 = document.getElementById("carrossel-galeria3")
  id8.style.display = "flex"
  const id9 = document.getElementById("carrossel-galeria3")
  id9.style.opacity = "0%"

  const id10 = document.getElementById("carrossel-galeria")
  id10.style.display = "none"

  const id11 = document.getElementById("carrossel-galeria2")
  id11.style.display = "none"

  const id12 = document.getElementById("botao1")
  id12.style.background = "none"

  const id13 = document.getElementById("botao2")
  id13.style.background = "none"

  const id14 = document.getElementById("botao3")
  id14.style.background = "#00ff88"
}

function funcao4() {
  const id = document.getElementById("carrossel-galeria3")
  id.style.opacity = "100%"
}

// EFEITO IMAGENS CARROSSEL 3 FAVORITOS

function imagem1() {
  const id = document.getElementById("img0")
  id.style.display = "none"

  const id2 = document.getElementById("img01")
  id2.style.display = "flex"
}

function tiraImagem1() {
  const id = document.getElementById("img01")
  id.style.display = "none"

  const id2 = document.getElementById("img0")
  id2.style.display = "flex"
}

function imagem2() {
  const id = document.getElementById("img0")
  id.style.display = "none"

  const id2 = document.getElementById("img02")
  id2.style.display = "flex"
}

function tiraImagem2() {
  const id = document.getElementById("img02")
  id.style.display = "none"

  const id2 = document.getElementById("img0")
  id2.style.display = "flex"
}

function imagem3() {
  const id = document.getElementById("img0")
  id.style.display = "none"

  const id2 = document.getElementById("img03")
  id2.style.display = "flex"
}

function tiraImagem3() {
  const id = document.getElementById("img03")
  id.style.display = "none"

  const id2 = document.getElementById("img0")
  id2.style.display = "flex"
}

function imagem4() {
  const id = document.getElementById("img0")
  id.style.display = "none"

  const id2 = document.getElementById("img04")
  id2.style.display = "flex"
}

function tiraImagem4() {
  const id = document.getElementById("img04")
  id.style.display = "none"

  const id2 = document.getElementById("img0")
  id2.style.display = "flex"
}

function imagem5() {
  const id = document.getElementById("img00")
  id.style.display = "none"

  const id2 = document.getElementById("img05")
  id2.style.display = "flex"
}

function tiraImagem5() {
  const id = document.getElementById("img05")
  id.style.display = "none"

  const id2 = document.getElementById("img00")
  id2.style.display = "flex"
}

function imagem6() {
  const id = document.getElementById("img00")
  id.style.display = "none"

  const id2 = document.getElementById("img06")
  id2.style.display = "flex"
}

function tiraImagem6() {
  const id = document.getElementById("img06")
  id.style.display = "none"

  const id1 = document.getElementById("img00")
  id1.style.display = "flex"
}

function imagem7() {
  const id = document.getElementById("img00")
  id.style.display = "none"

  const id1 = document.getElementById("img07")
  id1.style.display = "flex"
}

function tiraImagem7() {
  const id = document.getElementById("img07")
  id.style.display = "none"

  const id2 = document.getElementById("img00")
  id2.style.display = "flex"
}

function imagem8() {
  const id = document.getElementById("img00")
  id.style.display = "none"

  const id3 = document.getElementById("img08")
  id3.style.display = "flex"
}

function tiraImagem8() {
  const id = document.getElementById("img08")
  id.style.display = "none"

  const id4 = document.getElementById("img00")
  id4.style.display = "flex"
}

function imagem9() {
  const id = document.getElementById("img000")
  id.style.display = "none"

  const id5 = document.getElementById("img09")
  id5.style.display = "flex"
}

function tiraImagem9() {
  const id = document.getElementById("img09")
  id.style.display = "none"

  const id6 = document.getElementById("img000")
  id6.style.display = "flex"
}

function imagem10() {
  const id = document.getElementById("img000")
  id.style.display = "none"

  const id2 = document.getElementById("img010")
  id2.style.display = "flex"
}

function tiraImagem10() {
  const id = document.getElementById("img010")
  id.style.display = "none"

  const id2 = document.getElementById("img000")
  id2.style.display = "flex"
}

function imagem11() {
  const id = document.getElementById("img000")
  id.style.display = "none"

  const id2 = document.getElementById("img011")
  id2.style.display = "flex"
}

function tiraImagem11() {
  const id = document.getElementById("img011")
  id.style.display = "none"

  const id2 = document.getElementById("img000")
  id2.style.display = "flex"
}

function imagem12() {
  const id = document.getElementById("img000")
  id.style.display = "none"

  const id2 = document.getElementById("img012")
  id2.style.display = "flex"
}

function tiraImagem12() {
  const id = document.getElementById("img012")
  id.style.display = "none"

  const id2 = document.getElementById("img000")
  id2.style.display = "flex"
}

// CARROSSEL 4 TOP

function mudaCard_v2() {
  const id1 = document.getElementById("card1_v2")
  id1.style.transform = "translatex(-110%)"

  const id2 = document.getElementById("card2_v2")
  id2.style.transform = "translatex(0) translatey(-100%) "
}

function mudaCard2_v2() {
  const id3 = document.getElementById("card2_v2")
  id3.style.transform = "translatey(-100%) translatex(-110%)"

  const id4 = document.getElementById("card3_v2")
  id4.style.transform = "translatex(0) translatey(-100%) "

  const id5 = document.getElementById("mudaCard3_v2")
  id5.style.opacity = "30%"
}

function voltarCard2_v2() {
  const id1 = document.getElementById("card2_v2")
  id1.style.transform = "translatey(-100%) translatex(110%)"

  const id2 = document.getElementById("card1_v2")
  id2.style.transform = "translatex(0)"
}

function voltarCard3_v2() {
  const id = document.getElementById("card3_v2")
  id.style.transform = "translatey(-100%) translatex(110%)"

  const id2 = document.getElementById("card2_v2")
  id2.style.transform = "translatex(0) translatey(-100%)"
}

// DropDown - Login

function menuToggle() {
  const toggleMenu = document.querySelector(".menu-dropdown")
  toggleMenu.classList.toggle("active")
}

// Favorito efeito

const elementosAlterados = []

function mudaBrilho(id) {
  const element = document.getElementById(id)
  element.style.opacity = "0.5"
}

function mudaImg(id) {
  const element = document.getElementById(id)
  element.src = "extras/favpreenchido.svg"
  element.style.opacity = "1"
}

function mudaFav(id, outroId) {
  if (!elementosAlterados.includes(id)) {
    mudaBrilho(id)
    setTimeout(function () {
      mudaImg(id)
      elementosAlterados.push(id)


      mudaBrilho(outroId)
      setTimeout(function () {
        mudaImg(outroId)
        elementosAlterados.push(outroId)
      }, 500)
    }, 500)
  } else {


    voltaFav(id)
    voltaFav(outroId)
    const index = elementosAlterados.indexOf(id)
    if (index > -1) {
      elementosAlterados.splice(index, 1)
    }
  }
}

function voltaFav(id) {
  const element = document.getElementById(id)
  let opacity = 1
  
  const fadeOutInterval = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.4 
      element.style.opacity = opacity.toString()
    } else {
      clearInterval(fadeOutInterval)
      element.src = "extras/fav.svg"
      element.style.opacity = "1"
    }
  }, 100)
}

const botoes = document.querySelectorAll(".mobile-vejamais")

botoes.forEach(function (botao) {
  botao.addEventListener("click", function (event) {
    event.preventDefault()
    mudaFav(id, outroId)
  })
})

const botoes2 = document.querySelectorAll(".fav_v2")

botoes2.forEach(function (botao) {
  botao.addEventListener("click", function (event) {
    event.preventDefault()
    mudaFav(id, outroId)
  })
})