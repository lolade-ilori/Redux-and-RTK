const configureStore = require('@reduxjs/toolkit').configureStore
const { combineReducers } = require('@reduxjs/toolkit')
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/iceCream/iceCreamSlice')

const reducers = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
});

const store = configureStore({
    reducer: reducers
})

module.exports = store