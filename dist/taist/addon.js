function init() {

  function startModule(define, taistApi, entryPoint) {
    // Build time: Tue Jul 21 2015 11:10:30 GMT+0500 (UZT)
define("@wmakeev/moysklad-module-shipping@0.0.4", ["multiver!lodash@^3.0.0"], function() {
  var global = window;
  var __args__ = arguments;
  var require = (function() {
    var deps = ["lodash@^3.0.0"].reduce(function(res, dep, index) {
      res[dep] = index;
      return res;
    }, {});
    return function(name) {
      if (name in deps) {
        return __args__[deps[name]];
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

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports['default'] = moyskladShippingModule;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _lodash = __webpack_require__(1);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _moyskladClient = __webpack_require__(2);\n\nvar _moyskladClient2 = _interopRequireDefault(_moyskladClient);\n\nvar client = undefined;\n\n// Шаблон элемента меню\nvar menuItem = {\n  type: 'MenuItem',\n  name: 'Заявка на доставку'\n};\n\nfunction deliveryRequest(customerOrders) {\n  var _this = this;\n\n  customerOrders.forEach(function (order) {\n    _this.log.debug(order.name);\n  });\n}\n\n/**\n * Обработчик нажатия на пункт меню\n */\nfunction menuHandler(menu) {\n  var ordersUuids, orders;\n  return regeneratorRuntime.async(function menuHandler$(context$1$0) {\n    while (1) switch (context$1$0.prev = context$1$0.next) {\n      case 0:\n        ordersUuids = menu.appContext === 'customerorder' ? this.UI.getSelectedRowsUuids() : [this.router.getQuery().id];\n\n        if (!(ordersUuids.length > 0)) {\n          context$1$0.next = 8;\n          break;\n        }\n\n        context$1$0.next = 4;\n        return regeneratorRuntime.awrap(client.from('customerOrder').uuids(ordersUuids).load());\n\n      case 4:\n        orders = context$1$0.sent;\n\n        deliveryRequest.call(this, orders);\n        context$1$0.next = 9;\n        break;\n\n      case 8:\n        // Ошибка не должна возникать т.к.\n        // меню 'Создать' не активно когда докумены не выбраны\n        this.UI.error(new Error('Заказы не выбраны'));\n\n      case 9:\n      case 'end':\n        return context$1$0.stop();\n    }\n  }, null, this);\n}\n\nfunction moyskladShippingModule(sb) {\n  var UI = sb.UI;\n\n  return {\n    init: function init(options) {\n      return regeneratorRuntime.async(function init$(context$2$0) {\n        while (1) switch (context$2$0.prev = context$2$0.next) {\n          case 0:\n            client = _moyskladClient2['default'].createClient();\n\n            // Добавляем пункт меню в раздел \"Заказы покупателей\"\n            UI.add(_lodash2['default'].extend({}, menuItem, {\n              menu: 'Создать',\n              appContext: 'customerorder',\n              handler: menuHandler.bind(sb)\n            }));\n\n            // Добавляем пункт меню в редактор \"Заказ покупателя\"\n            UI.add(_lodash2['default'].extend({}, menuItem, {\n              menu: 'Действия',\n              appContext: 'customerorder/edit',\n              handler: menuHandler.bind(sb)\n            }));\n\n          case 3:\n          case 'end':\n            return context$2$0.stop();\n        }\n      }, null, this);\n    }\n  };\n}\n\nmodule.exports = exports['default'];//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQXFDd0Isc0JBQXNCOzs7O2tDQXJDekIsQ0FBUTs7OzswQ0FDUixDQUFpQjs7OztBQUV0QyxJQUFJLE1BQU0sYUFBQzs7O0FBR1gsSUFBTSxRQUFRLEdBQUc7QUFDZixNQUFJLEVBQUUsVUFBVTtBQUNoQixNQUFJLEVBQUUsb0JBQW9CO0NBQzNCLENBQUM7O0FBRUYsU0FBUyxlQUFlLENBQUMsY0FBYyxFQUFFOzs7QUFDdkMsZ0JBQWMsQ0FBQyxPQUFPLENBQUMsZUFBSyxFQUFJO0FBQzlCLFVBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0dBQzNCLENBQUM7Q0FDSDs7Ozs7QUFLRCxTQUFlLFdBQVcsQ0FBQyxJQUFJO01BQ3pCLFdBQVcsRUFLVCxNQUFNOzs7O0FBTFIsbUJBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLGVBQWUsR0FDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxHQUM5QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDOztjQUUzQixXQUFXLENBQUMsTUFBTSxHQUFHLENBQUM7Ozs7Ozt3Q0FDTCxNQUFNLENBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFOzs7QUFEOUMsY0FBTTs7QUFFVix1QkFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7QUFLbkMsWUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7OztDQUVoRDs7QUFFYyxTQUFTLHNCQUFzQixDQUFDLEVBQUUsRUFBRTtNQUMzQyxFQUFFLEdBQUssRUFBRSxDQUFULEVBQUU7O0FBQ1IsU0FBTztBQUNDLFFBQUksZ0JBQUMsT0FBTzs7OztBQUNoQixrQkFBTSxHQUFHLDRCQUFTLFlBQVksRUFBRSxDQUFDOzs7QUFHakMsY0FBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRTtBQUM1QixrQkFBSSxFQUFFLFNBQVM7QUFDZix3QkFBVSxFQUFFLGVBQWU7QUFDM0IscUJBQU8sRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUM5QixDQUFDLENBQUMsQ0FBQzs7O0FBR0osY0FBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRTtBQUM1QixrQkFBSSxFQUFFLFVBQVU7QUFDaEIsd0JBQVUsRUFBRSxvQkFBb0I7QUFDaEMscUJBQU8sRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUM5QixDQUFDLENBQUMsQ0FBQzs7Ozs7OztLQUNMO0dBQ0Y7Q0FDRiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbW95c2tsYWQgZnJvbSAnbW95c2tsYWQtY2xpZW50JztcblxubGV0IGNsaWVudDtcblxuLy8g0KjQsNCx0LvQvtC9INGN0LvQtdC80LXQvdGC0LAg0LzQtdC90Y5cbmNvbnN0IG1lbnVJdGVtID0ge1xuICB0eXBlOiAnTWVudUl0ZW0nLFxuICBuYW1lOiAn0JfQsNGP0LLQutCwINC90LAg0LTQvtGB0YLQsNCy0LrRgydcbn07XG5cbmZ1bmN0aW9uIGRlbGl2ZXJ5UmVxdWVzdChjdXN0b21lck9yZGVycykge1xuICBjdXN0b21lck9yZGVycy5mb3JFYWNoKG9yZGVyID0+IHtcbiAgICB0aGlzLmxvZy5kZWJ1ZyhvcmRlci5uYW1lKVxuICB9KVxufVxuXG4vKipcbiAqINCe0LHRgNCw0LHQvtGC0YfQuNC6INC90LDQttCw0YLQuNGPINC90LAg0L/Rg9C90LrRgiDQvNC10L3RjlxuICovXG5hc3luYyBmdW5jdGlvbiBtZW51SGFuZGxlcihtZW51KSB7XG4gIGxldCBvcmRlcnNVdWlkcyA9IG1lbnUuYXBwQ29udGV4dCA9PT0gJ2N1c3RvbWVyb3JkZXInXG4gICAgPyB0aGlzLlVJLmdldFNlbGVjdGVkUm93c1V1aWRzKClcbiAgICA6IFt0aGlzLnJvdXRlci5nZXRRdWVyeSgpLmlkXTtcblxuICBpZiAob3JkZXJzVXVpZHMubGVuZ3RoID4gMCkge1xuICAgIGxldCBvcmRlcnMgPSBhd2FpdCBjbGllbnRcbiAgICAgIC5mcm9tKCdjdXN0b21lck9yZGVyJykudXVpZHMob3JkZXJzVXVpZHMpLmxvYWQoKTtcbiAgICBkZWxpdmVyeVJlcXVlc3QuY2FsbCh0aGlzLCBvcmRlcnMpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vINCe0YjQuNCx0LrQsCDQvdC1INC00L7Qu9C20L3QsCDQstC+0LfQvdC40LrQsNGC0Ywg0YIu0LouXG4gICAgLy8g0LzQtdC90Y4gJ9Ch0L7Qt9C00LDRgtGMJyDQvdC1INCw0LrRgtC40LLQvdC+INC60L7Qs9C00LAg0LTQvtC60YPQvNC10L3RiyDQvdC1INCy0YvQsdGA0LDQvdGLXG4gICAgdGhpcy5VSS5lcnJvcihuZXcgRXJyb3IoJ9CX0LDQutCw0LfRiyDQvdC1INCy0YvQsdGA0LDQvdGLJykpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW95c2tsYWRTaGlwcGluZ01vZHVsZShzYikge1xuICBsZXQgeyBVSSB9ID0gc2I7XG4gIHJldHVybiB7XG4gICAgYXN5bmMgaW5pdChvcHRpb25zKSB7XG4gICAgICBjbGllbnQgPSBtb3lza2xhZC5jcmVhdGVDbGllbnQoKTtcblxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC/0YPQvdC60YIg0LzQtdC90Y4g0LIg0YDQsNC30LTQtdC7IFwi0JfQsNC60LDQt9GLINC/0L7QutGD0L/QsNGC0LXQu9C10LlcIlxuICAgICAgVUkuYWRkKF8uZXh0ZW5kKHt9LCBtZW51SXRlbSwge1xuICAgICAgICBtZW51OiAn0KHQvtC30LTQsNGC0YwnLFxuICAgICAgICBhcHBDb250ZXh0OiAnY3VzdG9tZXJvcmRlcicsXG4gICAgICAgIGhhbmRsZXI6IG1lbnVIYW5kbGVyLmJpbmQoc2IpXG4gICAgICB9KSk7XG5cbiAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQv9GD0L3QutGCINC80LXQvdGOINCyINGA0LXQtNCw0LrRgtC+0YAgXCLQl9Cw0LrQsNC3INC/0L7QutGD0L/QsNGC0LXQu9GPXCJcbiAgICAgIFVJLmFkZChfLmV4dGVuZCh7fSwgbWVudUl0ZW0sIHtcbiAgICAgICAgbWVudTogJ9CU0LXQudGB0YLQstC40Y8nLFxuICAgICAgICBhcHBDb250ZXh0OiAnY3VzdG9tZXJvcmRlci9lZGl0JyxcbiAgICAgICAgaGFuZGxlcjogbWVudUhhbmRsZXIuYmluZChzYilcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"lodash@^3.0.0\");//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1aXJlKFxcXCJsb2Rhc2hAXjMuMC4wXFxcIilcIj9lZTY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hAXjMuMC4wXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZXF1aXJlKFxcXCJsb2Rhc2hAXjMuMC4wXFxcIilcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = window.require(\"moysklad-client\");;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cucmVxdWlyZShcXFwibW95c2tsYWQtY2xpZW50XFxcIik7XCI/ZTM2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cucmVxdWlyZShcIm1veXNrbGFkLWNsaWVudFwiKTs7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIndpbmRvdy5yZXF1aXJlKFxcXCJtb3lza2xhZC1jbGllbnRcXFwiKTtcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

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