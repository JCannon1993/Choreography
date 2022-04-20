document.addEventListener('DOMContentLoaded', getArtists())

function getArtists(){
    fetch('http://localhost:3000/favroiteartists')
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        object.forEach(function(artist){
            
        const li = document.createElement('li')
        const ul = document.querySelector('ul')
        li.innerHTML = `<span>${artist.name} - </span><span><em>${artist.song}</em></span>  <button type="submit" class="delete">Delete</button>`
            ul.appendChild(li)

        li.querySelector('.delete').addEventListener('click', () =>{
            li.remove()
        })
        })

    })
}

const form = document.getElementById('form')
form.addEventListener("submit", function(event){
    event.preventDefault()
    const artist = document.getElementById('artist').value
    const song = document.getElementById('song').value
    
        fetch(' http://localhost:3000/favroiteartists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name:`${artist}`,
            song:`${song}`,
        
        })
    })
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            
        const li = document.createElement('li')
        const ul = document.querySelector('ul')
        li.innerHTML = `<span>${object.name} - </span><span><em>${object.song}</em></span><button type="submit" class="delete">Delete</button>`
            ul.appendChild(li)
            form.reset()
            li.querySelector('.delete').addEventListener('click', () =>{
                li.remove()
    
                    })
                })
        .catch(function(error){
            document.body.innerHTML = error.message
    })
})





 






