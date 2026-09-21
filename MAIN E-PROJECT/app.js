(function(){
"use strict";

/* ============================================================
   DATA
   ============================================================ */
const ICONS = {
  cake: `<svg viewBox="0 0 100 100"><rect x="18" y="52" width="64" height="30" rx="6" fill="#A6334A"/><rect x="24" y="34" width="52" height="24" rx="6" fill="#C89B3C"/><rect x="32" y="18" width="36" height="20" rx="6" fill="#E7A5A9"/><path d="M46 18c0-8 4-14 4-14s4 6 4 14" stroke="#2E1C12" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="50" cy="4" r="3" fill="#A6334A"/><circle cx="34" cy="46" r="3" fill="#fff" opacity=".8"/><circle cx="66" cy="46" r="3" fill="#fff" opacity=".8"/><circle cx="30" cy="66" r="3" fill="#fff" opacity=".8"/><circle cx="70" cy="66" r="3" fill="#fff" opacity=".8"/><circle cx="50" cy="66" r="3" fill="#fff" opacity=".8"/></svg>`,
  pastry: `<svg viewBox="0 0 100 100"><path d="M15 60c15-40 70-40 70 0-8-6-18 0-26-6-8-6-16 0-24-6-8 6-14 0-20 12Z" fill="#E4C46F"/><path d="M15 60c15-40 70-40 70 0" fill="none" stroke="#2E1C12" stroke-width="2" opacity=".3"/><ellipse cx="50" cy="70" rx="38" ry="8" fill="#2E1C12" opacity=".08"/></svg>`,
  cookie: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="38" fill="#C68E5D"/><circle cx="36" cy="38" r="5" fill="#2E1C12"/><circle cx="60" cy="34" r="5" fill="#2E1C12"/><circle cx="66" cy="56" r="4" fill="#2E1C12"/><circle cx="42" cy="62" r="5" fill="#2E1C12"/><circle cx="58" cy="66" r="3.5" fill="#2E1C12"/></svg>`,
  pie: `<svg viewBox="0 0 100 100"><path d="M50 20 15 78h70L50 20Z" fill="#C89B3C"/><path d="M50 20 15 78h70L50 20Z" fill="none" stroke="#2E1C12" opacity=".15" stroke-width="2"/><path d="M50 32v46M34 78 46 34M66 78 54 34" stroke="#A6334A" stroke-width="3" stroke-linecap="round"/></svg>`,
  dessert: `<svg viewBox="0 0 100 100"><path d="M28 40h44l-6 34a6 6 0 0 1-6 5H40a6 6 0 0 1-6-5l-6-34Z" fill="#E7A5A9"/><rect x="24" y="30" width="52" height="12" rx="6" fill="#A6334A"/><circle cx="50" cy="22" r="7" fill="#C89B3C"/></svg>`,
  drink: `<svg viewBox="0 0 100 100"><path d="M32 30h36l-5 46a6 6 0 0 1-6 5H43a6 6 0 0 1-6-5l-5-46Z" fill="#6C7A5C" opacity=".85"/><path d="M32 30h36" stroke="#2E1C12" stroke-width="3" stroke-linecap="round"/><path d="M68 36c8 2 10 10 4 15" stroke="#2E1C12" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
  mug: `<svg viewBox="0 0 100 100"><rect x="20" y="30" width="46" height="42" rx="8" fill="#A6334A"/><path d="M66 42h8a10 10 0 0 1 0 20h-8" fill="none" stroke="#A6334A" stroke-width="7"/><path d="M30 20c2 4-2 6 0 10M42 20c2 4-2 6 0 10" stroke="#C89B3C" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
  bag: `<svg viewBox="0 0 100 100"><path d="M25 34h50l-4 46a6 6 0 0 1-6 5H35a6 6 0 0 1-6-5l-4-46Z" fill="#C89B3C"/><path d="M36 34v-6a14 14 0 0 1 28 0v6" fill="none" stroke="#2E1C12" stroke-width="4"/></svg>`,
  glass: `<svg viewBox="0 0 100 100"><path d="M32 22h36l-6 52a4 4 0 0 1-4 3.5H42a4 4 0 0 1-4-3.5L32 22Z" fill="#6C7A5C" opacity=".3" stroke="#2E1C12" stroke-width="2.5"/></svg>`,
  tray: `<svg viewBox="0 0 100 100"><rect x="12" y="38" width="76" height="26" rx="10" fill="#C68E5D"/><rect x="20" y="44" width="60" height="14" rx="6" fill="#2E1C12" opacity=".12"/></svg>`,
  gallery1: `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#F3E7D1"/><rect x="20" y="40" width="60" height="34" rx="6" fill="#A6334A"/><circle cx="50" cy="28" r="14" fill="#C89B3C"/></svg>`,
  gallery2: `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#E7A5A9"/><circle cx="35" cy="55" r="20" fill="#fff" opacity=".6"/><circle cx="65" cy="45" r="16" fill="#fff" opacity=".5"/></svg>`,
  gallery3: `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#6C7A5C" opacity=".25"/><rect x="18" y="18" width="64" height="64" rx="10" fill="none" stroke="#2E1C12" stroke-width="2" opacity=".3"/><circle cx="50" cy="50" r="20" fill="#C89B3C"/></svg>`,
  gallery4: `<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#C89B3C" opacity=".3"/><path d="M20 70c15-40 65-40 60 0Z" fill="#E4C46F"/></svg>`
};

const products = [
  {id:1,name:"Belgian Chocolate Truffle",cat:"Cakes",price:2600,desc:"Dense dark-chocolate sponge layered with truffle ganache and a mirror glaze.",ingredients:"Belgian dark chocolate, real butter, fresh cream, free-range eggs, unbleached flour.",tags:["Serves 8","Contains gluten","Contains egg"],badge:"bestseller",icon:"cake"},
  {id:2,name:"Red Velvet Dream",cat:"Cakes",price:2400,desc:"Cocoa-kissed red velvet with tangy cream-cheese frosting between every layer.",ingredients:"Cocoa powder, buttermilk, cream cheese, real butter, unbleached flour.",tags:["Serves 8","Contains gluten","Contains dairy"],badge:"popular",icon:"cake"},
  {id:3,name:"Classic Vanilla Bean",cat:"Cakes",price:2200,desc:"Madagascar vanilla bean sponge with silky Swiss meringue buttercream.",ingredients:"Vanilla bean, real butter, fresh cream, unbleached flour.",tags:["Serves 8","Contains gluten"],badge:"",icon:"cake"},
  {id:4,name:"Salted Caramel Cake",cat:"Cakes",price:2700,desc:"Brown-butter sponge, house salted caramel, and a caramel drip finish.",ingredients:"Brown butter, sea salt, fresh cream, unbleached flour.",tags:["Serves 8","Contains gluten"],badge:"new",icon:"cake"},
  {id:5,name:"Pistachio Rose Cake",cat:"Cakes",price:2900,desc:"Ground pistachio sponge with a whisper of rosewater and mascarpone cream.",ingredients:"Ground pistachio, rosewater, mascarpone, unbleached flour.",tags:["Serves 8","Contains nuts"],badge:"new",icon:"cake"},
  {id:6,name:"Lotus Biscoff Cake",cat:"Cakes",price:2800,desc:"Spiced Biscoff sponge, cookie-butter cream, crushed biscuit crumble.",ingredients:"Biscoff spread, real butter, fresh cream, unbleached flour.",tags:["Serves 8","Contains gluten"],badge:"bestseller",icon:"cake"},

  {id:7,name:"Butter Croissant",cat:"Pastries",price:280,desc:"Laminated 36 hours for a shatter-crisp shell and a soft, buttery crumb.",ingredients:"Real butter, unbleached flour, yeast, milk.",tags:["Single serve","Contains gluten"],badge:"bestseller",icon:"pastry"},
  {id:8,name:"Pain au Chocolat",cat:"Pastries",price:320,desc:"Our croissant dough wrapped around two batons of dark chocolate.",ingredients:"Real butter, dark chocolate, unbleached flour.",tags:["Single serve","Contains gluten"],badge:"popular",icon:"pastry"},
  {id:9,name:"Almond Danish",cat:"Pastries",price:350,desc:"Flaky danish pastry filled with frangipane and toasted almond flakes.",ingredients:"Almond flour, real butter, unbleached flour.",tags:["Single serve","Contains nuts"],badge:"",icon:"pastry"},
  {id:10,name:"Cinnamon Roll",cat:"Pastries",price:380,desc:"Soft-baked roll swirled with brown-sugar cinnamon, finished with cream-cheese icing.",ingredients:"Cinnamon, brown sugar, cream cheese, unbleached flour.",tags:["Single serve","Contains gluten"],badge:"new",icon:"pastry"},
  {id:11,name:"Fresh Fruit Tart",cat:"Pastries",price:420,desc:"Buttery tart shell, vanilla pastry cream, and a mosaic of seasonal fruit.",ingredients:"Seasonal fruit, real cream, unbleached flour.",tags:["Single serve","Contains gluten"],badge:"",icon:"pastry"},
  {id:12,name:"Classic Éclair",cat:"Pastries",price:340,desc:"Choux pastry piped with vanilla cream and dipped in dark chocolate glaze.",ingredients:"Choux pastry, real cream, dark chocolate.",tags:["Single serve","Contains gluten"],badge:"",icon:"pastry"},

  {id:13,name:"Classic Chocolate Chip",cat:"Cookies",price:180,desc:"Crisp edges, gooey centre, loaded with semi-sweet chocolate chunks.",ingredients:"Real butter, semi-sweet chocolate, unbleached flour.",tags:["Pack of 1","Contains gluten"],badge:"bestseller",icon:"cookie"},
  {id:14,name:"Double Chocolate Fudge",cat:"Cookies",price:200,desc:"Cocoa dough studded with dark and milk chocolate chunks.",ingredients:"Cocoa powder, dark chocolate, real butter.",tags:["Pack of 1","Contains gluten"],badge:"popular",icon:"cookie"},
  {id:15,name:"Oatmeal Raisin",cat:"Cookies",price:170,desc:"Chewy rolled oats, plump raisins, and a hint of cinnamon.",ingredients:"Rolled oats, raisins, real butter, unbleached flour.",tags:["Pack of 1","Contains gluten"],badge:"",icon:"cookie"},
  {id:16,name:"Classic Shortbread",cat:"Cookies",price:160,desc:"Three-ingredient simplicity: real butter, sugar, and unbleached flour.",ingredients:"Real butter, sugar, unbleached flour.",tags:["Pack of 1","Contains gluten"],badge:"",icon:"cookie"},
  {id:17,name:"Snickerdoodle",cat:"Cookies",price:170,desc:"Soft cinnamon-sugar cookie with a delicate crackled top.",ingredients:"Cinnamon, real butter, unbleached flour.",tags:["Pack of 1","Contains gluten"],badge:"new",icon:"cookie"},
  {id:18,name:"White Chocolate Macadamia",cat:"Cookies",price:210,desc:"Buttery dough packed with white chocolate and roasted macadamia.",ingredients:"White chocolate, macadamia nuts, real butter.",tags:["Pack of 1","Contains nuts"],badge:"",icon:"cookie"},

  {id:19,name:"Apple Cinnamon Pie",cat:"Pies",price:1900,desc:"Tart baking apples, warm cinnamon, all-butter lattice crust.",ingredients:"Baking apples, cinnamon, real butter, unbleached flour.",tags:["Whole pie, 8 slices","Contains gluten"],badge:"bestseller",icon:"pie"},
  {id:20,name:"Southern Pecan Pie",cat:"Pies",price:2100,desc:"Toasted pecans set in a rich brown-sugar custard filling.",ingredients:"Pecans, brown sugar, real butter, free-range eggs.",tags:["Whole pie, 8 slices","Contains nuts"],badge:"",icon:"pie"},
  {id:21,name:"Lemon Meringue Pie",cat:"Pies",price:2000,desc:"Bright lemon curd beneath a torched Italian meringue cloud.",ingredients:"Fresh lemon, real butter, free-range eggs.",tags:["Whole pie, 8 slices","Contains egg"],badge:"popular",icon:"pie"},
  {id:22,name:"Pumpkin Spice Pie",cat:"Pies",price:1950,desc:"Silky spiced pumpkin custard in a flaky all-butter crust.",ingredients:"Pumpkin puree, warm spices, real cream.",tags:["Whole pie, 8 slices","Seasonal"],badge:"new",icon:"pie"},

  {id:23,name:"Classic Tiramisu Cup",cat:"Desserts",price:520,desc:"Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.",ingredients:"Espresso, mascarpone, real cream, cocoa.",tags:["Single serve","Contains dairy"],badge:"bestseller",icon:"dessert"},
  {id:24,name:"Dark Chocolate Mousse",cat:"Desserts",price:480,desc:"Airy 70% dark chocolate mousse with a shard of tempered chocolate.",ingredients:"70% dark chocolate, real cream, free-range eggs.",tags:["Single serve","Contains egg"],badge:"",icon:"dessert"},
  {id:25,name:"Crème Brûlée",cat:"Desserts",price:500,desc:"Silky vanilla-bean custard under a torched caramel crust.",ingredients:"Vanilla bean, real cream, free-range eggs.",tags:["Single serve","Contains egg"],badge:"popular",icon:"dessert"},
  {id:26,name:"New York Cheesecake",cat:"Desserts",price:560,desc:"Dense, baked cheesecake on a buttery biscuit base.",ingredients:"Cream cheese, real cream, unbleached flour.",tags:["Single serve","Contains dairy"],badge:"",icon:"dessert"},
  {id:27,name:"Vanilla Panna Cotta",cat:"Desserts",price:460,desc:"Set cream dessert with a berry compote ribbon.",ingredients:"Real cream, vanilla bean, seasonal berries.",tags:["Single serve","Contains dairy"],badge:"new",icon:"dessert"},

  {id:28,name:"Signature Cappuccino",cat:"Beverages",price:450,desc:"Double espresso, steamed milk, a thick layer of microfoam.",ingredients:"Espresso beans, fresh milk.",tags:["12oz","Contains dairy"],badge:"bestseller",icon:"drink"},
  {id:29,name:"House Cold Brew",cat:"Beverages",price:420,desc:"Steeped 18 hours for a smooth, low-acid finish.",ingredients:"Cold-brewed coffee, filtered water.",tags:["16oz","Vegan"],badge:"popular",icon:"drink"},
  {id:30,name:"Belgian Hot Chocolate",cat:"Beverages",price:480,desc:"Melted Belgian chocolate whisked into steamed cream and milk.",ingredients:"Belgian chocolate, real cream, fresh milk.",tags:["12oz","Contains dairy"],badge:"",icon:"drink"},
  {id:31,name:"Karak Chai",cat:"Beverages",price:250,desc:"Slow-brewed spiced milk tea, strong and sweet.",ingredients:"Black tea, whole spices, fresh milk.",tags:["10oz","Contains dairy"],badge:"bestseller",icon:"drink"},
  {id:32,name:"Iced Caramel Latte",cat:"Beverages",price:490,desc:"Espresso over ice with house caramel and cold milk.",ingredients:"Espresso beans, house caramel, fresh milk.",tags:["16oz","Contains dairy"],badge:"new",icon:"drink"},
  {id:33,name:"Matcha Latte",cat:"Beverages",price:470,desc:"Ceremonial-grade matcha whisked with steamed milk.",ingredients:"Ceremonial matcha, fresh milk.",tags:["12oz","Contains dairy"],badge:"",icon:"drink"}
];

const merch = [
  {name:"Bakerz Bite Ceramic Mug",desc:"Matte-glazed stoneware mug with the wordmark stamped in gold.",price:"Rs. 950",icon:"mug"},
  {name:"Canvas Tote Bag",desc:"Heavyweight cotton canvas, screen-printed, big enough for a whole cake box.",price:"Rs. 750",icon:"bag"},
  {name:"Glass Tumbler Set",desc:"Set of two double-walled glasses for cold brew and iced lattes.",price:"Rs. 1,400",icon:"glass"},
  {name:"Wooden Serving Tray",desc:"Acacia wood tray, hand-finished, etched with the bakery crest.",price:"Rs. 1,850",icon:"tray"}
];

const offers = [
  {tag:"Morning Special",title:"Breakfast Combo",desc:"Any croissant or danish with a signature cappuccino.",value:"Save Rs. 150",valid:"Mon–Fri, till 11 AM"},
  {tag:"Weekend",title:"Weekend Dessert Box",desc:"Four handpicked desserts, boxed and ready to share.",value:"Rs. 1,650 for 4",valid:"Sat–Sun only"},
  {tag:"Bundle",title:"Buy 2 Get 1 — Cookies",desc:"Mix and match any three cookies from the counter.",value:"1 free",valid:"Every day"},
  {tag:"Celebration",title:"Birthday Cake Special",desc:"10% off any full-size custom cake, ordered 48 hrs ahead.",value:"10% off",valid:"With advance order"},
  {tag:"Combo",title:"Coffee + Pastry Combo",desc:"Any hot beverage paired with a pastry of your choice.",value:"Save Rs. 100",valid:"All day, every day"},
  {tag:"Seasonal",title:"Seasonal Harvest Box",desc:"A rotating seasonal selection — pies, spiced cakes, and more.",value:"Limited batches",valid:"While stocks last"}
];

const galleryItems = [
  {icon:"gallery1",cap:"The display case, restocked every morning"},
  {icon:"gallery2",cap:"Fresh berries, prepped for the tart station"},
  {icon:"gallery3",cap:"Our proofing corner, where the dough rests"},
  {icon:"gallery4",cap:"Golden croissants, straight out of the oven"},
  {icon:"cake",cap:"A Belgian Chocolate Truffle in progress"},
  {icon:"mug",cap:"Merch shelf by the front counter"},
  {icon:"drink",cap:"Karak chai, brewed the slow way"},
  {icon:"dessert",cap:"Tiramisu cups, chilling before service"}
];

const faqs = [
  {q:"What ingredients do you use?",a:"Real butter, real cream and unbleached flour across the board — we don't use margarine, shortening or bleached flour in any recipe."},
  {q:"Are products baked fresh daily?",a:"Yes. Nothing in our case is held overnight; everything on display today was made today, in-house."},
  {q:"Do you offer custom cakes?",a:"Yes — custom cakes for birthdays, weddings and events are available with at least 48 hours' notice. Reach out through the contact form below."},
  {q:"Do you offer vegetarian options?",a:"Most of our menu is vegetarian. A handful of items contain egg or dairy, which is noted in each product's details."},
  {q:"How can I contact Bakerz Bite?",a:"Use the contact form on this page, call the number listed below, or visit us in person during opening hours."},
  {q:"Do you offer merchandise?",a:"Yes — mugs, tote bags, glass tumblers and serving trays are all available in-store and listed in our Merchandise section."},
  {q:"What are your opening hours?",a:"We're open daily; see the Contact section for current hours."},
  {q:"Do you take orders for special events?",a:"Yes, we cater dessert tables and bulk orders for events — get in touch a few days ahead so we can plan quantities."}
];

const sampleReviews = [
  {name:"Ayesha K.",rating:5,text:"The Belgian Chocolate Truffle cake was easily the best I've had in Karachi. Not overly sweet, real chocolate flavour throughout.",date:"2 weeks ago"},
  {name:"Bilal S.",rating:5,text:"Their croissants are shockingly good for the price. I've started stopping by every Saturday morning.",date:"1 month ago"},
  {name:"Fatima R.",rating:4,text:"Ordered a custom birthday cake and it turned out beautifully. Would've liked a few more flavour options, but overall great.",date:"1 month ago"},
  {name:"Omar T.",rating:5,text:"Karak chai here genuinely rivals the roadside stalls, which is saying something. Great little café corner too.",date:"2 months ago"}
];

/* ============================================================
   UTIL
   ============================================================ */
const $ = (sel,ctx=document) => ctx.querySelector(sel);
const $$ = (sel,ctx=document) => Array.from(ctx.querySelectorAll(sel));
const fmtPrice = n => "Rs. " + n.toLocaleString("en-PK");
function safeLS(){ try{ const k="__t"; localStorage.setItem(k,"1"); localStorage.removeItem(k); return true; }catch(e){ return false; } }
const LS_OK = safeLS();

/* ============================================================
   NAVBAR (present on every page — full reload navigation,
   no in-page SPA routing)
   ============================================================ */
const siteNav = $("#siteNav"), navLinks = $("#navLinks"), hamburger = $("#hamburger"), scrim = $("#scrim");
if(siteNav){
  window.addEventListener("scroll", () => { siteNav.classList.toggle("scrolled", window.scrollY > 40); }, {passive:true});
}
function toggleMenu(open){
  if(!navLinks) return;
  const isOpen = open ?? !navLinks.classList.contains("open");
  navLinks.classList.toggle("open", isOpen);
  scrim && scrim.classList.toggle("open", isOpen);
  hamburger && hamburger.setAttribute("aria-expanded", String(isOpen));
}
if(hamburger) hamburger.addEventListener("click", () => toggleMenu());
if(scrim) scrim.addEventListener("click", () => toggleMenu(false));
$$("#navLinks a").forEach(a => a.addEventListener("click", () => toggleMenu(false)));

/* Active nav link = the page actually loaded (real navigation,
   not a scroll-spy over in-page sections) */
(function markActiveNavLink(){
  const currentPage = document.body.getAttribute("data-page");
  if(!currentPage) return;
  $$("#navLinks a[data-page]").forEach(a => {
    a.classList.toggle("active", a.getAttribute("data-page") === currentPage);
  });
})();

/* theme toggle (manual override on top of prefers-color-scheme) */
const themeToggle = $("#themeToggle");
if(themeToggle){
  themeToggle.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try{ localStorage.setItem("bb-theme", next); }catch(e){}
  });
}
try{
  const saved = localStorage.getItem("bb-theme");
  if(saved) document.documentElement.setAttribute("data-theme", saved);
}catch(e){}

