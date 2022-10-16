let promise = new Promise((resolve, reject) => {
    console.log("hello");
    reject("error came")
    resolve("solved successfully");
})
console.log(1);

setTimeout(() => {
    console.log("hi hello")
}, 3000)
console.log(2);
console.log(promise)
promise.then((mess) => {
    console.log(mess);
}).catch((err) => {
    console.log(err)
})

let pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("we are at first")
        resolve("promise1 resloved")
    }, 2000)
})

pr1.then((data) => {
    console.log(data)
    let p2 = new Promise((resolve, reject) => {
        resolve("second promise resoved")
    })
    return p2
}).then((data) => {
    console.log(data)
    let p3 = new Promise((resolve, reject) => {
        resolve("third promise is resoved");
    })
    return p3;
}).then((data) => {
    console.log(data)
})


let pro = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve("resolved")
        }, 3000)
    })
}

pro("calling").then((data) => {
    console.log(data)
})

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("on promise 1");
        resolve(1)
            //reject(new Error("error occured"))
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("on promise 2");
        resolve(2)
    }, 1000)
})
let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("on promise 2");
            resolve(3)
        }, 1000)
    })
    //it will return all the values if all the promise are resolved if any error occur it wont enter in the then section
Promise.all([p1, p2, p3]).then((values) => {
        console.log(values)
    })
    //it will return value and status
Promise.allSettled([p1, p2, p3]).then((values) => {
        console.log(values)
    })
    //it will return the  promise value which is finised first
Promise.race([p1, p2, p3]).then((values) => {
    console.log("first resoved promise is ", values)
})


//Async await

let as = async() => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("on promise 1");
            resolve(1)
                //reject(new Error("error occured"))
        }, 3000)
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("on promise 2");
            resolve(2)
        }, 5000)
    })
    console.log("started fetching p1")
    let res1 = await p1
    console.log("ended fetching p1")
    console.log("started fetching p2")
    let res2 = await p2
    console.log("ended fetching p2")
    return [res1, res2]
}
as().then((values) => {
    console.log(values)
});