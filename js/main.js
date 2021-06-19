
$('.top__slider').slick({
  autoplay: true,
  arrows: false,
  dots:true
});

$('.catalog__slider').slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  dots:true
});

$('.benefits__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots:true
});



const item = document.querySelectorAll(".gallery__item-img")
const i = document.querySelectorAll('.gallery__item')
const fixed = document.querySelector('.fixed')

item.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.add('img-active');
    fixed.classList.add('fixed-active');
  })

  fixed.addEventListener('click', () => {
    e.classList.remove('img-active');
    fixed.classList.remove('fixed-active');
  })
})

// theme

const btnLight = document.querySelector(".fa-adjust");

btnLight.addEventListener("click", (e) => {
  e.preventDefault();
  //добавление и удаление анимации
  document.body.classList.add("animation");
  setTimeout(() => {
    document.body.classList.remove("animation");
  }, 500);

  //Проверяем если атрибут href === css/style Тогда меняем

  if (theme.getAttribute("href") === "css/style.css") {
    theme.href = "css/light.css";
  } else if (theme.getAttribute("href") === "css/light.css") {
    theme.href = "css/style.css";
  }

  localStorage.setItem("theme", theme.getAttribute("href"));
});


window.addEventListener("load", () => {
  //получаем данные localStorage('bgColor')

  //получаем данные localStorage('theme')

  const local = localStorage.getItem("theme");
  if (!local) {
    localStorage.setItem("theme",'css/style.css')
  }


  const saveTheme = localStorage.getItem("theme");
  theme.href = saveTheme;
});


//menu

const slideBtn = document.querySelector('.slide__bar');
const menuUl = document.querySelector('.menu');
const btnClose = document.querySelector('.btn-close')

slideBtn.addEventListener('click', () => {
  menuUl.classList.add("menu__ul-active")
})

btnClose.addEventListener('click', () => {
  menuUl.classList.remove("menu__ul-active")
})