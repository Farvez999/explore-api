const loadCountry = () => {
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
        <button onclick="loadCountryDetails('${cuntrice.cca2}')">Ditails</button>
        `;
        countriesContainer.appendChild(divCountries);
    })
    console.log(cuntrices)
}

const loadCountryDetails = (code) => {
    //https://restcountries.com/v2/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}

const displayCountry = country => {
    console.log(country)
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
    <h2>Country Name: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `;
}

loadCountry();