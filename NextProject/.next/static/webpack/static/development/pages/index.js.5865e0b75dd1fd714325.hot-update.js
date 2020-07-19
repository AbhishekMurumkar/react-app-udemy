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
      }, "The Main Page of ", this.props.appName), __jsx("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiYXBwTmFtZSIsIlJvdXRlciIsInB1c2giLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsIm15cHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImVyciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxLOzs7Ozs7Ozs7Ozs7OzZCQWtCSztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQXNCLEtBQUtDLEtBQUwsQ0FBV0MsT0FBakMsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRUUsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBRkYsU0FGRixFQVNFO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2JDLDREQUFNLENBQUNDLElBQVAsQ0FBWSxPQUFaO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVRGLENBREY7QUFtQkQ7OztBQXJDSDtBQUNBO0FBQ0E7QUFDQTs7K05BQytCQyxPOzs7Ozs7QUFDM0JDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNNRyx5QixHQUFZLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVNDLE1BQVQsRUFBa0I7QUFDNUMsc0JBQUc7QUFDQ0MsOEJBQVUsQ0FBQyxZQUFJO0FBQ1hGLDZCQUFPLENBQUM7QUFBQ1IsK0JBQU8sRUFBQztBQUFULHVCQUFELENBQVA7QUFDSCxxQkFGUyxFQUVSLElBRlEsQ0FBVjtBQUdILG1CQUpELENBSUMsT0FBTVcsR0FBTixFQUFVO0FBQ1BGLDBCQUFNLENBQUNFLEdBQUQsQ0FBTjtBQUNIO0FBQ0osaUJBUmlCLEM7aURBU1hMLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoQlNNLCtDOztBQXdDTGQsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU4NjVlMGI3NWRkMWZkNzE0MzI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIGNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICA8aDE+VGhlIE1haW4gUGFnZTwvaDE+XHJcbi8vICAgICAgIDxwPlxyXG4vLyAgICAgICAgIEdvIHRvXHJcbi8vICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoXCI+XHJcbi8vICAgICAgICAgICA8YT5BdXRoPC9hPlxyXG4vLyAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICBQYWdlXHJcbi8vICAgICAgIDwvcD5cclxuLy8gICAgICAgPGJ1dHRvblxyXG4vLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuLy8gICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2F1dGhcIik7XHJcbi8vICAgICAgICAgfX1cclxuLy8gICAgICAgPlxyXG4vLyAgICAgICAgIEF1dGggUm91dGVcclxuLy8gICAgICAgPC9idXR0b24+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9O1xyXG4vLyBleHBvcnQgZGVmYXVsdCBpbmRleDtcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgIHN0YXRpYyBhc3luYyBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuLy8gICAgIHJldHVybiB7fTtcclxuLy8gICB9XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICAgIGNvbnN0IG15cHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe2FwcE5hbWU6J215TmV4dEFwcCd9KVxyXG4gICAgICAgICAgICB9LDUwMDApO1xyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBteXByb21pc2U7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlRoZSBNYWluIFBhZ2Ugb2Yge3RoaXMucHJvcHMuYXBwTmFtZX08L2gxPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgR28gdG9cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPlxyXG4gICAgICAgICAgICA8YT5BdXRoPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgUGFnZVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2F1dGhcIik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEF1dGggUm91dGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==