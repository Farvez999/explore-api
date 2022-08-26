const url = 'https://jsonplaceholder.typicode.com/users';

function loadData() {
    fetch(url)
        .then(response => response.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li');
        const li2 = document.createElement('li');
        li.innerText = user.name;
        li2.innerText = user.email;
        ul.appendChild(li);
        ul.appendChild(li2);
        console.log(user.name);
        console.log(user.email);
    }

}