'use strict';

var d3 = require('d3');
var document = require('global/document');
var window = require('global/window');

var body = d3.select(document.body)
  .style('margin', 0);

body.append('div')
  .attr('id', 'map')
  .style({
    width: window.innerWidth + 'px',
    height: window.innerHeight + 'px'
  });
