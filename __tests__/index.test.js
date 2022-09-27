const add  = require ('../index').add();
const FindByName = require ('../index').FindByName();


test('THe add function adds two numbers and returns the sum', () => {
  // Arrange
    const number1 = 5;
    const number2 = 10;

  // Act
  const sum = add(number1 , number2);

  // Assert

    expect(sum).toBe(15);
})



test('FindByName will return an object from an array with a specified name', () =>{
    // ARRANGE
    const usernames = [
        {name: "Piet", id: 1},
        {name: "Klaas", id: 2},
        {name: "Henk", id: 3},
    ];

    const userToFind = "Klaas";

    // ACT
    const result = FindByName(usernames, userToFind);
    // ASSERT
    expect(result).toEqual({name: "Klaas", id: 2})
})
test ('FindByName returns null if a user is not found', () => {

    // Arrange
    const usernames = [
        {name: "Piet", id: 1},
        {name: "Klaas", id: 2},
        {name: "Henk", id: 3},
    ];

    const userToFind = "Beppie";


    // Act
    const result = FindByName(usernames, userToFind);

    // Assert
    expect(result).toBeNull();


})