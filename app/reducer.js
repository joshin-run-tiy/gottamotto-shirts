module.exports = function reducter(state, action) {
  switch (action.type) {
    case 'SHIRT@ADD':
      return [
        ...state,
        {
        // id: state.length + 1,
        id: state[state.length - 1] ?
            state[state.length - 1].id + 1 : 1,
        color: action.color,
        size: action.size,
        motto: action.motto
      }]
      break
    case 'SHIRT@REMOVE':
      return state.filter( shirt => shirt.id !== action.id )
      // sending in a shirt object
      // want to return a true or false
      break
    default:
      return state
  }
}
