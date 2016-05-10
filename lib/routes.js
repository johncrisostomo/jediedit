  Router.configure({
    layoutTemplate: 'ApplicationLayout'
  });

  Router.route('/', function() {
    this.render('navbar', {to: 'header'});
    this.render('docList', {to: 'main'});
  });

  Router.route('/documents/:_id', function() {
    Session.set('docid', this.params._id);
    this.render('navbar', {to: 'header'});
    this.render('docItem', {to: 'main'});
  });
