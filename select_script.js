d3.select('.item').text('New Name')
d3.selectAll('#chart .item').text('Replaced All')
d3.selectAll('.item:nth-child(2)').text('Second Element')
d3.selectAll('.item:nth-child(odd)').text('Odd Boys')
d3.selectAll('.item:nth-child(3n)').text('3N')
d3.selectAll('.item:nth-child(4n)').html('<strong>I am Strong</strong>')

d3.select('.item')
  .append('div')
  .html('<strong>Taylor Durden</strong>')

d3.select('.item')
  .append('span')
  .html(' <strong>Extending</strong>')

d3.select('#chart')
  .append('span')
  .html(' <strong>Last Element</strong>')

d3.select('#chart')
  .insert('span', ':nth-child(3)')
  .html(' <strong>In between - Third element!</strong>')

d3.select('#chart')
  .insert('span', ':nth-child(4)')
  .html(' <strong> is an extension as it follows</strong>')

d3.select('#chart :nth-child(4)')
  .remove()
