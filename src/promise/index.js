const promiseFoo = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("Promise Resolve called");
        } else {
            reject("Promise Reject Called");
        }
    });
};

promiseFoo()
    .then(response => console.log(response))
    .catch(response => console.log(response));
