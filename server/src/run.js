const arr = [
  {id: 1, name: 'ford', category: 'vehicle'},
  {id: 2, name: 'pig', category: 'animal'},
  {id: 3, name: 'dog', category: 'animal'},
  {id: 4, name: 'chev', category: 'vehicle'},
  {id: 5, name: 'cat', category: 'animal'},
  {id: 6, name: 'jeep', category: 'vehicle'},
  {id: 7, name: 'honda', category: 'vehicle'}
]


const categories = arr.reduce((acc, cur) => {
  acc[cur.category] = (acc[cur.category] || 0) + 1
  return acc;
}, {})

console.log(categories)
