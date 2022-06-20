const myProfile = {
    name: "Ahmad Gnaiem",
    profile_image: require("../assets/images/profile2.png"),
    address: "Beer Sheva , Israel"
}

const categories = [
    {
        id: 1,
        name: "Break Fast",
        icon: require("../assets/icons/breakfast.png")
    },
    {
        id: 2,
        name: "Main Dish",
        icon: require("../assets/icons/main.png")
    },
    {
        id: 3,
        name: "Pasta",
        icon: require("../assets/icons/pasta.png")
    },
    {
        id: 4,
        name: "Salad",
        icon: require("../assets/icons/salad.png"),
    },
    {
        id: 5,
        name: "Pastry",
        icon: require("../assets/icons/pastries.png"),
    },
    {
        id: 6,
        name: "Cold Drink",
        icon: require("../assets/icons/soft-drink.png"),
    },
    {
        id: 7,
        name: "Hot Drink ",
        icon: require("../assets/icons/hot-drink.png"),
    },

]

const BreakFast = {
    id: 1,
    name: "BreakFast",
    description: "Healthy Breakfast",
    categories: [1],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/breakfast2.png")
}

const Granola = {
    id: 2,
    name: "Granola & Yogurt",
    description: "Granola and fruit",
    categories: [1],
    price: 10.99,
    calories: 262,
    isFavourite: false,
    image: require("../assets/dummyData/granola.png")
}

const Entrecote = {
    id: 3,
    name: "Entrecote",
    description: "Steak with potatoes",
    categories: [2],
    price: 11,
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/grilled-meat.png")
}

const SeaFood = {
    id: 4,
    name: "Sea Food",
    description: "Mix Of SeaFood",
    categories: [2],
    price: 11,
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/seafood.png")
}

const Salmon = {
    id: 5,
    name: "Salmon",
    description: "Grilled Salmon",
    categories: [2],
    price: 11,
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/salmon.png")
}

const Pizza = {
    id: 6,
    name: "Pizza",
    description: "Paparoni Pizza",
    categories: [2],
    price: 16,
    calories: 120,
    isFavourite: false,
    image: require("../assets/dummyData/pizza.png")
}

const CheesePasta = {
    id: 7,
    name: "Cheese Pasta",
    description: "Pasta Pappardelle With Cheese",
    categories: [3],
    price: 11,
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/cheese-pasta.png")
}

const AlfredoPasta = {
    id: 8,
    name: "Pasta Alfredo",
    description: "Pasta in a cream sauce with mushrooms",
    categories: [3],
    price: 13,
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/pasta-alfredo.png")
}

const MeatPasta = {
    id: 9,
    name: "Pasta With MeatBalls",
    description: "Pasta With MeatBalls",
    categories: [3],
    price: 16,
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/pasta-with-meatballs.png")
}

const CaeserSalad = {
    id: 10,
    name: "Caeser Salad",
    description: "Classic Caeser Salad",
    categories: [4, 1],
    price: 18,
    calories: 120,
    isFavourite: true,
    image: require("../assets/dummyData/Caesar-salad.png")
}

const GreekSalad = {
    id: 11,
    name: "Greek Salad",
    description: "Green Salad",
    categories: [4],
    price: 11,
    calories: 100,
    isFavourite: true,
    image: require("../assets/dummyData/Greek-salad.png")
}

const CobbSalad = {
    id: 12,
    name: "Cobb Salad",
    description: "Mix Salad",
    categories: [4],
    price: 20,
    calories: 135,
    isFavourite: true,
    image: require("../assets/dummyData/Cobb-salad.png")
}

const ChocolateCroissant = {
    id: 13,
    name: "Chocolate Croissant",
    description: "Chocolate Croissant",
    categories: [5],
    price: 3,
    calories: 70,
    isFavourite: true,
    image: require("../assets/dummyData/chocolate-croissant.png")
}

