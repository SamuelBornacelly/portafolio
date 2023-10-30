
function events() {
  const section_2__right = document.querySelector(".section_2__right");

  if (window.innerWidth > window.innerHeight) {
    section_2__right.style.height = "auto";
  } else {
    section_2__right.style.height = "100vh";
  }

}

function displacement() {

  const section_1 = document.querySelector(".section_1");
  const section_2 = document.querySelector(".section_2");
  const menu__button_1 = document.querySelector(".menu__button_1");
  const menu__button_2 = document.querySelector(".menu__button_2");
  const menu__button_3 = document.querySelector(".menu__button_3");
  const menu__button_4 = document.querySelector(".menu__button_4");
  const menu__button_5 = document.querySelector(".menu__button_5");
  const right__section_1 = document.querySelector(".right__section_1");
  const right__section_2 = document.querySelector(".right__section_2");
  const right__section_3 = document.querySelector(".right__section_3");
  const right__section_4 = document.querySelector(".right__section_4");

  function opacity() {
      section_1.style.opacity = 1;
      section_2.style.opacity = 0;
      right__section_1.style.opacity = 0;
      right__section_2.style.opacity = 0;
      right__section_3.style.opacity = 0;
      right__section_4.style.opacity = 0;
  }
  opacity()

  function scroll_1() {
    section_1.classList.add("active");
    section_2.classList.remove("active");
    menu__button_1.classList.add("active_3");
    menu__button_2.classList.remove("active_3");
    menu__button_3.classList.remove("active_3");
    menu__button_4.classList.remove("active_3");
    menu__button_5.classList.remove("active_3");
    right__section_1.classList.add("active_2");
    right__section_2.classList.remove("active_2");
    right__section_3.classList.remove("active_2");
    right__section_4.classList.remove("active_2");
    setTimeout(() => {
      section_1.style.opacity = 1;
      section_2.style.opacity = 0;
      right__section_1.style.opacity = 0;
      right__section_2.style.opacity = 0;
      right__section_3.style.opacity = 0;
      right__section_4.style.opacity = 0;
    }, 100);
  }

  function scroll_2() {
    section_1.classList.remove("active");
    section_2.classList.add("active");
    menu__button_1.classList.remove("active_3");
    menu__button_2.classList.add("active_3");
    menu__button_3.classList.remove("active_3");
    menu__button_4.classList.remove("active_3");
    menu__button_5.classList.remove("active_3");
    right__section_1.classList.add("active_2");
    right__section_2.classList.remove("active_2");
    right__section_3.classList.remove("active_2");
    right__section_4.classList.remove("active_2");
    setTimeout(() => {
      section_1.style.opacity = 0;
      section_2.style.opacity = 1;
      right__section_1.style.opacity = 1;
      right__section_2.style.opacity = 0;
      right__section_3.style.opacity = 0;
      right__section_4.style.opacity = 0;
    }, 100);
  }

  function scroll_3() {
    section_1.classList.remove("active");
    section_2.classList.add("active");
    menu__button_1.classList.remove("active_3");
    menu__button_2.classList.remove("active_3");
    menu__button_3.classList.add("active_3");
    menu__button_4.classList.remove("active_3");
    menu__button_5.classList.remove("active_3");
    right__section_1.classList.remove("active_2");
    right__section_2.classList.add("active_2");
    right__section_3.classList.remove("active_2");
    right__section_4.classList.remove("active_2");
    setTimeout(() => {
      section_1.style.opacity = 0;
      section_2.style.opacity = 1;
      right__section_1.style.opacity = 0;
      right__section_2.style.opacity = 1;
      right__section_3.style.opacity = 0;
      right__section_4.style.opacity = 0;
    }, 100);
  }

  function scroll_4() {
    section_1.classList.remove("active");
    section_2.classList.add("active");
    menu__button_1.classList.remove("active_3");
    menu__button_2.classList.remove("active_3");
    menu__button_3.classList.remove("active_3");
    menu__button_4.classList.add("active_3");
    menu__button_5.classList.remove("active_3");
    right__section_1.classList.remove("active_2");
    right__section_2.classList.remove("active_2");
    right__section_3.classList.add("active_2");
    right__section_4.classList.remove("active_2");
    setTimeout(() => {
      section_1.style.opacity = 0;
      section_2.style.opacity = 1;
      right__section_1.style.opacity = 0;
      right__section_2.style.opacity = 0;
      right__section_3.style.opacity = 1;
      right__section_4.style.opacity = 0;
    }, 100);
  }

  function scroll_5() {
    section_1.classList.remove("active");
    section_2.classList.add("active");
    menu__button_1.classList.remove("active_3");
    menu__button_2.classList.remove("active_3");
    menu__button_3.classList.remove("active_3");
    menu__button_4.classList.remove("active_3");
    menu__button_5.classList.add("active_3");
    right__section_1.classList.remove("active_2");
    right__section_2.classList.remove("active_2");
    right__section_3.classList.remove("active_2");
    right__section_4.classList.add("active_2");
    setTimeout(() => {
      section_1.style.opacity = 0;
      section_2.style.opacity = 1;
      right__section_1.style.opacity = 0;
      right__section_2.style.opacity = 0;
      right__section_3.style.opacity = 0;
      right__section_4.style.opacity = 1;
    }, 100);
  }

  menu__button_1.addEventListener("click", scroll_1);
  
  menu__button_2.addEventListener("click", scroll_2);

  menu__button_3.addEventListener("click", scroll_3);

  menu__button_4.addEventListener("click", scroll_4);

  menu__button_5.addEventListener("click", scroll_5);

}

function slider() {

  //Se almacenan el slider y los botones en una variable
  const slider = $('#slider');
  const siguiente = $('#btn-next');
  const anterior = $('#btn-prev');

  //mover ultima imagen al primer lugar
  $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
  
  //mostrar la primera imagen con un margen de -100%
  slider.css('margin-left', '-'+100+'%');

  function moverD() {
    slider.animate({
      marginLeft:'-'+200+'%'
    } ,700, function(){
      $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
      slider.css('margin-left', '-'+100+'%');
    });
  }

  function moverI() {
    slider.animate({
      marginLeft:0
    } ,700, function(){
      $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
      slider.css('margin-left', '-'+100+'%');
    });
  }

  siguiente.on('click',function() {
    moverD();
  });

  anterior.on('click',function() {
    moverI();
  });

}

function main() {

  events()

  slider()

  displacement()

}

main()
