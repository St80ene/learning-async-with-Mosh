const promise = Promise.resolve('Promise resolved')
const promise2 = Promise.reject('calling API....');

Promise.race([promise, promise2]).then(result => console.log(result)).catch(err => console.log(err))