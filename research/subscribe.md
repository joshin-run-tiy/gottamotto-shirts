****
# Redux and Subscribe Method
****

### Reducer Setup

- redux script tracks
- single global variable
- use npm bundle it

```const { createStore } = Redux;```

1. store binds together the three principles of Redux
2. holds the current applications state object
3. lets you dispatch actions
4. when create it need to specify the reducer that tells how state is updated with actions.

  ```const { createStore } = Redux;
const store = createStore(count);```

5. store = the reducer that manages the state updates

### Store Methods

1. store.getState() - retrieves the current state of the Redux store.

  ```console.log(store.getState());```

2. store.dispatch({ type: ''})
 * most commonly used method
 * lets you dispatch actions that lets you change the state of your application

```console.log(store.getState());
store.dispatch({ type: ''});
```

3. store.subscribe()
 * render something to the body of the html
 * lets you register a call back any time an action has been dispatched. so that you can update the UI of your application to reflect the current application state.


 ```const counter = (state = 0, action) => {
   switch (action.type) {
    case 'INCREMENT':
       return state + 1;
    case 'DECREMENT':
       return state - 1;
    default:
       return state;        
  }
}

const { createStore } = Redux;
const store = createStore(counter);

store.subscribe(() +> {
  document.body.innerText = store.getState();
});```

//counterconsole.log(store.getState());
//store.dispatch({ type: ''});```

### NPM Explanation
* LINK:  [Redux-subscribe](https://github.com/ashaffer/redux-subscribe)
* Subscribe to a path in your redux state atom
* It gives you the ability to dispatch an action in response to the change of a path in your global state atom. This allows you to create a Context component which will dispatch an action that updates its own local state in response to a change in the global state atom. The context component may then pass down that piece of state to its children, e.g.
* Comparison to redux-watch
  * redux-watch is a similar redux-related utility, but with two important differences:

    * Performance. The most natural ways to use redux-watch in your components would create one watcher for each component instance. This scales very poorly as your component tree grows large. redux-subscribe maintains a map of all current subscriptions, so only has to lookup the values and compare them once per unique subscription, which scales very well in most applications.
    * redux-subscribe is a middleware whereas redux-watch wraps your store. This allows redux-subscribe to sit in the middle and setup/teardown subscriptions in response to actions, which lets you keep everything pure and internal to redux.
  * Performance
    * The performance of redux-subscribe is proportional to the number of unique paths that are subscribed to. This means that it scales very well, provided you aren't subscribing to lots (as in hundreds or thousands) of different things. Each time the state updates, each unique path that has been subscribed to is checked for a change, if it has been changed, the listeners are called and their results dispatched.
