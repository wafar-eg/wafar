/* =========================================================
   وفّر - اللغة (عربي / English)
   الموقع مكتوب بالعربي، ولو المستخدم اختار English
   بنترجم كل النصوص اللي في الصفحة تلقائياً من القاموس ده
   ========================================================= */
let LANG = "ar";
try { LANG = localStorage.getItem("wafar_lang") === "en" ? "en" : "ar"; } catch (e) {}

function setLang(l) {
  try { localStorage.setItem("wafar_lang", l); } catch (e) {}
  location.reload();
}

if (LANG === "en") {
  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";
}

/* ---------- جمل وكلمات الواجهة ---------- */
const UI_EN = {
  // الهيدر والفوتر
  "🚚 بتطلب من منافذ محافظتك ونوصلك لحد البيت": "🚚 Order from outlets in your governorate, delivered to your door",
  "🏷️ أسعار المنافذ الرسمية": "🏷️ Official outlet prices",
  "💵 ادفع كاش عند الاستلام": "💵 Cash on delivery",
  "سوق منافذ مصر": "Egypt's Outlets Market",
  "وفّر | سوق منافذ مصر": "Waffar | Egypt's Outlets Market",
  "وفّر - كل الحقوق محفوظة": "Waffar - All rights reserved",
  "وفّر بيجمعلك منتجات منافذ القوات المسلحة في مكان واحد.. خضار، فاكهة، لحوم، فراخ وكل طلبات البيت بأسعار المنافذ.":
    "Waffar brings Armed Forces outlet products together in one place.. vegetables, fruits, meat, poultry and all your home needs at outlet prices.",
  "🕘 يومياً من 9 ص لـ 11 م": "🕘 Daily from 9 AM to 11 PM",
  "تواصل معانا": "Contact us",
  "روابط": "Links",
  "الأقسام": "Categories",
  "الرئيسية": "Home",
  "تسجيل الدخول": "Log in",
  "حساب جديد": "Sign up",
  "المتجر": "Shop",
  "طلباتي": "My orders",
  "🛒 السلة": "🛒 Cart",
  "لوحة المنفذ": "Outlet dashboard",
  "خروج": "Log out",
  "أهلاً،": "Hi,",
  "أهلاً": "Hi",
  "القائمة": "Menu",
  "وفّر": "Waffar",
  "وفر": "Waffar",

  // الصفحة الرئيسية
  "وفّر - اشتري خضار وفاكهة ولحوم وفراخ وكل طلبات السوبر ماركت من منافذ القوات المسلحة في مصر":
    "Waffar - Buy vegetables, fruits, meat, poultry and all your groceries from Armed Forces outlets in Egypt",
  "كل اللي محتاجه..": "Everything you need..",
  "في مكان واحد": "in one place",
  "بأسعار المنافذ": "at outlet prices",
  "منتجات منافذ القوات المسلحة بأسعار المنافذ.. وبتطلب من منافذ": "Armed Forces outlet products at outlet prices.. and you order from the outlets in",
  "محافظتك": "your governorate",
  "بس": "only",
  "ابدأ دلوقتي": "Start now",
  "سجّل منفذك": "Register your outlet",
  "سجّل منفذك على وفّر": "Register your outlet on Waffar",
  "منفذ مسجل": "registered outlets",
  "منتج متاح": "products available",
  "محافظة": "governorates",
  "خضار وفاكهة": "Vegetables & Fruits",
  "طازة ومضمونة": "Fresh and guaranteed",
  "وفّر لحد 25% على كل الخضار": "Save up to 25% on all vegetables",
  "لحمة وفراخ": "Meat & Poultry",
  "لحوم وفراخ": "Meat & Poultry",
  "🥩 لحوم وفراخ": "🥩 Meat & Poultry",
  "جودة مضمونة وسعر منفذ": "Guaranteed quality at outlet prices",
  "بخصومات لحد 20%": "Up to 20% off",
  "توصيل مجاني": "Free delivery",
  "فوق 500 ج.م": "Over EGP 500",
  "🚚 توصيل مجاني فوق 500 ج.م": "🚚 Free delivery over EGP 500",
  "لكل محافظات مصر": "To all of Egypt's governorates",
  "خضار وفاكهة طازة من منافذ القوات المسلحة لحد باب بيتك.. في كل محافظات مصر.": "Fresh vegetables and fruits from Armed Forces outlets to your door.. in every governorate of Egypt.",
  "لحوم بلدي وفراخ طازة بجودة مضمونة وأسعار أقل من السوق.": "Balady meat and fresh poultry with guaranteed quality and below-market prices.",
  "عرض الأسبوع": "Deal of the week",
  "سلة الخضار الكاملة": "The complete vegetable basket",
  "🥬 طازة كل يوم": "🥬 Fresh every day",
  "طازة من المنفذ": "Fresh from the outlet",
  "منتجات بتتجدد يومياً من المنفذ مباشرة": "Products restocked daily, straight from the outlet",
  "أسعار المنافذ": "Outlet prices",
  "نفس أسعار منافذ القوات المسلحة من غير زحمة": "The same Armed Forces outlet prices, without the crowds",
  "توصيل لـ 27 محافظة": "Delivery to 27 governorates",
  "في كل محافظة منافذ.. وبنوصلك من منافذ محافظتك": "Every governorate has outlets.. and we deliver from yours",
  "اطلب في أي وقت": "Order anytime",
  "كاش أو فيزا مع المندوب": "Cash or card with the courier",
  "أسعار النهاردة": "Today's prices",
  "النهاردة": "Today",
  "عروض": "Deals",
  "عروض اليوم": "Today's deals",
  "أكبر خصومات المنافذ.. سجّل دخول كمشتري عشان تضيف للسلة": "The biggest outlet discounts.. log in as a buyer to add to your cart",
  "🥚 بيض الخير 30 بيضة بـ 165 ج.م": "🥚 Al Khair eggs, 30 pcs for EGP 165",
  "🥛 لبن جهينة 1 لتر بـ 46 ج.م": "🥛 Juhayna milk 1 L for EGP 46",
  "🍗 فرخة بيضاء بـ 110 ج.م للكيلو": "🍗 White chicken for EGP 110 per kg",
  "🍝 مكرونة ريجينا بـ 24 ج.م": "🍝 Regina pasta for EGP 24",
  "🫗 زيت كريستال 1 لتر بـ 95 ج.م": "🫗 Crystal oil 1 L for EGP 95",
  "إنت مين؟": "Who are you?",
  "اختار نوع حسابك وابدأ مع وفّر": "Choose your account type and get started with Waffar",
  "🛍️ مشتري": "🛍️ Buyer",
  "🏪 بائع (منفذ)": "🏪 Seller (outlet)",
  "🏪 للمنافذ": "🏪 For outlets",
  "اشتري احتياجات البيت من منافذ القوات المسلحة بأسعار المنافذ.": "Buy your home needs from Armed Forces outlets at outlet prices.",
  "سجّل منفذك واعرض منتجاتك وأسعارك واستقبل طلبات المشترين.": "Register your outlet, list your products and prices, and receive buyers' orders.",
  "✔ أسعار أقل من السوق": "✔ Below-market prices",
  "✔ منافذ في محافظتك": "✔ Outlets in your governorate",
  "✔ ادفع كاش عند الاستلام": "✔ Pay cash on delivery",
  "✔ تابع طلباتك أول بأول": "✔ Track your orders step by step",
  "✔ اعرض منتجات بلا حدود": "✔ List unlimited products",
  "✔ تحكم في الأسعار والمخزون": "✔ Control prices and stock",
  "✔ تأكيد الطلب": "✔ Confirm order",
  "سجّل كمشتري ←": "Sign up as a buyer →",
  "سجّل كبائع ←": "Sign up as a seller →",
  "سجّل كمشتري": "Sign up as a buyer",
  "سجّل واشتري": "Sign up and shop",
  "عندك منفذ؟": "Own an outlet?",
  "اعرض منتجاتك على وفّر": "Sell your products on Waffar",
  "سجّل منفذك في دقيقة وابدأ استقبل طلبات من مشترين في محافظتك وكل مصر.": "Register your outlet in a minute and start receiving orders from buyers in your governorate and all over Egypt.",
  "اعرض منتجات منفذك لآلاف المشترين في كل محافظات مصر": "Show your outlet's products to thousands of buyers across Egypt",
  "اشتري احتياجات بيتك من منافذ القوات المسلحة في محافظتك بأسعار المنافذ": "Buy your home needs from Armed Forces outlets in your governorate at outlet prices",
  "أكبر سوق إلكتروني لمنافذ القوات المسلحة في مصر.": "The largest online market for Armed Forces outlets in Egypt.",
  "خضار، فاكهة، لحوم، فراخ، ألبان وبقالة من منافذ موثوقة": "Vegetables, fruits, meat, poultry, dairy and groceries from trusted outlets",
  "للمشترين والمنافذ": "For buyers and outlets",
  "وفّر وقتك وفلوسك 💚": "Save your time and money 💚",
  "وفّر في كل كيس": "Save on every bag",
  "بانر": "Banner",
  "السابق": "Previous",
  "التالي": "Next",

  // عروض آخر اليوم
  "⏰ عروض آخر اليوم": "⏰ End-of-day deals",
  "عروض آخر اليوم": "End-of-day deals",
  "⏰ لحق نفسك": "⏰ Hurry up",
  "منتجات متباعتش أو قربت تنتهي صلاحيتها.. عليها": "Unsold products or ones close to expiry.. with an",
  "خصم إضافي": "extra discount",
  "العروض بتخلص بعد": "Deals end in",
  "العروض بتبدأ بعد": "Deals start in",
  "⏰ من 8 لـ 11 مساءً": "⏰ 8 PM - 11 PM",
  "عروض آخر اليوم بتبدأ الساعة 8 مساءً لحد 11 مساءً": "End-of-day deals run daily from 8 PM to 11 PM",
  "(8 - 11 مساءً)": "(8 - 11 PM)",
  "آخر يوم النهاردة": "Last day today",
  "باقي يوم واحد": "1 day left",
  "باقي يومين": "2 days left",
  "⚠️ الصلاحية خلصت": "⚠️ Expired",
  "⏰ آخر اليوم -": "⏰ End of day -",
  "مخزون قليل": "Low stock",
  "منفذ": "Outlet",

  // تسجيل الدخول والتسجيل
  "تسجيل الدخول | وفّر": "Log in | Waffar",
  "حساب جديد | وفّر": "Sign up | Waffar",
  "أهلاً بيك تاني 👋": "Welcome back 👋",
  "أهلاً بيك في وفّر 👋": "Welcome to Waffar 👋",
  "أهلاً 👋": "Hello 👋",
  "سجّل دخولك وكمّل تسوقك من منافذ مصر.": "Log in and continue shopping from Egypt's outlets.",
  "سجّل دخول": "Log in",
  "دخول": "Log in",
  "الإيميل": "Email",
  "الباسورد": "Password",
  "إظهار الباسورد": "Show password",
  "معندكش حساب؟": "Don't have an account?",
  "اعمل حساب": "Create an account",
  "اعمل حساب جديد": "Create a new account",
  "اعمل حساب مشتري": "Create a buyer account",
  "عندك حساب؟": "Already have an account?",
  "عندي حساب": "I have an account",
  "🧪 حسابات منافذ تجريبية (الباسورد: 123456)": "🧪 Demo outlet accounts (password: 123456)",
  "أنا مشتري": "I'm a buyer",
  "أنا منفذ (بائع)": "I'm an outlet (seller)",
  "الاسم": "Name",
  "الاسم بالكامل": "Full name",
  "مثال: أحمد محمد علي": "e.g. Ahmed Mohamed Ali",
  "رقم الموبايل": "Mobile number",
  "المحافظة": "Governorate",
  "اختار المحافظة": "Choose governorate",
  "محافظة المنفذ": "Outlet governorate",
  "اسم المنفذ": "Outlet name",
  "مثال: منفذ مدينة نصر": "e.g. Nasr City Outlet",
  "الرقم القومي": "National ID",
  "14 رقم": "14 digits",
  "مكان المنفذ (العنوان بالتفصيل)": "Outlet location (full address)",
  "الشارع - المنطقة - علامة مميزة": "Street - area - landmark",
  "6 حروف أو أرقام على الأقل": "At least 6 letters or numbers",
  "تأكيد الباسورد": "Confirm password",
  "اكتب الباسورد تاني": "Re-enter your password",
  "إنشاء الحساب": "Create account",
  "اكتب الاسم": "Enter the name",
  "اكتب الاسم بالكامل": "Enter your full name",
  "اكتب اسم المنفذ": "Enter the outlet name",
  "اكتب عنوان المنفذ بالتفصيل": "Enter the outlet's full address",
  "الإيميل مش صحيح": "Invalid email",
  "الإيميل ده متسجل قبل كده": "This email is already registered",
  "الإيميل أو الباسورد غلط": "Wrong email or password",
  "الباسورد لازم 6 حروف أو أرقام على الأقل": "Password must be at least 6 letters or numbers",
  "الباسورد مش متطابق": "Passwords don't match",
  "الرقم القومي ده متسجل قبل كده": "This national ID is already registered",
  "الرقم القومي لازم 14 رقم صحيح": "National ID must be 14 valid digits",
  "رقم الموبايل لازم 11 رقم ويبدأ بـ 010 / 011 / 012 / 015": "Mobile number must be 11 digits starting with 010 / 011 / 012 / 015",
  "رقم موبايل مصري صحيح (11 رقم)": "A valid Egyptian mobile number (11 digits)",
  "راجع البيانات المكتوبة باللون الأحمر": "Check the fields marked in red",
  "تم إنشاء الحساب بنجاح 🎉 سجّل دخولك دلوقتي": "Account created successfully 🎉 Log in now",
  "سجّل دخول كمشتري الأول": "Log in as a buyer first",
  "الإضافة للسلة للمشترين بس": "Only buyers can add to the cart",

  // المتجر
  "المتجر | وفّر": "Shop | Waffar",
  "🛍️ الكل": "🛍️ All",
  "الكل": "All",
  "دوّر على منتج أو منفذ... (طماطم، فراخ، لحمة)": "Search for a product or outlet... (tomatoes, chicken, meat)",
  "كل المنافذ": "All outlets",
  "الترتيب": "Sort",
  "الأقرب ليك": "Nearest to you",
  "أكبر خصم": "Biggest discount",
  "السعر: من الأقل": "Price: low to high",
  "السعر: من الأعلى": "Price: high to low",
  "منافذ محافظتي بس": "Only my governorate's outlets",
  "التوصيل من منافذ محافظتك بس": "Delivery from your governorate's outlets only",
  "مفيش منتجات مطابقة للبحث": "No products match your search",
  "منتج": "products",
  "أضف للسلة": "Add to cart",
  "ضيف للسلة": "Add to cart",
  "للسلة ✓": "to cart ✓",
  "اتضاف": "Added",
  "المتاح": "Available",
  "خلص": "Sold out",
  "نفذت الكمية": "Out of stock",
  "مش متاح": "Unavailable",
  "من منفذ برّه": "is from an outlet outside",
  "، شيله من السلة الأول": ", remove it from the cart first",

  // السلة والدفع
  "السلة | وفّر": "Cart | Waffar",
  "إتمام الشراء | وفّر": "Checkout | Waffar",
  "السلة": "Cart",
  "🛒 سلة المشتريات": "🛒 Shopping cart",
  "1. السلة": "1. Cart",
  "2. بيانات التوصيل والدفع": "2. Delivery & payment",
  "3. تأكيد الطلب": "3. Confirm order",
  "السلة فاضية": "Your cart is empty",
  "ابدأ اختار منتجاتك من المنافذ": "Start choosing your products from the outlets",
  "ابدأ تسوق": "Start shopping",
  "روح للمتجر": "Go to the shop",
  "← المتجر": "← Shop",
  "← كمّل تسوق": "← Continue shopping",
  "كمّل تسوق": "Continue shopping",
  "← رجوع للسلة": "← Back to cart",
  "فضّي السلة": "Empty cart",
  "اتشال من السلة": "Removed from cart",
  "ملخص الطلب": "Order summary",
  "المجموع": "Subtotal",
  "التوصيل": "Delivery",
  "مجاناً 🎉": "Free 🎉",
  "مجاناً": "Free",
  "الإجمالي:": "Total:",
  "الإجمالي": "Total",
  "وفّرت": "You saved",
  "فوق سعر المنفذ (": "off the outlet price (",
  "منتج)": "products)",
  "مبروك! التوصيل مجاني 🚚": "Congrats! Delivery is free 🚚",
  "كمّل بيانات التوصيل": "Continue to delivery details",
  "إتمام الشراء (Checkout)": "Checkout",
  "📍 بيانات التوصيل": "📍 Delivery details",
  "المدينة / المنطقة": "City / area",
  "مثال: مصر الجديدة": "e.g. Heliopolis",
  "العنوان بالتفصيل": "Full address",
  "الشارع - رقم العمارة - الدور - الشقة": "Street - building no. - floor - apartment",
  "ملاحظات (اختياري)": "Notes (optional)",
  "مثال: اتصل قبل ما توصل": "e.g. Call before you arrive",
  "💳 طريقة الدفع": "💳 Payment method",
  "كاش عند الاستلام": "Cash on delivery",
  "ادفع للمندوب لما الطلب يوصل": "Pay the courier when your order arrives",
  "فيزا عند الاستلام": "Card on delivery",
  "المندوب معاه ماكينة POS": "The courier carries a POS machine",
  "محفظة إلكترونية": "E-wallet",
  "فودافون كاش / إنستاباي": "Vodafone Cash / InstaPay",
  "ادفع عند الاستلام": "Pay on delivery",
  "طلبك": "Your order",
  "اكتب المدينة / المنطقة": "Enter the city / area",
  "اكتب العنوان بالتفصيل": "Enter the full address",
  "تم تأكيد طلبك 🎉": "Your order is confirmed 🎉",
  "رقم الطلب:": "Order number:",
  "المنفذ هيجهز طلبك وهيتواصل معاك المندوب قبل التوصيل.": "The outlet will prepare your order and the courier will contact you before delivery.",
  "📦 طلباتي": "📦 My orders",
  "طلباتي | وفّر": "My orders | Waffar",
  "مفيش طلبات لسه": "No orders yet",
  "طلب رقم": "Order #",
  "طلب": "Order",
  "جاري التجهيز": "Preparing",
  "تم التوصيل": "Delivered",
  "في الطريق": "On the way",
  "اتلغى": "Cancelled",

  // لوحة المنفذ
  "لوحة المنفذ | وفّر": "Outlet dashboard | Waffar",
  "منتج معروض": "listed products",
  "المبيعات": "Sales",
  "➕ أضف منتج جديد": "➕ Add a new product",
  "✏️ تعديل المنتج": "✏️ Edit product",
  "اسم المنتج": "Product name",
  "مثال: طماطم": "e.g. Tomatoes",
  "القسم": "Category",
  "القسم الفرعي": "Subcategory",
  "السعر (ج.م)": "Price (EGP)",
  "السعر قبل الخصم (اختياري)": "Price before discount (optional)",
  "الكمية المتاحة": "Available quantity",
  "الوحدة": "Unit",
  "كيلو / لتر / كرتونة": "kg / L / carton",
  "مثال: 30": "e.g. 30",
  "صورة المنتج (ارفع من جهازك)": "Product image (upload from your device)",
  "أو حط لينك صورة": "or paste an image link",
  "🖼️ معاينة الصورة": "🖼️ Image preview",
  "⏰ ضيفه لعروض آخر اليوم (منتج متباعش أو قرب تنتهي صلاحيته)": "⏰ Add it to end-of-day deals (unsold or near-expiry product)",
  "الخصم الإضافي %": "Extra discount %",
  "تاريخ انتهاء الصلاحية": "Expiry date",
  "أضف المنتج": "Add product",
  "احفظ التعديل": "Save changes",
  "إلغاء": "Cancel",
  "📦 منتجاتي": "📦 My products",
  "🧾 الطلبات على منتجاتي": "🧾 Orders for my products",
  "المنتج": "Product",
  "السعر": "Price",
  "المخزون": "Stock",
  "حذف": "Delete",
  "تعديل": "Edit",
  "متأكد؟": "Are you sure?",
  "اتحذف المنتج": "Product deleted",
  "اتعدل المنتج ✓": "Product updated ✓",
  "اتضاف المنتج وبقى ظاهر للمشترين ✓": "Product added and now visible to buyers ✓",
  "لسه مضفتش منتجات.. ابدأ من الفورم اللي فوق": "You haven't added products yet.. start with the form above",
  "مفيش طلبات على منتجاتك لسه": "No orders for your products yet",
  "اكتب اسم المنتج": "Enter the product name",
  "اكتب سعر صحيح": "Enter a valid price",
  "السعر قبل الخصم لازم يكون أكبر": "The price before discount must be higher",
  "اكتب الكمية المتاحة": "Enter the available quantity",
  "اكتب الوحدة (كيلو، لتر...)": "Enter the unit (kg, L...)",
  "اختار ملف صورة": "Choose an image file",
  "مساحة التخزين امتلأت، جرّب صورة أصغر": "Storage is full, try a smaller image",
  "الخصم الإضافي من 5% لـ 90%": "Extra discount must be 5% to 90%",
  "حدد تاريخ انتهاء الصلاحية": "Set the expiry date",
  "التاريخ ده عدى خلاص": "This date has already passed",
  "المنتج ده صلاحيته خلصت": "This product has expired",
  "مدير": "Manager,",
  "زيادة": "Increase",
  "نقص": "Decrease",
  "الكمية": "Quantity",
  "المنفذ": "Outlet",

  // وحدات ومقاسات
  "كرتونة 30": "carton of 30",
  "نص كيلو": "half kg",
  "كرتونة": "carton",
  "كيلو": "kg",
  "لتر": "L",
  "علبة": "pack",
  "كيس": "bag",
  "طبق": "tray",
  "زجاجة": "bottle",
  "برطمان": "jar",
  "كوب": "cup",
  "حبة": "piece",
  "فرخة": "chicken",
  "قطعة": "piece",
  "قطع": "pcs",
  "كجم": "kg",
  "جم": "g",
  "مل": "ml",
  "بيضة": "eggs",
  "أرغفة": "loaves",
  "رغيف": "loaf",
  "مكعب": "cubes",
  "تقريباً": "approx.",
  "تقريبا": "approx.",
  "ج.م": "EGP",
  "أيام": "days"
};

