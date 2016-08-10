// Dummy product data for the app.

const ITEMS = [
    {
        name: 'Cake',
        description: 'A delicious red velvet cake.',
        price: 2.50,
        availableDate: '25/10/2016',
        isTaxable: false
    },
    {
        name: 'Mars drink',
        description: 'A chocoloate and caramel flavour milk drink.',
        price: 1.99,
        availableDate: '27/11/2016',
        isTaxable: true
    },
    {
        name: 'Space Raiders',
        description: 'Pickled onion flavour corn snack.',
        price: 0.55,
        availableDate: '19/12/2016',
        isTaxable: true
    }
];

export default function getData() {
    return ITEMS;
};