// src/data/data.js

export const products = [
  // ===================== MEN PRODUCTS =====================
  {
    id: 1,
    title: "Men Black T-Shirt",
    category: "men",
    subCategory: "tshirts",
    price: 499,
    image: "/images/men/tshirt1.jpg",
    description: "Comfortable black t-shirt for daily wear."
  },
  {
    id: 2,
    title: "Men White Casual Shirt",
    category: "men",
    subCategory: "casual-shirts",
    price: 799,
    image: "/images/men/casualshirt1.jpg",
    description: "Perfect casual shirt for outings."
  },
  {
    id: 3,
    title: "Men Blue Jeans",
    category: "men",
    subCategory: "jeans",
    price: 999,
    image: "/images/men/jeans1.jpg",
    description: "Slim fit blue jeans for everyday style."
  },
  {
    id: 4,
    title: "Men Black Formal Shoes",
    category: "men",
    subCategory: "footwear",
    price: 1499,
    image: "/images/men/shoes1.jpg",
    description: "Elegant black shoes for office and formal occasions."
  },
  {
    id: 5,
    title: "Men Hoodie Sweatshirt",
    category: "men",
    subCategory: "sweatshirts",
    price: 1299,
    image: "/images/men/hoodie1.jpg",
    description: "Comfortable hoodie for casual winter wear."
  },

  // ===================== WOMEN PRODUCTS =====================
  {
    id: 6,
    title: "Women Red Dress",
    category: "women",
    subCategory: "dresses",
    price: 1299,
    image: "/images/women/dress1.jpg",
    description: "Stylish red dress perfect for parties."
  },
  {
    id: 7,
    title: "Women Blue Kurti",
    category: "women",
    subCategory: "kurtis",
    price: 899,
    image: "/images/women/kurti1.jpg",
    description: "Elegant blue kurti with traditional prints."
  },
  {
    id: 8,
    title: "Women Black Flats",
    category: "women",
    subCategory: "footwear",
    price: 699,
    image: "/images/women/flats1.jpg",
    description: "Comfortable black flats for daily wear."
  },
  {
    id: 9,
    title: "Women Handbag",
    category: "women",
    subCategory: "bags",
    price: 1499,
    image: "/images/women/bag1.jpg",
    description: "Trendy handbag to match all outfits."
  },
  {
    id: 10,
    title: "Women Summer Dress",
    category: "women",
    subCategory: "dresses",
    price: 1199,
    image: "/images/women/dress2.jpg",
    description: "Lightweight and breezy summer dress."
  },

  // ===================== KIDS PRODUCTS =====================
  {
    id: 11,
    title: "Boys T-Shirt",
    category: "kids",
    subCategory: "boys-clothing",
    price: 399,
    image: "/images/kids/boytshirt1.jpg",
    description: "Soft cotton t-shirt for boys."
  },
  {
    id: 12,
    title: "Girls Dress",
    category: "kids",
    subCategory: "girls-clothing",
    price: 699,
    image: "/images/kids/girldress1.jpg",
    description: "Cute dress for girls aged 5-10."
  },
  {
    id: 13,
    title: "Boys Shorts",
    category: "kids",
    subCategory: "boys-clothing",
    price: 349,
    image: "/images/kids/boyshorts1.jpg",
    description: "Comfortable shorts for boys in summer."
  },
  {
    id: 14,
    title: "Girls Flats",
    category: "kids",
    subCategory: "footwear",
    price: 499,
    image: "/images/kids/girlsflats1.jpg",
    description: "Cute flats for girls aged 5-10."
  },
  {
    id: 15,
    title: "Kids Hoodie",
    category: "kids",
    subCategory: "unisex",
    price: 799,
    image: "/images/kids/hoodie1.jpg",
    description: "Warm hoodie for kids for winter."
  },

  // ===================== HOME PRODUCTS (OPTIONAL) =====================
  {
    id: 16,
    title: "Bed Sheet Set",
    category: "home",
    subCategory: "bed-linen",
    price: 1299,
    image: "/images/home/bedset1.jpg",
    description: "Soft and comfortable bed sheet set."
  },
  {
    id: 17,
    title: "Floor Lamp",
    category: "home",
    subCategory: "lighting",
    price: 1599,
    image: "/images/home/floorlamp1.jpg",
    description: "Stylish floor lamp for your living room."
  }
];


