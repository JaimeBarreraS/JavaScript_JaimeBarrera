class Pae extends HTMLElement {
    constructor (){
        super()
        this.innerHTML = `
        <div class="container">
            <header>
                <h1 id="h1">Pae</h1>
                <h5 id="h5">Programa de alimentacion escolar</h5>
                <input type="serch" id="buscar" placeholder="Search">
            </header>
            <h5 id="h51">Unidad Administrativa Especial de Alimentación Escolar   Alimentos para Aprender (UApA)</h5>
            <div id="resultado">
            </div>
        </div>
        `
    }
} 
customElements.define("main-main",Pae)



let url ="https://www.datos.gov.co/resource/4e5t-9b6q.json";
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        Data.forEach(info => {
            let info_pae = document.getElementById("resultado");

            info_pae.innerHTML+=`
            <div id="info">
                <tr id="info2">
                    <tr id="name"> Municipio: ${info.municipio}</tr>
                    <p id="zona"> Zona: ${info.zona}</p>
                    <p id="comunidad"> Tipo de Comunidad: ${info.tipo_de_comunidad}</p>
                    <p id="educativo"> Establecimiento Educativo: ${info.establecimiento_educativo}</p>
                    <p id="codigo"> Codigo Dane: ${info.codigo_dane}</p>
                </tr>
            </div>
            `
        });
    })