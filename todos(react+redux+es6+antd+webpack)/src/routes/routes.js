import { IndexRoute, Route } from 'react-router';

// 页面模块引入
import Demo from '../contaniers/demo';
// 功能函数引入


// 动态路由配置
const routes = [
    {
        path: '/',
        getComponents(nextState, callback) {
            require.ensure([], function(require) {
                callback(null, Demo);
            });
        }
    }
];

export default routes;