export const Topwear = [
  {
    title: "T-Shirts",
    url: "http://localhost:5173/category/0",
  },
  {
    title: "Casual Shirts",
    url: "http://localhost:5173/category/1",
  },
  {
    title: "Formal Shirts",
    url: "http://localhost:5173/category/2",
  },
  {
    title: "Sweatshirts",
    url: "",
  },
  {
    title: "Sweaters",
    url: "",
  },
  {
    title: "Jackets",
    url: "",
  },
  {
    title: "Blazers & Coats",
    url: "",
  },
  {
    title: "Suits",
    url: "",
  },
  {
    title: "Rain Jackets",
    url: "",
  },
];

export const indian_festive = [
  {
    title: "Kurtas & Kurta Sets",
    url: "#",
  },
  {
    title: "Sherwanis",
    url: "#",
  },
  {
    title: "Nehru Jackets",
    url: "#",
  },
  {
    title: "Dhotis",
    url: "#",
  },
];

export const bottomwear = [
  {
    title: "Jeans",
    url: "#",
  },
  {
    title: "Casual Trousers",
    url: "#",
  },
  {
    title: "Formal Trousers",
    url: "#",
  },
  {
    title: "Shorts",
    url: "#",
  },
  {
    title: "Track Pants & Joggers",
    url: "#",
  },
];

export const Innerwear_Sleepwear = [
  {
    title: "Briefs & Trunks",
    url: "#",
  },
  {
    title: "Boxers",
    url: "#",
  },
  {
    title: "Vests",
    url: "#",
  },
  {
    title: "Sleepwear & Loungewear",
    url: "#",
  },
  {
    title: "Thermals",
    url: "#",
  },
];

export const Footwear = [
  {
    title: "Casual Shoes",
    url: "http://localhost:5173/category/3",
  },
  {
    title: "Sports Shoes",
    url: "#",
  },
  {
    title: "Formal Shoes",
    url: "#",
  },
  {
    title: "Sneakers",
    url: "#",
  },
  {
    title: "Sandals & Floaters",
    url: "#",
  },
  {
    title: "Flip Flops",
    url: "#",
  },
  {
    title: "Socks",
    url: "#",
  },
];

export const Sports_Active_Wear = [
  {
    title: "Sports Shoes",
    url: "#",
  },
  {
    title: "Sports Sandals",
    url: "#",
  },
  {
    title: "Active T-Shirts",
    url: "#",
  },
  {
    title: "Track Pants & Shorts",
    url: "#",
  },
  {
    title: "Tracksuits",
    url: "#",
  },
  {
    title: "Jackets & Sweatshirts",
    url: "#",
  },
  {
    title: "Sports Accessories",
    url: "#",
  },
  {
    title: "Swimwear",
    url: "#",
  },
];

export const Gadgets = [
  {
    title: "Smart Wearables",
    url: "#",
  },
  {
    title: "Fitness Gadgets",
    url: "#",
  },
  {
    title: "Headphones",
    url: "#",
  },
  {
    title: "Speakers",
    url: "#",
  },
];

export const Fashion_Accessories = [
  {
    title: "Wallets",
    url: "#",
  },
  {
    title: "Belts",
    url: "#",
  },
  {
    title: "Perfumes & Body Mists",
    url: "#",
  },
  {
    title: "Trimmers",
    url: "#",
  },
  {
    title: "Deodorants",
    url: "#",
  },
  {
    title: "Ties, Cufflinks & Pocket Squares",
    url: "#",
  },
  {
    title: "Accessory Gift Sets",
    url: "#",
  },
  {
    title: "Caps & Hats",
    url: "#",
  },
  {
    title: "Mufflers, Scarves & Gloves",
    url: "#",
  },
  {
    title: "Phone Cases",
    url: "#",
  },
  {
    title: "Rings & Wristwear",
    url: "#",
  },
  {
    title: "Helmets",
    url: "#",
  },
];

