const icons = document.querySelectorAll('.imagenes img');

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icons.forEach(i => {
            i.style.top = i.dataset.defaultTop;  
        });
        icon.style.top = "0vw";
    });
});

let userData = {};

async function RandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    
    userData = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        birthday: new Date(user.dob.date).toLocaleDateString(),
        address: `${user.location.street.name}, ${user.location.city}, ${user.location.country}`,
        phone: user.phone,
        password: user.login.password,
        picture: user.picture.large
    };

    document.getElementById('imgs').src = userData.picture;
}

function infoUser(type) {
    let displayText = '';

    switch (type) {
        case 'name':
            displayText = `Hi, my name is`;
            displayText2 = `${userData.name}`;
            break;
        case 'email':
            displayText = `My email is`;
            displayText2 = `${userData.email}`;
            break;
        case 'birthday':
            displayText = `My birthday is`;
            displayText2 = `${userData.birthday}`;
            break;
        case 'address':
            displayText = `My address is`;
            displayText2 = `${userData.address}`;
            break;
        case 'phone':
            displayText = `My phone number is`;
            displayText2 = `${userData.phone}`;
            break;
        case 'password':
            displayText = `My password is`;
            displayText2 = `${userData.password}`;
            break;
    }

    document.getElementById('info').textContent = displayText;
    document.getElementById('info2').textContent = displayText2;
}

window.onload = function() {
    RandomUser();

    document.getElementById('name').addEventListener('mouseover', () => infoUser('name'));
    document.getElementById('email').addEventListener('mouseover', () => infoUser('email'));
    document.getElementById('birthday').addEventListener('mouseover', () => infoUser('birthday'));
    document.getElementById('address').addEventListener('mouseover', () => infoUser('address'));
    document.getElementById('phone').addEventListener('mouseover', () => infoUser('phone'));
    document.getElementById('password').addEventListener('mouseover', () => infoUser('password'));
};
