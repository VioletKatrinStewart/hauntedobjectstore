// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById, getCart } from '../utils.js';

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
        { id: '1', qty: 3 },
        { id: '3', qty: 4 }
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
    const cart = getCart();

    // assert
    expect.deepEqual(cart, []);
});

