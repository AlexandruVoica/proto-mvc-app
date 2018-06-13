class Router {
  constructor (app) {
    this.app = app;
    this.routes = [];

    window.addEventListener('hashchange', this.hashChange);
  }

  addRoute (name, url) {
    this.routes.push({
      name,
      url
    });
  }

  hashChange () {

  }
}