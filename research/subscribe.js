// NPM CODE
function render ({props}) {
  return (
    <Context path='url'>
      {
        url => <a href={props.href} class={{active: url === href}}>{props.text}</a>
      }
    </Context>
  )
}

//============================
import {subscribe, unsubscribe} from 'redux-subscribe'

/**
 * Setup the subscription on create, so that it dispatches a local STORE_VALUE
 * action anytime the path we're interested in changes.
 */

function onCreate ({props, key, local}) {
  return subscribe(props.path, key, local(storeValue))
}

/**
 * Render all children that are functions by passing them the current value
 * of the path we're watching
 */

function render ({children, state}) {
  return children.map(child => isFunction(child) ? child(state.value) : child)
}

/**
 * If the path we want to watch changes, cancel the old subscription
 * and create a new one
 */

function onUpdate (prev, next) {
  return [
    unsubscribe(prev.props.path, prev.key),
    subscribe(next.props.path, next.key, local(storeValue))
  ]
}

/**
 * Preserve the global value in our local state
 */

function reducer (state, action) {
  if (action.type === 'STORE_VALUE') {
    return {
      ...state,
      value: action.payload
    }
  }

  return state
}

function storeValue (path, prev, next) {
  return {
    type: 'STORE_VALUE',
    payload: next
  }
}

/**
 * Remove the subscription when the component is removed
 */

function onRemove ({props, key}) {
  return unsubscribe(props.path, key)
}

export default {
  onCreate,
  render,
  reducer,
  onRemove
}
