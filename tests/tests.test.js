const test = require('tape')
const reducer = require('../app/reducer.js')

//test 1
test('SHIRT@ADD: add red sm to an empty state', t => {
  const startingState = [];
  const action = {
    type: 'SHIRT@ADD',
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }
  const expectedResult = [{
    id: 1,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }]
  t.deepEqual(reducer(startingState, action), expectedResult)
  t.end()
});

//test2
test('SHIRT@ADD: add green sm to an empty state', t => {
  const startingState = [];
  const action = {
    type: 'SHIRT@ADD',
    color: 'green',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }
  const expectedResult = [{
    id: 1,
    color: 'green',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }]
  t.deepEqual(reducer(startingState, action), expectedResult)
  t.end()
});

//test3
test('SHIRT@ADD: add a second red sm to a state with one red sm', (t) => {
  const starting = [{
    id: 1,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }]
  const action = {
    type: 'SHIRT@ADD',
    color: 'red',
    size: 'sm',
    motto: 'Real programers count from 0.'
  }
  const expect = [{
    id: 1,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
    }, {
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Real programers count from 0.'
  }]
  t.deepEqual(reducer(starting, action), expect)
  t.end()
});

//test 4
test('SHIRT@ADD: add red sm to a state with two shirts', (t) => {
  const startingState = [{
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }, {
    id: 7,
    color: 'white',
    size: 'lg',
    motto: 'Keep calm and code on!'
  }]
  const action = {
    type: 'SHIRT@ADD',
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0.'
  }
  const expected = [{
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }, {
    id: 7,
    color: 'white',
    size: 'lg',
    motto: 'Keep calm and code on!'
  }, {
    id: 8,
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0.'
  }]
  t.deepEqual(reducer(startingState, action), expected)
  t.end()
})
