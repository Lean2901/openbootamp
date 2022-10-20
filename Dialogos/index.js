const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    alert("click en el boton")
})


$(".btn-jq").click(() => {
    console.log("hola estoy usando jquery")
})
