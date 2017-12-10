import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import App from './App';
import { counter, addGun, minusGun, addGunAsync} from './index.redux'
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():f=>f
))

function render() {
    ReactDOM.render(<App store={store} addGun={addGun} minusGun={minusGun} addAsync={addGunAsync}/>, document.getElementById('root'));
}
render()
store.subscribe(render)
