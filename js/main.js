console.log('wellcome to the main.js file');

// variable declaration

const iconWrappers = document.querySelectorAll('#clickable-icons button');
console.log(iconWrappers);
// function declaration 

function handleIconClick() {
  console.log('You clicked on: ' + this.id);
}

// event listeners 

iconWrappers.forEach(function(icon) {
  icon.addEventListener('click', handleIconClick);
});
