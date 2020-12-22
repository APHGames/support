// For..of, can be used only for iterable objects
for(let user of activeUsers) {
    console.log(user);
}
   
// for..in
// this can be applied to any object, just iterates over its attributes
// order is undefined, don't use it for iterable objects
for(let key in activeUsers) {
    console.log(activeUsers[key])
}