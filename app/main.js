const app = new App('#root');

app.addComponent({
  name: 'dogs',
  model: {
    dogs: []
  },
  view(model) {
    return `There are ${model.dogs.length}`;
  }
});

const router = new Router(app);
router.addRoute('dogs', '^#/dogs$');