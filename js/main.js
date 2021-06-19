$(".slid").slick({
  autoplay: true,
  arrows: false,
  dots: true,
});

let database = [
  {
    img: "https://static-sl.insales.ru/images/products/1/647/434487943/cover1__w600__3_.jpg",
    title: "Dark Souls: полное издание",
    price: "1999 сом",
  },
  {
    img: "https://static-sl.insales.ru/images/products/1/4203/438644843/pereulok.jpg",
    title: "Переулок",
    price: "840 сом",
  },
  {
    img: "https://static-sl.insales.ru/images/products/1/4398/434516270/2840956_detail.jpg",
    title: "Евангелион АНИМА. Том 1",
    price: "870 сом",
  },
  {
    img: "https://static-sl.insales.ru/images/products/1/4439/424481111/xkPd2FgPVDM.jpg",
    title: "Часы Судного Дня. Книга 1",
    price: "858 сом",
  },
  {
    img: "https://static-sl.insales.ru/images/products/1/6356/424376532/4p6lp9ILxlQ.jpg",
    title: "The Sandman. Песочный человек. Увертюра",
    price: "932 сом",
  },
  {
    img: " https://static-sl.insales.ru/images/products/1/6046/440162206/skott-piligrim-kollekcionnoe-izdanie-tom-1.jpg",
    title: "Скотт Пилигрим. Полное издание. Том 1",
    price: "1100 сом",
  },
  {
    img: "https://static-sl.insales.ru/images/products/1/7055/417938319/SMGAUNT_cov-1.jpg",
    title: "Удивительный Человек-паук. Вызов. Том 1",
    price: "1400 сом",
  },
  {
    img: "https://static-sl.insales.ru/images/products/1/2746/440167098/38a930_5cbced02d9724b7db2c248062876500e_mv2.jpg",
    title: "Продукты 24. Грандиозное издание",
    price: "390 сом",
  },

  {
    img: "https://static-sl.insales.ru/images/products/1/4439/424481111/xkPd2FgPVDM.jpg",
    title: "Часы Судного Дня. Книга 1",
    price: "858 сом",
  },
  {
    img: "https://static-sl.insales.ru/images/products/1/3705/289246841/duh-moey-obshchagi.jpg",
    title: "Дух моей общаги",
    price: "350 сом",
  },
  {
    img: " https://static-sl.insales.ru/images/products/1/176/342327472/n2miRgUJIJ0.jpg",
    title: "Госпожа Кагуя: Любовная битва двух гениев. Книга 1",
    price: "1100 сом",
  },
  {
    img: "https://static-sl.insales.ru/images/products/1/2467/438634915/243234.750.jpg",
    title: "Топ Сикрет. Зона 52",
    price: "390 сом",
  },
];

window.addEventListener("load", showCards(database));

const card = document.querySelector(".cards");

function showCards(arr) {
  const card = document.querySelector(".cards");
  const cardTemplate = arr
  .map(({ title, img, price }) => {
    if (title.length > 28) {
        return `
        <div class="catalog__card  col-3 col-sm-6 col-md-4 col-lg-3">
        <div class="card__inner">
              <div class="card__inner-basket">
                  <button>В КОРЗИНУ</button>
              </div>
              <div class="card__inner-content">
                  <img class="carad__inner-img" src="${img}" alt="#" >
      
                  <div class="card__text">
                       <a class="card__text-title title-text" href="#">
                       ${title}
                       </a>
                       <div class="card__text-bottom">
                       <a class="card__text-price" href="#" >
                       ${price}
                       </a>

                       <div class="card__like">
                           <span class="card__heart"></span>
                       </div>

                       </div>
                   </div>
                </div>
            </div>
          </div> `;
      } else {
        return `
<div class="catalog__card  col-3 col-sm-6 col-md-4 col-lg-3">
<div class="card__inner">
      <div class="card__inner-basket">
          <button>В КОРЗИНУ</button>
      </div>
      <div class="card__inner-content">
          <img class="carad__inner-img" src="${img}" alt="#" >

          <div class="card__text">
               <a class="a card__text-title" href="#">
               ${title}
               </a>
               <div class="card__text-bottom">
               <a class="card__text-price" href="#" >
               ${price}
               </a>
               <div class="card__like">
                           <span class="card__heart"></span>
                       </div>
               </div>
           </div>
      </div>
  </div>
  </div>   `;
      }
    })
    .join("");

  card.innerHTML = cardTemplate;
}

//search system

const catalogInput = document.querySelector(".catalog__menu-input");
const catalogBtnSearch = document.querySelector(".catalog__menu-input-btn");

catalogInput.addEventListener("input", (e) => {
  const searchString = e.target.value.toUpperCase();

  const filteredArr = database.filter(({ title }) =>
    title.toUpperCase().includes(searchString)
  );

  catalogBtnSearch.addEventListener("click", () => {
    showCards(filteredArr);
  });

  // showCards(filteredArr);
});

//

//like system
const hearts = document.querySelectorAll(".card__like  .card__heart");

hearts.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("card__heart-active");
  });
});
//

//catalog
const catalogBtn = document.querySelector(".catalog__btn");
const catalogSlider = document.querySelector(".catalog__slide");

catalogBtn.addEventListener("mouseover", () => {
  catalogSlider.classList.add("catalog__slide-active");
});

catalogBtn.addEventListener("mouseout", () => {
  catalogSlider.classList.remove("catalog__slide-active");
});

//


// submenu selector
const rusMenu = document.querySelector(".rus");
const rusSubmenu = document.querySelector(" .submenu-rus");

const bookMenu = document.querySelector(".book");
const bookSubmenu = document.querySelector(".submenu-book");
//
//eventListener submenu
//rus
rusMenu.addEventListener("mouseover", () => {
  rusSubmenu.classList.add("submenu-active");
});
rusMenu.addEventListener("mouseout", () => {
  rusSubmenu.classList.remove("submenu-active");
});

// book

bookMenu.addEventListener("mouseover", () => {
  bookSubmenu.classList.add("submenu-active");
});
bookMenu.addEventListener("mouseout", () => {
  bookSubmenu.classList.remove("submenu-active");
});
//
