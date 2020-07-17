let housesArray = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
startSorting = () => {
  let houseIndex = Math.floor(Math.random() * housesArray.length);
  let houseDisplay = document.querySelector(".house-name");
  houseDisplay.style.display = "none"
  setTimeout(() => {
    houseDisplay.innerHTML = `You have been sorted into ${housesArray[houseIndex]}!`;
    houseDisplay.style.display = "inline-block"    
  }, 1000);
};