// *************************************Women****************************************

export const Indian_FusionWear = [
  {
    title: "Kurtas & Suits",
    url: "#",
  },
  {
    title: "Kurtis, Tunics & Tops",
    url: "#",
  },
  {
    title: "Ethnic Wear",
    url: "#",
  },
  {
    title: "Leggings, Salwars & Churidars",
    url: "#",
  },
  {
    title: "Skirts & Palazzos",
    url: "#",
  },
  {
    title: "Sarees",
    url: "http://localhost:5173/saree",
  },
  {
    title: "Dress Materials",
    url: "#",
  },
  {
    title: "Lehenga Cholis",
    url: "#",
  },
  {
    title: "Dupattas & Shawls",
    url: "#",
  },
  {
    title: "Jackets",
    url: "#",
  },
];

export const Western_Wear = [
  {
    title: "Dresses",
    url: "#",
  },
  {
    title: "Tops",
    url: "#",
  },
  {
    title: "Tshirts",
    url: "#",
  },
  {
    title: "Jeans",
    url: "#",
  },
  {
    title: "Trousers & Capris",
    url: "#",
  },
  {
    title: "Shorts & Skirts",
    url: "#",
  },
  {
    title: "Co-ords",
    url: "#",
  },
  {
    title: "Playsuits",
    url: "#",
  },
  {
    title: "Jumpsuits",
    url: "#",
  },
  {
    title: "Shrugs",
    url: "#",
  },
  {
    title: "Sweaters & Sweatshirts",
    url: "#",
  },
  {
    title: "Jackets & Coats",
    url: "#",
  },
  {
    title: "Blazers & Waistcoats",
    url: "#",
  },
];

export const Shop_Occassion = [
  {
    title: "Office",
    url: "#",
  },
  {
    title: "Casual outing",
    url: "#",
  },
  {
    title: "Wedding",
    url: "#",
  },
  {
    title: "Party",
    url: "#",
  },
  {
    title: "Workout",
    url: "#",
  },
  {
    title: "Vacation",
    url: "#",
  },
  {
    title: "At Home",
    url: "#",
  },
];

export const WFootwear = [
  {
    title: "Flats",
    url: "#",
  },
  {
    title: "Casual Shoes",
    url: "#",
  },
  {
    title: "Heels",
    url: "#",
  },
  {
    title: "Boots",
    url: "#",
  },
  {
    title: "Sports Shoes & Floaters",
    url: "#",
  },
];

export const Sports_ActiveWear = [
  {
    title: "Clothing",
    url: "#",
  },
  {
    title: "Footwear",
    url: "#",
  },
  {
    title: "Sports Accessories",
    url: "#",
  },
  {
    title: "Sports Equipment",
    url: "#",
  },
];

export const Lingerie_Sleepwear = [
  {
    title: "Bra",
    url: "http://localhost:5173/categoryitems/7",
  },
  {
    title: "Briefs",
    url: "#",
  },
  {
    title: "Shapewear",
    url: "#",
  },
  {
    title: "Sleepwear & Loungewear",
    url: "#",
  },
  {
    title: "Swimwear",
    url: "#",
  },
  {
    title: "Camisoles & Thermals",
    url: "#",
  },
];
export const Beauty_Personal_Care = [
  {
    title: "Makeup",
    url: "#",
  },
  {
    title: "Skincare",
    url: "#",
  },
  {
    title: "Premium Beauty",
    url: "#",
  },
  {
    title: "Lipsticks",
    url: "#",
  },
  {
    title: "Fragrances",
    url: "#",
  },
];

