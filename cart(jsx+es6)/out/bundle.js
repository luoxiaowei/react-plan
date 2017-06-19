/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./out/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// 引入组件
	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _CartHeader = __webpack_require__(3);

	var _CartHeader2 = _interopRequireDefault(_CartHeader);

	var _CartMain = __webpack_require__(4);

	var _CartMain2 = _interopRequireDefault(_CartMain);

	var _CartFooter = __webpack_require__(6);

	var _CartFooter2 = _interopRequireDefault(_CartFooter);

	var Cart = (function (_React$Component) {
	    _inherits(Cart, _React$Component);

	    function Cart() {
	        _classCallCheck(this, Cart);

	        _get(Object.getPrototypeOf(Cart.prototype), 'constructor', this).call(this);
	        this.state = {
	            status: true,
	            shops: [{ id: "s001", img: "img/a.jpg!4-4", price: 143, name: "批发透气船袜子1", num: 1, hasCheck: true }, { id: "s002", img: "img/a.jpg!4-4", price: 32, name: "批发透气船袜子2", num: 2, hasCheck: true }, { id: "s003", img: "img/a.jpg!4-4", price: 143, name: "批发透气船袜子3", num: 1, hasCheck: false }, { id: "s004", img: "img/a.jpg!4-4", price: 32, name: "批发透气船袜子4", num: 2, hasCheck: true }],
	            allCheck: true,
	            allPrice: 0
	        };
	        this.allChecked = this.allChecked.bind(this);
	        this.allPrice = this.allPrice.bind(this);
	        this.isAllCheck = this.isAllCheck.bind(this);
	        this.hasStatus = this.hasStatus.bind(this);
	        this.delShop = this.delShop.bind(this);
	        this.delChecked = this.delChecked.bind(this);
	        this.changeShop = this.changeShop.bind(this);
	    }

	    _createClass(Cart, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var result = this.state.shops;
	            this.allPrice(result);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var shop = _step.value;

	                    if (!shop.hasCheck) {
	                        this.setState({ allCheck: false });
	                        break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator['return']) {
	                        _iterator['return']();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'allChecked',
	        value: function allChecked() {
	            var flag = this.state.allCheck;
	            var nextShop = this.state.shops;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = nextShop[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var shop = _step2.value;

	                    shop.hasCheck = !flag;
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	                        _iterator2['return']();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            this.allPrice(nextShop);
	            this.setState({ shops: nextShop, allCheck: !flag });
	        }
	    }, {
	        key: 'allPrice',
	        value: function allPrice(nextShop) {
	            var allPrice = 0;
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = nextShop[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var shop = _step3.value;

	                    if (shop.hasCheck) {
	                        allPrice += shop.num * shop.price;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	                        _iterator3['return']();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            this.setState({ allPrice: allPrice });
	        }
	    }, {
	        key: 'isAllCheck',
	        value: function isAllCheck(nextShop) {
	            var flag = true;
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = nextShop[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var shop = _step4.value;

	                    if (!shop.hasCheck) {
	                        flag = false;
	                        break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4['return']) {
	                        _iterator4['return']();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }

	            this.allPrice(nextShop);
	            this.setState({ shops: nextShop, allCheck: flag });
	        }
	    }, {
	        key: 'hasStatus',
	        value: function hasStatus(flag) {
	            this.setState({ status: flag });
	            this.allPrice(this.state.shops);
	        }
	    }, {
	        key: 'delShop',
	        value: function delShop(old) {
	            var nextShop = this.state.shops;
	            if (nextShop.indexOf(old) != -1) {
	                nextShop.splice(nextShop.indexOf(old), 1);
	            }
	            this.isAllCheck(nextShop);
	        }
	    }, {
	        key: 'delChecked',
	        value: function delChecked() {
	            var nextShop = this.state.shops;
	            for (var i = 0; i < nextShop.length; i++) {
	                if (nextShop[i].hasCheck) {
	                    nextShop.splice(i, 1);
	                    i--;
	                }
	            }
	            this.isAllCheck(nextShop);
	        }
	    }, {
	        key: 'changeShop',
	        value: function changeShop(newShop) {
	            var nextShop = this.state.shops;
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;

	            try {
	                for (var _iterator5 = nextShop[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var shop = _step5.value;

	                    if (shop.id == newShop.id) {
	                        shop = newShop;
	                        break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5['return']) {
	                        _iterator5['return']();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }

	            this.isAllCheck(nextShop);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var status = _state.status;
	            var shops = _state.shops;
	            var allCheck = _state.allCheck;
	            var allPrice = _state.allPrice;

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_CartHeader2['default'], { status: status,
	                    hasStatus: this.hasStatus,
	                    shopsNum: shops.length
	                }),
	                React.createElement(_CartMain2['default'], { status: status,
	                    shops: shops,
	                    changeShop: this.changeShop,
	                    delShop: this.delShop
	                }),
	                React.createElement(_CartFooter2['default'], { status: status,
	                    allCheck: allCheck,
	                    allPrice: allPrice,
	                    allChecked: this.allChecked,
	                    delChecked: this.delChecked
	                })
	            );
	        }
	    }]);

	    return Cart;
	})(React.Component);

	ReactDOM.render(React.createElement(Cart, null), document.getElementById("cart"));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CartHeader = (function (_React$Component) {
	    _inherits(CartHeader, _React$Component);

	    function CartHeader() {
	        _classCallCheck(this, CartHeader);

	        _get(Object.getPrototypeOf(CartHeader.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(CartHeader, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'CartHeader' },
	                React.createElement(
	                    'div',
	                    null,
	                    '购物车(',
	                    this.props.shopsNum,
	                    ')'
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'span',
	                        { onClick: this.status.bind(this) },
	                        this.props.status ? '编辑' : '完成'
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'status',
	        value: function status() {
	            var flag = !this.props.status;
	            this.props.hasStatus(flag);
	        }
	    }]);

	    return CartHeader;
	})(React.Component);

	exports['default'] = CartHeader;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _CartItem = __webpack_require__(5);

	var _CartItem2 = _interopRequireDefault(_CartItem);

	var CartMain = (function (_React$Component) {
	    _inherits(CartMain, _React$Component);

	    function CartMain() {
	        _classCallCheck(this, CartMain);

	        _get(Object.getPrototypeOf(CartMain.prototype), "constructor", this).call(this);
	    }

	    _createClass(CartMain, [{
	        key: "render",
	        value: function render() {
	            var _this = this;

	            this.delShop = this.props.delShop.bind(this);
	            this.changeShop = this.props.changeShop.bind(this);
	            return React.createElement(
	                "ul",
	                { className: "CartMain" },
	                this.props.shops.map(function (shops) {
	                    return React.createElement(_CartItem2["default"], {
	                        key: shops.id,
	                        shops: shops,
	                        status: _this.props.status,
	                        delShop: _this.delShop,
	                        changeShop: _this.changeShop
	                    });
	                })
	            );
	        }
	    }]);

	    return CartMain;
	})(React.Component);

	exports["default"] = CartMain;
	module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CartItem = (function (_React$Component) {
	    _inherits(CartItem, _React$Component);

	    function CartItem() {
	        _classCallCheck(this, CartItem);

	        _get(Object.getPrototypeOf(CartItem.prototype), "constructor", this).call(this);
	        this.hasNum = this.hasNum.bind(this);
	        this.downNum = this.downNum.bind(this);
	        this.addNum = this.addNum.bind(this);
	        this.isCheck = this.isCheck.bind(this);
	        this.delShop = this.delShop.bind(this);
	    }

	    _createClass(CartItem, [{
	        key: "hasNum",
	        value: function hasNum(event) {
	            var shop = this.props.shops;
	            shop.num = event.target.value;
	            this.props.changeShop(shop);
	        }
	    }, {
	        key: "downNum",
	        value: function downNum() {
	            var shop = this.props.shops;
	            if (shop.num != 1) {
	                shop.num = parseInt(shop.num) - 1;
	                this.props.changeShop(shop);
	            } else {
	                console.log("不能再减了");
	            }
	        }
	    }, {
	        key: "addNum",
	        value: function addNum() {
	            var shop = this.props.shops;
	            shop.num = parseInt(shop.num) + 1;
	            this.props.changeShop(shop);
	        }
	    }, {
	        key: "isCheck",
	        value: function isCheck() {
	            var shop = this.props.shops;
	            shop.hasCheck = !shop.hasCheck;
	            this.props.changeShop(shop);
	        }
	    }, {
	        key: "delShop",
	        value: function delShop() {
	            this.props.delShop(this.props.shops);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this = this;

	            var shops = this.props.shops;
	            var id = shops.id;
	            var name = shops.name;
	            var price = shops.price;
	            var num = shops.num;
	            var hasCheck = shops.hasCheck;

	            var item = function item(status) {
	                if (status) {
	                    return React.createElement(
	                        "div",
	                        null,
	                        React.createElement(
	                            "p",
	                            null,
	                            name
	                        ),
	                        React.createElement(
	                            "p",
	                            null,
	                            "价格：￥",
	                            price
	                        ),
	                        React.createElement(
	                            "p",
	                            null,
	                            "数量：",
	                            num
	                        )
	                    );
	                } else {
	                    return React.createElement(
	                        "div",
	                        { className: "edit" },
	                        React.createElement(
	                            "p",
	                            null,
	                            React.createElement(
	                                "span",
	                                { onClick: _this.downNum },
	                                "-"
	                            ),
	                            React.createElement("input", { onChange: _this.hasNum, type: "number", value: shops.num }),
	                            React.createElement(
	                                "span",
	                                { onClick: _this.addNum },
	                                "+"
	                            )
	                        ),
	                        React.createElement(
	                            "p",
	                            null,
	                            React.createElement(
	                                "a",
	                                { onClick: _this.delShop, href: "javascript:;" },
	                                "删除"
	                            )
	                        )
	                    );
	                }
	            };

	            return React.createElement(
	                "li",
	                null,
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement("i", { onClick: this.isCheck, className: hasCheck ? "checked" : "" })
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "a",
	                        { href: "javascript:;" },
	                        React.createElement("img", { src: "img/a.jpg!4-4", alt: "" })
	                    )
	                ),
	                item(this.props.status)
	            );
	        }
	    }]);

	    return CartItem;
	})(React.Component);

	exports["default"] = CartItem;
	module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CartFooter = (function (_React$Component) {
	    _inherits(CartFooter, _React$Component);

	    function CartFooter() {
	        _classCallCheck(this, CartFooter);

	        _get(Object.getPrototypeOf(CartFooter.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(CartFooter, [{
	        key: "buy",
	        value: function buy() {
	            console.log("结算");
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "CartFooter" },
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement("i", { onClick: this.props.allChecked.bind(this), className: this.props.allCheck ? "checked" : "" }),
	                    "全选"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    this.props.status ? '合计：￥' + this.props.allPrice : ''
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "a",
	                        { onClick: this.props.status ? this.buy.bind(this) : this.props.delChecked.bind(this), href: "javascript:;" },
	                        this.props.status ? '结算' : '删除'
	                    )
	                )
	            );
	        }
	    }]);

	    return CartFooter;
	})(React.Component);

	exports["default"] = CartFooter;
	module.exports = exports["default"];

/***/ })
/******/ ]);