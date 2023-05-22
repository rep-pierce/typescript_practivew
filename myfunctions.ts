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

export {};
