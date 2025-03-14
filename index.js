const receivesAFunction = (callback) => {
    callback();

};

receivesAFunction(() => console.log("CallbackFunctionCalled!"));



const returnsANamedFunction = () => {
       function namedFunction () {
        console.log("Named Function!");
    }
    return namedFunction;
    
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