/* ============================================================
   CATEGORY STRIP (home page)
   ============================================================ */
const categories = ["Cakes","Pastries","Cookies","Pies","Desserts","Beverages"];
const stripTrack = $("#stripTrack");
if(stripTrack){
  const stripSet = [...categories, ...categories];
  stripTrack.innerHTML = stripSet.map(c => `<span class="strip-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>${c}</span>`).join("");
}

/* ============================================================
   PRODUCT CATALOG (menu page)
   ============================================================ */
const catPills = $("#catPills");
const productGrid = $("#productGrid");
if(catPills && productGrid){
  const emptyState = $("#emptyState");
  const searchInput = $("#searchInput");
  const sortSelect = $("#sortSelect");
  const badgeSelect = $("#badgeSelect");
  let activeCat = "All";

  catPills.innerHTML = ["All", ...categories].map(c =>
    `<button class="cat-pill${c==='All' ? ' active' : ''}" data-cat="${c}">${c}</button>`
  ).join("");

  function cardMedia(icon, badge){
    const badges = [];
    if(badge==="new") badges.push('<span class="pill pill-new">New</span>');
    if(badge==="bestseller") badges.push('<span class="pill pill-best">Bestseller</span>');
    if(badge==="popular") badges.push('<span class="pill pill-pop">Popular</span>');
    return `<div class="card-media" style="background:var(--cream-2);">
      <div class="card-badges">${badges.join("")}</div>
      ${ICONS[icon]}
    </div>`;
  }

  function renderProducts(){
    let list = products.filter(p => activeCat==="All" || p.cat===activeCat);
    const q = searchInput.value.trim().toLowerCase();
    if(q) list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    const bf = badgeSelect.value;
    if(bf !== "all") list = list.filter(p => p.badge === bf);
    const sortMode = sortSelect.value;
    list = [...list];
    if(sortMode==="price-low") list.sort((a,b)=>a.price-b.price);
    else if(sortMode==="price-high") list.sort((a,b)=>b.price-a.price);
    else if(sortMode==="name") list.sort((a,b)=>a.name.localeCompare(b.name));

    productGrid.innerHTML = list.map(p => `
      <article class="card" data-id="${p.id}" tabindex="0" role="button" aria-label="View details for ${p.name}">
        ${cardMedia(p.icon, p.badge)}
        <div class="card-body">
          <div class="card-top"><h3>${p.name}</h3><span class="card-price">${fmtPrice(p.price)}</span></div>
          <p class="card-desc">${p.desc}</p>
          <div class="card-foot">
            <span class="card-cat">${p.cat}</span>
            <button class="btn btn-outline btn-sm" type="button">View Details</button>
          </div>
        </div>
      </article>
    `).join("");
    if(emptyState) emptyState.style.display = list.length ? "none" : "block";
  }

  catPills.addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-pill");
    if(!btn) return;
    activeCat = btn.dataset.cat;
    $$(".cat-pill").forEach(b => b.classList.toggle("active", b===btn));
    renderProducts();
  });
  [searchInput,sortSelect,badgeSelect].forEach(el => el.addEventListener("input", renderProducts));

  /* Product modal */
  const modalOverlay = $("#modalOverlay");
  function openProductModal(p){
    $("#modalMedia").innerHTML = ICONS[p.icon];
    $("#modalMedia").style.background = "var(--cream-2)";
    $("#modalTitle").textContent = p.name;
    $("#modalPrice").textContent = fmtPrice(p.price);
    $("#modalDesc").textContent = p.desc;
    $("#modalIngredients").textContent = p.ingredients;
    $("#modalTags").innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    $("#modalClose").focus();
  }
  function closeProductModal(){
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  productGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if(!card) return;
    const p = products.find(x => x.id === Number(card.dataset.id));
    if(p) openProductModal(p);
  });
  productGrid.addEventListener("keydown", (e) => {
    if((e.key==="Enter"||e.key===" ") && e.target.closest(".card")){
      e.preventDefault();
      e.target.closest(".card").click();
    }
  });
  if(modalOverlay){
    $("#modalClose").addEventListener("click", closeProductModal);
    modalOverlay.addEventListener("click", (e) => { if(e.target===modalOverlay) closeProductModal(); });
    document.addEventListener("keydown", (e) => { if(e.key==="Escape") closeProductModal(); });
  }

  renderProducts();
}

