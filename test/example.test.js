// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { addItem, findById, getCart } from '../utils.js';
//findbyID is a function from yesterday which I will go back and write at the end of the day

const test = QUnit.test;

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
    // arrange
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
    // assert
    expect.deepEqual(cart, expected);
});


