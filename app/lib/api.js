class API {
  constructor () {
    this.API_URL = 'https://my.api.mockaroo.com/dogs';
    this.init = {
      'method': 'GET',
      'headers': {
        'X-API-Key': 'f7dabe10'
      }
    };
  }

  getDogs () {
    return fetch(this.API_URL, this.init)
      .then(result => result.json());
    }

    getDog (id) {
      return fetch(`${this.API_URL}/:${id}`, this.init)
        .then(result => result.json());
  }
}