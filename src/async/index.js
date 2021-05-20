const asyncFoo = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout( () => { resolve("asyncFoo called\n");}, 2000)
        : reject(new Error( "Test error"));
    });
}

const foo = async () => {
    console.log("Foo called")
    const asyncCall = await asyncFoo();
    console.log(asyncCall);
}

//foo()
//console.log("Before log")

const anotherFoo =  async () => {
    try {
        console.log("another foo called")
        const asyncCall = await asyncFoo();
        console.log(asyncCall);
    } catch (error) {
        console.log("CATCH: " + error);
    }
}

anotherFoo();
console.log("Before log")