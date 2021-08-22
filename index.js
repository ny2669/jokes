const joke = document.getElementById('jokes')
 

const button1 = document.getElementById('new-joke').addEventListener('click', () =>{

fetch('https://official-joke-api.appspot.com/random_joke')
.then(res => res.json())
.then(data =>{

    console.log(data)

    let random = document.getElementById('random-joke').innerHTML = `<p>${data.setup}</p> <br> <p>${data.punchline}<p/>`
  

})
.catch(error =>{
    console.log(error)
})


})