/* المحافظات */
const GOV_EN = ["Cairo", "Giza", "Alexandria", "Qalyubia", "Dakahlia", "Sharqia", "Gharbia", "Monufia", "Beheira",
  "Kafr El Sheikh", "Damietta", "Port Said", "Ismailia", "Suez", "Faiyum", "Beni Suef", "Minya", "Asyut", "Sohag",
  "Qena", "Luxor", "Aswan", "Red Sea", "New Valley", "Matrouh", "North Sinai", "South Sinai"];

/* المنافذ وعناوينها (بنفس ترتيب SEED_VENDORS) */
const VENDOR_EN = [
  ["Nasr City Outlet", "Abbas El Akkad St. - Nasr City"],
  ["Maadi Outlet", "Street 9 - Maadi"],
  ["Heliopolis Outlet", "El Hegaz St. - Heliopolis"],
  ["Haram Outlet", "Main Haram St. - Talbia"],
  ["6th of October Outlet", "Central Axis - 6th of October"],
  ["Sidi Gaber Outlet", "El Horreya Rd. - Sidi Gaber"],
  ["Agami Outlet", "Main Road - El Bitash"],
  ["Benha Outlet", "Farid Nada St. - Benha"],
  ["Mansoura Outlet", "El Gomhoreya St. - Mansoura"],
  ["Zagazig Outlet", "Farouk St. - Zagazig"],
  ["Tanta Outlet", "El Bahr St. - Tanta"],
  ["Shebin El Kom Outlet", "Gamal Abdel Nasser St. - Shebin El Kom"],
  ["Damanhour Outlet", "Abdel Salam El Shazly St. - Damanhour"],
  ["Kafr El Sheikh Outlet", "El Geish St. - Kafr El Sheikh"],
  ["New Damietta Outlet", "Central District - New Damietta"],
  ["Port Said Outlet", "23 July St. - Port Said"],
  ["Ismailia Outlet - El Sheikh Zayed", "El Geish St. - El Sheikh Zayed"],
  ["Fayed Outlet", "Main Road - Fayed El Balad"],
  ["Suez Outlet", "El Geish St. - El Arbaeen"],
  ["Faiyum Outlet", "El Horreya St. - Faiyum"],
  ["Beni Suef Outlet", "Salah Salem St. - Beni Suef"],
  ["Minya Outlet", "Nile Corniche - Minya"],
  ["New Asyut Outlet", "Central District - New Asyut"],
  ["Sohag Outlet", "El Gomhoreya St. - Sohag"],
  ["Qena Outlet", "El Gomhoreya St. - Qena"],
  ["Luxor Outlet", "El Television St. - Luxor"],
  ["Aswan Outlet", "Nile Corniche St. - Aswan"],
  ["Hurghada Outlet", "El Nasr St. - El Dahar"],
  ["Kharga Outlet", "Gamal Abdel Nasser St. - Kharga"],
  ["Marsa Matrouh Outlet", "Alexandria St. - Marsa Matrouh"],
  ["Arish Outlet", "23 July St. - Arish"],
  ["El Tor Outlet", "Main Road - El Tor"]
];
// أسماء أماكن لوحدها (للمنافذ القديمة ولو المنفذ مكتوب من غير كلمة "منفذ")
const PLACES_EN = {
  "منفذ الإسماعيلية": "Ismailia Outlet", "مدينة نصر": "Nasr City", "مصر الجديدة": "Heliopolis",
  "الشيخ زايد": "El Sheikh Zayed", "6 أكتوبر": "6th of October"
};