/* ============================================================
   MERCHANDISE (merch page)
   ============================================================ */
const merchGrid = $("#merchGrid");
if(merchGrid){
  merchGrid.innerHTML = merch.map(m => `
    <div class="merch-card">
      ${ICONS[m.icon]}
      <h3>${m.name}</h3>
      <p>${m.desc}</p>
      <div class="merch-price">${m.price}</div>
      <a href="contact.html" class="btn btn-outline btn-sm" style="border-color:rgba(255,255,255,.3); color:#F3E7D1;">Enquire</a>
    </div>
  `).join("");
}

/* ============================================================
   OFFERS (offers page)
   ============================================================ */
const offerGrid = $("#offerGrid");
if(offerGrid){
  offerGrid.innerHTML = offers.map(o => `
    <div class="offer-card">
      <span class="offer-tag">${o.tag}</span>
      <h3>${o.title}</h3>
      <p>${o.desc}</p>
      <div class="offer-meta"><span>${o.value}</span><span>${o.valid}</span></div>
    </div>
  `).join("");
}

/* ============================================================
   GALLERY + LIGHTBOX (gallery page)
   ============================================================ */
const galleryGrid = $("#galleryGrid");
if(galleryGrid){
  galleryGrid.innerHTML = galleryItems.map((g,i) => `
    <div class="g-item" data-i="${i}" style="background:var(--cream-2);" tabindex="0" role="button" aria-label="Open image: ${g.cap}">
      ${ICONS[g.icon]}
      <div class="g-caption">${g.cap}</div>
    </div>
  `).join("");

  const lightbox = $("#lightbox");
  let lbIndex = 0;
  function openLightbox(i){
    lbIndex = i;
    const g = galleryItems[i];
    $("#lightboxImg").innerHTML = ICONS[g.icon];
    $("#lightboxCap").textContent = g.cap;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox(){ lightbox.classList.remove("open"); document.body.style.overflow=""; }
  function stepLightbox(dir){ lbIndex = (lbIndex + dir + galleryItems.length) % galleryItems.length; openLightbox(lbIndex); }
  galleryGrid.addEventListener("click", (e) => { const item = e.target.closest(".g-item"); if(item) openLightbox(Number(item.dataset.i)); });
  galleryGrid.addEventListener("keydown", (e) => { if((e.key==="Enter"||e.key===" ") && e.target.closest(".g-item")){ e.preventDefault(); e.target.closest(".g-item").click(); } });
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", () => stepLightbox(-1));
  $("#lightboxNext").addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("click", (e) => { if(e.target===lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if(!lightbox.classList.contains("open")) return;
    if(e.key==="Escape") closeLightbox();
    if(e.key==="ArrowLeft") stepLightbox(-1);
    if(e.key==="ArrowRight") stepLightbox(1);
  });
}

/* ============================================================
   REVIEWS (about page)
   ============================================================ */
const reviewList = $("#reviewList");
if(reviewList){
  const REVIEW_KEY = "bb-reviews";
  function loadReviews(){
    if(!LS_OK) return [...sampleReviews];
    try{
      const raw = localStorage.getItem(REVIEW_KEY);
      if(!raw) return [...sampleReviews];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [...sampleReviews];
    }catch(e){ return [...sampleReviews]; }
  }
  function saveReviews(list){
    if(!LS_OK) return;
    try{ localStorage.setItem(REVIEW_KEY, JSON.stringify(list)); }catch(e){}
  }
  let reviews = loadReviews();

  function starSvg(filled){
    return `<svg viewBox="0 0 24 24" fill="${filled ? 'currentColor':'none'}" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.1 6.3 7 1-5 4.9 1.2 6.9L12 17.8l-6.3 3.3L7 14.2l-5-4.9 7-1L12 2Z"/></svg>`;
  }
  function renderReviews(){
    reviewList.innerHTML = reviews.map(r => `
      <div class="review-card">
        <div class="review-top">
          <span class="review-name">${r.name}</span>
          <span class="review-stars">${Array.from({length:5},(_,i)=>starSvg(i<r.rating)).join("")}</span>
        </div>
        <p class="review-text">${r.text}</p>
        <p class="review-date">${r.date}</p>
      </div>
    `).join("");
  }
  renderReviews();

  const starInput = $("#starInput");
  let currentRating = 0;
  starInput.innerHTML = Array.from({length:5},(_,i)=>`<button type="button" data-v="${i+1}" aria-label="${i+1} star">${starSvg(false)}</button>`).join("");
  function paintStars(){
    $$("#starInput button").forEach(b => b.classList.toggle("on", Number(b.dataset.v) <= currentRating));
  }
  starInput.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if(!btn) return;
    currentRating = Number(btn.dataset.v);
    paintStars();
  });

  const reviewForm = $("#reviewForm");
  const formMsg = $("#formMsg");
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#rvName").value.trim();
    const text = $("#rvText").value.trim();
    formMsg.className = "form-msg";
    if(!name || !text || currentRating===0){
      formMsg.textContent = "Please add your name, a review, and a star rating.";
      formMsg.classList.add("err");
      return;
    }
    reviews.unshift({name, text, rating: currentRating, date: "Just now"});
    saveReviews(reviews);
    renderReviews();
    reviewForm.reset();
    currentRating = 0;
    paintStars();
    formMsg.textContent = LS_OK ? "Thanks — your review has been added below." : "Thanks! (Your browser blocks local storage, so this won't persist after refresh.)";
    formMsg.classList.add("ok");
  });
}

