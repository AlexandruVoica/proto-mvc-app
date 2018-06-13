class API {
  constructor () {
    this.API_URL = '';
  }

  getDogs () {
    return fetch(this.API_URL)
      .then(result => result.json());
  }
}