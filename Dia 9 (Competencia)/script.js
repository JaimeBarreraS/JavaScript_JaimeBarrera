document.getElementById("agentes").addEventListener("click",MostrarAgente)

function MostrarAgente() {
    agentes.innerHTML=""
    fetch("https://valorant-api.com/v1/agents")
    .then(res=>res.json())
    .then(age=>{
        var agentes=document.getElementById("caja4");
        for (const a of age.data) {
            agentes.innerHTML+=` 
            <div class="card" style="width: 18rem;">
                <img src="${a.fullPortrait}" class="card-img-top" alt="...">
                <h4 class="card-title1">${a.displayName}</h4>
                <h6 class="card-title2">${a.role.displayName}</h6>
            </div>  
            `

            searchAgentes()
        }

        function searchAgentes(){
            document.getElementById("search3").addEventListener("input", (e)=>{
                let Search = e.target.value;

                let SearchList = age.data

                SearchList.forEach(ListSearch =>{
                    let Nameage = ListSearch.displayName
                    if (Search == Nameage){
                        agentes.innerHTML = `
                        <div class="card" style="width: 25rem;" >
                            <img class="card2" src="${ListSearch.fullPortrait}" class="card-img-top" alt="...">
                            <h4 class="card-title11">${ListSearch.displayName}</h4>
                            <h6 class="card-title22">${ListSearch.role.displayName}</h6>
                        </div>
                        `
                    } 
                });
                
            });
        }
    })
}
