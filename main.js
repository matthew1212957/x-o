const menu = [
  {
    id: 1,
    title: "Pitza",
    category: "lunch",
    price: 200.00,
    img: "121114101_703913850212902_1162786453732276253_o.webp",
    desc: `بيتزا بريموس طبعا مش هت عشان المقاطعه احلي بيتزا تاكلها وتستمتع `,
    rating: "★★★★★",
  },
  {
    id: 2,
    title: "Foul_Medamas",
    category: "breakfast",
    price: 100.00,
    img: "Foul_Medamas.webp",
    desc: `فول مصري ميه في الميه المكونات اتفرج علي الشيف الشربيني وخد معاك ورقه وقلم وادعيلي  `,
    rating: "★☆☆☆",
  },
  {
    id: 3,
    title: "%شربه لسان عصفور 100",
    category: "soup",
    price: 80,
    img: "صورة-بعنوان-شوربة-لسان-عصفور-تونسية.webp",
    desc: `وسع وسع بقا يابو الصحاب شربه اللسان عصفور تاكلها وانت تعبان تشرب من هنا تخف من هنا والف سلامه عليك`,
    rating: "★★☆☆☆",
  },
  {
    id: 4,
    title: "شربه الفراخ بتاعه الست صفيه",
    category: "soup",
    price: 1000,
    img: "201709091046214621.webp",
    desc: `الشربه دي بقا احسن شربه في مصر تطبيل طبعا عشان الست صافيه متجريش ورانا بالخرطوم المهم الشربه دي هتخليك فريش ياباشا البلد`,
    rating: "★★★★☆",
  },
  {
    id: 5,
    title: "افتح الطريق بقا لعم الكل كشري الرحماني احلي كشري فيكي يابلد ",
    category: "lunch",
    price: 35,
    img: "e897d354a069587cbd51689ffa2d5139_w750_h500.webp",
    desc: `احجام الاطباق 35 .25.50.100 بالهنا والشفا `,
    rating: "★★★★★",
  },
  {
    id: 6,
    title: "سمك عم محمود",
    category: "lunch",
    price: 300,
    img: "9-24.webp",
    desc: `احلي سمك مشوي `,
    rating: "★★★☆☆",
  },
];


//DOMContentLoaded .

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded",function(){
  displaymenuitems(menu)
  displaymenubtns()
})
function displaymenuitems(menuItems){
  let displaymenu=menuItems.map(function(item){
    return`<article class="menu-item">
                    <img src="${item.img}" alt="${item.title}" class="photo" />
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.price} LE</h4>
                        </header>
                        <p class="item-text">
                        ${item.desc}
                        </p>
                        <p class="rating">
                        ${item.rating}
                        </p>
                    </div>
                </article>`
  })
  displaymenu=displaymenu.join("")
  sectionCenter.innerHTML=displaymenu
}
function displaymenubtns(){
  const categories=menu.reduce(function(values,item){
    if(!values.includes(item.category)){
      values.push(item.category)
    }
    return values
  },["all"])
  const categorybtns=categories.map(function(category){
    return`<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`
  }).join("")
  btnContainer.innerHTML=categorybtns
  const filterbtns=btnContainer.querySelectorAll(".filter-btn")
  filterbtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
      const category=e.currentTarget.dataset.id
      const menucategory=menu.filter(function(menuItem){
        if(menuItem.category===category){return menuItem}
      })
      if(category=="all"){displaymenuitems(menu)}
      else{displaymenuitems(menucategory)}
    })
  })
}