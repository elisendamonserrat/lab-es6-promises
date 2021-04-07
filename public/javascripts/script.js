// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  //console.log(mashPotatoes[i])
//}

// Iteration 1 using callbacks
/*
for (let i=0; i <steak.length; i++) {
  addFood(steak[i], '#steak', addFood);
}
*/
let renderSteak = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                const steakImg = document.createElement("img");
                steakImg.src = "/public/images/steak.jpg"
                document.getElementById("table").appendChild(steakImg);
              })
            })
          })
        })
      })
    })
  })
});

// Iteration 2 using `.then()`
let renderMashPotatoes = addFood(mashPotatoes[0], '#mashPotatoes')
  .then(() => { return addFood(mashPotatoes[1], '#mashPotatoes')})
  .then(() => { return addFood(mashPotatoes[2], '#mashPotatoes')})
  .then(() => { return addFood(mashPotatoes[3], '#mashPotatoes')})
  .then(() => { return addFood(mashPotatoes[4], '#mashPotatoes');})
  .then(() => {
    const mashPotatoesImg = document.createElement("img");
    mashPotatoesImg.src = "/public/images/mashPotatoes.jpg"
    document.getElementById("table").appendChild(mashPotatoesImg);
  })


// Iteration 3 using async and await

  async function makeFood(step) {

  }
 // makeFood(eachStep);

 //Bonus 2




