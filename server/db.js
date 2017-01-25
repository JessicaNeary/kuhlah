module.exports = {
  addColor,
  getColors,
  getColor
}

let nextId = 7

var colors = [{
  id: 1,
  name: 'DarkKhaki'
}, {
  id: 2,
  name: 'DarkSalmon'
}, {
  id: 3,
  name: 'DarkSlateGray'
}, {
  id: 4,
  name: 'DarkOrchid'
}, {
  id: 5,
  name: 'DarkCyan'
}, {
  id: 6,
  name: 'FireBrick'
}, {
  id: 7,
  name: 'Goldenrod'
}]

function getColors () {
  return colors
}

function getColor (callback) {
  const index = getRandom(colors.length)
  setTimeout(() => {
    callback(null, colors[index])
  }, 3000)
}

function getRandom (max) {
  const random = Math.random() * max
  return Math.floor(random)
}

function addColor (colorName, callback) {
  colors.push({
    id: ++nextId,
    name: colorName
  })
  console.log(`Color added to database: ${colorName}`)
  console.log(`Colors in database: ${colors.map(color => color.name)}`)
  setTimeout(() => {
    callback(null, colors[nextId])
  }, 2000)
}
