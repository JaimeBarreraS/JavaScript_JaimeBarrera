//let Url = ""

//for (let i=1;i < 732; i++){
    //Url = 'https://superheroapi.com/api.php/e3957a63e8a4a50a8ddd040c3d756e0d/'+String(i);

    //fetch(Url)
    //.then(res => res.json())
    //.then(Data => {
        //console.log(Data.id)
    //})
//}
let Url =''
    
    for (let i=1;i < 732; i++){
        Url = 'https://superheroapi.com/api.php/e3957a63e8a4a50a8ddd040c3d756e0d/'+String(i);
        
        fetch(Url)
        .then (response => response.json())
        .then (data => console.log(data))
        .catch(error => console.log(error))

        const API = (data) => {
            console.log(data)
            let body = ''
            for (let i = 0; i<data.length; i++){
                body += `<tr><td>${data[i].id}</td></tr>`;
            }
            document.getElementById('data').innerHTML = body
    }
    }
    