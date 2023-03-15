const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const BUY_EGG = 'BUY_EGG';
const BUY_CHICKEN = 'BUY_CHICKEN'

function buyEgg() {
    return {
        type: BUY_EGG
    }
}

function buyChicken() {
    return {
        type: BUY_CHICKEN
    }
}

const initialEggState = {
    numOfEggs: 100
}

const initialChickenState = {
    numOfChickens: 10
}

const eggReducer = (state=initialEggState, action) => {
    switch (action.type) {
        case BUY_EGG:
            return {
                ...state,
                numOfEggs: state.numOfEggs - 1
            }
        default: return state
    }
}

const chickenReducer = (state=initialChickenState, action) => {
    switch (action.type) {
        case BUY_CHICKEN:
            return {
                ...state,
                numOfChickens: state.numOfChickens - 1
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    egg: eggReducer,
    chicken: chickenReducer
})

const store = createStore(rootReducer);
console.log('Initial state ', store.getState());
store.subscribe(() => console.log('Updated state ', store.getState()));
store.dispatch(buyEgg());
store.dispatch(buyEgg());
store.dispatch(buyChicken());