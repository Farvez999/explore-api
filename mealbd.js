const mealLoad = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const divMeal = document.createElement('div');
        divMeal.classList.add('col');
        divMeal.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</div>
        </div>
        `;
        mealContainer.appendChild(divMeal)
    })
    console.log(meals)
}

const loadMealDetails = (idMeal) => {
    //https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = mealsDetails => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = '';
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('card');
    detailsDiv.innerHTML = `
    <img src="${mealsDetails.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${mealsDetails.strMeal}</h5>
        <p class="card-text">${mealsDetails.strInstructions.slice(0, 200)}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailsContainer.appendChild(detailsDiv);
    console.log(mealsDetails)
}

const searchFood = () => {
    const seachField = document.getElementById('seach-field');
    const searchText = seachField.value;
    console.log(searchText)
    mealLoad(searchText);
    seachField.value = '';
}


mealLoad('');