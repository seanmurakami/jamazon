let app = {
  view: 'catelog',
  items: [
    {
      brand: 'Drum Brand',
      name: 'Drum Name',
      price: '$100',
      image: '#'
    }
  ]
}

function renderItem(catalogItem, number) {
  let $item =
    createElement('div', {class: 'card', style: 'width: 18rem;'}, [
      createElement('img', {class: 'card-img-top', src: catalogItem.items[number].image, alt: 'Card image cap'}, []),
      createElement('div', {class: 'card-body'}, [
        createElement('h5', {class: 'card-title'}, [catalogItem.items[number].brand]),
        createElement('p', {class: 'card-text'}, [catalogItem.items[number].name]),
        createElement('p', {class: 'card-text'}, [catalogItem.items[number].price]),
        createElement('a', {href: '#', class: 'btn btn-primary'}, ['GO SOMEWHERE'])
      ])
    ])
  return $item
}

console.log(renderItem(app, 0))

function createElement(tagName, attributes, children) {
  var $element = document.createElement(tagName)
  if (attributes) {
    for (var name in attributes) {
      var value = attributes[name]
      $element.setAttribute(name, value)
    }
  }
  for (var i = 0; i < children.length; i++) {
    var child = children[i]
    if (child instanceof Node) {
      $element.appendChild(child)
    }
    else {
      var textNode = document.createTextNode(child)
      $element.appendChild(textNode)
    }
  }
  return $element
}
