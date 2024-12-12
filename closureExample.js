function outerFunction() {
    let message = "Hello, this is a closure example!";
    
    function innerFunction() {
        console.log(message);
    }
    
    return innerFunction;
}

const storedFunction = outerFunction(); 
storedFunction(); 