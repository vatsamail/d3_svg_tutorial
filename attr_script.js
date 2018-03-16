d3.selectAll('.item:nth-child(2)')
  .attr('class', 'highlight')
d3.selectAll('.item:nth-child(4)')
  .classed('highlight', true)

d3.selectAll('.item:nth-child(5)')
    .style({
      'background': '#268BD2',
      'padding': '15px',
      'margin' : '15px',
      'color' : '#EEE8D5'
    })



var coding = [
      { width: 200,
        color: '#A57706'},
      { width: 230,
        color: '#BD3613'},
      { width: 220,
        color: '#D11C24'},
      { width: 290,
        color: '#C61C6F'},
      { width: 236,
        color: '#595AB7'},
      { width: 230,
        color: '#2176C7'}
  ];

d3.selectAll('.item')
      .data(coding)
      .style({
        'color': 'white',
        'background' : function(d) {
          return d.color;
        },
        width : function(d) {
          return d.width + 'px';
        }
      })
