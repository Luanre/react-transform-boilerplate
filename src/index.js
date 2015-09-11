import React from 'react';
import * as Router from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { routes } from './routes';

function todos (state, action) {
    state = state || [];

    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state;
    }
}

let store = createStore(todos);

Router.run(routes, Router.HistoryLocation, (Handler, routerState) => {
    React.render(
        <Provider store={store}>
            {() => <Handler routerState={routerState} />}
        </Provider>,
        document.getElementById('root')
    );
});
