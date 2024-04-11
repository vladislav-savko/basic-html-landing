const sliderEl = document.querySelector("#range2")
const sliderValue = document.querySelector("#range-input")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = `linear-gradient(to right, #ccc ${progress}%, #ccc ${progress}%)`;
})