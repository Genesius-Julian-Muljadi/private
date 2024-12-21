interface Product {
    name: string;
    price: number;
    cat: string;
};

interface Category {
    cat: string;
    disc: number;
};

const categoryDiscounts: Category[] = [
    {
        cat: "A",
        disc: 10
    },
    {
        cat: "B",
        disc: 20,
    }
];

function applyDiscountByCategory(price: number, cat: string) {
    const category = categoryDiscounts.find((item: Category) => {
        item.cat === cat;
    });
    return category ?
        price * (1 - (category.disc / 100)) :
        price;
};

function applyDiscountToProducts(prods: Product[]) {
    for (let k in prods) {
        prods[k].price = applyDiscountByCategory(prods[k].price, prods[k].cat);
    };

    console.log(prods);
};

