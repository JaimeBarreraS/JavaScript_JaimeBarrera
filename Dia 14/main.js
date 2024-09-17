class crearelemento extends HTMLElement {
    constructor (){
        super()
        this.innerHTML = `
        <div class="container">
            <header>
                <h1 id="h1">Live User Filter</h1>
                <h5 id="h5">Search by name and/or location</h5>
                <input type="serch" id="buscar" placeholder="Search">
            </header>
            <div id="resultado">
            </div>
        </div>
        `
    }
} 
customElements.define("main-main",crearelemento)

let url = "https://66df33bede4426916ee3e070.mockapi.io/Informacion_Almacenada";
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        Data.forEach(info => {
            let info_almacenada = document.getElementById("resultado");

            info_almacenada.innerHTML+=`
            <div id="info">
                <img id="photo" src="${info.avatar}">
                <div id="info2">
                <p id="name">${info.name_full}</p>
                <p id="des">${info.description}</p>
                </div>
            `
        });
        
    })