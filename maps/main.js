let marker, map;

function initMap() {
    // console.log("Inicializando mapa")
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    const posNueva = {
        lat: -38.021811,
        lng:-57.554528
    }
    const posNueva2 = {
        lat: 12.335110,
        lng: -68.979093
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })

    marker2 = new google.maps.Marker({
        position: posNueva,
        map,
        title:"MDP"
    })
    marker3 = new google.maps.Marker({
        position: posNueva2,
        map,
        title:"curazao"
    })
    // Obtener la geolocalización
    // marker.setPosition({ lat, lng })
    geoPosiciona()
}


function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}
function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}

