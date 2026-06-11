export const products = [
  { id: '1', title: 'Men Basic T-Shirt', category: 'men', subCategory: 'tshirts', price: 499, originalPrice: 999, discount: 50, rating: 4.2, reviews: 120, sizes: ['S', 'M', 'L', 'XL'], stock: 50, image: 'https://images.unsplash.com/photo-1620799475913-6ac074b88e6b?w=400&q=80', description: 'Comfortable cotton t-shirt', brand: 'Mini-Bazar Basics' },
  { id: '2', title: 'Men Casual Checked Shirt', category: 'men', subCategory: 'shirts', price: 899, originalPrice: 1499, discount: 40, rating: 4.5, reviews: 85, sizes: ['M', 'L', 'XL'], stock: 30, image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80', description: 'Stylish checked shirt for casual outings', brand: 'UrbanStyle' },
  { id: '3', title: 'Men Slim Fit Blue Jeans', category: 'men', subCategory: 'jeans', price: 1299, originalPrice: 2499, discount: 48, rating: 4.7, reviews: 210, sizes: ['30', '32', '34', '36'], stock: 100, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80', description: 'Classic blue denim jeans', brand: 'DenimCo' },
  { id: '4', title: 'Men Classic Sneakers', category: 'men', subCategory: 'shoes', price: 1599, originalPrice: 2999, discount: 46, rating: 4.4, reviews: 340, sizes: ['7', '8', '9', '10'], stock: 40, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', description: 'Comfortable everyday sneakers', brand: 'WalkFit' },
  { id: '5', title: 'Men Winter Jacket', category: 'men', subCategory: 'jackets', price: 2499, originalPrice: 4999, discount: 50, rating: 4.8, reviews: 156, sizes: ['M', 'L', 'XL', 'XXL'], stock: 25, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80', description: 'Warm and stylish winter jacket', brand: 'WinterWear' },
  { id: '16', title: 'Men Cool Hoodie', category: 'men', subCategory: 'sweatshirts', price: 1199, originalPrice: 1999, discount: 40, rating: 4.3, reviews: 95, sizes: ['M', 'L', 'XL'], stock: 60, image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80', description: 'Casual hoodie', brand: 'UrbanStyle' },
  { id: '17', title: 'Men Polo T-Shirt', category: 'men', subCategory: 'tshirts', price: 699, originalPrice: 1299, discount: 46, rating: 4.4, reviews: 150, sizes: ['S', 'M', 'L', 'XL'], stock: 80, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b6e32?w=400&q=80', description: 'Smart casual polo', brand: 'ClassicPolo' },
  { id: '18', title: 'Men Formal Shirt', category: 'men', subCategory: 'shirts', price: 1099, originalPrice: 1999, discount: 45, rating: 4.6, reviews: 110, sizes: ['M', 'L', 'XL'], stock: 45, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', description: 'Crisp formal shirt for office', brand: 'OfficeWear' },
  
  { id: '6', title: 'Women Floral Summer Dress', category: 'women', subCategory: 'dresses', price: 1199, originalPrice: 1999, discount: 40, rating: 4.6, reviews: 180, sizes: ['XS', 'S', 'M', 'L'], stock: 45, image: 'https://images.unsplash.com/photo-1585487000160-6a88fad4d9f9?w=400&q=80', description: 'Breezy summer dress with floral prints', brand: 'SummerVibes' },
  { id: '7', title: 'Women Ethnic Printed Kurti', category: 'women', subCategory: 'kurtis', price: 799, originalPrice: 1599, discount: 50, rating: 4.3, reviews: 90, sizes: ['S', 'M', 'L', 'XL', 'XXL'], stock: 60, image: 'https://images.unsplash.com/photo-1610030169581-2d5e7c4d9ffd?w=400&q=80', description: 'Beautiful ethnic kurti for daily wear', brand: 'EthnicCharm' },
  { id: '8', title: 'Women Elegant Silk Saree', category: 'women', subCategory: 'sarees', price: 3499, originalPrice: 6999, discount: 50, rating: 4.9, reviews: 420, sizes: ['Free Size'], stock: 15, image: 'https://images.unsplash.com/photo-1583391082078-84ea7f77cbc4?w=400&q=80', description: 'Premium silk saree for special occasions', brand: 'RoyalSilk' },
  { id: '9', title: 'Women Party Wear Heels', category: 'women', subCategory: 'heels', price: 1499, originalPrice: 2499, discount: 40, rating: 4.1, reviews: 65, sizes: ['36', '37', '38', '39', '40'], stock: 35, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80', description: 'Stylish and comfortable heels', brand: 'StepUp' },
  { id: '10', title: 'Women Premium Handbag', category: 'women', subCategory: 'bags', price: 1899, originalPrice: 3999, discount: 52, rating: 4.7, reviews: 215, sizes: ['Standard'], stock: 20, image: 'https://images.unsplash.com/photo-1548036161-f5d51c67d8b4?w=400&q=80', description: 'Spacious and elegant handbag', brand: 'LuxeBags' },
  { id: '19', title: 'Women Casual Top', category: 'women', subCategory: 'tops', price: 599, originalPrice: 999, discount: 40, rating: 4.2, reviews: 130, sizes: ['XS', 'S', 'M', 'L'], stock: 55, image: 'https://images.unsplash.com/photo-1566479153369-338f5a3d6b9b?w=400&q=80', description: 'Comfortable everyday top', brand: 'CasualChic' },
  { id: '20', title: 'Women Sunglasses', category: 'women', subCategory: 'accessories', price: 899, originalPrice: 1999, discount: 55, rating: 4.5, reviews: 75, sizes: ['Standard'], stock: 40, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80', description: 'Stylish sunglasses for summer', brand: 'Shades' },
  { id: '21', title: 'Women Denim Jacket', category: 'women', subCategory: 'jackets', price: 1999, originalPrice: 3499, discount: 42, rating: 4.6, reviews: 140, sizes: ['S', 'M', 'L'], stock: 25, image: 'https://images.unsplash.com/photo-1572804013427-4d7ca26c5d6f?w=400&q=80', description: 'Classic denim jacket', brand: 'DenimCo' },
  
  { id: '11', title: 'Kids Boy Graphic T-Shirt', category: 'kids', subCategory: 'tshirts', price: 399, originalPrice: 799, discount: 50, rating: 4.5, reviews: 45, sizes: ['3-4Y', '5-6Y', '7-8Y'], stock: 80, image: 'https://images.unsplash.com/photo-1567954970774-58d6aa6cbd97?w=400&q=80', description: 'Fun graphic t-shirt for boys', brand: 'KidzWear' },
  { id: '12', title: 'Kids Girl Party Dress', category: 'kids', subCategory: 'dresses', price: 899, originalPrice: 1799, discount: 50, rating: 4.8, reviews: 110, sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'], stock: 40, image: 'https://images.unsplash.com/photo-1518831959-43fa04ce8e4b?w=400&q=80', description: 'Cute party dress for girls', brand: 'LittlePrincess' },
  { id: '22', title: 'Kids Comfortable Shoes', category: 'kids', subCategory: 'shoes', price: 799, originalPrice: 1499, discount: 46, rating: 4.4, reviews: 85, sizes: ['10', '11', '12', '1'], stock: 60, image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80', description: 'Playful and comfy shoes', brand: 'StepUp Kids' },
  { id: '23', title: 'Kids Soft Toy', category: 'kids', subCategory: 'toys', price: 599, originalPrice: 999, discount: 40, rating: 4.9, reviews: 250, sizes: ['Standard'], stock: 100, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', description: 'Cuddly soft toy', brand: 'ToyLand' },
  { id: '24', title: 'Kids Winter Hoodie', category: 'kids', subCategory: 'sweatshirts', price: 999, originalPrice: 1999, discount: 50, rating: 4.7, reviews: 65, sizes: ['5-6Y', '7-8Y', '9-10Y'], stock: 35, image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80', description: 'Warm hoodie for kids', brand: 'KidzWear' },
  
  { id: '13', title: 'Premium Cotton Bedsheet', category: 'home', subCategory: 'bedsheets', price: 1299, originalPrice: 2599, discount: 50, rating: 4.6, reviews: 320, sizes: ['Double', 'King'], stock: 50, image: 'https://images.unsplash.com/photo-1555041469-db45c79572e2?w=400&q=80', description: 'Soft and breathable cotton bedsheet', brand: 'HomeComforts' },
  { id: '25', title: 'Modern Floor Lamp', category: 'home', subCategory: 'lighting', price: 2499, originalPrice: 4999, discount: 50, rating: 4.5, reviews: 115, sizes: ['Standard'], stock: 20, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80', description: 'Elegant lighting for living room', brand: 'Lumina' },
  { id: '26', title: 'Decorative Cushion Set', category: 'home', subCategory: 'cushions', price: 899, originalPrice: 1499, discount: 40, rating: 4.4, reviews: 90, sizes: ['Standard'], stock: 45, image: 'https://images.unsplash.com/photo-1555041469-db45c79572e2?w=400&q=80', description: 'Set of 2 printed cushions', brand: 'HomeComforts' },
  { id: '27', title: 'Abstract Wall Art', category: 'home', subCategory: 'decor', price: 1599, originalPrice: 2999, discount: 46, rating: 4.8, reviews: 75, sizes: ['Large'], stock: 15, image: 'https://images.unsplash.com/photo-1556228841-a3c527ebeb5a?w=400&q=80', description: 'Beautiful abstract painting canvas', brand: 'ArtDecor' },
  { id: '28', title: 'Scented Candle', category: 'home', subCategory: 'decor', price: 399, originalPrice: 599, discount: 33, rating: 4.7, reviews: 210, sizes: ['Standard'], stock: 100, image: 'https://images.unsplash.com/photo-1558618047-3c8c76c47d8e?w=400&q=80', description: 'Relaxing vanilla scented candle', brand: 'Aroma' },
  
  { id: '14', title: 'Matte Finish Lipstick', category: 'beauty', subCategory: 'makeup', price: 499, originalPrice: 999, discount: 50, rating: 4.4, reviews: 540, sizes: ['Standard'], stock: 150, image: 'https://images.unsplash.com/photo-1631214524400-b5e09d0f5b03?w=400&q=80', description: 'Long-lasting matte lipstick', brand: 'Glamour' },
  { id: '15', title: 'Hydrating Face Cream', category: 'beauty', subCategory: 'skincare', price: 699, originalPrice: 1299, discount: 46, rating: 4.7, reviews: 280, sizes: ['50ml', '100ml'], stock: 75, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80', description: 'Deep hydration for glowing skin', brand: 'SkinCare Pro' },
  { id: '29', title: 'Luxury Perfume', category: 'beauty', subCategory: 'fragrances', price: 1999, originalPrice: 3999, discount: 50, rating: 4.8, reviews: 190, sizes: ['100ml'], stock: 40, image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80', description: 'Premium floral fragrance', brand: 'Aura' },
  { id: '30', title: 'Gentle Face Wash', category: 'beauty', subCategory: 'skincare', price: 349, originalPrice: 499, discount: 30, rating: 4.5, reviews: 310, sizes: ['150ml'], stock: 120, image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=80', description: 'Daily gentle cleanser', brand: 'SkinCare Pro' }
];

export const Topwear = [
  { title: "T-Shirts", url: "/category/0" },
  { title: "Casual Shirts", url: "/category/1" },
  { title: "Formal Shirts", url: "/category/2" },
  { title: "Sweatshirts", url: "" },
  { title: "Sweaters", url: "" },
  { title: "Jackets", url: "" },
  { title: "Blazers & Coats", url: "" },
  { title: "Suits", url: "" },
  { title: "Rain Jackets", url: "" },
];

export const indian_festive = [
  { title: "Kurtas & Kurta Sets", url: "#" },
  { title: "Sherwanis", url: "#" },
  { title: "Nehru Jackets", url: "#" },
  { title: "Dhotis", url: "#" },
];

export const bottomwear = [
  { title: "Jeans", url: "#" },
  { title: "Casual Trousers", url: "#" },
  { title: "Formal Trousers", url: "#" },
  { title: "Shorts", url: "#" },
  { title: "Track Pants & Joggers", url: "#" },
];

export const Innerwear_Sleepwear = [
  { title: "Briefs & Trunks", url: "#" },
  { title: "Boxers", url: "#" },
  { title: "Vests", url: "#" },
  { title: "Sleepwear & Loungewear", url: "#" },
  { title: "Thermals", url: "#" },
];

export const Footwear = [
  { title: "Casual Shoes", url: "/category/3" },
  { title: "Sports Shoes", url: "#" },
  { title: "Formal Shoes", url: "#" },
  { title: "Sneakers", url: "#" },
  { title: "Sandals & Floaters", url: "#" },
  { title: "Flip Flops", url: "#" },
  { title: "Socks", url: "#" },
];

export const Sports_Active_Wear = [
  { title: "Sports Shoes", url: "#" },
  { title: "Sports Sandals", url: "#" },
  { title: "Active T-Shirts", url: "#" },
  { title: "Track Pants & Shorts", url: "#" },
  { title: "Tracksuits", url: "#" },
  { title: "Jackets & Sweatshirts", url: "#" },
  { title: "Sports Accessories", url: "#" },
  { title: "Swimwear", url: "#" },
];

export const Gadgets = [
  { title: "Smart Wearables", url: "#" },
  { title: "Fitness Gadgets", url: "#" },
  { title: "Headphones", url: "#" },
  { title: "Speakers", url: "#" },
];

export const Fashion_Accessories = [
  { title: "Wallets", url: "#" },
  { title: "Belts", url: "#" },
  { title: "Perfumes & Body Mists", url: "#" },
  { title: "Trimmers", url: "#" },
  { title: "Deodorants", url: "#" },
  { title: "Ties, Cufflinks & Pocket Squares", url: "#" },
  { title: "Accessory Gift Sets", url: "#" },
  { title: "Caps & Hats", url: "#" },
  { title: "Mufflers, Scarves & Gloves", url: "#" },
  { title: "Phone Cases", url: "#" },
  { title: "Rings & Wristwear", url: "#" },
  { title: "Helmets", url: "#" },
];

export const Indian_FusionWear = [
  { title: "Kurtas & Suits", url: "#" },
  { title: "Kurtis, Tunics & Tops", url: "#" },
  { title: "Ethnic Wear", url: "#" },
  { title: "Leggings, Salwars & Churidars", url: "#" },
  { title: "Skirts & Palazzos", url: "#" },
  { title: "Sarees", url: "/saree" },
  { title: "Dress Materials", url: "#" },
  { title: "Lehenga Cholis", url: "#" },
  { title: "Dupattas & Shawls", url: "#" },
  { title: "Jackets", url: "#" },
];

export const Western_Wear = [
  { title: "Dresses", url: "#" },
  { title: "Tops", url: "#" },
  { title: "Tshirts", url: "#" },
  { title: "Jeans", url: "#" },
  { title: "Trousers & Capris", url: "#" },
  { title: "Shorts & Skirts", url: "#" },
  { title: "Co-ords", url: "#" },
  { title: "Playsuits", url: "#" },
  { title: "Jumpsuits", url: "#" },
  { title: "Shrugs", url: "#" },
  { title: "Sweaters & Sweatshirts", url: "#" },
  { title: "Jackets & Coats", url: "#" },
  { title: "Blazers & Waistcoats", url: "#" },
];

export const Shop_Occassion = [
  { title: "Office", url: "#" },
  { title: "Casual outing", url: "#" },
  { title: "Wedding", url: "#" },
  { title: "Party", url: "#" },
  { title: "Workout", url: "#" },
  { title: "Vacation", url: "#" },
  { title: "At Home", url: "#" },
];

export const WFootwear = [
  { title: "Flats", url: "#" },
  { title: "Casual Shoes", url: "#" },
  { title: "Heels", url: "#" },
  { title: "Boots", url: "#" },
  { title: "Sports Shoes & Floaters", url: "#" },
];

export const Sports_ActiveWear = [
  { title: "Clothing", url: "#" },
  { title: "Footwear", url: "#" },
  { title: "Sports Accessories", url: "#" },
  { title: "Sports Equipment", url: "#" },
];

export const Lingerie_Sleepwear = [
  { title: "Bra", url: "/categoryitems/7" },
  { title: "Briefs", url: "#" },
  { title: "Shapewear", url: "#" },
  { title: "Sleepwear & Loungewear", url: "#" },
  { title: "Swimwear", url: "#" },
  { title: "Camisoles & Thermals", url: "#" },
];

export const Beauty_Personal_Care = [
  { title: "Makeup", url: "#" },
  { title: "Skincare", url: "#" },
  { title: "Premium Beauty", url: "#" },
  { title: "Lipsticks", url: "#" },
  { title: "Fragrances", url: "#" },
];

export const Boys_Clothing = [
  { title: "T-Shirts", url: "#" },
  { title: "Shirts", url: "#" },
  { title: "Shorts", url: "#" },
  { title: "Jeans", url: "#" },
  { title: "Trousers", url: "#" },
  { title: "Clothing Sets", url: "#" },
  { title: "Ethnic Wear", url: "#" },
  { title: "Track Pants & Pyjamas", url: "#" },
  { title: "Jacket, Sweater & Sweatshirts", url: "#" },
  { title: "Party Wear", url: "#" },
  { title: "Innerwear & Thermals", url: "#" },
  { title: "Nightwear & Loungewear", url: "#" },
  { title: "Value Packs", url: "#" },
];

export const Girls_Clothing = [
  { title: "Dresses", url: "#" },
  { title: "Tops", url: "#" },
  { title: "Tshirts", url: "#" },
  { title: "Clothing Sets", url: "#" },
  { title: "Lehenga choli", url: "#" },
  { title: "Kurta Sets", url: "#" },
  { title: "Party wear", url: "#" },
  { title: "Dungarees & Jumpsuits", url: "#" },
  { title: "Skirts & shorts", url: "#" },
  { title: "Tights & Leggings", url: "#" },
  { title: "Jeans, Trousers & Capris", url: "#" },
  { title: "Jacket, Sweater & Sweatshirts", url: "#" },
  { title: "Innerwear & Thermal", url: "#" },
  { title: "Nightwear & Loungewear", url: "#" },
  { title: "Value Packs", url: "#" },
];

export const KFootwear = [
  { title: "Casual Shoes", url: "#" },
  { title: "Flipflops", url: "#" },
  { title: "Sports Shoes", url: "#" },
  { title: "Flats", url: "#" },
  { title: "Sandals", url: "#" },
  { title: "Heels", url: "#" },
  { title: "School Shoes", url: "#" },
  { title: "Socks", url: "#" },
];

export const Toys = [
  { title: "Learning & Development", url: "#" },
  { title: "Activity Toys", url: "#" },
  { title: "Soft Toys", url: "#" },
  { title: "Action Figure / Play set", url: "#" },
];

export const Infants = [
  { title: "Bodysuits & Rompers", url: "#" },
  { title: "Tshirts & Tops", url: "#" },
  { title: "Bottoms", url: "#" },
  { title: "Winter Wear", url: "#" },
  { title: "Innerwear & Sleepwear", url: "#" }
];

export const Kids_Accessories = [
  { title: "Bags & Backpacks", url: "#" },
  { title: "Watches", url: "#" },
  { title: "Jewellery & Hair accessory", url: "#" },
  { title: "Sunglasses", url: "#" },
  { title: "Masks", url: "#" }
];

export const KBrands = [
  { title: "H&M", url: "#" },
  { title: "Max Kids", url: "#" },
  { title: "Pantaloons", url: "#" },
  { title: "United Colors Of Benetton", url: "#" }
];
export const BedLinenFurnishing = [ { title: "Bedsheets", url: "#" } ];
export const Flooring = [ { title: "Carpets", url: "#" } ];
export const Bath = [ { title: "Towels", url: "#" } ];
export const LampsLighting = [ { title: "Floor Lamps", url: "#" } ];
export const HomeDécor = [ { title: "Wall Art", url: "#" } ];
export const KitchenTable = [ { title: "Dinnerware", url: "#" } ];
export const Storage = [ { title: "Organizers", url: "#" } ];
export const HBrands = [ { title: "HomeTown", url: "#" } ];

export const Makeup = [ { title: "Lipstick", url: "#" } ];
export const SkincareBathBody = [ { title: "Face Wash", url: "#" } ];
export const Haircare = [ { title: "Shampoo", url: "#" } ];
export const HairStraightener = [ { title: "Straighteners", url: "#" } ];
export const BTopBrands = [ { title: "Lakme", url: "#" } ];
export const Fragrances = [ { title: "Perfume", url: "#" } ];
export const MenGrooming = [ { title: "Trimmers", url: "#" } ];
export const BeautyGiftMakeupSet = [ { title: "Gift Sets", url: "#" } ];
