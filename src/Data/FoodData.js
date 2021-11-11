export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: "currency",
    currency: "USD"
  })
}

export const foodItems =  [
  {
    name: "Cheese Pizza",
    img: '/img/pizza.png',
    section: "Pizza",
    price: 1
  },
  {
    name: "Pepperoni Pizza",
    img: '/img/pizza2.jpeg',
    section: "Pizza",
    price: 1.50
  },
  {
    name: "Chicken Pizza",
    img: '/img/chicken-pizza.jpeg',
    section: "Pizza",
    price: 1.50
  },
  {
    name: "Veggie Pizza",
    img: '/img/healthy-pizza.jpeg',
    section: "Pizza",
    price: 1.50
  },
  {
    name: "Burger",
    img: '/img/burger.jpeg',
    section: "Sandwich",
    price: 3
  },
  {
    name: "Gyro",
    img: '/img/gyro.jpeg',
    section: "Sandwich",
    price: 4.5
  },
  {
    name: "Shrimp Sandwich",
    img: '/img/sandwich.jpeg',
    section: "Sandwich",
    price: 6
  },
  {
    name: "Philly Cheesesteak",
    img: '/img/cheesesteak.jpeg',
    section: "Sandwich",
    price: 7
  },
  {
    name: "Chicken Fingers",
    img: '/img/chicken-fingers.jpeg',
    section: "Chicken",
    price: 5
  },
  {
    name: "Chicken Wings",
    img: '/img/chicken-wings.jpeg',
    section: "Chicken",
    price: 5
  },
  {
    name: "Fries",
    img: '/img/fries.jpeg',
    section: "Sides",
    price: 2
  },
  {
    name: "Onion Rings",
    img: '/img/onion-rings.jpeg',
    section: "Sides",
    price: 2
  },
  {
    price: 1,
    name: "Soda",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Dr.Pepper", "Seltzer", "Water"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]) {
    res[food.section] = [];
  }
    res[food.section].push(food);
    return res;
}, { })
