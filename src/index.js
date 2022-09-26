document.addEventListener('DOMContentLoaded',loadDogs) 

function loadDogs() {
    fetch("http://localhost:3000/pups")
   .then(function(response) {
     console.log(response);
     return response.json();
   }) 
   .then(function (data) {
     console.log(data);
     data.forEach(loadDog);
   })   
}

function loadDog(dog) {
  console.log(dog["name"])
}