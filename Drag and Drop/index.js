
const parrafos = document.querySelectorAll(".parrafo")
const papelera = document.querySelector (".papelera")

// Listeners de parrafos
parrafos.forEach(parrafo => {

    parrafo.addEventListener("mouseenter", () => {
        
        parrafo.classList.add("hover")
    })
    
    parrafo.addEventListener("mouseout", () => {
        parrafo.classList.remove("hover")
    })

    parrafo.addEventListener("dragstart", dragStart => {
        console.log("arrastrando" + parrafo.innerText)
        parrafo.classList.add("dragging", "hold")
        dragStart.dataTransfer.setData("id", parrafo.id)
        
    })

    parrafo.addEventListener("dragend", dragEnd => {
        console.log("fin de arraste")
        parrafo.classList.remove("hold")
    })
    papelera.addEventListener("dragover", dragOver => {
        dragOver.preventDefault()
        dragOver.dataTransfer.dropEffect = "copy"
    })
    papelera.addEventListener("drop", drop => {
        drop.preventDefault()
        console.log("suelta")
        const id_parrafo = drop.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        if (drop = true) {
            parrafo.remove()
            
            
        }
    })

})


// Listeners de papelera 







/*Papelera
papelera.addEventListener("dragover", dragOver)
papelera.addEventListener("dragenter", dragEnter)
papelera.addEventListener("dragleave", dragLeave)
papelera.addEventListener("dragdrop", dragDrop)

//Drag funciones

function dragStart() {
    this.className += ".hold"
    console.log("hold")
}

function dragEnd() {
    
}

function dragOver() {
    
}

function dragEnter() {
    
}*/