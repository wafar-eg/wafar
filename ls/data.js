/* =========================================================
   وفّر - البيانات الأساسية (محافظات - أقسام - منافذ - منتجات)
   ========================================================= */

// محافظات مصر الـ 27
const GOVERNORATES = [
  "القاهرة", "الجيزة", "الإسكندرية", "القليوبية", "الدقهلية", "الشرقية",
  "الغربية", "المنوفية", "البحيرة", "كفر الشيخ", "دمياط", "بورسعيد",
  "الإسماعيلية", "السويس", "الفيوم", "بني سويف", "المنيا", "أسيوط",
  "سوهاج", "قنا", "الأقصر", "أسوان", "البحر الأحمر", "الوادي الجديد",
  "مطروح", "شمال سيناء", "جنوب سيناء"
];

// الأقسام
const CATEGORIES = [
  { id: "veg",     name: "خضار",          en: "Vegetables",       emoji: "🥬", cover: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c" },
  { id: "fruit",   name: "فاكهة",         en: "Fruits",           emoji: "🍎", cover: "https://images.unsplash.com/photo-1631209121750-a9f656d28f46" },
  { id: "meat",    name: "لحوم",          en: "Meat",             emoji: "🥩", cover: "https://images.unsplash.com/photo-1690983322025-aab4f95a0269" },
  { id: "poultry", name: "فراخ",          en: "Poultry",          emoji: "🍗", cover: "https://images.unsplash.com/photo-1642102903996-cdad15f5dcdd" },
  { id: "dairy",   name: "ألبان وبيض",    en: "Dairy & Eggs",     emoji: "🥛", cover: "https://images.unsplash.com/photo-1628088062854-d1870b4553da" },
  { id: "grocery", name: "بقالة وتموين",  en: "Grocery & Staples", emoji: "🛒", cover: "https://images.unsplash.com/photo-1559837957-bab8edc53c85" },
  { id: "frozen",  name: "أطعمة مجمدة",   en: "Frozen Foods",     emoji: "🧊", cover: "https://images.unsplash.com/photo-1651383140368-9b3ee59c2981" }
];

// الأقسام الفرعية
const SUBCATS = {
  dairy: [
    { id: "milk",   name: "حليب",  en: "Milk" },
    { id: "yogurt", name: "زبادي", en: "Yogurt" },
    { id: "cheese", name: "جبن",   en: "Cheese" },
    { id: "eggs",   name: "بيض",   en: "Eggs" }
  ],
  grocery: [
    { id: "oil",     name: "زيت قلي",  en: "Frying Oil" },
    { id: "ghee",    name: "سمن",      en: "Ghee" },
    { id: "sugar",   name: "سكر",      en: "Sugar" },
    { id: "rice",    name: "أرز",      en: "Rice" },
    { id: "legumes", name: "بقوليات",  en: "Legumes" },
    { id: "pasta",   name: "مكرونة",   en: "Pasta" },
    { id: "sauce",   name: "صلصة",     en: "Tomato Sauce" }
  ],
  frozen: [
    { id: "fveg",     name: "خضروات مجمدة", en: "Frozen Vegetables" },
    { id: "fpoultry", name: "دواجن مجمدة",  en: "Frozen Poultry" },
    { id: "fmeat",    name: "لحوم مجمدة",   en: "Frozen Meat" }
  ]
};
const subName = id => { for (const k in SUBCATS) { const s = SUBCATS[k].find(x => x.id === id); if (s) return s.name; } return ""; };


/* =========================================================
   المنافذ: منفذ واحد على الأقل في كل محافظة (الباسورد لكلهم: 123456)
   المشتري بيقدر يطلب من منافذ محافظته بس
   ========================================================= */
const SEED_VENDORS = [
  ["منفذ مدينة نصر",          "nasrcity",     "القاهرة",       "شارع عباس العقاد - مدينة نصر"],
  ["منفذ المعادي",            "maadi",        "القاهرة",       "شارع 9 - المعادي"],
  ["منفذ مصر الجديدة",        "heliopolis",   "القاهرة",       "شارع الحجاز - مصر الجديدة"],
  ["منفذ الهرم",              "haram",        "الجيزة",        "شارع الهرم الرئيسي - الطالبية"],
  ["منفذ 6 أكتوبر",           "october",      "الجيزة",        "المحور المركزي - 6 أكتوبر"],
  ["منفذ سيدي جابر",          "alex",         "الإسكندرية",    "طريق الحرية - سيدي جابر"],
  ["منفذ العجمي",             "agami",        "الإسكندرية",    "الطريق الرئيسي - البيطاش"],
  ["منفذ بنها",               "benha",        "القليوبية",     "شارع فريد ندا - بنها"],
  ["منفذ المنصورة",           "mansoura",     "الدقهلية",      "شارع الجمهورية - المنصورة"],
  ["منفذ الزقازيق",           "zagazig",      "الشرقية",       "شارع فاروق - الزقازيق"],
  ["منفذ طنطا",               "tanta",        "الغربية",       "شارع البحر - طنطا"],
  ["منفذ شبين الكوم",         "shebin",       "المنوفية",      "شارع جمال عبد الناصر - شبين الكوم"],
  ["منفذ دمنهور",             "damanhour",    "البحيرة",       "شارع عبد السلام الشاذلي - دمنهور"],
  ["منفذ كفر الشيخ",          "kafrelsheikh", "كفر الشيخ",     "شارع الجيش - كفر الشيخ"],
  ["منفذ دمياط الجديدة",      "damietta",     "دمياط",         "المنطقة المركزية - دمياط الجديدة"],
  ["منفذ بورسعيد",            "portsaid",     "بورسعيد",       "شارع 23 يوليو - بورسعيد"],
  ["منفذ الإسماعيلية - الشيخ زايد", "ismailia", "الإسماعيلية", "شارع الجيش - الشيخ زايد"],
  ["منفذ فايد",               "fayed",        "الإسماعيلية",   "الطريق الرئيسي - فايد البلد"],
  ["منفذ السويس",             "suez",         "السويس",        "شارع الجيش - الأربعين"],
  ["منفذ الفيوم",             "fayoum",       "الفيوم",        "شارع الحرية - الفيوم"],
  ["منفذ بني سويف",           "benisuef",     "بني سويف",      "شارع صلاح سالم - بني سويف"],
  ["منفذ المنيا",             "minya",        "المنيا",        "كورنيش النيل - المنيا"],
  ["منفذ أسيوط الجديدة",      "assiut",       "أسيوط",         "المنطقة المركزية - أسيوط الجديدة"],
  ["منفذ سوهاج",              "sohag",        "سوهاج",         "شارع الجمهورية - سوهاج"],
  ["منفذ قنا",                "qena",         "قنا",           "شارع الجمهورية - قنا"],
  ["منفذ الأقصر",             "luxor",        "الأقصر",        "شارع التليفزيون - الأقصر"],
  ["منفذ أسوان",              "aswan",        "أسوان",         "شارع كورنيش النيل - أسوان"],
  ["منفذ الغردقة",            "hurghada",     "البحر الأحمر",  "شارع النصر - الدهار"],
  ["منفذ الخارجة",            "kharga",       "الوادي الجديد", "شارع جمال عبد الناصر - الخارجة"],
  ["منفذ مرسى مطروح",         "matrouh",      "مطروح",         "شارع الإسكندرية - مرسى مطروح"],
  ["منفذ العريش",             "arish",        "شمال سيناء",    "شارع 23 يوليو - العريش"],
  ["منفذ الطور",              "tor",          "جنوب سيناء",    "الطريق الرئيسي - الطور"]
].map(([name, key, governorate, address], i) => ({
  id: "v" + (i + 1),
  name,
  ownerName: "مدير " + name,
  email: key + "@wafar.eg",
  phone: ["010", "011", "012", "015"][i % 4] + String(10000000 + i * 1234567).slice(-8),
  nationalId: "290" + String((i % 12) + 1).padStart(2, "0") + String((i % 28) + 1).padStart(2, "0") + String(i + 1).padStart(2, "0") + String(10000 + i * 37).slice(-5),
  governorate,
  address
}));

/* =========================================================
   المنتجات: منتجات مصرية حقيقية من ماركات معروفة بأسعار عادية
   img = صورة المنتج الحقيقية (خلفية بيضاء) من موقع كارفور مصر
   core = منتج أساسي موجود في كل المنافذ
   ========================================================= */
const CDN = "https://cdn.mafrservices.com/";
const CATALOG = [
  // ===== ألبان وبيض =====
  { name: "لبن جهينة كامل الدسم", en: "Juhayna Full Cream Milk",       size: "1 لتر",    category: "dairy", sub: "milk", price: 46,  unit: "علبة", emoji: "🥛", core: 1, img: "sys-master-root/h87/hf0/13688480038942/12721_main.jpg" },
  { name: "لبن جهينة خالي الدسم", en: "Juhayna Skimmed Milk",       size: "1 لتر",    category: "dairy", sub: "milk", price: 46,  unit: "علبة", emoji: "🥛", img: "sys-master-root/h7d/h2e/11259563180062/12723_main.jpg" },
  { name: "زبادي جهينة سادة", en: "Juhayna Plain Yogurt",           size: "105 جم",   category: "dairy", sub: "yogurt", price: 9,   unit: "كوب",  emoji: "🥛", core: 1, img: "sys-master-root/h8d/h7b/26751778390046/210181_main.jpg" },
  { name: "لبن رايب جهينة", en: "Juhayna Rayeb Milk",             size: "1 لتر",    category: "dairy", sub: "yogurt", price: 48,  unit: "علبة", emoji: "🥛", img: "sys-master-root/h23/h96/26655832801310/12754_main.jpg" },
  { name: "لبن المراعي كامل الدسم", en: "Almarai Full Cream Milk",     size: "1 لتر",    category: "dairy", sub: "milk", price: 47,  unit: "علبة", emoji: "🥛", core: 1, img: "sys-master-root/he6/h26/30871336878110/310889_main.jpg" },
  { name: "لبن المراعي خالي الدسم", en: "Almarai Skimmed Milk",     size: "1 لتر",    category: "dairy", sub: "milk", price: 47,  unit: "علبة", emoji: "🥛", img: "sys-master-root/h20/h07/44920809685022/514379_main.jpg" },
  { name: "لبن المراعي نصف دسم", en: "Almarai Half Cream Milk",        size: "1 لتر",    category: "dairy", sub: "milk", price: 47,  unit: "علبة", emoji: "🥛", img: "sys-master-root/h45/hf7/30871339466782/392554_main.jpg" },
  { name: "لبن المراعي بالشيكولاتة", en: "Almarai Chocolate Milk",    size: "200 مل",   category: "dairy", sub: "milk", price: 15,  unit: "علبة", emoji: "🥛", img: "sys-master-root/hde/h25/44920804278302/420789_main.jpg" },
  { name: "لبن بيتي كامل الدسم", en: "Beyti Full Cream Milk",        size: "900 مل",   category: "dairy", sub: "milk", price: 42,  unit: "علبة", emoji: "🥛", img: "pim-content/EGY/media/product/683312/1785836400/683312_main.jpg" },
  { name: "لبن لمار كامل الدسم", en: "Lamar Full Cream Milk",        size: "1 لتر",    category: "dairy", sub: "milk", price: 42,  unit: "علبة", emoji: "🥛", core: 1, img: "pim-content/EGY/media/product/362475/1727089804/362475_main.jpg" },
  { name: "لبن لمار خالي الدسم", en: "Lamar Skimmed Milk",        size: "1 لتر",    category: "dairy", sub: "milk", price: 42,  unit: "علبة", emoji: "🥛", img: "pim-content/EGY/media/product/362476/1727089804/362476_main.jpg" },
  { name: "لبن لاكتيل كامل الدسم", en: "Lactel Full Cream Milk",      size: "1 لتر",    category: "dairy", sub: "milk", price: 43,  unit: "علبة", emoji: "🥛", img: "sys-master-root/h31/h02/9286774751262/340392_main.jpg" },
  { name: "لبن رايب لاكتيل", en: "Lactel Rayeb Milk",            size: "210 مل",   category: "dairy", sub: "yogurt", price: 12,  unit: "علبة", emoji: "🥛", img: "sys-master-root/h25/h02/9286431473694/282224_main.jpg" },
  { name: "جبنة دومتي فيتا", en: "Domty Feta Cheese",            size: "500 جم",   category: "dairy", sub: "cheese", price: 62,  unit: "علبة", emoji: "🧀", core: 1, img: "pim-content/EGY/media/product/36598/1775580002/36598_main.jpg" },
  { name: "جبنة دومتي اسطنبولي", en: "Domty Istanbuli Cheese",        size: "500 جم",   category: "dairy", sub: "cheese", price: 58,  unit: "علبة", emoji: "🧀", img: "sys-master-root/h32/h8a/11724322078750/11837_main.jpg" },
  { name: "جبنة عبور لاند فيتا", en: "Obour Land Feta Cheese",        size: "500 جم",   category: "dairy", sub: "cheese", price: 55,  unit: "علبة", emoji: "🧀", img: "pim-content/EGY/media/product/407407/1772013600/407407_main.jpg" },
  { name: "جبنة عبور لاند اسطنبولي", en: "Obour Land Istanbuli Cheese",    size: "500 جم",   category: "dairy", sub: "cheese", price: 55,  unit: "علبة", emoji: "🧀", img: "pim-content/EGY/media/product/407408/1772530189/407408_main.jpg" },
  { name: "بيض أبيض الخير", en: "Al Khair White Eggs",             size: "30 بيضة",  category: "dairy", sub: "eggs", price: 165, unit: "طبق",  emoji: "🥚", core: 1, img: "sys-master-root/h73/h76/9286767935518/335954_main.jpg" },
  { name: "بيض أحمر الخير", en: "Al Khair Brown Eggs",             size: "30 بيضة",  category: "dairy", sub: "eggs", price: 180, unit: "طبق",  emoji: "🥚", img: "sys-master-root/ha4/h6c/9286767673374/335955_main.jpg" },

  // ===== لحوم =====
  { name: "لحم بقري بلدي (وش فخدة)", en: "Balady Beef Rump",    size: "1 كجم",    category: "meat", price: 450, unit: "كيلو", emoji: "🥩", core: 1, img: "sys-master-root/h42/h06/10856167538718/426170_main.jpg" },
  { name: "لحمة مفرومة بلدي", en: "Balady Minced Beef",           size: "1 كجم",    category: "meat", price: 400, unit: "كيلو", emoji: "🥩", core: 1, img: "sys-master-root/h8c/ha2/30490078937118/31991_main.jpg" },
  { name: "لحم بقري مكعبات", en: "Beef Cubes",            size: "1 كجم",    category: "meat", price: 460, unit: "كيلو", emoji: "🥩", img: "sys-master-root/hf7/h69/62786093219870/426174_main.jpg" },
  { name: "اسكالوب بقري بلدي", en: "Balady Beef Escalope",          size: "1 كجم",    category: "meat", price: 520, unit: "كيلو", emoji: "🥩", img: "sys-master-root/h6d/h44/51071949635614/426166_main.jpg" },

  // ===== فراخ =====
  { name: "فرخة بيضاء كاملة طازة", en: "Fresh Whole White Chicken",      size: "1 كجم تقريباً", category: "poultry", price: 110, unit: "كيلو", emoji: "🐔", core: 1, img: "pim-content/EGY/media/product/419066/1782225000/419066_main.jpg" },
  { name: "فيليه فراخ طازة", en: "Fresh Chicken Fillet",            size: "1 كجم",    category: "poultry", price: 260, unit: "كيلو", emoji: "🍗", core: 1, img: "pim-content/EGY/media/product/419058/1782225000/419058_main.jpg" },
  { name: "صدور فراخ بالعضم", en: "Chicken Breasts with Bone",           size: "1 كجم",    category: "poultry", price: 220, unit: "كيلو", emoji: "🍗", img: "pim-content/EGY/media/product/419065/1782225000/419065_main.jpg" },
  { name: "أوراك فراخ طازة", en: "Fresh Chicken Thighs",            size: "1 كجم",    category: "poultry", price: 150, unit: "كيلو", emoji: "🍗", img: "pim-content/EGY/media/product/419060/1782225000/419060_main.jpg" },

  // ===== خضار =====
  { name: "طماطم", en: "Tomatoes",                      size: "1 كجم",    category: "veg", price: 15, unit: "كيلو", emoji: "🍅", core: 1, img: "sys-master-root/h23/hb8/35139577446430/377135_main.jpg" },
  { name: "بطاطس للطبخ", en: "Potatoes for Cooking",                size: "1 كجم",    category: "veg", price: 18, unit: "كيلو", emoji: "🥔", core: 1, img: "pim-content/EGY/media/product/662686/1763473613/662686_main.jpg" },
  { name: "بصل أحمر", en: "Red Onions",                   size: "1 كجم",    category: "veg", price: 20, unit: "كيس",  emoji: "🧅", core: 1, img: "sys-master-root/ha2/hd5/27307737710622/562289_main.jpg" },
  { name: "خيار", en: "Cucumber",                       size: "1 كجم",    category: "veg", price: 20, unit: "كيلو", emoji: "🥒", core: 1, img: "sys-master-root/hc1/hbe/9342277910558/213783_main.jpg" },
  { name: "جزر", en: "Carrots",                        size: "1 كجم",    category: "veg", price: 15, unit: "كيلو", emoji: "🥕", img: "sys-master-root/h7d/hcc/9342285643806/229953_main.jpg" },
  { name: "فلفل رومي بلدي", en: "Balady Bell Peppers",             size: "1 كجم",    category: "veg", price: 30, unit: "كيلو", emoji: "🫑", img: "sys-master-root/h6d/he5/35139576692766/32652_main.jpg" },
  { name: "ليمون بلدي", en: "Balady Lemons",                 size: "1 كجم",    category: "veg", price: 40, unit: "كيلو", emoji: "🍋", img: "sys-master-root/h93/had/35139577774110/396109_main.jpg" },

  // ===== فاكهة =====
  { name: "موز", en: "Bananas",                        size: "1 كجم",    category: "fruit", price: 45, unit: "كيلو", emoji: "🍌", core: 1, img: "sys-master-root/hed/h73/35139575414814/32567_main.jpg" },
  { name: "برتقال فالنسيا", en: "Valencia Oranges",             size: "1 كجم",    category: "fruit", price: 20, unit: "كيلو", emoji: "🍊", core: 1, img: "sys-master-root/hab/h1d/9342411112478/297733_main.jpg" },
  { name: "تفاح أحمر", en: "Red Apples",                  size: "1 كجم",    category: "fruit", price: 75, unit: "كيلو", emoji: "🍎", img: "sys-master-root/h59/hc5/35139577085982/369185_main.jpg" },

  // ===== بقالة وتموين: زيوت وسمن =====
  { name: "زيت كريستال عباد الشمس", en: "Crystal Sunflower Oil",     size: "1 لتر",    category: "grocery", sub: "oil", price: 95,  unit: "زجاجة", emoji: "🫗", core: 1, img: "pim-content/EGY/media/product/17706/1767171600/17706_main.jpg" },
  { name: "سمن كريستال نباتي أبيض", en: "Crystal White Vegetable Ghee",     size: "1.5 كجم",  category: "grocery", sub: "ghee", price: 190, unit: "علبة",  emoji: "🧈", img: "pim-content/EGY/media/product/305567/1738681205/305567_main.jpg" },
  { name: "زيت عافية ذرة", en: "Afia Corn Oil",              size: "800 مل",   category: "grocery", sub: "oil", price: 92,  unit: "زجاجة", emoji: "🫗", img: "sys-master-root/h99/h2c/15173273452574/543878_main.jpg" },
  { name: "زيت زازا ذرة", en: "Zaza Corn Oil",               size: "700 مل",   category: "grocery", sub: "oil", price: 75,  unit: "زجاجة", emoji: "🫗", img: "sys-master-root/hfa/h73/47992458084382/604814_main.jpg" },

  // ===== بقالة وتموين: أرز وسكر وبقوليات =====
  { name: "أرز الضحى مصري", en: "Al Doha Egyptian Rice",             size: "1 كجم",    category: "grocery", sub: "rice", price: 36, unit: "كيس", emoji: "🍚", core: 1, img: "sys-master-root/h65/h39/15127732453406/17997_main.jpg" },
  { name: "سكر الضحى ناعم", en: "Al Doha Fine Sugar",             size: "1 كجم",    category: "grocery", sub: "sugar", price: 38, unit: "كيس", emoji: "🍬", core: 1, img: "sys-master-root/hfc/ha2/15127731470366/17964_main.jpg" },
  { name: "فول الضحى مدشوش", en: "Al Doha Crushed Fava Beans",            size: "500 جم",   category: "grocery", sub: "legumes", price: 30, unit: "كيس", emoji: "🫘", img: "sys-master-root/hc5/hd6/34709980413982/17989_main.jpg" },
  { name: "أرز ريحانة بسمتي هندي", en: "Rehana Indian Basmati Rice",      size: "1 كجم",    category: "grocery", sub: "rice", price: 95, unit: "كيس", emoji: "🍚", img: "sys-master-root/h69/h01/28522779705374/576748_main.jpg" },
  { name: "عدس أصفر ريحانة", en: "Rehana Yellow Lentils",            size: "500 جم",   category: "grocery", sub: "legumes", price: 38, unit: "كيس", emoji: "🥣", img: "sys-master-root/h28/h05/28522779836446/579372_main.jpg" },
  { name: "دقيق المطبخ متعدد الاستخدامات", en: "El Matbakh All-Purpose Flour", size: "1 كجم", category: "grocery", price: 32, unit: "كيس", emoji: "🌾", img: "sys-master-root/h12/ha0/15127742709790/538698_main.jpg" },
  { name: "أرز المطبخ أبيض", en: "El Matbakh White Rice",            size: "1 كجم",    category: "grocery", sub: "rice", price: 35, unit: "كيس", emoji: "🍚", img: "sys-master-root/h37/hfc/15127735435294/433716_main.jpg" },
  { name: "أرز أهل القمة أبيض", en: "Ahl Alqema White Rice",         size: "1 كجم",    category: "grocery", sub: "rice", price: 35, unit: "كيس", emoji: "🍚", img: "pim-content/EGY/media/product/643679/1734340204/643679_main.jpg" },

  // ===== بقالة وتموين: مكرونة =====
  { name: "مكرونة ريجينا قلم", en: "Regina Penne Pasta",          size: "400 جم",   category: "grocery", sub: "pasta", price: 24, unit: "كيس", emoji: "🍝", core: 1, img: "pim-content/EGY/media/product/17608/1787727600/17608_main.jpg" },
  { name: "مكرونة ريجينا اسباجيتي", en: "Regina Spaghetti",     size: "400 جم",   category: "grocery", sub: "pasta", price: 24, unit: "كيس", emoji: "🍝", img: "pim-content/EGY/media/product/17597/1787727600/17597_main.jpg" },
  { name: "مكرونة ريجينا خواتم صغيرة", en: "Regina Small Rings Pasta",  size: "400 جم",   category: "grocery", sub: "pasta", price: 24, unit: "كيس", emoji: "🍝", img: "pim-content/EGY/media/product/17606/1787727600/17606_main.jpg" },
  { name: "مكرونة الملكة قلم مخطط", en: "El Maleka Rigate Penne",     size: "400 جم",   category: "grocery", sub: "pasta", price: 18, unit: "كيس", emoji: "🍝", core: 1, img: "sys-master-root/ha4/h1a/48236821381150/46863_main.jpg" },
  { name: "مكرونة الملكة كوع", en: "El Maleka Elbow Pasta",          size: "400 جم",   category: "grocery", sub: "pasta", price: 18, unit: "كيس", emoji: "🍝", img: "pim-content/EGY/media/product/617928/1750251603/617928_main.jpg" },
  { name: "مكرونة إيطاليانو اسباجيتي", en: "Italiano Spaghetti",  size: "400 جم",   category: "grocery", sub: "pasta", price: 17, unit: "كيس", emoji: "🍝", img: "pim-content/EGY/media/product/16891/1750163403/16891_main.jpg" },
  { name: "مكرونة إيطاليانو خواتم صغيرة", en: "Italiano Small Rings Pasta", size: "400 جم", category: "grocery", sub: "pasta", price: 17, unit: "كيس", emoji: "🍝", img: "pim-content/EGY/media/product/16901/1750163403/16901_main.jpg" },
  { name: "مكرونة لمتنا قلم", en: "Lemetna Penne Pasta",           size: "1 كجم",    category: "grocery", sub: "pasta", price: 38, unit: "كيس", emoji: "🍝", img: "sys-master-root/haa/hd0/47595231674398/576215_main.jpg" },
  { name: "مكرونة المطبخ كوع", en: "El Matbakh Elbow Pasta",          size: "400 جم",   category: "grocery", sub: "pasta", price: 16, unit: "كيس", emoji: "🍝", img: "sys-master-root/h32/hf6/34709985886238/457930_main.jpg" },
  { name: "شعرية أهل القمة", en: "Ahl Alqema Vermicelli",            size: "400 جم",   category: "grocery", sub: "pasta", price: 17, unit: "كيس", emoji: "🍝", img: "pim-content/EGY/media/product/644719/1738159204/644719_main.jpg" },

  // ===== بقالة وتموين: صلصة ومعلبات =====
  { name: "صلصة طماطم هاينز", en: "Heinz Tomato Paste",           size: "360 جم",   category: "grocery", sub: "sauce", price: 42, unit: "برطمان", emoji: "🥫", core: 1, img: "sys-master-root/h21/hba/14932246757406/18299_main.jpg" },
  { name: "كاتشب هاينز", en: "Heinz Ketchup",                size: "295 جم",   category: "grocery", sub: "sauce", price: 45, unit: "زجاجة",  emoji: "🥫", img: "pim-content/EGY/media/product/623765/1723644603/623765_main.jpg" },
  { name: "صلصة طماطم هارفست", en: "Harvest Tomato Paste",          size: "320 جم",   category: "grocery", sub: "sauce", price: 32, unit: "برطمان", emoji: "🥫", img: "sys-master-root/h0b/h1e/14932367474718/322974_main.jpg" },
  { name: "صلصة طماطم كنور فاين فودز", en: "Knorr Fine Foods Tomato Paste",  size: "360 جم",   category: "grocery", sub: "sauce", price: 38, unit: "برطمان", emoji: "🥫", img: "sys-master-root/h34/hee/49510726369310/17057_main.jpg" },
  { name: "صلصة طماطم جاردينو", en: "Gardino Tomato Paste",         size: "300 جم",   category: "grocery", sub: "sauce", price: 25, unit: "علبة",   emoji: "🥫", img: "pim-content/EGY/media/product/406297/1752583681/406297_main.jpg" },
  { name: "فول مدمس هارفست سادة", en: "Harvest Plain Fava Beans",       size: "400 جم",   category: "grocery", sub: "legumes", price: 19, unit: "علبة",   emoji: "🥫", core: 1, img: "pim-content/EGY/media/product/17115/1751360404/17115_main.jpg" },
  { name: "فول مدمس أمريكانا سادة", en: "Americana Plain Fava Beans",     size: "400 جم",   category: "grocery", sub: "legumes", price: 22, unit: "علبة",   emoji: "🥫", img: "sys-master-root/h8f/h6a/27393898545182/575657_main.jpg" },
  { name: "فول مقشر كاليفورنيا جاردن", en: "California Garden Peeled Fava Beans",  size: "400 جم",   category: "grocery", sub: "legumes", price: 28, unit: "علبة",   emoji: "🥫", img: "sys-master-root/ha7/h0c/14786194145310/454381_main.jpg" },
  { name: "تونة كاليفورنيا جاردن قطع", en: "California Garden Tuna Chunks",  size: "185 جم",   category: "grocery", price: 85, unit: "علبة",   emoji: "🐟", img: "sys-master-root/h0f/h22/14786089058334/16705_main.jpg" },

  // ===== خضار (جديد) =====
  { name: "كوسة", en: "Zucchini", size: "1 كجم", category: "veg", price: 37, unit: "كيلو", emoji: "🥒", img: "sys-master-root/had/he1/35139576561694/32609_main.jpg" },
  { name: "باذنجان رومي", en: "Big Eggplants", size: "1 كجم", category: "veg", price: 25, unit: "كيلو", emoji: "🍆", img: "sys-master-root/h1c/h83/62465476722718/32606_main.jpg" },
  { name: "بطاطا", en: "Sweet Potatoes", size: "1 كجم", category: "veg", price: 25, unit: "كيلو", emoji: "🍠", img: "sys-master-root/h7a/hb8/35139577413662/32882_main.jpg" },
  { name: "بصل أبيض", en: "White Onions", size: "1 كجم", category: "veg", price: 22, unit: "كيلو", emoji: "🧅", img: "sys-master-root/h08/h5d/14257452646430/32763_main.jpg" },
  { name: "خس آيسبرج", en: "Iceberg Lettuce", size: "1 حبة", category: "veg", price: 30, unit: "حبة", emoji: "🥬", img: "sys-master-root/hb9/h7b/14622865555486/218900_main.jpg" },
  { name: "بروكلي", en: "Broccoli", size: "1 كجم", category: "veg", price: 90, unit: "كيلو", emoji: "🥦", img: "sys-master-root/h05/he2/35139576594462/32820_main.jpg" },
  { name: "قرنبيط", en: "Cauliflower", size: "1 كجم", category: "veg", price: 25, unit: "كيلو", emoji: "🥦", img: "sys-master-root/h08/hd2/10187578245150/32604_main.jpg" },
  { name: "فاصوليا خضراء", en: "Green Beans", size: "1 كجم", category: "veg", price: 40, unit: "كيلو", emoji: "🫛", img: "sys-master-root/hbb/hb4/35139577544734/32645_main.jpg" },
  { name: "كرنب", en: "Cabbage", size: "1 كجم", category: "veg", price: 15, unit: "كيلو", emoji: "🥬", img: "sys-master-root/hd7/h23/9342436540446/32603_main.jpg" },
  { name: "ثوم صيني", en: "Chinese Garlic", size: "1 كجم", category: "veg", price: 120, unit: "كيلو", emoji: "🧄", img: "sys-master-root/he4/hee/35139576922142/32760_main.jpg" },
  { name: "فلفل رومي أحمر", en: "Red Bell Peppers", size: "1 كجم", category: "veg", price: 80, unit: "كيلو", emoji: "🫑", img: "sys-master-root/h3b/hef/35139576954910/32615_main.jpg" },
  { name: "فلفل حامي أخضر", en: "Green Chili Peppers", size: "1 كجم", category: "veg", price: 35, unit: "كيلو", emoji: "🌶️", img: "sys-master-root/he5/h81/35139575840798/32621_main.jpg" },
  { name: "مشروم أبيض", en: "White Mushroom", size: "200 جم", category: "veg", price: 45, unit: "علبة", emoji: "🍄", img: "sys-master-root/hf6/h54/44726335963166/447669_main.jpg" },
  // ===== فاكهة (جديد) =====
  { name: "جوافة", en: "Guava", size: "1 كجم", category: "fruit", price: 37, unit: "كيلو", emoji: "🍐", img: "sys-master-root/hb8/hd0/35139576070174/32558_main.jpg" },
  { name: "مانجو كيت", en: "Keitt Mango", size: "1 كجم", category: "fruit", price: 58, unit: "كيلو", emoji: "🥭", img: "sys-master-root/h4c/h1b/35139574923294/32523_main.jpg" },
  { name: "رمان", en: "Pomegranate", size: "1 كجم", category: "fruit", price: 59, unit: "كيلو", emoji: "🍎", img: "sys-master-root/h2b/haa/35139577872414/397729_main.jpg" },
  { name: "يوسفي", en: "Mandarin", size: "1 كجم", category: "fruit", price: 29, unit: "كيلو", emoji: "🍊", img: "sys-master-root/hde/h6d/35139575283742/32496_main.jpg" },
  { name: "فراولة", en: "Strawberry", size: "750 جم", category: "fruit", price: 90, unit: "علبة", emoji: "🍓", img: "sys-master-root/h5c/h11/10067352649758/447663_main.jpg" },
  { name: "كنتالوب", en: "Cantaloupe", size: "1 حبة", category: "fruit", price: 54, unit: "حبة", emoji: "🍈", img: "sys-master-root/h47/h71/35139575382046/32551_main.jpg" },
  { name: "عنب أحمر كريمسون", en: "Crimson Red Grapes", size: "1 كجم", category: "fruit", price: 95, unit: "كيلو", emoji: "🍇", img: "sys-master-root/ha4/h85/35139575971870/32547_main.jpg" },
  { name: "كيوي", en: "Kiwi", size: "1 كجم", category: "fruit", price: 80, unit: "كيلو", emoji: "🥝", img: "sys-master-root/h2f/h03/35139574202398/287170_main.jpg" },
  { name: "تفاح جولدن", en: "Golden Apples", size: "1 كجم", category: "fruit", price: 100, unit: "كيلو", emoji: "🍏", img: "sys-master-root/h56/h44/13215861112862/398517_main.jpg" },
  { name: "بلح وادي", en: "Wadi Dates", size: "1 كجم", category: "fruit", price: 85, unit: "كيلو", emoji: "🌴", img: "sys-master-root/hec/h32/27307861114910/576691_main.jpg" },
  // ===== لحوم (جديد) =====
  { name: "ريب آي بقري بلدي", en: "Balady Beef Rib-Eye", size: "1 كجم", category: "meat", price: 540, unit: "كيلو", emoji: "🥩", img: "sys-master-root/h86/h59/10856166817822/426164_main.jpg" },
  { name: "فيليه بقري بلدي", en: "Balady Beef Fillet", size: "1 كجم", category: "meat", price: 730, unit: "كيلو", emoji: "🥩", img: "sys-master-root/h5c/h0a/10856167079966/426163_main.jpg" },
  { name: "كفتة بقري", en: "Beef Kofta", size: "1 كجم", category: "meat", price: 420, unit: "كيلو", emoji: "🍢", img: "sys-master-root/hed/h91/30490078478366/32335_main.jpg" },
  { name: "سجق بقري", en: "Beef Sausage", size: "1 كجم", category: "meat", price: 420, unit: "كيلو", emoji: "🌭", img: "sys-master-root/h23/h9f/30490078838814/32400_main.jpg" },
  { name: "انتركوت بقري بلدي", en: "Balady Beef Entrecote", size: "1 كجم", category: "meat", price: 540, unit: "كيلو", emoji: "🥩", img: "sys-master-root/h0a/h0b/10856167014430/426165_main.jpg" },
  // ===== ألبان وبيض (جديد) =====
  { name: "جبنة رومي", en: "Romy Cheese", size: "250 جم", category: "dairy", sub: "cheese", price: 73, unit: "قطعة", emoji: "🧀", img: "sys-master-root/h4e/h50/9342437851166/323519_main.jpg" },
  { name: "جبنة شيدر نيوزيلندي", en: "New Zealand Cheddar Cheese", size: "250 جم", category: "dairy", sub: "cheese", price: 115, unit: "قطعة", emoji: "🧀", img: "sys-master-root/h6b/he8/14609976393758/30619_main.jpg" },
  { name: "جبنة قريش", en: "Karish Cheese", size: "250 جم", category: "dairy", sub: "cheese", price: 35, unit: "علبة", emoji: "🧀", img: "sys-master-root/h5d/hc6/14609980260382/327038_main.jpg" },
  { name: "جبنة برميلي", en: "Baramily Cheese", size: "250 جم", category: "dairy", sub: "cheese", price: 40, unit: "علبة", emoji: "🧀", img: "sys-master-root/h4a/he4/12572517924894/345956_main.jpg" },
  { name: "جبنة لافاش كيري مثلثات", en: "La Vache Qui Rit Triangle Cheese", size: "16 قطعة", category: "dairy", sub: "cheese", price: 75, unit: "علبة", emoji: "🧀", img: "pim-content/EGY/media/product/482311/1739084580/482311_main.jpg" },
  { name: "بودنج دانيت شوكولاتة", en: "Danette Chocolate Pudding", size: "85 جم", category: "dairy", sub: "yogurt", price: 10, unit: "كوب", emoji: "🍮", img: "pim-content/EGY/media/product/660720/1756818004/660720_main.jpg" },
  { name: "كريمة طبخ المراعي", en: "Almarai Cooking Cream", size: "200 مل", category: "dairy", sub: "milk", price: 63, unit: "علبة", emoji: "🥛", img: "sys-master-root/ha7/hfa/30871347167262/441296_main.jpg" },
  { name: "زبادي يوناني المراعي", en: "Almarai Greek Yogurt", size: "170 جم", category: "dairy", sub: "yogurt", price: 37, unit: "كوب", emoji: "🥛", img: "pim-content/EGY/media/product/555747/1751279403/555747_main.jpg" },
  { name: "لبن بخيرو كامل الدسم", en: "Bekhero Full Cream Milk", size: "1 لتر", category: "dairy", sub: "milk", price: 42, unit: "كيس", emoji: "🥛", img: "sys-master-root/h4a/hee/26626179039262/181144_main.jpg" },
  { name: "زبادو جهينة بالخوخ", en: "Juhayna Zabado Peach Yogurt Drink", size: "440 مل", category: "dairy", sub: "yogurt", price: 25, unit: "زجاجة", emoji: "🥤", img: "sys-master-root/ha4/hce/26623963103262/70082_main.jpg" },
  // ===== بقالة وتموين (جديد) =====
  { name: "ملح الخير", en: "Al Khair Table Salt", size: "200 جم", category: "grocery", price: 3, unit: "كيس", emoji: "🧂", img: "sys-master-root/hae/h8e/14932380024862/405794_main.jpg" },
  { name: "خل هارفست أبيض", en: "Harvest White Vinegar", size: "1 لتر", category: "grocery", price: 18, unit: "زجاجة", emoji: "🍶", img: "sys-master-root/h6b/h1d/15070582210590/529363_main.jpg" },
  { name: "إندومي بطعم الفراخ", en: "Indomie Chicken Noodles", size: "75 جم", category: "grocery", price: 9, unit: "كيس", emoji: "🍜", img: "pim-content/EGY/media/product/32840/1757845802/32840_main.jpg" },
  { name: "أرز دراهم مصري", en: "Darahem Egyptian Rice", size: "1 كجم", category: "grocery", sub: "rice", price: 27, unit: "كيس", emoji: "🍚", img: "sys-master-root/ha8/h6c/47672347164702/588442_main.jpg" },
  { name: "سكر المزاج أبيض", en: "El Mazag White Sugar", size: "1 كجم", category: "grocery", sub: "sugar", price: 30, unit: "كيس", emoji: "🍬", img: "pim-content/EGY/media/product/604274/1773140400/604274_main.jpg" },
  { name: "دقيق ريحانة فاخر", en: "Rehana Fine Flour", size: "1 كجم", category: "grocery", price: 34, unit: "كيس", emoji: "🌾", img: "sys-master-root/h19/h5e/33103907946526/576751_main.jpg" },
  { name: "مرقة ماجي دجاج", en: "Maggi Chicken Stock Cubes", size: "12 مكعب", category: "grocery", price: 19, unit: "علبة", emoji: "🧊", img: "pim-content/EGY/media/product/491231/1751374803/491231_main.jpg" },
  { name: "خميرة دريم فورية", en: "Dreem Instant Dry Yeast", size: "11 جم", category: "grocery", price: 5, unit: "كيس", emoji: "🍞", img: "sys-master-root/h2b/h9e/14595766812702/467184_main.jpg" },
  { name: "أرز زمزم بسمتي هندي", en: "Zamzam Indian Basmati Rice", size: "1 كجم", category: "grocery", sub: "rice", price: 71, unit: "كيس", emoji: "🍚", img: "pim-content/EGY/media/product/644803/1742713894/644803_main.jpg" },
  { name: "بيكنج باودر دريم", en: "Dreem Baking Powder", size: "16 جم", category: "grocery", price: 4, unit: "كيس", emoji: "🧁", img: "sys-master-root/hc6/h9c/32851746258974/73883_main.jpg" },
  // ===== أطعمة مجمدة (جديد) =====
  { name: "ملوخية بسمة", en: "Basma Green Molokhia", size: "400 جم", category: "frozen", sub: "fveg", price: 19, unit: "كيس", emoji: "🥬", img: "sys-master-root/h0d/h07/14622858772510/11658_main.jpg" },
  { name: "بامية بسمة ممتازة", en: "Basma Excellent Okra", size: "400 جم", category: "frozen", sub: "fveg", price: 29, unit: "كيس", emoji: "🫛", img: "sys-master-root/hf1/h65/14622859853854/11656_main.jpg" },
  { name: "بسلة وجزر بسمة", en: "Basma Peas & Carrots", size: "400 جم", category: "frozen", sub: "fveg", price: 30, unit: "كيس", emoji: "🫛", img: "sys-master-root/h62/h5b/14622859526174/11654_main.jpg" },
  { name: "خضار مشكل بسمة", en: "Basma Mixed Vegetables", size: "400 جم", category: "frozen", sub: "fveg", price: 22, unit: "كيس", emoji: "🥕", img: "sys-master-root/h53/h55/14622859395102/11661_main.jpg" },
  { name: "بطاطس فارم فريتس رفيعة", en: "Farm Frites Thin Fries", size: "1 كجم", category: "frozen", sub: "fveg", price: 71, unit: "كيس", emoji: "🍟", img: "sys-master-root/hd4/h89/49021746315294/12057_main.jpg" },
  { name: "برجر لحم المراعي", en: "Almarai Beef Burger", size: "1 كجم", category: "frozen", sub: "fmeat", price: 140, unit: "علبة", emoji: "🍔", img: "sys-master-root/h59/h66/15053168902174/228879_main.jpg" },
  { name: "ستربس فراخ أطياب", en: "Atyab Chicken Strips", size: "500 جم", category: "frozen", sub: "fpoultry", price: 169, unit: "كيس", emoji: "🍗", img: "sys-master-root/hde/hba/14772575567902/289255_main.jpg" },
  { name: "برجر فراخ أطياب", en: "Atyab Chicken Burger", size: "6 قطع", category: "frozen", sub: "fpoultry", price: 115, unit: "علبة", emoji: "🍔", img: "sys-master-root/h2c/h48/51071949504542/371149_main.jpg" },
  { name: "ناجتس فراخ أطياب", en: "Atyab Fun Chicken Nuggets", size: "400 جم", category: "frozen", sub: "fpoultry", price: 125, unit: "كيس", emoji: "🍗", img: "sys-master-root/h4e/h82/14817617870878/449172_main.jpg" },
  { name: "بانيه فراخ شهد", en: "Shahd Chicken Pane", size: "20 قطعة", category: "frozen", sub: "fpoultry", price: 230, unit: "كيس", emoji: "🍗", img: "pim-content/EGY/media/product/631368/1779006600/631368_main.jpg" },
  { name: "هوت دوج لحم دايم", en: "Dayem Beef Hot Dog", size: "1 كجم", category: "frozen", sub: "fmeat", price: 227, unit: "كيس", emoji: "🌭", img: "sys-master-root/h8b/h58/64617958866974/335982_main.jpg" },
  { name: "سجق شرقي أطياب", en: "Atyab Oriental Sausage", size: "350 جم", category: "frozen", sub: "fmeat", price: 152, unit: "علبة", emoji: "🌭", img: "sys-master-root/hf8/h20/14772617740318/332192_main.jpg" },
  { name: "عجينة بيتزا ميني مولتو فورني", en: "Molto Forni Mini Pizza Crusts", size: "8 قطع", category: "frozen", price: 65, unit: "كيس", emoji: "🍕", img: "pim-content/EGY/media/product/660737/1756204203/660737_main.jpg" },
  { name: "برجر لحم أطياب", en: "Atyab Beef Burger", size: "1 كجم", category: "frozen", sub: "fmeat", price: 369, unit: "علبة", emoji: "🍔", img: "sys-master-root/h9c/h78/14772580974622/323330_main.jpg" },
  { name: "فرخة فيونكا مجمدة", en: "Fyonka Frozen Whole Chicken", size: "1 - 1.1 كجم", category: "frozen", sub: "fpoultry", price: 160, unit: "فرخة", emoji: "🐔", img: "pim-content/EGY/media/product/658409/1767605400/658409_main.jpg" },

  // ===== أقسام فرعية: منتجات جديدة =====
  { name: "بيض ماي تشويس أحمر", en: "My Choice Red Eggs", size: "30 بيضة", category: "dairy", sub: "eggs", price: 163, unit: "طبق", emoji: "🥚", img: "pim-content/EGY/media/product/305479/1777296600/305479_main.jpg" },
  { name: "بيض ماي تشويس أبيض", en: "My Choice White Eggs", size: "20 بيضة", category: "dairy", sub: "eggs", price: 108, unit: "طبق", emoji: "🥚", img: "pim-content/EGY/media/product/623104/1777295400/623104_main.jpg" },
  { name: "بيض إيجيبشن جروورز أبيض", en: "Egyptian Growers White Eggs", size: "10 بيضات", category: "dairy", sub: "eggs", price: 70, unit: "علبة", emoji: "🥚", img: "sys-master-root/h0f/he3/9286425706526/134811_main.jpg" },
  { name: "بيض بشاير أحمر", en: "Bashayer Red Eggs", size: "18 بيضة", category: "dairy", sub: "eggs", price: 120, unit: "طبق", emoji: "🥚", img: "sys-master-root/h7f/hc6/9347086188574/228274_main.jpg" },
  { name: "بيض الأحمدية أبيض", en: "Al Ahmedeih White Eggs", size: "30 بيضة", category: "dairy", sub: "eggs", price: 150, unit: "طبق", emoji: "🥚", img: "sys-master-root/hd7/hb7/9331173294110/92223_main.jpg" },
  { name: "زبادي المراعي طبيعي", en: "Almarai Natural Yoghurt", size: "165 جم", category: "dairy", sub: "yogurt", price: 17, unit: "كوب", emoji: "🥛", img: "pim-content/EGY/media/product/336358/1751274005/336358_main.jpg" },
  { name: "زبادي جهينة يوناني", en: "Juhayna Greek Yogurt 2%", size: "180 جم", category: "dairy", sub: "yogurt", price: 41, unit: "كوب", emoji: "🥛", img: "sys-master-root/h38/ha3/26645500493854/526239_main.jpg" },
  { name: "زبادي دانون يوناني سادة", en: "Danone Plain Greek Yoghurt", size: "110 جم", category: "dairy", sub: "yogurt", price: 24, unit: "كوب", emoji: "🥛", img: "sys-master-root/h5d/h62/63607128817694/632590_main.jpg" },
  { name: "زبادي مزارع دينا يوناني", en: "Dina Farms Greek Yogurt", size: "170 جم", category: "dairy", sub: "yogurt", price: 31, unit: "كوب", emoji: "🥛", img: "sys-master-root/hfb/hf0/48028775907358/605979_main.jpg" },
  { name: "زبادي أكتيفيا طبيعي", en: "Activia Natural Yoghurt", size: "6 × 103 جم", category: "dairy", sub: "yogurt", price: 72, unit: "علبة", emoji: "🥛", img: "pim-content/EGY/media/product/259416/1732791603/259416_main.jpg" },
  { name: "زبادي لبنيتا طبيعي", en: "Labanita Natural Yogurt", size: "6 × 105 جم", category: "dairy", sub: "yogurt", price: 56, unit: "علبة", emoji: "🥛", img: "pim-content/EGY/media/product/454892/1783348200/454892_main.jpg" },
  { name: "يو جو المراعي بالفراولة", en: "Almarai You Go Strawberry Yogurt Drink", size: "220 مل", category: "dairy", sub: "yogurt", price: 17, unit: "زجاجة", emoji: "🥤", img: "sys-master-root/h4a/h29/30871468081182/508908_main.jpg" },
  { name: "جبنة كيري مربعات", en: "Kiri Squared Cheese", size: "8 قطع", category: "dairy", sub: "cheese", price: 107, unit: "علبة", emoji: "🧀", img: "sys-master-root/h50/h34/30236542402590/11715_main.jpg" },
  { name: "جبنة بريزيدنت مثلثات", en: "President Triangle Cheese", size: "8 قطع", category: "dairy", sub: "cheese", price: 62, unit: "علبة", emoji: "🧀", img: "sys-master-root/h69/h68/30277867995166/12637_main.jpg" },
  { name: "جبنة بريزيدنت فيتا", en: "President Feta Cheese", size: "500 جم", category: "dairy", sub: "cheese", price: 95, unit: "علبة", emoji: "🧀", img: "sys-master-root/h88/h4e/30277880840222/278693_main.jpg" },
  { name: "جبنة بريزيدنت شرائح برجر", en: "President Burger Cheese Slices", size: "200 جم", category: "dairy", sub: "cheese", price: 88, unit: "علبة", emoji: "🧀", img: "sys-master-root/hb5/h94/30277862195230/106691_main.jpg" },
  { name: "جبنة دومتي بلس فيتا بالشيدر", en: "Domty Plus Feta with Cheddar", size: "250 جم", category: "dairy", sub: "cheese", price: 30, unit: "علبة", emoji: "🧀", img: "pim-content/EGY/media/product/556304/1764768606/556304_main.jpg" },
  { name: "زيت عافية عباد الشمس", en: "Afia Sunflower Oil", size: "700 مل", category: "grocery", sub: "oil", price: 86, unit: "زجاجة", emoji: "🫗", img: "pim-content/EGY/media/product/644802/1750163403/644802_main.jpg" },
  { name: "زيت هلا عباد الشمس", en: "Hala Sunflower Oil", size: "1.5 لتر", category: "grocery", sub: "oil", price: 183, unit: "زجاجة", emoji: "🫗", img: "sys-master-root/he0/h1f/63558985449502/277445_main.jpg" },
  { name: "زيت قلية خليط", en: "Qaleya Mixed Oil", size: "1 لتر", category: "grocery", sub: "oil", price: 99, unit: "زجاجة", emoji: "🫗", img: "sys-master-root/h80/h9a/63558986924062/489630_main.jpg" },
  { name: "زيت حلوة خليط", en: "Helwa Mixed Oil", size: "1 لتر", category: "grocery", sub: "oil", price: 99, unit: "زجاجة", emoji: "🫗", img: "sys-master-root/h07/h06/15070388060190/117023_main.jpg" },
  { name: "زيت هدية خليط", en: "Hedeya Mixed Oil", size: "1 لتر", category: "grocery", sub: "oil", price: 99, unit: "زجاجة", emoji: "🫗", img: "sys-master-root/h08/h91/63558986694686/489629_main.jpg" },
  { name: "سمن جنة نباتي", en: "Ganna Vegetable Ghee", size: "350 جم", category: "grocery", sub: "ghee", price: 65, unit: "علبة", emoji: "🧈", img: "pim-content/EGY/media/product/406326/1750251603/406326_main.jpg" },
  { name: "سمن فيرن بلدي طبيعي", en: "Fern Natural Ghee", size: "700 جم", category: "grocery", sub: "ghee", price: 419, unit: "برطمان", emoji: "🧈", img: "sys-master-root/h6d/h0c/15070388224030/142156_main.jpg" },
  { name: "سمن حلوب المصرية بلدي", en: "Haloub Al Missalia Natural Ghee", size: "800 جم", category: "grocery", sub: "ghee", price: 485, unit: "برطمان", emoji: "🧈", img: "sys-master-root/hb5/h44/15070387994654/106175_main.jpg" },
  { name: "سمن المراعي زبدة صافية", en: "Almarai Pure Butter Ghee", size: "800 جم", category: "grocery", sub: "ghee", price: 520, unit: "برطمان", emoji: "🧈", img: "pim-content/EGY/media/product/643132/1732003804/643132_main.jpg" },
  { name: "سمن أميرة نباتي", en: "Amira Vegetable Ghee", size: "2.5 كجم", category: "grocery", sub: "ghee", price: 285, unit: "علبة", emoji: "🧈", img: "sys-master-root/h58/h5d/15070395367454/403771_main.jpg" },
  { name: "سكر شهد أبيض", en: "Shahd White Sugar", size: "1 كجم", category: "grocery", sub: "sugar", price: 32, unit: "كيس", emoji: "🍬", img: "sys-master-root/he4/hf2/16955531395102/445130_main.jpg" },
  { name: "سكر خالتي بهية", en: "Khalty Baheya White Sugar", size: "1 كجم", category: "grocery", sub: "sugar", price: 33, unit: "كيس", emoji: "🍬", img: "sys-master-root/h43/h3d/34674249596958/166514_main.jpg" },
  { name: "سكر فينوس أبيض", en: "Venus White Sugar", size: "1 كجم", category: "grocery", sub: "sugar", price: 31, unit: "كيس", emoji: "🍬", img: "sys-master-root/h8c/h76/63607123738654/625963_main.jpg" },
  { name: "سكر مكعبات حفصة", en: "Hafsa White Sugar Cubes", size: "1 كجم", category: "grocery", sub: "sugar", price: 108, unit: "علبة", emoji: "🍬", img: "pim-content/EGY/media/product/520779/1729065603/520779_main.jpg" },
  { name: "سكر بودرة ريحانة", en: "Rehana Icing Sugar", size: "1 كجم", category: "grocery", sub: "sugar", price: 75, unit: "كيس", emoji: "🍬", img: "sys-master-root/h7f/h05/28522779869214/576750_main.jpg" },
  { name: "أرز ريحانة مصري أبيض", en: "Rehana Egyptian White Rice", size: "1 كجم", category: "grocery", sub: "rice", price: 34, unit: "كيس", emoji: "🍚", img: "sys-master-root/h20/h5c/63674974371870/576745_main.jpg" },
  { name: "أرز الساعة أبيض", en: "El Saa White Rice", size: "1 كجم", category: "grocery", sub: "rice", price: 40, unit: "كيس", emoji: "🍚", img: "sys-master-root/h3d/h24/61655063461918/334177_main.jpg" },
  { name: "أرز خير مصر", en: "Kher Misr Egyptian Rice", size: "1 كجم", category: "grocery", sub: "rice", price: 38, unit: "كيس", emoji: "🍚", img: "pim-content/EGY/media/product/661117/1777450200/661117_main.jpg" },
  { name: "حمص الضحى", en: "Al Doha Chickpeas", size: "500 جم", category: "grocery", sub: "legumes", price: 104, unit: "كيس", emoji: "🫘", img: "sys-master-root/hf5/hcf/34709980217374/17993_main.jpg" },
  { name: "فاصوليا بيضاء الضحى", en: "Al Doha White Beans", size: "500 جم", category: "grocery", sub: "legumes", price: 94, unit: "كيس", emoji: "🫘", img: "sys-master-root/h8f/hc9/34709980053534/17984_main.jpg" },
  { name: "لوبيا الضحى", en: "El Doha Black Eyed Peas", size: "500 جم", category: "grocery", sub: "legumes", price: 105, unit: "كيس", emoji: "🫘", img: "sys-master-root/h85/hda/34709980545054/17985_main.jpg" },
  { name: "عدس بجبة الضحى", en: "El Doha Brown Lentils", size: "500 جم", category: "grocery", sub: "legumes", price: 62, unit: "كيس", emoji: "🫘", img: "sys-master-root/h54/hb1/34709981855774/17987_main.jpg" },
  { name: "عدس أسود الحاج عرفة", en: "Haj Arafa Black Lentils", size: "500 جم", category: "grocery", sub: "legumes", price: 59, unit: "كيس", emoji: "🫘", img: "pim-content/EGY/media/product/540231/1770550200/540231_main.jpg" },
  { name: "صوص مكرونة هاينز", en: "Heinz Pasta Sauce", size: "365 جم", category: "grocery", sub: "sauce", price: 45, unit: "برطمان", emoji: "🍅", img: "sys-master-root/h6c/h3b/14932245119006/18298_main.jpg" },
  { name: "صوص طماطم هاينز أصلي", en: "Heinz Original Tomato Sauce", size: "295 جم", category: "grocery", sub: "sauce", price: 30, unit: "علبة", emoji: "🍅", img: "sys-master-root/hc9/h14/62326152626206/628376_main.jpg" },
  { name: "صوص طماطم هاينز بالأعشاب", en: "Heinz Italian Herbs Tomato Sauce", size: "295 جم", category: "grocery", sub: "sauce", price: 30, unit: "علبة", emoji: "🍅", img: "pim-content/EGY/media/product/628374/1723711203/628374_main.jpg" },
  { name: "سبانخ بسمة", en: "Basma Spinach", size: "400 جم", category: "frozen", sub: "fveg", price: 30, unit: "كيس", emoji: "🥬", img: "sys-master-root/h05/hbc/12832636534814/38170_main.jpg" },
  { name: "فاصوليا خضراء جيفركس", en: "Givrex Green Beans", size: "400 جم", category: "frozen", sub: "fveg", price: 28, unit: "كيس", emoji: "🫛", img: "sys-master-root/hca/h5e/14622859624478/12161_main.jpg" },
  { name: "خرشوف بسمة", en: "Basma Artichoke", size: "400 جم", category: "frozen", sub: "fveg", price: 65, unit: "كيس", emoji: "🥬", img: "sys-master-root/hce/h9a/14622860115998/11664_main.jpg" },
  { name: "فرخة كوكي مجمدة", en: "Koki Frozen Whole Chicken", size: "1.2 - 1.3 كجم", category: "frozen", sub: "fpoultry", price: 215, unit: "فرخة", emoji: "🐔", img: "sys-master-root/hf6/h33/14623077564446/40524_main.jpg" },
  { name: "فرخة وادي فود مجمدة", en: "Wadi Food Frozen Whole Chicken", size: "1 - 1.1 كجم", category: "frozen", sub: "fpoultry", price: 184, unit: "فرخة", emoji: "🐔", img: "sys-master-root/h76/hc2/33952048807966/537849_main.jpg" },
  { name: "فيليه فراخ أطياب", en: "Atyab Chicken Fillet", size: "500 جم", category: "frozen", sub: "fpoultry", price: 223, unit: "كيس", emoji: "🍗", img: "sys-master-root/h2c/h9a/14772795047966/469464_main.jpg" },
  { name: "أوراك فراخ فرازة", en: "Faraza Frozen Chicken Legs", size: "900 جم", category: "frozen", sub: "fpoultry", price: 142, unit: "كيس", emoji: "🍗", img: "sys-master-root/h8b/h17/62937361809438/600878_main.jpg" },
  { name: "أجنحة فراخ فرازة", en: "Faraza Frozen Chicken Wings", size: "900 جم", category: "frozen", sub: "fpoultry", price: 130, unit: "كيس", emoji: "🍗", img: "pim-content/EGY/media/product/600874/1758549605/600874_main.jpg" },
  { name: "أجنحة فراخ كوكي مقرمشة", en: "Koki Crunchy Chicken Wings", size: "700 جم", category: "frozen", sub: "fpoultry", price: 175, unit: "كيس", emoji: "🍗", img: "sys-master-root/hd9/ha2/14772761985054/439284_main.jpg" },
  { name: "بانيه فراخ كوكي مقرمش", en: "Koki Crunchy Chicken Pane", size: "8 قطع", category: "frozen", sub: "fpoultry", price: 125, unit: "كيس", emoji: "🍗", img: "pim-content/EGY/media/product/383019/1754465220/383019_main.jpg" },
  { name: "كفتة لحم حلواني", en: "Halwani Beef Kofta", size: "350 جم", category: "frozen", sub: "fmeat", price: 133, unit: "علبة", emoji: "🍢", img: "sys-master-root/h09/h7d/14772629798942/38048_main.jpg" },
  { name: "لحم مفروم حلواني", en: "Halwani Minced Meat", size: "350 جم", category: "frozen", sub: "fmeat", price: 198, unit: "علبة", emoji: "🥩", img: "sys-master-root/h25/h53/14773273493534/65679_main.jpg" },
  { name: "لحم مفروم أطياب", en: "Atyab Minced Meat", size: "900 جم", category: "frozen", sub: "fmeat", price: 490, unit: "علبة", emoji: "🥩", img: "sys-master-root/h36/haf/14772619640862/339703_main.jpg" },
  { name: "حواوشي مجمد", en: "Frozen Hawawshi", size: "850 جم - 1 كجم", category: "frozen", sub: "fmeat", price: 265, unit: "كيس", emoji: "🥙", img: "sys-master-root/hf5/h50/45676067553310/581356_main.jpg" },

  // ===== بقالة وتموين: عيش =====
  { name: "عيش بلدي كبير", en: "Large Balady Bread",              size: "5 أرغفة",  category: "grocery", price: 15, unit: "كيس", emoji: "🍞", img: "sys-master-root/h11/h67/9342283874334/300329_main.jpg" },
  { name: "عيش فينو دومتي", en: "Domty Fino Bread",             size: "4 قطع",    category: "grocery", price: 20, unit: "كيس", emoji: "🥖", img: "pim-content/EGY/media/product/534144/1775563800/534144_main.jpg" }
].map(p => ({ ...p, img: CDN + p.img }));

// صور البانرات (صور ديكور مش صور منتجات)
const BANNER_PHOTOS = [868110, 18973339, 32550092];

// بيرجع لينك الصورة من Pexels
// صورة القسم (صور حقيقية من Unsplash - مجانية للاستخدام)
const catCover = (c, w = 600) => `${c.cover}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 1.15)}&q=75`;
function pexels(id, w = 600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

// رسوم التوصيل
const DELIVERY_FEE = 30;
const FREE_DELIVERY_FROM = 500;

// الأقسام اللي منتجاتها بتبوظ (بتنزل في عروض آخر اليوم)
const PERISHABLE = ["veg", "fruit", "meat", "poultry", "dairy"];
