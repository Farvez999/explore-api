const randomUser = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => userDisplay(data));
}

const userDisplay = cuntrices => {
    // const countriesContainer = document.getElementById('countries-container');
    // for (const cuntrice of cuntrices) {
    //     const divCountries = document.createElement('div');
    //     divCountries.classList.add('countries');
    //     divCountries.innerHTML = `
    //     <h3>Cuntry Name : ${cuntrice.name.common ? cuntrice.name.common : 'No Country'}</h3>
    //     <h4>Capital : ${cuntrice.capital ? cuntrice.capital[0] : 'No Capital'}</h4>
    //     <p>Borders : ${cuntrice.borders ? cuntrice.borders[0] : 'No Borders'}</p>
    //     `;
    //     countriesContainer.appendChild(divCountries);
    // }

    // OR 
    const countriesContainer = document.getElementById('countries-container');
    cuntrices.forEach(cuntrice => {
        const divCountries = document.createElement('div');
        divCountries.classList.add('countries');
        divCountries.innerHTML = `
        <h3>Cuntry Name : ${cuntrice.name.common ? cuntrice.name.common : 'No Country'}</h3>
        <h4>Capital : ${cuntrice.capital ? cuntrice.capital[0] : 'No Capital'}</h4>
        <p>Borders : ${cuntrice.borders ? cuntrice.borders[0] : 'No Borders'}</p>
        `;
        countriesContainer.appendChild(divCountries);
    })
    console.log(cuntrices)
}

randomUser();