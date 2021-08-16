const line=()=>{
    fetch("https://api.icndb.com/jokes/random")
    .then(data=>data.json())
    .then(data=>{
        let joke=document.createElement("div")
        joke.setAttribute("class","joke")
        joke.innerHTML=` <div class="edit">
        <p class=" hey1 p-2 d-flex justify-content-center "><br/>
        <br/>
        <br/>
        😀😀${data.value.joke}😀😀</p>
        </div>`
        document.body.append(joke)
    })
}
line()