// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  //console.log(mashPotatoes[i])
//}

// Iteration 1 using callbacks
for (let i=0; i <steak.length; i++) {
  addFood(steak[i], '#steak', addFood);
}


// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes')
});

// Iteration 3 using async and await

  async function makeFood(step) {
    // ... your code here
    
  }
  makeFood(eachStep);