/* جمل فيها أرقام أو أسماء متغيرة: بتتترجم الأول وبعدين الكلمات اللي جواها */
const PATTERNS_EN = [
  [/مينفعش تطلب من (.+?) لأنه في (.+?)\. تقدر تطلب من منافذ (.+?) بس/g, "You can't order from $1 because it's in $2. You can only order from outlets in $3"],
  [/الكمية المتاحة من (.+?) مش كفاية/g, "Not enough stock of $1"],
  [/(?:الكمية المتاحة|المتاح) (\d+) (\S+) بس/g, "Only $1 $2 available"],
  [/اتضاف (.+?) للسلة ✓/g, "$1 added to cart ✓"],
  [/(.+?) من منفذ برّه (.+?)، شيله من السلة الأول/g, "$1 is from an outlet outside $2, remove it from the cart first"],
  [/اشتري بـ (.+?) كمان والتوصيل يبقى مجاناً/g, "Add $1 more to get free delivery"],
  [/باقي (\d+) أيام/g, "$1 days left"],
  [/\(صلاحية لحد (.+?)\)/g, "(expires $1)"],
  [/فيه (\d+) منتج عليهم خصم إضافي مستنيينك\.\. ارجع الساعة 8 ولحق العرض/g, "$1 products with an extra discount are waiting for you.. come back at 8 PM to catch the deal"],
  [/وفّر (\d+)%/g, "Save $1%"],
  [/خصم إضافي (\d+)%/g, "Extra $1% off"],
  [/(\d+) منتج(?![ء-ي])/g, "$1 products"],
  [/أهلاً (?=[^ء-ي])/g, "Hi "]
];

