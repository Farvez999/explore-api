const randomUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => userDisplay(data.results));
}

const userDisplay = users => {
    const randomUser = document.getElementById('random-container');
    for (const user of users) {
        const divRandomUser = document.createElement('div');
        divRandomUser.classList.add('user');
        divRandomUser.innerHTML = `
        <h3>User Name : ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <h4>Email : ${user.email}</h4>
        <h4>Phone : ${user.cell}</h4>
        <h4>Address : ${user.location.city} ${user.location.country}</h4>
        <p>Register : Age: ${user.registered.age} Years,  ${user.registered.date}</p>
        `;
        randomUser.appendChild(divRandomUser);
    }
    console.log(users)
}

randomUser();