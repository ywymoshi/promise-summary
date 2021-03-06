const { asyncFulfilledTask, asyncRejectedTask } = require("./util")

// 核心：不关失败与否，结果都要告诉我

const  fulfilledPromise = Promise.allSettled([1, new Set(), asyncFulfilledTask(1, 2000)])

console.log(fulfilledPromise)
fulfilledPromise.then((res) => {
    console.log(res)
})


const  rejectPromise = Promise.allSettled([asyncFulfilledTask(2, 2000), asyncFulfilledTask(3, 1000), asyncRejectedTask(4, 3000)])
console.log(rejectPromise)
rejectPromise.then((res) => {
    console.log(res)
})


const  data = Promise.allSettled([1, new Set(), 1])

// 谁先输出，为什么
console.log(data)

data.then((res) => {
    console.log(res)
})