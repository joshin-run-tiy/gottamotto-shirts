module.exports = function render(store, []) {

  //reference my catalog div in html
  const catalog = document.querySelector('#catalog');
  const tbody = catalog.querySelector('tbody');

  function renderShirt (shirt) {
    console.log(shirt.id)

    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const idCell = docment.createElement('td');
    idCell.textContet = shirt.id;
    tr.appendChild(idCell);

  }

  (function renderCatalog () {
    while(tbody.firstChild) {
  }

    store.map(renderShirt)
  })()
}
