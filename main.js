let app = {
  view: 'catelog',
  items: [
    {
      brand: 'Drum Brand',
      name: 'Drum Name',
      price: '$100',
      image: 'https://www.shareicon.net/data/256x256/2015/11/25/183468_drum_256x256.png'
    },
    {
      brand: 'Drum Brand',
      name: 'Drum Name',
      price: '$100',
      image: 'https://www.shareicon.net/data/256x256/2015/11/25/183468_drum_256x256.png'
    },
    {
      brand: 'Drum Brand',
      name: 'Drum Name',
      price: '$100',
      image: 'https://www.shareicon.net/data/256x256/2015/11/25/183468_drum_256x256.png'
    },
    {
      brand: 'Drum Brand',
      name: 'Drum Name',
      price: '$100',
      image: 'https://www.shareicon.net/data/256x256/2015/11/25/183468_drum_256x256.png'
    },
    {
      brand: 'Drum Brand',
      name: 'Drum Name',
      price: '$100',
      image: 'https://www.shareicon.net/data/256x256/2015/11/25/183468_drum_256x256.png'
    },
    {
      brand: 'Drum Brand',
      name: 'Drum Name',
      price: '$100',
      image: 'https://www.shareicon.net/data/256x256/2015/11/25/183468_drum_256x256.png'
    }
  ]
}

function renderItem(catalogItem, number) {
  let $item =
    createElement('div', {class: 'card col-sm-2', style: 'width: 18rem;'}, [
      createElement('img', {class: 'card-img-top', src: catalogItem.items[number].image, alt: 'Card image cap'}, []),
      createElement('div', {class: 'card-body'}, [
        createElement('h5', {class: 'card-title'}, [catalogItem.items[number].brand]),
        createElement('p', {class: 'card-text'}, [catalogItem.items[number].name]),
        createElement('p', {class: 'card-text'}, [catalogItem.items[number].price])
      ])
    ])
  return $item
}

function renderAllItems(catalog) {
  let $container = createElement('div', {class: 'container'}, [])
  let $header = createElement('h1', {}, ['Jamazon'])
  let $row = createElement('row', {class: 'row'}, [])
  for (let i = 0; i < catalog.items.length; i++) {
    $row.appendChild(renderItem(catalog, i))
  }
  $container.appendChild($header)
  $container.appendChild($row)
  return $container
}

console.log(renderAllItems(app))

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
