const API_KEY = 'live_27J4RgXoHnDm0VLOIJEnpjQpcj2IQvqAUKxqUvW29Us0ySKK57fAFB6kW7J6seRG';


export function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
          
        }
        return response.json();
      })
      .catch(error => {
        throw new Error('Failed breeds fetch');
      });
  }

  export function fetchCatByBreed(breedId) {  
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
      .then(response => {
        if (!response.ok) {

            throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => {
        throw new Error('Failed cat API fetch');
      });
  }