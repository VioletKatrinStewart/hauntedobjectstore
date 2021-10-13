// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { hauntedStuff } from '../data/hauntedstuff.js';
import { addItem, getCart, findById } from '../utils.js';
//findById,
//findbyID is a function from yesterday which I will go back and write at the end of the day

const test = QUnit.test;

test('findById should return the item matching the ID', (expect)=>{
    const expected = { 
        id: '4',
        name: 'Key',
        img: './assets/key2.png',
        rating: '4',
        price: 75,
    };
    const actual = findById('4', hauntedStuff);
    expect.deepEqual(actual, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('getCart should return the cart if it exisits', (expect)=>{
    // arrange
    const fakeCart = [
        { id: '1', quantity: 3 },
        { id: '3', quantity: 4 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    // act
    const cart = getCart();
    // assert
    expect.deepEqual(cart, fakeCart);
});

test('getCart should return an empty array if the cart does not exist', (expect)=>{
    // arrange
    // nothing to arrange bc nothing in localStorage

    // act 
    localStorage.removeItem('CART');
    const cart = getCart();

    // assert
    expect.deepEqual(cart, []);
});

test('addItem should increment the quantity if item in cart', (expect)=>{
    const fakeCart = [
        { id: '1', qty: 3 },
        { id: '3', qty: 4 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    // act
    addItem('1');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 4 },
        { id: '3', qty: 4 }
    ];
    expect.deepEqual(cart, expected);
});


test('addItem should add an item if its not already there', (expect) =>{
    localStorage.removeItem('CART');
    const expected = [{ id: '1', qty: 1 }];
    addItem('1');
    const cart = getCart();
    expect.deepEqual(cart, expected);

});