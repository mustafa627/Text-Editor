function textSet(textSet) {
    //console.log(textSet, "text");
    var heading = document.getElementById("heading");
//console.log("textSet()", heading.className);
    heading.className += "big";
    // console.log(heading.classList);

    heading.classList.remove("small");
    heading.classList.add("big");
    heading.classList.replace("small", "big")

    if(textSet === "big"){
        heading.classList.replace ("big" , "small")
        heading.classList.remove("small")
        heading.classList.add("big")
    }else{
        heading.classList.add("small")
        heading.classList.remove("big")
    }
}

// function toggleHeandler() {
//     var heading = document.getElementById("heading")
//     console.log("heading" , heading.classList.contains('small'))
//     var smallTxt = heading.classList.contains("big");
//     console.log(smallTxt, "smallTxt");

    
//   if (smallTxt) {
//     heading.classList.replace("small", "big");
//   } else {
//     heading.classList.replace("big", "small");
//   }
  
// }

function toggleHeandler() {
    var heading = document.getElementById("heading");
    // console.log("heading"  ,heading.classList.contains("smallText"))
    var smallTxtContain = heading.classList.contains("small");
    console.log(smallTxtContain, "smallTxtContain");
  
    if (smallTxtContain) {
      heading.classList.replace("small", "big");
    } else {
      heading.classList.replace("big", "small");
    }
  }
  

// var textNumber = document.querySelector("textNumber") 
// var heading = document.getElementById("heading")

// function fontSize(type) {
//     var counter = NumberOo.innerHTML;
//     if (type == "minus") {
//       NumberOo.innerHTML -= 1
//       tNumberOo.innerHTML = --counter;
//     } else {
//       NumberOo.innerHTML = ++counter;
//     }
  
//     para.style.fontSize = `${counter}px`;
//   }
var heading = document.getElementById("heading");

function boldPara() {
    console.log("boldPara")
heading.style.fontStyle = "bold"
    
}

const italicPara = () => {
  console.log("italic para")
  heading.style.fontStyle ="italic"
  heading.style.color = "blue"
}

var color0 = document.getElementById("color")
// console.log("color", color)

const color = () => {
  const colorPicker = heading.value
}

color()