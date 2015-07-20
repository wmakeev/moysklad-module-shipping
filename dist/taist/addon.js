function init() {

  function startModule(define, taistApi, entryPoint) {
    // Build time: Mon Jul 20 2015 19:21:26 GMT+0500 (UZT)
define("@wmakeev/moysklad-module-shipping@0.0.1", ["multiver!lodash@^3.0.0"], function() {
  var global = window;
  var __global_require__ = require;
  var __args__ = arguments;
  var require = (function() {
    var deps = ["lodash@^3.0.0"].reduce(function(res, dep, index) {
      res[dep] = index;
      return res;
    }, {});
    return function(name) {
      if (name in deps) {
        return __args__[deps[name]];
      } else if (__global_require__) {
        return __global_require__(name);
      } else {
        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
    }
  })();

  return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports.moyskladShippingModule = moyskladShippingModule;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _lodash = __webpack_require__(1);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _moyskladClient = __webpack_require__(2);\n\nvar _moyskladClient2 = _interopRequireDefault(_moyskladClient);\n\nvar client = undefined;\n\n// Шаблон элемента меню\nvar menuItem = {\n  type: 'MenuItem',\n  name: 'Заявка на доставку'\n};\n\nfunction deliveryRequest(customerOrders) {\n  var _this = this;\n\n  customerOrders.forEach(function (order) {\n    _this.log.debug(order.name);\n  });\n}\n\n/**\n * Обработчик нажатия на пункт меню\n */\nfunction menuHandler(menu) {\n  var ordersUuids, orders;\n  return regeneratorRuntime.async(function menuHandler$(context$1$0) {\n    while (1) switch (context$1$0.prev = context$1$0.next) {\n      case 0:\n        ordersUuids = menu.appContext === 'customerorder' ? UI.getSelectedRowsUuids() : [this.router.getQuery().id];\n\n        if (!(ordersUuids.length > 0)) {\n          context$1$0.next = 8;\n          break;\n        }\n\n        context$1$0.next = 4;\n        return regeneratorRuntime.awrap(client.from('customerOrder').uuids(ordersUuids).load());\n\n      case 4:\n        orders = context$1$0.sent;\n\n        deliveryRequest.call(this, orders);\n        context$1$0.next = 9;\n        break;\n\n      case 8:\n        // Ошибка не должна возникать т.к.\n        // меню 'Создать' не активно когда докумены не выбраны\n        UI.error(new Error('Заказы не выбраны'));\n\n      case 9:\n      case 'end':\n        return context$1$0.stop();\n    }\n  }, null, this);\n}\n\nfunction moyskladShippingModule(sb) {\n  var UI = sb.UI;\n\n  return {\n    init: function init(options) {\n      return regeneratorRuntime.async(function init$(context$2$0) {\n        while (1) switch (context$2$0.prev = context$2$0.next) {\n          case 0:\n            client = _moyskladClient2['default'].createClient();\n\n            // Добавляем пункт меню в раздел \"Заказы покупателей\"\n            UI.add(_lodash2['default'].extend({}, menuItem, {\n              menu: 'Создать',\n              appContext: 'customerorder',\n              handler: menuHandler.bind(sb)\n            }));\n\n            // Добавляем пункт меню в редактор \"Заказ покупателя\"\n            UI.add(_lodash2['default'].extend({}, menuItem, {\n              menu: 'Действия',\n              appContext: 'customerorder/edit',\n              handler: menuHandler.bind(sb)\n            }));\n\n          case 3:\n          case 'end':\n            return context$2$0.stop();\n        }\n      }, null, this);\n    }\n  };\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1FBcUNnQixzQkFBc0IsR0FBdEIsc0JBQXNCOzs7O2tDQXJDakIsQ0FBUTs7OzswQ0FDUixDQUFpQjs7OztBQUV0QyxJQUFJLE1BQU0sYUFBQzs7O0FBR1gsSUFBTSxRQUFRLEdBQUc7QUFDZixNQUFJLEVBQUUsVUFBVTtBQUNoQixNQUFJLEVBQUUsb0JBQW9CO0NBQzNCLENBQUM7O0FBRUYsU0FBUyxlQUFlLENBQUMsY0FBYyxFQUFFOzs7QUFDdkMsZ0JBQWMsQ0FBQyxPQUFPLENBQUMsZUFBSyxFQUFJO0FBQzlCLFVBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0dBQzNCLENBQUM7Q0FDSDs7Ozs7QUFLRCxTQUFlLFdBQVcsQ0FBQyxJQUFJO01BQ3pCLFdBQVcsRUFLVCxNQUFNOzs7O0FBTFIsbUJBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLGVBQWUsR0FDakQsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEdBQ3pCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7O2NBRTNCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7Ozs7O3dDQUNMLE1BQU0sQ0FDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUU7OztBQUQ5QyxjQUFNOztBQUVWLHVCQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7OztBQUtuQyxVQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7Ozs7Q0FFM0M7O0FBRU0sU0FBUyxzQkFBc0IsQ0FBQyxFQUFFLEVBQUU7TUFDbkMsRUFBRSxHQUFLLEVBQUUsQ0FBVCxFQUFFOztBQUNSLFNBQU87QUFDQyxRQUFJLGdCQUFDLE9BQU87Ozs7QUFDaEIsa0JBQU0sR0FBRyw0QkFBUyxZQUFZLEVBQUUsQ0FBQzs7O0FBR2pDLGNBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUU7QUFDNUIsa0JBQUksRUFBRSxTQUFTO0FBQ2Ysd0JBQVUsRUFBRSxlQUFlO0FBQzNCLHFCQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDOUIsQ0FBQyxDQUFDLENBQUM7OztBQUdKLGNBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUU7QUFDNUIsa0JBQUksRUFBRSxVQUFVO0FBQ2hCLHdCQUFVLEVBQUUsb0JBQW9CO0FBQ2hDLHFCQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDOUIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7S0FDTDtHQUNGIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCBtb3lza2xhZCBmcm9tICdtb3lza2xhZC1jbGllbnQnO1xuXG5sZXQgY2xpZW50O1xuXG4vLyDQqNCw0LHQu9C+0L0g0Y3Qu9C10LzQtdC90YLQsCDQvNC10L3RjlxuY29uc3QgbWVudUl0ZW0gPSB7XG4gIHR5cGU6ICdNZW51SXRlbScsXG4gIG5hbWU6ICfQl9Cw0Y/QstC60LAg0L3QsCDQtNC+0YHRgtCw0LLQutGDJ1xufTtcblxuZnVuY3Rpb24gZGVsaXZlcnlSZXF1ZXN0KGN1c3RvbWVyT3JkZXJzKSB7XG4gIGN1c3RvbWVyT3JkZXJzLmZvckVhY2gob3JkZXIgPT4ge1xuICAgIHRoaXMubG9nLmRlYnVnKG9yZGVyLm5hbWUpXG4gIH0pXG59XG5cbi8qKlxuICog0J7QsdGA0LDQsdC+0YLRh9C40Log0L3QsNC20LDRgtC40Y8g0L3QsCDQv9GD0L3QutGCINC80LXQvdGOXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG1lbnVIYW5kbGVyKG1lbnUpIHtcbiAgbGV0IG9yZGVyc1V1aWRzID0gbWVudS5hcHBDb250ZXh0ID09PSAnY3VzdG9tZXJvcmRlcidcbiAgICA/IFVJLmdldFNlbGVjdGVkUm93c1V1aWRzKClcbiAgICA6IFt0aGlzLnJvdXRlci5nZXRRdWVyeSgpLmlkXTtcblxuICBpZiAob3JkZXJzVXVpZHMubGVuZ3RoID4gMCkge1xuICAgIGxldCBvcmRlcnMgPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKCdjdXN0b21lck9yZGVyJykudXVpZHMob3JkZXJzVXVpZHMpLmxvYWQoKTtcbiAgICBkZWxpdmVyeVJlcXVlc3QuY2FsbCh0aGlzLCBvcmRlcnMpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vINCe0YjQuNCx0LrQsCDQvdC1INC00L7Qu9C20L3QsCDQstC+0LfQvdC40LrQsNGC0Ywg0YIu0LouXG4gICAgLy8g0LzQtdC90Y4gJ9Ch0L7Qt9C00LDRgtGMJyDQvdC1INCw0LrRgtC40LLQvdC+INC60L7Qs9C00LAg0LTQvtC60YPQvNC10L3RiyDQvdC1INCy0YvQsdGA0LDQvdGLXG4gICAgVUkuZXJyb3IobmV3IEVycm9yKCfQl9Cw0LrQsNC30Ysg0L3QtSDQstGL0LHRgNCw0L3RiycpKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3lza2xhZFNoaXBwaW5nTW9kdWxlKHNiKSB7XG4gIGxldCB7IFVJIH0gPSBzYjtcbiAgcmV0dXJuIHtcbiAgICBhc3luYyBpbml0KG9wdGlvbnMpIHtcbiAgICAgIGNsaWVudCA9IG1veXNrbGFkLmNyZWF0ZUNsaWVudCgpO1xuXG4gICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0L/Rg9C90LrRgiDQvNC10L3RjiDQsiDRgNCw0LfQtNC10LsgXCLQl9Cw0LrQsNC30Ysg0L/QvtC60YPQv9Cw0YLQtdC70LXQuVwiXG4gICAgICBVSS5hZGQoXy5leHRlbmQoe30sIG1lbnVJdGVtLCB7XG4gICAgICAgIG1lbnU6ICfQodC+0LfQtNCw0YLRjCcsXG4gICAgICAgIGFwcENvbnRleHQ6ICdjdXN0b21lcm9yZGVyJyxcbiAgICAgICAgaGFuZGxlcjogbWVudUhhbmRsZXIuYmluZChzYilcbiAgICAgIH0pKTtcblxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC/0YPQvdC60YIg0LzQtdC90Y4g0LIg0YDQtdC00LDQutGC0L7RgCBcItCX0LDQutCw0Lcg0L/QvtC60YPQv9Cw0YLQtdC70Y9cIlxuICAgICAgVUkuYWRkKF8uZXh0ZW5kKHt9LCBtZW51SXRlbSwge1xuICAgICAgICBtZW51OiAn0JTQtdC50YHRgtCy0LjRjycsXG4gICAgICAgIGFwcENvbnRleHQ6ICdjdXN0b21lcm9yZGVyL2VkaXQnLFxuICAgICAgICBoYW5kbGVyOiBtZW51SGFuZGxlci5iaW5kKHNiKVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"lodash@^3.0.0\");//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1aXJlKFxcXCJsb2Rhc2hAXjMuMC4wXFxcIilcIj9lZTY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hAXjMuMC4wXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZXF1aXJlKFxcXCJsb2Rhc2hAXjMuMC4wXFxcIilcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = require(\"moysklad-client\");;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1aXJlKFxcXCJtb3lza2xhZC1jbGllbnRcXFwiKTtcIj9iYThmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3lza2xhZC1jbGllbnRcIik7O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZXF1aXJlKFxcXCJtb3lza2xhZC1jbGllbnRcXFwiKTtcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);
});

  }
  
  function discoverAMD(timeout, cb) {
  var guid = "70152108-2745-4c6a-b529-c4fe10e488a7";
  function discover(key, handler) {
  var discoveredEventsIds = {};
  var publishEventName = guid + ':publish';
  var discoverEventName = guid + ':discover';

  var stop = function () {
    window.removeEventListener(publishEventName, listener);
  };

  var listener = function (ev) {
    ev = ev.detail;
    if (ev && ev.id && ev.key === key && !discoveredEventsIds.hasOwnProperty(ev.id)) {
      discoveredEventsIds[ev.id] = true;
      handler(ev.value, stop);
    }
  };
  window.addEventListener(publishEventName, listener);

  var event = new CustomEvent(discoverEventName, {
    detail: {
      key: key
    }
  });
  window.dispatchEvent(event);

  return {
    stop: stop
  }
}

  var resolved = false;

  var disc = discover('amd:ready', function (data) {
    resolved = true;
    disc.stop();
    cb(null, data);
  });

  setTimeout(function () {
    if (!resolved) {
      disc.stop();
      cb(new Error('Waiting for AMD timeout'));
    }
  }, timeout);
}

  
  return {
    start: function(taistApi, entryPoint) {
      discoverAMD(15000, function (err, amd) {
        if (err) throw err;
        startModule(amd.define, taistApi, entryPoint);
      })
    }
  };
}