import React from 'react';
import adoptionStyle from './adoption.module.scss';



function getRandomDoggo(){
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(checkStatus)
      .then(response => response.json())
      .then(data => handleData(data))
      .catch(error => notifyUser(error))
}

function handleData(data){
    let url = data.message;
    console.log(url)
    let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+\-?\w+)\/.+/g;
    let breedName = regex.exec(url);
    // document.getElementById('randomImageContainer').innerHTML = `<img alt="random image of a ${fixBreed(breedName[1])}" src='${url}'/>`;
    // document.querySelector('.dogInfo').innerHTML = `<p class="h5">Random image of a ${fixBreed(breedName[1])}</p>`;
    // 
    // 
    // Update adoption page imgs

    // Call updateDogos from ducks
}

function notifyUser(error){
    const errorContainer = document.querySelector('.alert');
    errorContainer.innerHTML = `There was an error with the server request (${error}). <br> Click the button again.`;
    errorContainer.style.display = 'block';
    setTimeout(()=>{
      errorContainer.innerHTML = '';
      errorContainer.style.display ='none';
    },4000)
}

function checkStatus(response){
    if(response.ok){
      return Promise.resolve(response);
    }else{
      return Promise.reject(new Error(response.statusText));
    }
}



const Adoption = () => {
    
    return (
        <div className={adoptionStyle.screen} >
            <p>
                Available Dogs
            </p>
        </div>
    );
}

export default Adoption







//  Useful functions:

// function getRandomDoggo(){
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then(checkStatus)
//       .then(response => response.json())
//       .then(data => handleData(data))
//       .catch(error => notifyUser(error))
// }

//notifyUser
// function notifyUser(error){
//     const errorContainer = document.querySelector('.alert');
//     errorContainer.innerHTML = `There was an error with the server request (${error}). <br> Click the button again.`;
//     errorContainer.style.display = 'block';
//     setTimeout(()=>{
//       errorContainer.innerHTML = '';
//       errorContainer.style.display ='none';
//     },4000)
//   }


// //fixBreed
// function fixBreed(breedName){
//     if(breedName === 'germanshepherd'){
//       return 'German Shepherd';
//     }else if(breedName === 'mexicanhairless'){
//       return 'Mexican Hairless';
//     }else if(breedName === 'stbernard'){
//       return 'St. Bernard';
//     }else if(breedName === "african"){
//       return 'African Wild Dog';
//     }else if(breedName === 'bullterrier'){
//       return 'Bull Terier';
//     }
//     return capitalize(breedName);
// }

// function handleData(data){
//     let url = data.message;
//     console.log(url)
//     let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+\-?\w+)\/.+/g;
//     let breedName = regex.exec(url);
//     document.getElementById('randomImageContainer').innerHTML = `<img alt="random image of a ${fixBreed(breedName[1])}" src='${url}'/>`;
//     document.querySelector('.dogInfo').innerHTML = `<p class="h5">Random image of a ${fixBreed(breedName[1])}</p>`;
// }

// function getImageURL(data){
//     //get random number
//     let randomNumberURL = data[Math.floor(Math.random()*data.length)+1];
//     listImageContainer.innerHTML = `<img src="${randomNumberURL}" alt="${extractBreedName(data)}"/>`;
// }

// function checkStatus(response){
//     if(response.ok){
//       return Promise.resolve(response);
//     }else{
//       return Promise.reject(new Error(response.statusText));
//     }
// }

// function capitalize(breedName){
//     return breedName.replace(/\-/g,' ')
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase()+word.slice(1))
//         .join(" ");
// }

// function extractBreedName(data){
//     let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+-?\w+)\/\w+\.\w+/g;
//     let match = regex.exec(data);
//     return fixBreed(match[1]);
// }