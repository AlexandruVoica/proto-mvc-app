class API {
  constructor () {
    this.API_URL = 'https://my.api.mockaroo.com/dogs';
    this.init = {
      'method': 'GET',
      'headers': {
        'X-API-Key': 'f7dabe10'
      }
    };
    this.dogs = [];
    fetch(this.API_URL, this.init)
      .then(result => result.json())
      .then(result => {
        this.dogs = result;
      });
  }

  getDogs () {
    return this.dogs.slice();
    }

    getDog (id) {
      return this.dogs.filter(dog => dog.id === id);
  }
}