const promise = new Promise(function(resolve, reject) {
    //Do any async task
    //DB calls, network
    setTimeout(function() {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promise.then(function(){
    console.log("Promise consumed")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username:"Chai", email:"Chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:"hitesh", password:"123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => {
    console.log("The promise is eithier resolve or rejected");
})


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:"javascript", password:"123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}
consumePromiseFive()