/* ============================================================
   FAQ ACCORDION (faq page)
   ============================================================ */
const faqList = $("#faqList");
if(faqList){
  faqList.innerHTML = faqs.map((f,i) => `
    <div class="faq-item" data-i="${i}">
      <button class="faq-q" aria-expanded="false">
        <span>${f.q}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
      </button>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>
  `).join("");
  faqList.addEventListener("click", (e) => {
    const q = e.target.closest(".faq-q");
    if(!q) return;
    const item = q.closest(".faq-item");
    const answer = item.querySelector(".faq-a");
    const isOpen = item.classList.contains("open");
    $$(".faq-item").forEach(fi => { fi.classList.remove("open"); fi.querySelector(".faq-a").style.maxHeight = null; fi.querySelector(".faq-q").setAttribute("aria-expanded","false"); });
    if(!isOpen){
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
      q.setAttribute("aria-expanded","true");
    }
  });
}

/* ============================================================
   CONTACT FORM (contact page)
   ============================================================ */
const contactForm = $("#contactForm");
if(contactForm){
  const contactMsg = $("#contactMsg");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#cName").value.trim();
    const email = $("#cEmail").value.trim();
    const msg = $("#cMsg").value.trim();
    contactMsg.className = "form-msg";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!name || !emailOk || !msg){
      contactMsg.textContent = "Please fill in your name, a valid email, and a message.";
      contactMsg.classList.add("err");
      return;
    }
    contactMsg.textContent = "Message received — we'll get back to you soon. (Demo form, no backend connected.)";
    contactMsg.classList.add("ok");
    contactForm.reset();
  });
}

