let housesArray = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
startSorting = () => {
  let houseIndex = Math.floor(Math.random() * housesArray.length);
  let houseDisplay = document.querySelector(".house-name");
  houseDisplay.innerHTML = `You have been sorted into ${housesArray[houseIndex]}!`;
};
