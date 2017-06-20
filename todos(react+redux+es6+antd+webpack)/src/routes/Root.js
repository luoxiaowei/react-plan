/*global process:通过webpack.DefinePlugin定义*/
const isDebug = (process.env.NODE_ENV !== 'production');
const DevTools = isDebug ? require('../store/devtools/DevTools').default : null ;

import 'babel-polyfill';
import React, { Component }  from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import store from '../store/createStore';
import routes from './routes';
import initReactFastclick from 'react-fastclick';

// 为React组件的onClick移动端触摸添加fastClick
initReactFastclick();

// 提供 Provider 和路由根组件
// 提供 HMR 顶层组件 AppContainer
// 开发模式下启用 Redux Devtools

const history = syncHistoryWithStore(browserHistory, store);

class Root extends Component {
    render() {
        return (
            <AppContainer>
                <Provider store={store}>
                    <div>
                        <Router history={history} routes={routes} />
                        {
                            isDebug ? <DevTools /> : null
                        }
                    </div>
                </Provider>
            </AppContainer>
        );
    }
}

export default Root;