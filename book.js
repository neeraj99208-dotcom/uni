// document.querySelectorAll(".bth").forEach(button => {
//     button.addEventListener("click", () => {
//       let url = button.innerText;   // take the link written inside button
//       window.open(url, "_blank");   // open Amazon link
//     });
//   });



// function cl(){
//     let but=document.querySelector(".btn");
//     but.addEventListener('click',() =>{
//         let url = button.innerText;   // take the link written inside button
//       window.open(url, "_blank"); 
//     }
//     )
// }

// function buyBook(url) {
//     if (confirm("Do you want to buy this book from Amazon?")) {
//       window.open(url, "_blank");
//     }
//   }


// function firstAction() {
//   alert("You confirmed! Doing first action...");
// }

// function secondAction() {
//   location.href = "https://www.amazon.in/Holographic-Universe-Revolutionary-Theory-Reality/dp/0062014102/ref=sr_1_1?crid=5EPMMOVD3ZQ9&dib=eyJ2IjoiMSJ9.I7mgOHPxeAAAOO0FYrEVytAdTN6HbJbq08xHHilgkk3BH4rY6jun6-U0Wk_YULQt4CxFGzs_JUPF7n2TKAg7ULKkq6KOgJmNLGn5n5D1BlJ-3zZmd8qBpvq27uTT19TqfpKWC-16UiZV0fbiylPAqyD0zpZbpwlQs6MDXkUOoMCtjI0--f7Jxunk9ZotfJ4WCuUVUnUMU0mYAeA-NwY7bPmfA9bB_Uwuu7ted0uBkgY.a5sUT1bBGhz5Ni2MPgOVALU-cQccB9ZmRvkjgIkwjBA&dib_tag=se&keywords=the+holographic+universe&qid=1756747498&sprefix=the+holog%2Caps%2C231&sr=8-1"; // Redirect
// }

// let but=document.querySelectorAll(".btn");
// but.addEventListener("click", () =>{
//   let response= confirm("will you enter?");
//   if(response){
//     firstAction();
//     secondAction();
//   }
//   else{
//     alert("cancel");
//   }
// })

// function confirmRedirect() {
//   let response = confirm("Do you want to visit website?");
//   if (response) {
//     firstAction();      // Any action before redirect
//     secondAction();     // Redirect happens last
//   } else {
//     alert("Cancelled!");
//   }
// }


function firstAction() {
  alert("You confirmed! Doing first action...");
}

// Select all buttons
let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let response = confirm("do you want to vist another side?");
    if(response){
      firstAction();                 // run first action
      let link = btn.dataset.link;   // get button's link
      location.href = link;          // redirect to its specific link
    } else {
      alert("Cancelled!");
    }
  });
});