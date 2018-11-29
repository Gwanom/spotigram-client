import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import index from './Reducers'

function saveToStorage(state){
  try{
    const stateData = JSON.stringify(state);
    localStorage.setItem("state",stateData);
  }catch(e){

  }
}

function getStoredState(){
  try{
    const stateData = localStorage.getItem("state");
    if (stateData === null) return undefined;
    return JSON.parse(stateData);
  }catch(e){
    return undefined;
  }
}


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger, reduxThunk)
)

const persistedStore = getStoredState();


const store = createStore(
  index,
  persistedStore,
  enhancer
);
store.subscribe(()=>saveToStorage(store.getState()))
export default store;