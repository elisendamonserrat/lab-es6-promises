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

let renderSteak = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                return addImage("/public/images/steak.jpg")
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
  .then(() => { return addImage("/public/images/mashPotatoes.jpg")})

*/
// Iteration 3 using async and await

  async function makeFood(steps, id, imgSrc) {
    for(let i = 0; i < steps.length; i++ ) {
      let step = steps[i];
      let printSteps = await addFood(step, id);
    }
    let printImg = await addImage(imgSrc);
    return printImg;
  }

  function addImage(imgSrc) {
    const newImg = document.createElement("img");
    newImg.src = imgSrc;
    document.getElementById("table").appendChild(newImg); 
  }

  Promise.all([
    makeFood(mashPotatoes, "#mashPotatoes", "/public/images/mashPotatoes.jpg"),
    makeFood(steak, "#steak", "/public/images/steak.jpg"),
    makeFood(brusselSprouts, "#brusselSprouts","/public/images/brusselSprouts.jpg"),
  ]).then(() => {
      document.body.innerHTML += `
        <audio src"/public/media/dinnerIsServed.mp3" id="audio"></audio> 
        <button id="btn-served"> Dinner is served!</button>
      `;
      let button = document.getElementById("btn-served");
      let audio = document.getElementById("audio");
      button.addEventListener("click", () => {
        audio.play();
    })
  })




