//Read the countries api and find out the 10 largest countries


const countriesAPI = 'https://restcountries.com/v2/all'


fetch(countriesAPI)
.then(response => response.json())
.then(countries =>{
    const top = countries.sort((a, b) => b.population - a.population)
    const topTen = top.slice(0, 10)
    for(let ctr = 0; ctr < 10; ctr++){
        console.log(top[ctr].name, top[ctr].population)
    }
})
.catch(error => console.error(error))