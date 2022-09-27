const add = (num1, num2) => {
    return num1 + num2
}

const FindByName = (names, user) => {
    for (let i=0; i < names.length; i++) {
        const currentUser = names[i];
        if (currentUser.name === user) {
            return currentUser;
        }
    }
    return null;
}

module.exports = {
    add: add,
    FindByName: FindByName,
    }