const ButterCroissant = {
    id: 14,
    name: "Butter Croissant",
    description: "Butter Croissant",
    categories: [5],
    price: 3,
    calories: 60,
    isFavourite: false,
    image: require("../assets/dummyData/butter-Croissant.png")
}

const CocoCola = {
    id: 15,
    name: "Coco Cola",
    description: "Coco Cola",
    categories: [6],
    price: 2,
    calories: 60,
    isFavourite: false,
    image: require("../assets/dummyData/coco-cola.png")
}

const CocoZero = {
    id: 16,
    name: "Coco Cola Zero",
    description: "Coco Cola Zero",
    categories: [6],
    price: 2,
    calories: 60,
    isFavourite: false,
    image: require("../assets/dummyData/zero.png")
}



const Cappuccino = {
    id: 17,
    name: "Cappuccino",
    description: "Paparoni Pizza",
    categories: [7],
    price: 5,
    calories: 63,
    isFavourite: false,
    image: require("../assets/dummyData/cappuccino.png")
}

const Espresso = {
    id: 18,
    name: "Espresso",
    description: "Espresso Macchiato",
    categories: [7],
    price: 6,
    calories: 63,
    isFavourite: false,
    image: require("../assets/dummyData/espresso.png")
}

const Coffee = {
    id: 19,
    name: "Coffee",
    description: "Americano",
    categories: [7],
    price: 3,
    calories: 63,
    isFavourite: false,
    image: require("../assets/dummyData/coffee.png")
}

const Tea = {
    id: 20,
    name: "Tea",
    description: "Turkey Tea",
    categories: [7],
    price: 2,
    calories: 50,
    isFavourite: false,
    image: require("../assets/dummyData/tea.png")
}


const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            BreakFast, Granola,
            CaeserSalad, CobbSalad, GreekSalad,
            MeatPasta, AlfredoPasta, CheesePasta,
            Pizza, Salmon, SeaFood, Entrecote,
            ChocolateCroissant, ButterCroissant,
            CocoCola, CocoZero,
            Cappuccino, Espresso, Coffee, Tea,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            BreakFast, Granola,
            CaeserSalad, CobbSalad, GreekSalad,
            MeatPasta, AlfredoPasta, CheesePasta,
            Pizza, Salmon, SeaFood, Entrecote,
            ChocolateCroissant, ButterCroissant,
            CocoCola, CocoZero,
            Cappuccino, Espresso, Coffee, Tea,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            BreakFast, Granola,
            CaeserSalad, CobbSalad, GreekSalad,
            MeatPasta, AlfredoPasta, CheesePasta,
            Pizza, Salmon, SeaFood, Entrecote,
            ChocolateCroissant, ButterCroissant,
            CocoCola, CocoZero,
            Cappuccino, Espresso, Coffee, Tea,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            BreakFast, Granola,
            CaeserSalad, CobbSalad, GreekSalad,
            MeatPasta, AlfredoPasta, CheesePasta,
            Pizza, Salmon, SeaFood, Entrecote,
            ChocolateCroissant, ButterCroissant,
            CocoCola, CocoZero,
            Cappuccino, Espresso, Coffee, Tea,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            BreakFast, Granola,
            CaeserSalad, CobbSalad, GreekSalad,
            MeatPasta, AlfredoPasta, CheesePasta,
            Pizza, Salmon, SeaFood, Entrecote,
            ChocolateCroissant, ButterCroissant,
            CocoCola, CocoZero,
            Cappuccino, Espresso, Coffee, Tea,
        ]
    },

]

const sizes = [
    {
        id: 1,
        label: 'S'
    },
    {
        id: 2,
        label: 'M'
    },
    {
        id: 3,
        label: 'L'
    },

]

const myCart = [
    {
        ...BreakFast,
        qty: 1
    },
    {
        ...Granola,
        qty: 1
    },
    {
        ...CaeserSalad,
        qty: 1
    }
]

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]


const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]

