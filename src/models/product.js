const products = [
    {
        id: 1,
        name: "Whiskey Jack Daniels Honey 750ml",
        price: 19900,
        img: "/img/jack.png",
        description: "Descubrí el irresistible sabor..."
    },
    {
        id: 2,
        name: "Coca Cola Lata 220ml Pack x8",
        price: 760,
        img: "/img/coca.png",
        description: "Bebida refrescante clásica"
    },
    {
        id: 3,
        name: "Whiskey Jameson 750ml",
        price: 18500,
        img: "/img/placeholder.jpg",
        description: "Whiskey irlandés suave y equilibrado, ideal para cualquier ocasión."
    },
    {
        id: 4,
        name: "Whiskey Chivas Regal 12 Años 750ml",
        price: 32000,
        img: "/img/placeholder.jpg",
        description: "Blend premium con notas suaves y sofisticadas."
    },
    {
        id: 5,
        name: "Whiskey Ballantine's Finest 750ml",
        price: 21000,
        img: "/img/placeholder.jpg",
        description: "Clásico escocés con un sabor balanceado y accesible."
    },
    {
        id: 6,
        name: "Cerveza Heineken Lata 473ml",
        price: 1200,
        img: "/img/placeholder.jpg",
        description: "Cerveza lager refrescante con sabor suave y equilibrado."
    },
    {
        id: 7,
        name: "Fernet Branca 750ml",
        price: 9500,
        img: "/img/placeholder.jpg",
        description: "Amargo herbal tradicional, perfecto para combinar con cola."
    },
    {
        id: 8,
        name: "Vodka Smirnoff 700ml",
        price: 8700,
        img: "/img/placeholder.jpg",
        description: "Vodka clásico ideal para tragos y cocktails."
    }
];

const Product = {
    getAll: () => products,

    getById: (id) => products.find(p => p.id == id)
};

module.exports = Product;