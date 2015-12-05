Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'homepage'
});

Router.route('/upload', {
  name: 'upload'
})
