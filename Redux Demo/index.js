const redux = require('redux')
const createStore = redux.createStore
const bindActionsCreator = redux.bindActionCreators


const CAKE_ORDERED = 'CAKE_ORDERED'
const RESTOCK_CAKE = 'RESTOCK_CAKE'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

// Action Creator: creates an action, a function that returns an action
// An Action is an object with a type property

const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payLoad: 1,
    }
}

const restockCake = (qty = 1) => {
    return {
        type: RESTOCK_CAKE,
        payLoad: qty
    }
}

const orderIceCream = (qty = 1) => {
    return {
        type: ICECREAM_ORDERED,
        payLoad:qty
    }
} 

const restockIceCream = (qty = 1) => {
    return {
        type: ICECREAM_RESTOCKED,
        payLoad:qty
    }
}

const initialState = {
    numOfCakes: 10,
    numOfIceCream: 20
}

// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        case RESTOCK_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payLoad,
            }
        default:
            return state
    }
}

// NB: if there are more properties in the state object it is safer to use a spread operator in the return function of the reducer i.e. ...state

// SETTING OUR STORE

// HOLDING APPLICATION STATE
const store = createStore(reducer)

//ALLOWING ACCESS TO STATE VIA GETSTATE
console.log('Initial State', store.getState())

// REGISTERING LISTENERS VIA SUBSCRIBE(LISTENER)
const unsubscribe =  store.subscribe(() => console.log('Update state', store.getState()))

// PROVIDES DISPATCH METHOD
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(2))

// UNREGISTER LISTENERS
unsubscribe()