// ************************************************************Kids******************************
export const Boys_Clothing = [
  {
    title: "T-Shirts",
    url: "#",
  },
  {
    title: "Shirts",
    url: "#",
  },
  {
    title: "Shorts",
    url: "#",
  },
  {
    title: "Jeans",
    url: "#",
  },
  {
    title: "Trousers",
    url: "#",
  },
  {
    title: "Clothing Sets",
    url: "#",
  },
  {
    title: "Ethnic Wear",
    url: "#",
  },
  {
    title: "Track Pants & Pyjamas",
    url: "#",
  },
  {
    title: "Jacket, Sweater & Sweatshirts",
    url: "#",
  },
  {
    title: "Party Wear",
    url: "#",
  },
  {
    title: "Innerwear & Thermals",
    url: "#",
  },

  {
    title: "Nightwear & Loungewear",
    url: "#",
  },
  {
    title: "Value Packs",
    url: "#",
  },
];

export const Girls_Clothing = [
  {
    title: "Dresses",
    url: "#",
  },
  {
    title: "Tops",
    url: "#",
  },
  {
    title: "Tshirts",
    url: "#",
  },
  {
    title: "Clothing Sets",
    url: "#",
  },
  {
    title: "Lehenga choli",
    url: "#",
  },
  {
    title: "Kurta Sets",
    url: "#",
  },
  {
    title: "Party wear",
    url: "#",
  },
  {
    title: "Dungarees & Jumpsuits",
    url: "#",
  },
  {
    title: "Skirts & shorts",
    url: "#",
  },
  {
    title: "Tights & Leggings",
    url: "#",
  },
  {
    title: "Jeans, Trousers & Capris",
    url: "#",
  },
  {
    title: "Jacket, Sweater & Sweatshirts",
    url: "#",
  },
  {
    title: "Innerwear & Thermal",
    url: "#",
  },
  {
    title: "Nightwear & Loungewear",
    url: "#",
  },
  {
    title: "Value Packs",
    url: "#",
  },
];

export const KFootwear = [
  {
    title: "Casual Shoes",
    url: "#",
  },
  {
    title: "Flipflops",
    url: "#",
  },
  {
    title: "Sports Shoes",
    url: "#",
  },
  {
    title: "Flats",
    url: "#",
  },
  {
    title: "Sandals",
    url: "#",
  },
  {
    title: "Heels",
    url: "#",
  },
  {
    title: "School Shoes",
    url: "#",
  },
  {
    title: "Socks",
    url: "#",
  },
];

export const Toys = [
  {
    title: "Learning & Development",
    url: "#",
  },
  {
    title: "Activity Toys",
    url: "#",
  },
  {
    title: "Soft Toys",
    url: "#",
  },
  {
    title: "Action Figure / Play set",
    url: "#",
  },
];

export const Infants = [
  {
    title: "Bodysuits",
    url: "#",
  },
  {
    title: "Rompers & Sleepsuits",
    url: "#",
  },
  {
    title: "Clothing Sets",
    url: "#",
  },
  {
    title: "Tshirts & Tops",
    url: "#",
  },
  {
    title: "Dresses",
    url: "#",
  },
  {
    title: "Bottom wear",
    url: "#",
  },
  {
    title: "Winter Wear",
    url: "#",
  },
  {
    title: "Innerwear & Sleepwear",
    url: "#",
  },
  {
    title: "Infant Care",
    url: "#",
  },
];

export const Kids_Accessories = [
  {
    title: "Bags & Backpacks",
    url: "#",
  },
  {
    title: "Watches",
    url: "#",
  },
  {
    title: "Jewellery & Hair accessory",
    url: "#",
  },
  {
    title: "Sunglasses",
    url: "#",
  },
  {
    title: "Masks & Protective Gears",
    url: "#",
  },
  {
    title: "Caps & Hats",
    url: "#",
  },
];

export const KBrands = [
  {
    title: "H&M",
    url: "#",
  },
  {
    title: "Max Kids",
    url: "#",
  },
  {
    title: "Pantaloons",
    url: "#",
  },
  {
    title: "United Colors Of Benetton Kids",
    url: "#",
  },
  {
    title: "YK",
    url: "#",
  },
  {
    title: "U.S. Polo Assn. Kids",
    url: "#",
  },
  {
    title: "Mothercare",
    url: "#",
  },
];

