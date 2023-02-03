
const init = () => {
const form = document.querySelector('form')


form.addEventListener( 'submit', (e) => {
    e.preventDefault();
   const formInput = document.getElementById('searchByID')
   

    fetch(`http://localhost:3000/movies/${formInput.value}`)
    .then((response) => (response.json()))
    .then((data) => {
        if (formInput.value < 0 ) {
            console.log("That movie doesn't exist!")
        }
        else if (formInput.value > 3) {
            console.log("That movie doesn't exist!")
        }
       else {
      const title = document.querySelector('h4');
      const summary = document.querySelector('p');
        
    title.innerText = data.title;
    summary.innerText = data.summary;
    } 
    })
    form.reset()
})



}

document.addEventListener('DOMContentLoaded', init);