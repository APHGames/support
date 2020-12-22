// regular object
let totalReplies = {};
totalReplies[user1] = 5; // keys are converted to strings
 
// Map object -> can use strings and numbers as keys
let totalReplies = new Map();
totalReplies.set(user1, 5); 
totalReplies.set(user2, 42);

let has = totalReplies.has(user1);
totalReplies.delete(user1);