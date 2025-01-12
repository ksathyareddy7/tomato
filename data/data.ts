import r1 from "./r1.json";
import r2 from "./r2.json";
import r3 from "./r3.json";
import r4 from "./r4.json";
import r5 from "./r5.json";
import r6 from "./r6.json";
import r7 from "./r7.json";
import r8 from "./r8.json";
import r9 from "./r9.json";
import r10 from "./r10.json";
import { I_Item } from "./helpers";

export interface I_Restaurant {
  id: number;
  name: string;
  rating: string;
  deliveryTime: string;
  description: string;
  deliveryType: string;
  items: I_Item[];
  image: string;
  categories: string[];
}

export const restaurantsData: I_Restaurant[] = [
  {
    id: 1,
    name: "Haldiram's",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/0/550/668852e233c5c38b48e68ff39a7eb857_o2_featured_v2.jpg?output-format=webp",
    rating: "4.3",
    deliveryTime: "40",
    description:
      "Haldiram's is a renowned Indian sweets, snacks, and restaurant company established in 1937. Known for its traditional namkeens and sweets, it has a significant presence across India and internationally.",
    deliveryType: "Free",
    items: r1,
    categories: [
      "Snacks & Chaat",
      "Tandoor & Punjabi Meals",
      "Combos & Rice Bowl",
      "Sweets",
      "Gajjak Specials",
      "Purani Dilli Ki Chaat",
      "Nashta",
      "Sandwiches",
      "North Indian",
      "Breads",
      "South Indian",
      "Chinese",
      "Meetha Mazaa",
      "Kaju Sweets",
      "Khoya & Milk Sweets",
      "Ladoo",
      "Ghee Sweets",
      "Packed Sweets",
      "Tin Sweets",
      "Meal Combos",
      "Namkeens",
      "Mathis",
      "Ready To Eat",
      "other",
    ],
  },
  {
    id: 2,
    name: "The Burger Club",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/3/17953943/816872e9f1fcc43304e21a0f050f5f21_o2_featured_v2.jpg?output-format=webp",
    rating: "4.2",
    deliveryTime: "42",
    description:
      "The Burger Club is a popular fast-food chain in Delhi NCR, India, known for its gourmet burgers and crinkly fries. Founded in 2015, it has expanded to multiple locations, offering fresh and wholesome burgers.",
    deliveryType: "Free",
    items: r2,
    categories: [
      "Veg Burgers",
      "Non-Veg Burgers",
      "Veg Sides",
      "Cheesy Fries",
      "Cheesy Overloaded Fries",
      "Sweet Potato Fries",
      "Chai",
      "Coffee",
      "Coolers",
      "Frappe",
      "Ice Tea",
      "Shakes",
      "Desserts",
      "other",
    ],
  },
  {
    id: 3,
    name: "Natural Ice Cream",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/4/309844/c88d2fde8c61549fb83cfdf2049e9760_o2_featured_v2.jpg",
    rating: "4.6",
    deliveryTime: "31",
    description:
      "Natural Ice Cream is celebrated for its authentic fruit-based ice creams made without artificial flavors or preservatives, offering a variety of seasonal flavors.",
    deliveryType: "Paid",
    items: r3,
    categories: ["Mini pack combo", "other"],
  },
  {
    id: 4,
    name: "Jain Chawal Wale",
    image:
      "https://b.zmtcdn.com/data/dish_photos/3f3/f9ba64e55eda32c018a072396e9163f3.jpeg?fit=around|360:360&crop=360:360;*,*",
    rating: "4.3",
    deliveryTime: "35",
    description:
      "Jain Chawal Wale is a well-known eatery in Delhi, famous for its North Indian vegetarian dishes, especially its flavorful rice and curry combinations.",
    deliveryType: "Paid",
    items: r4,
    categories: [
      "Chowmein",
      "Fried Rice",
      "Chaat",
      "Snacks",
      "Drinks (Beverages)",
      "Milkshakes",
      "other",
    ],
  },
  {
    id: 5,
    name: "Pizza Hut",
    image:
      "https://b.zmtcdn.com/data/dish_photos/367/eecfccd3c9402a2de57618f023b3b367.jpeg?fit=around|360:360&crop=360:360;*,*",
    rating: "4.1",
    deliveryTime: "43",
    description:
      "Pizza Hut is an international restaurant chain known for its Italian-American cuisine menu, including pizza and pasta, as well as side dishes and desserts.",
    deliveryType: "Free",
    items: r5,
    categories: [
      "Veg Pizza",
      "Desserts",
      "Momo Mia! Meal for 1",
      "Momo Mia! Pizza",
      "Cheesy Baked Momos",
      "Melts - Meal for 1",
      "Melts - Meal for 2",
      "Meal for 2",
      "Meal for 4",
      "Meal for 1",
      "Combos and Deals",
      "Drinks (Beverages)",
      "other",
    ],
  },
  {
    id: 6,
    name: "Bikanervala",
    image:
      "https://b.zmtcdn.com/data/dish_photos/0aa/bfa5ba14f8a2f3fc13296e475f1b20aa.jpeg?fit=around|360:360&crop=360:360;*,*",
    rating: "4.2",
    deliveryTime: "40",
    description:
      "Bikanervala is a leading Indian sweets and snacks manufacturer with a global presence, offering a wide range of traditional delicacies and fast food items.",
    deliveryType: "Paid",
    items: r6,
    categories: [
      "Lohri Gift Hampers",
      "Pizza",
      "Chinese",
      "Tawa And Tandoor Se",
      "Sandwiches Burger & Fries",
      "North Indian & Main Course",
      "Seedha Punjab Se",
      "Thali & Platters",
      "South Indian",
      "Combos & Eco Meals",
      "Dhokla",
      "Chatpati Chaat",
      "Popular Assortment",
      "Snacks",
      "Winter Special",
      "Bengali Sweets",
      "Kaju Sweets",
      "Burfi",
      "Laddu",
      "Khoya/Milk Sweets",
      "Ghee Sweets",
      "Rasbhari",
      "Jalebi, Rabri & Kulfi",
      "Gujia",
      "Dry Fruit Sweets",
      "Halwa",
      "Chikki & Bites",
      "Petha",
      "Soan Papdi",
      "Tin Sweets",
      "Chana Almond Bite",
      "Boondi & Laccha",
      "Mixture",
      "Nuts & Dal",
      "Bhujia & Sev",
      "Papad",
      "Namkeen Jar and Roasted Dry Fruit",
      "Tapri Tales",
      "Classic Cakes",
      "Premium Cakes",
      "Pastry , Tarts & Pie",
      "Classic Pastry",
      "Gift Packs",
      "Chocolate Bars",
      "Bikano Cookies",
      "Cookie Boxes",
      "Rusk",
      "Khakhra",
      "Hot Beverages",
      "Flavoured Milk",
      "Lassi & Chaach",
      "Packed Beverages",
      "Baklava Gifting Boxes",
      "Meal",
      "Gravies",
      "other",
    ],
  },
  {
    id: 7,
    name: "The Yellow Bowl",
    image:
      "https://b.zmtcdn.com/data/dish_photos/6ec/f02dc3c3211a32e9c97e0a74873b96ec.jpeg?fit=around|360:360&crop=360:360;*,*",
    rating: "4.3",
    deliveryTime: "42",
    description:
      "The Yellow Bowl is a cozy eatery known for its diverse menu, offering a fusion of Indian and continental dishes in a vibrant ambiance.",
    deliveryType: "Free",
    items: r7,
    categories: [
      "Steamed Momos",
      "Fried Momos",
      "Atrangi Momos",
      "Kurkure Momos",
      "Dragon Momos",
      "Corn N Cheese Momos (6 Pcs)",
      "Malai Momos",
      "Tandoori Momos",
      "Tandoori Chaap",
      "Tandoori Kebab",
      "Tandoori Mushroom",
      "Tandoori Paneer",
      "Chinese Roll",
      "Chinese Kathi Roll (Chinese Style)",
      "Tandoori Rolls (In Rumali Roti )",
      "other",
    ],
  },
  {
    id: 8,
    name: "Hira Sweets",
    image:
      "https://b.zmtcdn.com/data/dish_photos/975/e322b71ba1b61bc9632c3b674b436975.jpg?fit=around|360:360&crop=360:360;*,*",

    rating: "4.3",
    deliveryTime: "41",
    description:
      "Hira Sweets is a traditional sweet shop offering a variety of Indian mithai and snacks, known for its quality and authentic taste.",
    deliveryType: "Paid",
    items: r8,
    categories: [
      "Desi Ghee Sweets",
      "Prasadam",
      "Sweets",
      "Pizza",
      "Maida Namkeen",
      "Chatpata Namkeen and Mixture",
      "Packed Sweet and Namkeen Mixture",
      "Desserts",
      "Drinks (Beverages)",
      "Winter Specials",
      "other",
    ],
  },
  {
    id: 9,
    name: "RollsKing",
    image:
      "https://b.zmtcdn.com/data/dish_photos/6d3/4f6515abff3f049a0ea70d74b04f66d3.jpeg?fit=around|360:360&crop=360:360;*,*",

    rating: "4.2",
    deliveryTime: "37",
    description:
      "RollsKing specializes in a variety of delicious and hearty rolls, blending traditional Indian flavors with modern culinary techniques.",
    deliveryType: "Paid",
    items: r9,
    categories: [
      "Combos",
      "Value Meals",
      "Non Veg Roll",
      "2-In-1 Non Veg Rolls",
      "Veg Roll",
      "2-In-1 Veg Rolls",
      "other",
    ],
  },
  {
    id: 10,
    name: "Biryani Blues",
    image:
      "https://b.zmtcdn.com/data/dish_photos/f8e/35f68d82cd3723079ca7cef8d8e7ef8e.jpeg?fit=around|360:360&crop=360:360;*,*",

    rating: "4.3",
    deliveryTime: "36",
    description:
      "Biryani Blues offers authentic Hyderabadi biryani and other traditional Indian dishes, known for its rich flavors and quality ingredients.",
    deliveryType: "Paid",
    items: r10,
    categories: ["Biryani"],
  },
];

