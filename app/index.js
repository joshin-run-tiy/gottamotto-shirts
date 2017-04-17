import { createStore } from 'redux'
import reducer from './reducer'
import render from './render'

const Redux = require('redux')
Redux.createStore

console.log("Gotta' motto?");

const store = createStore( reducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const newShirtDiv = document.querySelector('#createShirt')
newShirtDiv.querySelector('#createButton').onclick = () => {
  store.dispatch({
    type: 'SHIRT@ADD',
    color: newShirtDiv.querySelector('#color').value,
    size: newShirtDiv.querySelector('#size').value,
    motto: newShirtDiv.querySelector('#motto').value
  })
}

const removeShirtDiv = document.querySelector('#removeShirt');
removeShirtDiv.querySelector('#removeButton').onclick = () => store.dispatch({
  type: 'SHIRT@REMOVE',
  id: parseInt(removeShirtDiv.querySelector('#id').value)
})

store.subscribe( () => {
  console.log("store.getState():", store.getState());
  render(store.getState())
})