/* ---------- محرك الترجمة ---------- */
let _dict = null, _re = null;
function buildDict() {
  _dict = new Map();
  const add = (ar, en) => { if (ar && en && !_dict.has(ar.trim())) _dict.set(ar.trim(), en); };
  if (typeof CATALOG !== "undefined") CATALOG.forEach(p => add(p.name, p.en));
  if (typeof CATEGORIES !== "undefined") CATEGORIES.forEach(c => { add(c.name, c.en); add("كل " + c.name, "All " + c.en); });
  if (typeof SUBCATS !== "undefined") Object.values(SUBCATS).flat().forEach(s => add(s.name, s.en));
  if (typeof GOVERNORATES !== "undefined") GOVERNORATES.forEach((g, i) => add(g, GOV_EN[i]));
  if (typeof SEED_VENDORS !== "undefined") SEED_VENDORS.forEach((v, i) => {
    if (!VENDOR_EN[i]) return;
    add(v.name, VENDOR_EN[i][0]); add(v.address, VENDOR_EN[i][1]);
  });
  Object.entries(PLACES_EN).forEach(([a, e]) => add(a, e));
  Object.entries(UI_EN).forEach(([a, e]) => add(a, e));
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
  const keys = [..._dict.keys()].sort((a, b) => b.length - a.length);
  _re = new RegExp("(?<![\\u0620-\\u065F\\u0670-\\u06EF])(" + keys.map(esc).join("|") + ")(?![\\u0620-\\u065F\\u0670-\\u06EF])", "g");
  // نفس المفتاح بعد توحيد المسافات
  const norm = new Map(); _dict.forEach((v, k) => norm.set(k.replace(/\s+/g, " "), v)); _dict = norm;
}

