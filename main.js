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
  },
  cart: [],
  sortedItems: [],
  filtered: 'no'
}

function renderApp(appObject) {
  let $cartView = document.querySelector('.my-cart')
  let $view = document.querySelector('[data-view="' + appObject.view + '"]')
  if (appObject.view === 'catalog' && app.filtered === 'no') {
    $view.innerHTML = ''
    $cartView.innerHTML = ''
    $view.appendChild(renderAllItems(appObject.catalog.items))
  }
  if (appObject.view === 'catalog' && app.filtered === 'yes') {
    $view.innerHTML = ''
    $cartView.innerHTML = ''
    $view.appendChild(renderAllItems(appObject.sortedItems))
  }
  if (appObject.view === 'details') {
    $view.innerHTML = ''
    $cartView.innerHTML = ''
    $view.appendChild(renderDetail(appObject.details.item))
  }
  if (appObject.view === 'cart') {
    $view.innerHTML = ''
    $cartView.innerHTML = ''
    $view.appendChild(renderAllCartItems(appObject.cart))
  }
  if (appObject.view === 'checkout') {
    $view.innerHTML = ''
    $cartView.innerHTML = ''
    $view.appendChild(renderCheckoutItem(appObject.cart))
  }
  if (appObject.view === 'confirmation') {
    $view.innerHTML = ''
    $cartView.innerHTML = ''
    $view.appendChild(confirmationMessage())
  }
  $cartView.appendChild(cartCount(appObject.cart))
  showView(appObject.view)
}

renderApp(app)

