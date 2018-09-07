let app = {
  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        brand: 'Ludwig',
        name: 'Black Beauty',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'http://www.eminpercussion.com/site/urunfoto/darbuka_bakir_1.png'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  }
}

function renderItem(item) {
  let $item =
    createElement('div', { class: 'card border-success', style: 'height: 26rem', dataId: item.itemId }, [
      createElement('img', { class: 'card-img-top p-3', style: 'max-height: 15rem', src: item.imageUrl, alt: 'image cap' }, []),
      createElement('div', { class: 'card-body text-center d-flex flex-column mt-auto' }, [
        createElement('h5', { class: 'mt-auto card-title' }, [item.brand]),
        createElement('p', { class: 'card-text' }, [item.name]),
        createElement('p', { class: 'card-text text-success font-weight-bold' }, ['$' + item.price])
      ])
    ])
  return $item
}

function renderAllItems(allItems) {
  let $container = createElement('div', { class: 'container mt-3' }, [])
  let $header = createElement('h1', { class: 'page-title font-weight-light text-center' }, ['Jamazon'])
  let $row = createElement('div', { class: 'row' }, [])
  for (let i = 0; i < allItems.length; i++) {
    let $column = createElement('div', { class: 'col-xl-3 col-lg-4 col-md-5 col-sm-8 col-8 mb-3' }, [])
    $row.appendChild($column)
    $column.appendChild(renderItem(allItems[i]))
  }
  $container.appendChild($header)
  $container.appendChild($row)
  return $container
}

function renderApp(appObject) {
  let $view = document.querySelector('[data-view="' + appObject.view + '"]')
  if (appObject.view === 'catalog') {
    $view.innerHTML = ''
    $view.appendChild(renderAllItems(appObject.catalog.items))
  }
  if (appObject.view === 'details') {
    $view.innerHTML = ''
    $view.appendChild(renderDetail(appObject.details.item))
  }
  showView(appObject.view)
}

renderApp(app)

// create a function that takes a catalog item and renders a DOM tree containing all the details of an item
function renderDetail(item) {
  let $item =
    createElement('div', { class: 'container my-4' }, [
      createElement('div', { class: 'row' }, [
        createElement('div', { class: 'card border-success' }, [
          createElement('div', { class: 'row no-gutter p-5' }, [
            createElement('div', { class: 'col-lg-4' }, [
              createElement('img', { class: 'img-responsive w-100', src: item.imageUrl, alt: 'image cap' }, [])
            ]),
            createElement('div', { class: 'col' }, [
              createElement('div', { class: 'card-body' }, [
                createElement('h5', { class: 'card-title' }, [item.name]),
                createElement('p', { class: 'card-text' }, [item.details]),
                createElement('p', { class: 'card-text' }, [item.brand]),
                createElement('p', { class: 'card-text text-success font-weight-bold' }, ['$' + item.price])
              ])
            ])
          ])
        ])
      ])
    ])
  return $item
}

function viewItemObject(itemId, catalog) {
  for (let i = 0; i < catalog.length; i++) {
    if (itemId === catalog[i].itemId) {
      return catalog[i]
    }
  }
}

document.querySelector('.container').addEventListener('click', function (e) {
  let x = e.target.closest('.card')
  if (x !== null) {
    let viewId = parseInt(x.getAttribute('dataId'), 10)
    let itemDetail = viewItemObject(viewId, app.catalog.items)
    app.details.item = itemDetail
    app.view = 'details'
    renderApp(app)
  }
})

function showView(view) {
  let $findView = document.querySelectorAll('[data-view]')
  for (let i = 0; i < $findView.length; i++) {
    if ($findView[i].getAttribute('data-view') !== view) {
      $findView[i].classList.add('hidden')
    }
    else {
      $findView[i].classList.remove('hidden')
    }
  }
}

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