const AR_RE = /[؀-ۿ]/;
function trText(s) {
  if (LANG !== "en" || !s || !AR_RE.test(s)) return s;
  if (!_dict) buildDict();
  let out = s;
  PATTERNS_EN.forEach(([re, rep]) => { out = out.replace(re, rep); });
  out = out.replace(_re, m => _dict.get(m.replace(/\s+/g, " ")) ?? m);
  return out
    .replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    .replace(/،/g, ",").replace(/؟/g, "?").replace(/٪/g, "%")
    .replace(/(\d)\s*×/g, "$1 ×");
}

const SKIP = new Set(["SCRIPT", "STYLE", "TEXTAREA", "CODE"]);
const ATTRS = ["placeholder", "title", "alt", "aria-label"];
function trNode(root) {
  if (LANG !== "en" || !root) return;
  if (root.nodeType === 3) {
    const p = root.parentNode;
    if (p && p.classList && p.classList.contains("logo-mark")) { if (root.nodeValue.trim() === "و") root.nodeValue = "W"; return; }
    if (p && !SKIP.has(p.nodeName)) { const t = trText(root.nodeValue); if (t !== root.nodeValue) root.nodeValue = t; }
    return;
  }
  if (root.nodeType !== 1 || SKIP.has(root.nodeName)) return;
  ATTRS.forEach(a => {
    if (root.hasAttribute && root.hasAttribute(a)) { const v = root.getAttribute(a), t = trText(v); if (t !== v) root.setAttribute(a, t); }
  });
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let n;
  while ((n = w.nextNode())) {
    if (n.nodeType === 3) {
      if (n.parentNode.classList && n.parentNode.classList.contains("logo-mark")) { if (n.nodeValue.trim() === "و") n.nodeValue = "W"; continue; }
      if (n.parentNode && !SKIP.has(n.parentNode.nodeName)) { const t = trText(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; }
    } else {
      ATTRS.forEach(a => { if (n.hasAttribute(a)) { const v = n.getAttribute(a), t = trText(v); if (t !== v) n.setAttribute(a, t); } });
    }
  }
}

if (LANG === "en") {
  // التوست والـ alert/confirm كمان
  const _confirm = window.confirm.bind(window), _alert = window.alert.bind(window);
  window.confirm = m => _confirm(trText(String(m)));
  window.alert = m => _alert(trText(String(m)));

  const start = () => {
    document.title = trText(document.title);
    trNode(document.body);
    new MutationObserver(muts => {
      muts.forEach(m => {
        if (m.type === "characterData") trNode(m.target);
        else if (m.type === "attributes") trNode(m.target);
        else m.addedNodes.forEach(trNode);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
}
