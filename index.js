const form = document.querySelector('form')
const conte = document.querySelector('.list')

form.addEventListener('click', (e) =>{
    e.preventDefault()

    const tilte = document.getElementById('titulo').value
    const note = document.getElementById('nota').value

    if(e.target.matches("input[name=add]")){
        if(tilte !== "" && note !== ""){
            const div = document.createElement('div')
            div.className = "note"
            const h1 = document.createElement('h1')
            h1.className = "tilte"
            h1.textContent = tilte
            const span = document.createElement('span')
            span.className = "text"
            span.textContent = note

            div.appendChild(h1)
            div.appendChild(span)
            div.appendChild(delBtn())
            conte.appendChild(div)

            document.getElementById('titulo').value = ""
            document.getElementById('nota').value = ""
        }
    }
})

function delBtn(){
    const boton = document.createElement('button')

    boton.textContent = "X"
    boton.className = "del"

    boton.addEventListener('click', (e)=>{
        const padre = e.target.parentElement
        conte.removeChild(padre)
    })

    return boton
}

function* ID(){
    let id = 1
    while(id > 0)
    yield  id++;
}

