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
      _this.updateChart((x) * 100);
//      $('#' + elementId).find('.value').text(Math.round((x) * 100));
    }
  });
};
DonutSlider.prototype = {
  setValue: function(value) {
    this.dragdealer.setValue(value, 0, true);
  },
  updateChart: function(value) {
    this.path.data(this.pie([value, 100 - value]))
      .attr('d', this.arc);
  }
};

// Forked from http://codepen.io/skidding/pen/bKvoA/

var oDonut = function(marginl, margint, cx, cy, r, R, classname) {
  this.svg = d3.select("#svgdata")
    .append('g')
    .attr('transform', "translate(" + marginl + "," + margint + ")")
    .append("circle")
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', r)
    .attr('fill', "transparent")
    .style("stroke", "#E1E1E1") // green is #005400
    .style("stroke-width", R)
    .attr("id", '#' + classname);
  return this.svg;
};  