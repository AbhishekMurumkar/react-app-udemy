webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "B:\\programs\\react-app-udemy\\NextProject\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // const index = () => {
//   return (
//     <div>
//       <h1>The Main Page</h1>
//       <p>
//         Go to
//         <Link href="/auth">
//           <a>Auth</a>
//         </Link>
//         Page
//       </p>
//       <button
//         onClick={() => {
//           Router.push("/auth");
//         }}
//       >
//         Auth Route
//       </button>
//     </div>
//   );
// };
// export default index;

var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, "The Main Page"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, "Go to", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/auth",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, "Auth")), "Page"), __jsx("button", {
        onClick: function onClick() {
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/auth");
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, "Auth Route"));
    }
  }], [{
    key: "getInitialProps",
    //   static async getStaticProps(context) {
    //     console.log(context);
    //     return {};
    //   }
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var mypromise;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(context);
                mypromise = new Promise(function (resolve, reject) {
                  try {
                    setTimeout(function () {
                      resolve({
                        appName: 'myNextApp'
                      });
                    }, 5000);
                  } catch (err) {
                    reject(err);
                  }
                });
                return _context.abrupt("return", mypromise);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIlJvdXRlciIsInB1c2giLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsIm15cHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImFwcE5hbWUiLCJlcnIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUEsSzs7Ozs7Ozs7Ozs7Ozs2QkFrQks7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFFRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FGRixTQUZGLEVBU0U7QUFDRSxlQUFPLEVBQUUsbUJBQU07QUFDYkMsNERBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVo7QUFDRCxTQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVEYsQ0FERjtBQW1CRDs7O0FBckNIO0FBQ0E7QUFDQTtBQUNBOzsrTkFDK0JDLE87Ozs7OztBQUMzQkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ01HLHlCLEdBQVksSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFrQjtBQUM1QyxzQkFBRztBQUNDQyw4QkFBVSxDQUFDLFlBQUk7QUFDWEYsNkJBQU8sQ0FBQztBQUFDRywrQkFBTyxFQUFDO0FBQVQsdUJBQUQsQ0FBUDtBQUNILHFCQUZTLEVBRVIsSUFGUSxDQUFWO0FBR0gsbUJBSkQsQ0FJQyxPQUFNQyxHQUFOLEVBQVU7QUFDUEgsMEJBQU0sQ0FBQ0csR0FBRCxDQUFOO0FBQ0g7QUFDSixpQkFSaUIsQztpREFTWE4sUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhCU08sK0M7O0FBd0NMYixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZDE3Y2Y5ZDhiZmMzNGM4YTM5OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgIDxoMT5UaGUgTWFpbiBQYWdlPC9oMT5cclxuLy8gICAgICAgPHA+XHJcbi8vICAgICAgICAgR28gdG9cclxuLy8gICAgICAgICA8TGluayBocmVmPVwiL2F1dGhcIj5cclxuLy8gICAgICAgICAgIDxhPkF1dGg8L2E+XHJcbi8vICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgIFBhZ2VcclxuLy8gICAgICAgPC9wPlxyXG4vLyAgICAgICA8YnV0dG9uXHJcbi8vICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4vLyAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYXV0aFwiKTtcclxuLy8gICAgICAgICB9fVxyXG4vLyAgICAgICA+XHJcbi8vICAgICAgICAgQXV0aCBSb3V0ZVxyXG4vLyAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgc3RhdGljIGFzeW5jIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4vLyAgICAgcmV0dXJuIHt9O1xyXG4vLyAgIH1cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gICAgY29uc3QgbXlwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7YXBwTmFtZTonbXlOZXh0QXBwJ30pXHJcbiAgICAgICAgICAgIH0sNTAwMCk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG15cHJvbWlzZTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+VGhlIE1haW4gUGFnZTwvaDE+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBHbyB0b1xyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XHJcbiAgICAgICAgICAgIDxhPkF1dGg8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICBQYWdlXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYXV0aFwiKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQXV0aCBSb3V0ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9