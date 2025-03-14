const receivesAFunction = (callback) => {
    callback();

};

receivesAFunction(() => console.log("CallbackFunctionCalled!"));



const returnsANamedFunction = () => {
       return function () {
        console.log("Named Function!");
    };
    
};

const namedFunction = returnsANamedFunction();
namedFunction();



const returnsAnAnonymousFunction = () => {
    return function () {
        console.log("Anonymous Function!");
    };
};

const myFunction = returnsAnAnonymousFunction();
myFunction();