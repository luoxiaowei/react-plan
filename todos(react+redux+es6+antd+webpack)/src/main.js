import React from 'react';
import { render }  from 'react-dom';
import Root from './routes/Root';
import './styles/_global.scss';

// 渲染根节点并加载全局样式
const renderApp = () => {
    render(
        <Root />,
        document.getElementById('page')
    );
};

renderApp();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes/Root', () => {
        const NextApp = require('./routes/Root').default;
        renderApp();
    });
}