export interface I_Category {
  id: number;
  category: string;
  image: string;
  price: number;
}

export const categoriesData: I_Category[] = [
  {
    id: 10,
    category: "Burger",
    image:
      "https://b.zmtcdn.com/data/dish_photos/6ec/f02dc3c3211a32e9c97e0a74873b96ec.jpeg?fit=around|360:360&crop=360:360;*,*",
    price: 170,
  },

  {
    id: 2,
    category: "Pizza",
    image:
      "https://b.zmtcdn.com/data/dish_photos/1d8/aed52ab0d028996e060b772f11ff31d8.jpeg?fit=around|360:360&crop=360:360;*,*",
    price: 199,
  },
  {
    id: 1,
    category: "Coffee",
    image:
      "https://b.zmtcdn.com/data/dish_photos/4bc/5ced52e3a03a0752c46193c7abd824bc.jpeg?fit=around|360:360&crop=360:360;*,*",
    price: 150,
  },
  {
    id: 3,
    category: "Chinese",
    image:
      "https://b.zmtcdn.com/data/dish_photos/22e/77994a4ea7f9b57274f70998785c722e.jpg?fit=around|360:360&crop=360:360;*,*",
    price: 250,
  },
  {
    id: 4,
    category: "Chaap",
    image:
      "https://b.zmtcdn.com/data/dish_photos/d96/b263494fb1be20efe8d31ee9d2722d96.jpeg?fit=around|360:360&crop=360:360;*,*",
    price: 180,
  },
  {
    id: 5,
    category: "Momos",
    image:
      "https://b.zmtcdn.com/data/dish_photos/a3c/5d45a69b728f39787d748486a72c7a3c.jpeg?fit=around|360:360&crop=360:360;*,*",
    price: 160,
  },
  {
    id: 6,
    category: "Ice Cream",
    image:
      "https://b.zmtcdn.com/data/dish_photos/908/6160360502a4585f9ce4b032c5e3d908.jpeg?fit=around|360:360&crop=360:360;*,*",
    price: 60,
  },
];