// *********************************Home & Living ********************************

export const BedLinenFurnishing = [
  {
    title: "Bedsheets",
    url: "#",
  },

  {
    title: "Bedding Sets",
    url: "#",
  },
  {
    title: "Blankets, Quilts & Dohars",
    url: "#",
  },
  {
    title: "Pillows & Pillow Covers",
    url: "#",
  },
  {
    title: "Bed Covers",
    url: "#",
  },
  {
    title: "Diwan Sets",
    url: "#",
  },
  {
    title: "Chair Pads & Covers",
    url: "#",
  },
  {
    title: "Sofa Covers",
    url: "#",
  },
];

export const Flooring = [
  {
    title: "Carpets",
    url: "#",
  },
  {
    title: "Floor Mats & Dhurries",
    url: "#",
  },
  {
    title: "Door Mats",
    url: "#",
  },
];
export const Bath = [
  {
    title: "Bath Towels",
    url: "#",
  },

  {
    title: "Hand & Face Towels",
    url: "#",
  },
  {
    title: "Beach Towels",
    url: "#",
  },
  {
    title: "Towels Set",
    url: "#",
  },
  {
    title: "Bath Rugs",
    url: "#",
  },
  {
    title: "Bath Robes",
    url: "#",
  },
  {
    title: "Bathroom Accessories",
    url: "#",
  },
  {
    title: "Shower Curtains",
    url: "#",
  },
];
export const LampsLighting = [
  {
    title: "Floor Lamps",
    url: "#",
  },

  {
    title: "Ceiling Lamps",
    url: "#",
  },
  {
    title: "Table Lamps",
    url: "#",
  },
  {
    title: "Wall Lamps",
    url: "#",
  },
  {
    title: "Outdoor Lamps",
    url: "#",
  },
  {
    title: "String Lights",
    url: "#",
  },
];
export const HomeDécor = [
  {
    title: "Plants & Planters",
    url: "#",
  },

  {
    title: "Aromas & Candles",
    url: "#",
  },
  {
    title: "Clocks",
    url: "#",
  },
  {
    title: "Mirrors",
    url: "#",
  },
  {
    title: "Wall Décor",
    url: "#",
  },
  {
    title: "Festive Decor",
    url: "#",
  },
  {
    title: "Pooja Essentials",
    url: "#",
  },
  {
    title: "Wall Shelves",
    url: "#",
  },
  {
    title: "Fountains",
    url: "#",
  },
  {
    title: "Showpieces & Vases",
    url: "#",
  },
];
export const KitchenTable = [
  {
    title: "Dinnerware & Serveware",
    url: "#",
  },

  {
    title: "Cups and Mugs",
    url: "#",
  },
  {
    title: "Bakeware & Cookware",
    url: "#",
  },
  {
    title: "Kitchen Storage & Tools",
    url: "#",
  },
  {
    title: "Bar & Drinkware",
    url: "#",
  },
  {
    title: "Table Covers & Furnishings",
    url: "#",
  },
];
export const Storage = [
  {
    title: "Organisers",
    url: "#",
  },
  {
    title: "Hooks & Holders",
    url: "#",
  },
  {
    title: "Laundry Bags",
    url: "#",
  },
];
export const HBrands = [
  {
    title: "Home Centre",
    url: "#",
  },
  {
    title: "Spaces",
    url: "#",
  },
  {
    title: "D Decor",
    url: "#",
  },
  {
    title: "Portico New York",
    url: "#",
  },

  {
    title: "Pure Home & Living",
    url: "#",
  },

  {
    title: "Raymond Home",
    url: "#",
  },
  {
    title: "Maspar",
    url: "#",
  },
  {
    title: "Corelle",
    url: "#",
  },
  {
    title: "Trident",
    url: "#",
  },
  {
    title: "Cortina",
    url: "#",
  },
  {
    title: "Random",
    url: "#",
  },
  {
    title: "Ellementry",
    url: "#",
  },
  {
    title: "ROMEE",
    url: "#",
  },
  {
    title: "SEJ by Nisha Gupta",
    url: "#",
  },
];

