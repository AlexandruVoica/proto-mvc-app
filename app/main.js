const app = new App('#root');
const api = new API();
const router = new Router(app);

const dogTemplate = dog => `
<section class="dog-listing">
  <a href="#/dogs/${dog.id}">
    <h3 class="name">${dog.name}</h3>
    <section>
      <figure>
        <img src="${dog.imageURL}" alt="${dog.name}"/>
        <figcaption>${dog.imageCaption}</figcaption>
      </figure>
      <p>${dog.description}</p>
    </section>
  </a>
</section>
`;

app.addComponent({
  name: 'dogs',
  model: {
    dogs: []
  },
  view (model) {
    const dogsHTML = model.dogs.reduce((html, dog) => html + `<li>${dogTemplate(dog)}</li>`, '');
    return `
      <ul class="dogs">
        ${dogsHTML}
      </ul>
    `;
  },
  controller (model) {
    model.dogs = api.getDogs();
    // api.getDogs()
    //   .then(result => {
    //     model.dogs = result;
    //   });
  }
});

router.addRoute('dogs', '^#/dogs$');

app.addComponent({
  name: 'dog',
  model: {
    dog: {}
  },
  view (model) {
    return dogTemplate(model.dog);
  },
  controller (model) {
    const [ , id ] = router.params;
    // console.log(id);
    model.dog = api.getDog(id)[0];
    // api.getDog(id)
    //   .then(result => {
    //     console.log(result);
    //     model.dog = result;
    //   });
  }
});

router.addRoute('dog', '^#/dogs/([0-9]*)$');