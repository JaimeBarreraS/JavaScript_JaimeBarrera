var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
            var data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            
    }}
};

xmlhttp.open('GET', 'https://api.example.com/data', true);

xmlhttp.send();
