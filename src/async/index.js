const asyncFoo = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout( () => { resolve("asyncFoo called");}, 2000)
        : reject(new Error( "Test error"));
    });
}

const foo = async () => {
    console.log("Foo called")
    const asyncCall = await asyncFoo();
    console.log(asyncCall);
}

foo()
console.log("Before log")