/* ============================================================
   VISITOR COUNTER (every page)
   ============================================================ */
const VIS_KEY = "bb-visitor-count";
function animateNumber(el, to){
  const from = 0;
  const dur = 900;
  const start = performance.now();
  function tick(now){
    const p = Math.min(1, (now-start)/dur);
    const eased = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(from + (to-from)*eased).toLocaleString();
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
(function initVisitorCounter(){
  const visitorCountEl = $("#visitorCount");
  if(!visitorCountEl) return;
  let base = 12483;
  let count = base;
  if(LS_OK){
    try{
      const stored = localStorage.getItem(VIS_KEY);
      count = stored ? Number(stored) + 1 : base + 1;
      localStorage.setItem(VIS_KEY, String(count));
    }catch(e){}
  } else {
    count = base + 1;
  }
  animateNumber(visitorCountEl, count);
})();

/* ============================================================
   BOTTOM TICKER — date, time, location (every page)
   ============================================================ */
let tickerLocation = "Karachi, Pakistan";
function buildTicker(){
  const track = $("#tickerTrack");
  if(!track) return;
  const now = new Date();
  const dateStr = now.toLocaleDateString(undefined, {weekday:"long", year:"numeric", month:"long", day:"numeric"});
  const timeStr = now.toLocaleTimeString(undefined, {hour:"2-digit", minute:"2-digit"});
  const items = [
    `Bakerz Bite`,
    tickerLocation,
    dateStr,
    timeStr,
    "Freshly baked, always."
  ];
  const pin = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
  const html = items.map(i => `<span class="ticker-item">${pin}${i}</span>`).join("");
  track.innerHTML = html + html; // duplicate for seamless loop
}
buildTicker();
setInterval(buildTicker, 30000);

if($("#tickerTrack") && "geolocation" in navigator){
  try{
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        tickerLocation = `Lat ${pos.coords.latitude.toFixed(2)}, Lon ${pos.coords.longitude.toFixed(2)}`;
        buildTicker();
      },
      () => { /* denied or unavailable — keep fallback, don't re-prompt */ },
      {timeout:5000}
    );
  }catch(e){ /* ignore */ }
}

/* ============================================================
   MISC (every page)
   ============================================================ */
const yearEl = $("#year");
if(yearEl) yearEl.textContent = new Date().getFullYear();

})();
