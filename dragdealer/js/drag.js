$(function() {
  var s = new DonutSlider('sales', 15, '#001A2D', '#fff');
  s.setValue(.5);
});

////////////////////////

var DonutSlider = function(elementId, borderSize, color1, color2) {
  var _this = this,
    size = Math.min($('#' + elementId).width(),
      $('#' + elementId).height());
  this.pie = d3.layout.pie().sort(null);
  this.arc = d3.svg.arc()
    .innerRadius((size / 2) - borderSize)
    .outerRadius(size / 2);
  this.svg = d3.select('#' + elementId).append('svg')
    .attr('width', size)
    .attr('height', size)
    .append('g')
    .attr('transform', 'translate(' + size / 2 + ',' + size / 2 + ')');
  this.colors = [color1, color2];
  this.path = this.svg.selectAll('path')
    .data(this.pie([0, 100]))
    .enter().append('path')
    .attr('fill', function(d, i) {
      return _this.colors[i];
    })
    .attr('d', this.arc);
  this.dragdealer = new Dragdealer(elementId, {
    x: 1,
    slide: false,
    animationCallback: function(x, y) {
      _this.updateChart((1 - x) * 100);
      $('#' + elementId).find('.value').text(Math.round((1 - x) * 100));
    }
  });
};
DonutSlider.prototype = {
  setValue: function(value) {
    this.dragdealer.setValue(1 - value, 0, true);
  },
  updateChart: function(value) {
    this.path.data(this.pie([value, 100 - value]))
      .attr('d', this.arc);
  }
};

// Forked from http://codepen.io/skidding/pen/bKvoA/

// $(function() {
//   new Dragdealer('demo-simple-slider', {
//     animationCallback: function(x, y) {
//       $('#demo-simple-slider .value').text(Math.round(x * 100));
//     }
//   });
// });