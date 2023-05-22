function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    console.log(
        "name: " + name + " | email: " + email + " | is paid: " + isPaid
    );
};

let myValue = addTwo(5);
getUpper("hi ryan");
signUpUser("ryan", "ryan@gmail.com", false);
loginUser("ryan", "ryan@gmail.com");
loginUser("ashley", "ashley@gmail.com", true);

// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return `Hello ${s}`;
};

// const heroes = ["thor", "spiderman", "ironman"];
const heroes = [1, 2, "ironman"];

heroes.map((hero): string => {
    return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {};