const kfc = require("../assets/dummyData/kfc.png")
const pizzaHut = require("../assets/dummyData/pizza_hut.png")
const mcDonald = require("../assets/dummyData/mcdonald.png")
const burgerKing = require("../assets/dummyData/burger_king.png")
const domino = require("../assets/dummyData/domino_pizza.png")
const starbucks = require("../assets/dummyData/starbucks.png")
const veg_biryani = require("../assets/dummyData/veg_biryani.png")
const wrap_sandwich = require("../assets/dummyData/wrap_sandwich.png")

const orderHistories = [
    {
        title: "19 Sep 2021",
        data: [
            {
                id: 18888,
                name: "Pizza Hut",
                image: pizzaHut,
                price: 35.30,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 3,
                deliveredTime: "19 Sep, 14:30"
            },
            {
                id: 28888,
                name: "KFC",
                image: kfc,
                price: 55.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "19 Sep, 12:30"
            },
            {
                id: 38888,
                name: "Domino's Pizza",
                image: domino,
                price: 15.50,
                status: "C",
                status_desc: "Order Cancel",
                itemCount: 1,
                deliveredTime: "19 Sep, 10:30"
            },
        ]
    },
    {
        title: "15 Sep 2021",
        data: [
            {
                id: 48888,
                name: "Starbucks",
                image: starbucks,
                price: 40.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "15 Sep, 10:00"
            }
        ]
    }
]

const upcomingOrders = [
    {
        title: "",
        data: [
            {
                id: 88888,
                name: "Starbucks",
                image: starbucks,
                price: 10.00,
                status: "O",
                status_desc: "Food on the way",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
            {
                id: 98888,
                name: "McDonald",
                image: mcDonald,
                price: 20.00,
                status: "O",
                status_desc: "Food on the way",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
        ]
    },
    {
        title: "Latest Orders",
        data: [
            {
                id: 68888,
                name: "Starbucks",
                image: starbucks,
                price: 10.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
            {
                id: 78888,
                name: "Burger King",
                image: burgerKing,
                price: 12.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "27 Sep, 8:00"
            }
        ]
    }
]

const availableCoupons = [
    {
        id: 1,
        name: "Burger King",
        image: burgerKing,
        description: 'Valid until 01 Jan 2022',
        discountPercent: 20,
    },
    {
        id: 2,
        name: "KFC",
        image: kfc,
        description: 'Valid until 01 Jan 2022',
        discountPercent: 10,
    },
    {
        id: 3,
        name: "Pizza Hut",
        image: pizzaHut,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 35,
    },
    {
        id: 4,
        name: "Starbucks",
        image: starbucks,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 15,
    },
    {
        id: 5,
        name: "Domino's Pizza",
        image: domino,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 30,
    },
]

const usedCoupons = [
    {
        id: 1,
        name: "Burger King",
        image: burgerKing,
        description: 'Used on 2 Sep 2021',
        discountPercent: 20,
    },
    {
        id: 2,
        name: "Starbucks",
        image: starbucks,
        description: 'Used on 18 Sep 2021',
        discountPercent: 15,
    },
]

const notifications = [
    {
        title: "Today",
        data: [
            {
                id: 1,
                image: domino,
                title: "Domino's - Buy 1 get 1 free",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "a few seconds ago"
            },
            {
                id: 2,
                image: veg_biryani,
                title: "Veg Biryani - 35% sale today",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "5 mins ago"
            },
        ]
    },
    {
        title: "Yesterday",
        data: [
            {
                id: 3,
                image: domino,
                title: "Domino's - Buy 1 get 1 free",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "1 day ago"
            },
            {
                id: 4,
                image: veg_biryani,
                title: "Veg Biryani - 35% sale today",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "1 day ago"
            }
        ]
    }
]

const deliveryMan = {
    name: "Williams Adam",
    avatar: require("../assets/dummyData/delivery_man.png")
}

export default {
    myProfile,
    categories,
    menu,
    sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
    orderHistories,
    upcomingOrders,
    availableCoupons,
    usedCoupons,
    notifications,
    deliveryMan,
}