//*********************************************Beauty****************************

export const Makeup = [
  {
    title: "Lipstick",
    url: "#",
  },
  {
    title: "Lip Gloss",
    url: "#",
  },
  {
    title: "Lip Liner",
    url: "#",
  },
  {
    title: "Mascara",
    url: "#",
  },
  {
    title: "Eyeliner",
    url: "#",
  },
  {
    title: "Kajal",
    url: "#",
  },
  {
    title: "Eyeshadow",
    url: "#",
  },
  {
    title: "Foundation",
    url: "#",
  },
  {
    title: "Primer",
    url: "#",
  },
  {
    title: "Concealer",
    url: "#",
  },
  {
    title: "Compact",
    url: "#",
  },
  {
    title: "Nail Polish",
    url: "#",
  },
];

export const SkincareBathBody = [
  {
    title: "Face Moisturiser",
    url: "#",
  },
  {
    title: "Cleanser",
    url: "#",
  },
  {
    title: "Masks & Peel",
    url: "#",
  },
  {
    title: "Sunscreen",
    url: "#",
  },
  {
    title: "Serum",
    url: "#",
  },
  {
    title: "Face Wash",
    url: "#",
  },
  {
    title: "Eye Cream",
    url: "#",
  },
  {
    title: "Lip Balm",
    url: "#",
  },
  {
    title: "Body Lotion",
    url: "#",
  },
  {
    title: "Body Wash",
    url: "#",
  },
  {
    title: "Body Scrub",
    url: "#",
  },
  {
    title: "Hand Cream",
    url: "#",
  },
];

export const Haircare = [
  {
    title: "Shampoo",
    url: "#",
  },
  {
    title: "Conditioner",
    url: "#",
  },
  {
    title: "Hair Cream",
    url: "#",
  },
  {
    title: "Hair Oil",
    url: "#",
  },
  {
    title: "Hair Gel",
    url: "#",
  },
  {
    title: "Hair Color",
    url: "#",
  },
  {
    title: "Hair Serum",
    url: "#",
  },
  {
    title: "Hair Accessory",
    url: "#",
  },
];

export const Fragrances = [
  {
    title: "Perfume",
    url: "#",
  },
  {
    title: "Deodorant",
    url: "#",
  },
  {
    title: "Body Mist",
    url: "#",
  },
  {
    title: "Appliances",
    url: "#",
  },
];

export const HairStraightener = [
  {
    title: "Hair Dryer",
    url: "#",
  },
  {
    title: "Epilator",
    url: "#",
  },
];

export const MenGrooming = [
  {
    title: "Trimmers",
    url: "#",
  },
  {
    title: "Beard Oil",
    url: "#",
  },
  {
    title: "Hair Wax",
    url: "#",
  },
];

export const BeautyGiftMakeupSet = [
  {
    title: "Beauty Gift",
    url: "#",
  },
  {
    title: "Makeup Kit",
    url: "#",
  },
];

export const BTopBrands = [
  {
    title: "Lakme",
    url: "#",
  },
  {
    title: "Maybelline",
    url: "#",
  },
  {
    title: "LOreal",
    url: "#",
  },
  {
    title: "Philips",
    url: "#",
  },
  {
    title: "Bath & Body Works",
    url: "#",
  },
  {
    title: "THE BODY SHOP",
    url: "#",
  },
  {
    title: "Biotique",
    url: "#",
  },
  {
    title: "Mamaearth",
    url: "#",
  },
  {
    title: "MCaffeine",
    url: "#",
  },
  {
    title: "Nivea",
    url: "#",
  },
  {
    title: "Lotus Herbals",
    url: "#",
  },
  {
    title: "LOreal Professionnel",
    url: "#",
  },
  {
    title: "KAMA AYURVEDA",
    url: "#",
  },
  {
    title: "M.A.C",
    url: "#",
  },
  {
    title: "Forest Essentials",
    url: "#",
  },
];


