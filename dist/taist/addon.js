function init() {

  function startModule(define, taistApi, entryPoint) {
    // Build time: Mon Jul 20 2015 21:23:53 GMT+0500 (UZT)
define("@wmakeev/moysklad-module-shipping@0.0.3", ["multiver!lodash@^3.0.0"], function() {
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

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports['default'] = moyskladShippingModule;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _lodash = __webpack_require__(1);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _moyskladClient = __webpack_require__(2);\n\nvar _moyskladClient2 = _interopRequireDefault(_moyskladClient);\n\nvar client = undefined;\n\n// Шаблон элемента меню\nvar menuItem = {\n  type: 'MenuItem',\n  name: 'Заявка на доставку'\n};\n\nfunction deliveryRequest(customerOrders) {\n  var _this = this;\n\n  customerOrders.forEach(function (order) {\n    _this.log.debug(order.name);\n  });\n}\n\n/**\n * Обработчик нажатия на пункт меню\n */\nfunction menuHandler(menu) {\n  var ordersUuids, orders;\n  return regeneratorRuntime.async(function menuHandler$(context$1$0) {\n    while (1) switch (context$1$0.prev = context$1$0.next) {\n      case 0:\n        ordersUuids = menu.appContext === 'customerorder' ? UI.getSelectedRowsUuids() : [this.router.getQuery().id];\n\n        if (!(ordersUuids.length > 0)) {\n          context$1$0.next = 8;\n          break;\n        }\n\n        context$1$0.next = 4;\n        return regeneratorRuntime.awrap(client.from('customerOrder').uuids(ordersUuids).load());\n\n      case 4:\n        orders = context$1$0.sent;\n\n        deliveryRequest.call(this, orders);\n        context$1$0.next = 9;\n        break;\n\n      case 8:\n        // Ошибка не должна возникать т.к.\n        // меню 'Создать' не активно когда докумены не выбраны\n        UI.error(new Error('Заказы не выбраны'));\n\n      case 9:\n      case 'end':\n        return context$1$0.stop();\n    }\n  }, null, this);\n}\n\nfunction moyskladShippingModule(sb) {\n  var UI = sb.UI;\n\n  return {\n    init: function init(options) {\n      return regeneratorRuntime.async(function init$(context$2$0) {\n        while (1) switch (context$2$0.prev = context$2$0.next) {\n          case 0:\n            client = _moyskladClient2['default'].createClient();\n\n            // Добавляем пункт меню в раздел \"Заказы покупателей\"\n            UI.add(_lodash2['default'].extend({}, menuItem, {\n              menu: 'Создать',\n              appContext: 'customerorder',\n              handler: menuHandler.bind(sb)\n            }));\n\n            // Добавляем пункт меню в редактор \"Заказ покупателя\"\n            UI.add(_lodash2['default'].extend({}, menuItem, {\n              menu: 'Действия',\n              appContext: 'customerorder/edit',\n              handler: menuHandler.bind(sb)\n            }));\n\n          case 3:\n          case 'end':\n            return context$2$0.stop();\n        }\n      }, null, this);\n    }\n  };\n}\n\nmodule.exports = exports['default'];//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQXFDd0Isc0JBQXNCOzs7O2tDQXJDekIsQ0FBUTs7OzswQ0FDUixDQUFpQjs7OztBQUV0QyxJQUFJLE1BQU0sYUFBQzs7O0FBR1gsSUFBTSxRQUFRLEdBQUc7QUFDZixNQUFJLEVBQUUsVUFBVTtBQUNoQixNQUFJLEVBQUUsb0JBQW9CO0NBQzNCLENBQUM7O0FBRUYsU0FBUyxlQUFlLENBQUMsY0FBYyxFQUFFOzs7QUFDdkMsZ0JBQWMsQ0FBQyxPQUFPLENBQUMsZUFBSyxFQUFJO0FBQzlCLFVBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0dBQzNCLENBQUM7Q0FDSDs7Ozs7QUFLRCxTQUFlLFdBQVcsQ0FBQyxJQUFJO01BQ3pCLFdBQVcsRUFLVCxNQUFNOzs7O0FBTFIsbUJBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLGVBQWUsR0FDakQsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEdBQ3pCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7O2NBRTNCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7Ozs7O3dDQUNMLE1BQU0sQ0FDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUU7OztBQUQ5QyxjQUFNOztBQUVWLHVCQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7OztBQUtuQyxVQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7Ozs7Q0FFM0M7O0FBRWMsU0FBUyxzQkFBc0IsQ0FBQyxFQUFFLEVBQUU7TUFDM0MsRUFBRSxHQUFLLEVBQUUsQ0FBVCxFQUFFOztBQUNSLFNBQU87QUFDQyxRQUFJLGdCQUFDLE9BQU87Ozs7QUFDaEIsa0JBQU0sR0FBRyw0QkFBUyxZQUFZLEVBQUUsQ0FBQzs7O0FBR2pDLGNBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUU7QUFDNUIsa0JBQUksRUFBRSxTQUFTO0FBQ2Ysd0JBQVUsRUFBRSxlQUFlO0FBQzNCLHFCQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDOUIsQ0FBQyxDQUFDLENBQUM7OztBQUdKLGNBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUU7QUFDNUIsa0JBQUksRUFBRSxVQUFVO0FBQ2hCLHdCQUFVLEVBQUUsb0JBQW9CO0FBQ2hDLHFCQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDOUIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7S0FDTDtHQUNGO0NBQ0YiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1veXNrbGFkIGZyb20gJ21veXNrbGFkLWNsaWVudCc7XG5cbmxldCBjbGllbnQ7XG5cbi8vINCo0LDQsdC70L7QvSDRjdC70LXQvNC10L3RgtCwINC80LXQvdGOXG5jb25zdCBtZW51SXRlbSA9IHtcbiAgdHlwZTogJ01lbnVJdGVtJyxcbiAgbmFtZTogJ9CX0LDRj9Cy0LrQsCDQvdCwINC00L7RgdGC0LDQstC60YMnXG59O1xuXG5mdW5jdGlvbiBkZWxpdmVyeVJlcXVlc3QoY3VzdG9tZXJPcmRlcnMpIHtcbiAgY3VzdG9tZXJPcmRlcnMuZm9yRWFjaChvcmRlciA9PiB7XG4gICAgdGhpcy5sb2cuZGVidWcob3JkZXIubmFtZSlcbiAgfSlcbn1cblxuLyoqXG4gKiDQntCx0YDQsNCx0L7RgtGH0LjQuiDQvdCw0LbQsNGC0LjRjyDQvdCwINC/0YPQvdC60YIg0LzQtdC90Y5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbWVudUhhbmRsZXIobWVudSkge1xuICBsZXQgb3JkZXJzVXVpZHMgPSBtZW51LmFwcENvbnRleHQgPT09ICdjdXN0b21lcm9yZGVyJ1xuICAgID8gVUkuZ2V0U2VsZWN0ZWRSb3dzVXVpZHMoKVxuICAgIDogW3RoaXMucm91dGVyLmdldFF1ZXJ5KCkuaWRdO1xuXG4gIGlmIChvcmRlcnNVdWlkcy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IG9yZGVycyA9IGF3YWl0IGNsaWVudFxuICAgICAgLmZyb20oJ2N1c3RvbWVyT3JkZXInKS51dWlkcyhvcmRlcnNVdWlkcykubG9hZCgpO1xuICAgIGRlbGl2ZXJ5UmVxdWVzdC5jYWxsKHRoaXMsIG9yZGVycyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8g0J7RiNC40LHQutCwINC90LUg0LTQvtC70LbQvdCwINCy0L7Qt9C90LjQutCw0YLRjCDRgi7Qui5cbiAgICAvLyDQvNC10L3RjiAn0KHQvtC30LTQsNGC0YwnINC90LUg0LDQutGC0LjQstC90L4g0LrQvtCz0LTQsCDQtNC+0LrRg9C80LXQvdGLINC90LUg0LLRi9Cx0YDQsNC90YtcbiAgICBVSS5lcnJvcihuZXcgRXJyb3IoJ9CX0LDQutCw0LfRiyDQvdC1INCy0YvQsdGA0LDQvdGLJykpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW95c2tsYWRTaGlwcGluZ01vZHVsZShzYikge1xuICBsZXQgeyBVSSB9ID0gc2I7XG4gIHJldHVybiB7XG4gICAgYXN5bmMgaW5pdChvcHRpb25zKSB7XG4gICAgICBjbGllbnQgPSBtb3lza2xhZC5jcmVhdGVDbGllbnQoKTtcblxuICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC/0YPQvdC60YIg0LzQtdC90Y4g0LIg0YDQsNC30LTQtdC7IFwi0JfQsNC60LDQt9GLINC/0L7QutGD0L/QsNGC0LXQu9C10LlcIlxuICAgICAgVUkuYWRkKF8uZXh0ZW5kKHt9LCBtZW51SXRlbSwge1xuICAgICAgICBtZW51OiAn0KHQvtC30LTQsNGC0YwnLFxuICAgICAgICBhcHBDb250ZXh0OiAnY3VzdG9tZXJvcmRlcicsXG4gICAgICAgIGhhbmRsZXI6IG1lbnVIYW5kbGVyLmJpbmQoc2IpXG4gICAgICB9KSk7XG5cbiAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQv9GD0L3QutGCINC80LXQvdGOINCyINGA0LXQtNCw0LrRgtC+0YAgXCLQl9Cw0LrQsNC3INC/0L7QutGD0L/QsNGC0LXQu9GPXCJcbiAgICAgIFVJLmFkZChfLmV4dGVuZCh7fSwgbWVudUl0ZW0sIHtcbiAgICAgICAgbWVudTogJ9CU0LXQudGB0YLQstC40Y8nLFxuICAgICAgICBhcHBDb250ZXh0OiAnY3VzdG9tZXJvcmRlci9lZGl0JyxcbiAgICAgICAgaGFuZGxlcjogbWVudUhhbmRsZXIuYmluZChzYilcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

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