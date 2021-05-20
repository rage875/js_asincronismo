const promiseFoo = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("Promise Resolve called");
        } else {
            reject("Promise Reject Called");
        }
    });
};

const promiseFooTimeOut = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve("Promise Resolve from foo timeout called");
            },
            2000);
        } else {
            reject("Promise Reject Called");
        }
    });
};

promiseFoo()
    .then(response => console.log(response))
    .catch(response => console.log(response));

promiseFooTimeOut()
    .then(response => console.log(response))
    .catch(response => console.log(response));

// To catch different promises result
Promise.all([promiseFoo(), promiseFooTimeOut()])
    .then( reponse => {
        console.log(`Array of results: ${reponse}`)
    })
    .catch( error => {
        console.log(`Array of errors: ${error}`)
    });