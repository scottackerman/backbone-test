var AmwayReport = Backbone.Model.extend({urlRoot : '/todos'});

var amwayReport = new AmwayReport(
  { description: 'sales report', status: 'unread', id: 1 }
);

amwayReport.fetch();

amwayReport.get('description');

amwayReport.set({status: 'read'});

amwayReport.save();

amwayReport.on('change', function(){ // change, change:<attr>, destroy, sync, error, all
  alert('REPORT HAS CHANGED!!');
});

var ReportView = Backbone.View.extend({
  render: function() {
    var html = '<h3>' + this.model.get('description') + '</h3>';
    $(this.el).html(html);
  }
});

var reportView = new ReportView({ model: amwayReport });
reportView.render();
console.log(reportView.el);

//----------------------

//----------------------

var SimpleView = Backbone.Model.extend({tagName: 'li'}); // if we initialize tagName, it changes from default div to whatever we choose

var simpleView = new SimpleView();

console.log(simpleView.el); // <div></div>

// can also add other defaults - 

var SimpleView = Backbone.Model.extend({
  tagName: 'article',
  id: 'todo-view',
  className: 'todo'
});

var simpleView = new SimpleView();

console.log(simpleView.el); // -> <article id="todo-view" class="todo"></article>

// since var.el is a dom element, via jquery we can access it like any other jquery item like so:

$(simpleView.el).html();

// or via backbone shortcut - 

simpleView.$el.html();

// using this knowledge, updating original ReportView from above like this - 

var ReportView = Backbone.View.extend({
  tagName: 'article',
  id: 'todo-view',
  className: 'todo'
  render: function() {
    var html = '<h3>' + this.model.get('description') + '</h3>';
    this.$el.html(html);
  }
});

var reportView = new ReportView();
reportView.render();
console.log(reportView.el);

// UNDERSCORE GOODNES!!


// TEMPLATING - 

var ReportView = Backbone.View.extend({
  events: {
    'click h3': 'alertStatus'
  },
  alertStatus: function(e) {
    alert('hey, you clicked on the h3!');
    //alert(this.model.get('title'));
  },
  tagName: 'article',
  id: 'todo-view',
  className: 'todo',
  template: _.template('<h3><%= description %></h3>');
  render: function() {
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  }
});
