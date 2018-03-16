var coding = [
      { width: 200,
        name: 'Mc Donalds',
        color: '#A57706'},
      { width: 230,
        name: 'Papa Jones',
        color: '#BD3613'},
      { width: 220,
        name: 'Sweet Tomatoes',
        color: '#D11C24'},
      { width: 290,
        name: "Denny's",
        color: '#C61C6F'},
      { width: 236,
        name: 'Taco Bell',
        color: '#595AB7'},
      { width: 230,
        name: 'Burger King',
        color: '#2176C7'}
  ];


d3.selectAll('#enter').selectAll('div')
  .data(coding)
  .enter().append('div')
  .classed('item', true)
  .text(function(d) {
    return d.name;
  })
  .style({
    'color': 'white',
    'background' : function(d) {
      return d.color;
    },
    width : function(d) {
      return d.width + 'px';
    }
  })
