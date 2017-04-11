module.exports = function reducter(state, action) {
  return [
    ...state,
    {
    id: state[state.length - 1] ?
        state[state.length - 1].id + 1 : 1,
    color: action.color,
    size: action.size,
    motto: action.motto
  }]
}