function renderItem(item) {
  let $item =
    createElement('div', { class: 'card', style: 'height: 26rem', dataId: item.itemId }, [
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
  let $container = createElement('div', { class: 'container mt-3' }, [
    createElement('h1', { class: 'page-title font-weight-light text-center' }, ['Jamazon']),
    createElement('button', {class: 'btn btn-primary mb-3', sort: 'low-to-high'}, ['Low to High']),
    createElement('button', {class: 'btn btn-primary mb-3 ml-3', sort2: 'high-to-low'}, ['High to Low']),
    createElement('button', {class: 'btn btn-primary mb-3 ml-3', unfilter: 'revert-back'}, ['Unfilter'])
  ])
  let $row = createElement('div', { class: 'row' }, [])
  for (let i = 0; i < allItems.length; i++) {
    let $column = createElement('div', { class: 'col-xl-3 col-lg-4 col-md-5 col-sm-8 col-8 mb-3' }, [])
    $row.appendChild($column)
    $column.appendChild(renderItem(allItems[i]))
  }
  $container.appendChild($row)
  return $container
}

function compareNumbers(a, b) {
  return a.price - b.price
}

function updateFilter(myItems) {
  return myItems
    .map(num => num)
    .sort(compareNumbers)
}

function updateFilter2(myItems) {
  return myItems
    .map(num => num)
    .sort(compareNumbers)
    .reverse()
}

function renderDetail(item) {
  let $item =
    createElement('div', { class: 'container my-4' }, [
      createElement('div', { class: 'row' }, [
        createElement('div', { class: 'card' }, [
          createElement('div', { class: 'row no-gutter p-5' }, [
            createElement('div', { class: 'col-lg-4' }, [
              createElement('img', { class: 'img-responsive w-100', src: item.imageUrl, alt: 'image cap' }, [])
            ]),
            createElement('div', { class: 'col' }, [
              createElement('div', { class: 'card-body' }, [
                createElement('h5', { class: 'card-title' }, [item.name]),
                createElement('p', { class: 'card-text' }, [item.details]),
                createElement('p', { class: 'card-text' }, [item.brand]),
                createElement('p', { class: 'card-text text-success font-weight-bold' }, ['$' + item.price]),
                createElement('button', { class: 'p-2 btn-primary', cart: 'add-to-cart' }, ['Add to Cart']),
                createElement('button', { class: 'p-2 btn-primary ml-3 pl-4 pr-4', back: 'return' }, ['Back'])
              ])
            ])
          ])
        ])
      ])
    ])
  return $item
}

function renderCartItem(item) {
  let $item =
    createElement('div', { class: 'card', style: 'width: 70%' }, [
      createElement('div', { class: 'row no-gutter p-5' }, [
        createElement('div', { class: 'col-lg-4' }, [
          createElement('img', { class: 'img-responsive w-100', src: item.imageUrl, alt: 'cart image' }, [])
        ]),
        createElement('div', { class: 'col' }, [
          createElement('div', { class: 'card-body' }, [
            createElement('h2', { class: 'card-title' }, [item.name]),
            createElement('p', { class: 'card-text' }, [item.brand]),
            createElement('p', { class: 'card-text' }, [item.description]),
            createElement('p', { class: 'card-text text-success font-weight-bold' }, ['$' + item.price])
          ])
        ])
      ])
    ])
  return $item
}

function calcTotal(myArray) {
  return myArray.reduce((start, item) => start + Math.round(item.price * 100) / 100, 0)
}

function renderAllCartItems(items) {
  let $container = createElement('div', { class: 'container my-4' }, [
    createElement('h1', { class: 'page-title font-weight-light text-center' }, ['Cart'])
  ])
  if (!items.length) {
    const $emptyCart = createElement('div', { class: 'mx-auto card p-4 text-center', style: 'width: 50%' }, [
      createElement('p', { class: 'card-text' }, ['Your cart is empty...'])
    ])
    $container.appendChild($emptyCart)
  }
  for (let i = 0; i < items.length; i++) {
    let $row = createElement('div', { class: 'mb-3 d-flex justify-content-center' }, [])
    $row.appendChild(renderCartItem(items[i]))
    $container.appendChild($row)
  }
  let $itemCount = createElement('p', { class: 'text-right', style: 'width: 85%' }, [items.length + ' Item(s)'])
  let $itemTotal = createElement('p', { class: 'text-right text-success font-weight-bold', style: 'width: 85%' }, ['Total: $' + calcTotal(items)])
  let $goBackDiv = createElement('div', { class: 'd-flex justify-content-center' }, [
    createElement('button', { class: 'p-2 btn-primary', continue: 'continue-shopping' }, ['Continue Shopping']),
    createElement('button', { class: 'p-2 btn-primary ml-3', checkout: 'checkout-page' }, ['Checkout'])
  ])
  $container.appendChild($itemCount)
  $container.appendChild($itemTotal)
  $container.appendChild($goBackDiv)
  return $container
}

function renderCheckoutItem(items) {
  let $container = createElement('div', { class: 'container my-4' }, [
    createElement('h1', { class: 'page-title font-weight-light text-center' }, ['Checkout']),
    createElement('div', { class: 'mx-auto card p-4', style: 'width: 50%' }, [
      createElement('h2', {}, ['Customer Info']),
      createElement('div', { class: 'form-group' }, [
        createElement('label', {}, ['Name']),
        createElement('div', { class: 'form-row' }, [
          createElement('div', { class: 'col' }, [
            createElement('input', { class: 'form-control mb-3', type: 'text', placeholder: 'First name' }, [])
          ]),
          createElement('div', { class: 'col' }, [
            createElement('input', { class: 'form-control mb-3', type: 'text', placeholder: 'Last name' }, [])
          ])
        ]),
        createElement('div', { class: 'form-group' }, [
          createElement('label', {}, ['Address']),
          createElement('input', { class: 'form-control mb-3', type: 'text', placeholder: 'Enter address' }, [])
        ]),
        createElement('div', { class: 'form-group' }, [
          createElement('label', {}, ['Credit Card']),
          createElement('input', { class: 'form-control mb-3', type: 'text', placeholder: 'Enter credit card information' }, [])
        ]),
        createElement('p', { class: 'text-right' }, [items.length + ' Item(s)']),
        createElement('p', { class: 'text-right text-success font-weight-bold' }, ['Total: $' + calcTotal(items)]),
        createElement('button', { class: 'form-control p-2 btn-primary', pay: 'go-to-message' }, ['Pay'])
      ])
    ])
  ])
  return $container
}

function confirmationMessage() {
  let $container = createElement('div', { class: 'container text-center' }, [
    createElement('h1', { class: 'page-title font-weight-light' }, ['Thank you!']),
    createElement('div', { class: 'card mx-auto', style: 'width: 50%' }, [
      createElement('div', { class: 'card-body' }, [
        createElement('p', { class: 'card-text' }, ['We appreciate your business!']),
        createElement('button', { class: 'p-2 btn-primary', homepage: 'go-home' }, ['Return to Home Screen'])
      ])
    ])
  ])
  return $container
}

function isolateObject(itemId, catalog) {
  for (let i = 0; i < catalog.length; i++) {
    if (itemId === catalog[i].itemId) {
      return catalog[i]
    }
  }
}

document.querySelector('[data-view]').addEventListener('click', function (e) {
  let $filterButton = e.target.getAttribute('sort')
  if ($filterButton !== null) {
    app.sortedItems = updateFilter(app.catalog.items)
    app.filtered = 'yes'
    renderApp(app)
  }
})

document.querySelector('[data-view]').addEventListener('click', function (e) {
  let $filterButton = e.target.getAttribute('sort2')
  if ($filterButton !== null) {
    app.sortedItems = updateFilter2(app.catalog.items)
    app.filtered = 'yes'
    renderApp(app)
  }
})

document.querySelector('[data-view]').addEventListener('click', function (e) {
  let $filterButton = e.target.getAttribute('unfilter')
  if ($filterButton !== null) {
    app.filtered = 'no'
    renderApp(app)
  }
})

document.querySelector('[data-view]').addEventListener('click', function (e) {
  let x = e.target.closest('.card')
  if (x !== null) {
    let viewId = parseInt(x.getAttribute('dataId'), 10)
    let itemDetail = isolateObject(viewId, app.catalog.items)
    app.details.item = itemDetail
    app.view = 'details'
    renderApp(app)
  }
})

document.querySelector('[data-view = details]').addEventListener('click', function (e) {
  let $button = e.target.getAttribute('cart')
  if ($button !== null) {
    let $currentItem = app.details.item
    app.cart.push($currentItem)
  }
  renderApp(app)
})

document.querySelector('[data-view = details]').addEventListener('click', function (e) {
  let $button = e.target.getAttribute('back')
  if ($button !== null) {
    app.view = 'catalog'
  }
  renderApp(app)
})

document.querySelector('[data-view = cart]').addEventListener('click', function (e) {
  let $button = e.target.getAttribute('continue')
  if ($button !== null) {
    app.view = 'catalog'
  }
  renderApp(app)
})

document.querySelector('[data-view = cart]').addEventListener('click', function (e) {
  let $button = e.target.getAttribute('checkout')
  if ($button !== null) {
    app.view = 'checkout'
  }
  renderApp(app)
})

document.querySelector('.my-cart').addEventListener('click', function (e) {
  let $cart = e.target.getAttribute('clicker')
  if ($cart !== null) {
    app.view = 'cart'
    renderApp(app)
  }
})

document.querySelector('[data-view = checkout]').addEventListener('click', function (e) {
  let $checkout = e.target.getAttribute('pay')
  if ($checkout !== null) {
    app.view = 'confirmation'
    renderApp(app)
  }
})

document.querySelector('[data-view = confirmation]').addEventListener('click', function (e) {
  let $checkout = e.target.getAttribute('homepage')
  if ($checkout !== null) {
    app.view = 'catalog'
    app.cart = []
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

function cartCount(myCart) {
  let count = myCart.length
  let $myCart =
    createElement('div', { class: 'mt-3 d-flex flex-row-reverse' }, [
      createElement('p', { clicker: 'cart-view' }, ['Cart (' + count + ')'])
    ])
  return $myCart
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
