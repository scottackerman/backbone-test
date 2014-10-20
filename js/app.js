var AmwayReport = Backbone.Model.extend({urlRoot : '/books'});

var amwayReport = new AmwayReport(
  { description: 'sales report', status: 'unread', id: 1 }
);

amwayReport.get('description');

amwayReport.set({status: 'read'});

amwayReport.save();

var ReportView = Backbone.View.extend({
  render: function() {
    var html = '<h3>' + this.model.get('description') + '</h3>';
    $(this.el).html(html);
  }
});

var reportView = new ReportView({ model: amwayReport });
reportView.render();
console.log(reportView.el);