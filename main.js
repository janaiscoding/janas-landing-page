/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/myapikey.js":
/*!*************************!*\
  !*** ./src/myapikey.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getApiKey)
/* harmony export */ });
function getApiKey() {
    let API_KEY = `qYYK4VN0QiCjprWKsTCA6UPAnHrQEAju`;
    return API_KEY;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myapikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myapikey */ "./src/myapikey.js");

let API_KEY = (0,_myapikey__WEBPACK_IMPORTED_MODULE_0__["default"])();

function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "Dark" ? "Light" : "Dark";
  root.className = newTheme;
  document.querySelector(".theme-name").textContent = newTheme;
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "Dark") {
    setTheme("Light");
  } else {
    setTheme("Dark");
  }
}

const toggleBtn = document.querySelector(".theme-toggle");
toggleBtn.addEventListener("click", setTheme);

//SET INITIAL IMAGE

const img = document.querySelector(".api-img");
async function getAngels() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=angel`,
    {
      mode: "cors",
    }
  );
  const angelData = await response.json();
  img.src = angelData.data.images.original.url;
}
getAngels();
// API TESTS
async function generateGIF(searchedGif) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchedGif}`,
      {
        mode: "cors",
      }
    );
    const searchedGifData = await response.json();
    img.src = searchedGifData.data.images.original.url;
  } catch (error) {
    if (searchedGif === "") {
      console.log("Please type something in the search bar");
      img.src = "./images/cold-forest.jpg";
    }
  }
}
const getGifBtn = document.querySelector(".new-gif");
getGifBtn.addEventListener("click", () => {
  generateGIF("cat");
});

const searchBar = document.getElementById("search");
const submitButton = document.querySelector(".search-button");

const handleUserInput = function () {
  let searchedGif = searchBar.value;
  return searchedGif;
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let searchedGif = handleUserInput();
  generateGIF(searchedGif);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7VUNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ25DLGNBQWMscURBQVM7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFFBQVE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFFBQVEsS0FBSyxZQUFZO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFuYXMtbGFuZGluZy1wYWdlLy4vc3JjL215YXBpa2V5LmpzIiwid2VicGFjazovL2phbmFzLWxhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYW5hcy1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phbmFzLWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phbmFzLWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phbmFzLWxhbmRpbmctcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBcGlLZXkoKSB7XG4gICAgbGV0IEFQSV9LRVkgPSBgcVlZSzRWTjBRaUNqcHJXS3NUQ0E2VVBBbkhyUUVBanVgO1xuICAgIHJldHVybiBBUElfS0VZO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldEFwaUtleSBmcm9tIFwiLi9teWFwaWtleVwiO1xubGV0IEFQSV9LRVkgPSBnZXRBcGlLZXkoKTtcblxuZnVuY3Rpb24gc2V0VGhlbWUoKSB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IG5ld1RoZW1lID0gcm9vdC5jbGFzc05hbWUgPT09IFwiRGFya1wiID8gXCJMaWdodFwiIDogXCJEYXJrXCI7XG4gIHJvb3QuY2xhc3NOYW1lID0gbmV3VGhlbWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWUtbmFtZVwiKS50ZXh0Q29udGVudCA9IG5ld1RoZW1lO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT09IFwiRGFya1wiKSB7XG4gICAgc2V0VGhlbWUoXCJMaWdodFwiKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaGVtZShcIkRhcmtcIik7XG4gIH1cbn1cblxuY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGVtZS10b2dnbGVcIik7XG50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldFRoZW1lKTtcblxuLy9TRVQgSU5JVElBTCBJTUFHRVxuXG5jb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwaS1pbWdcIik7XG5hc3luYyBmdW5jdGlvbiBnZXRBbmdlbHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PSR7QVBJX0tFWX0mcz1hbmdlbGAsXG4gICAge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfVxuICApO1xuICBjb25zdCBhbmdlbERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGltZy5zcmMgPSBhbmdlbERhdGEuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xufVxuZ2V0QW5nZWxzKCk7XG4vLyBBUEkgVEVTVFNcbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlR0lGKHNlYXJjaGVkR2lmKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT0ke0FQSV9LRVl9JnM9JHtzZWFyY2hlZEdpZn1gLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHNlYXJjaGVkR2lmRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpbWcuc3JjID0gc2VhcmNoZWRHaWZEYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoc2VhcmNoZWRHaWYgPT09IFwiXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIHR5cGUgc29tZXRoaW5nIGluIHRoZSBzZWFyY2ggYmFyXCIpO1xuICAgICAgaW1nLnNyYyA9IFwiLi9pbWFnZXMvY29sZC1mb3Jlc3QuanBnXCI7XG4gICAgfVxuICB9XG59XG5jb25zdCBnZXRHaWZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1naWZcIik7XG5nZXRHaWZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZ2VuZXJhdGVHSUYoXCJjYXRcIik7XG59KTtcblxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idXR0b25cIik7XG5cbmNvbnN0IGhhbmRsZVVzZXJJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHNlYXJjaGVkR2lmID0gc2VhcmNoQmFyLnZhbHVlO1xuICByZXR1cm4gc2VhcmNoZWRHaWY7XG59O1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHNlYXJjaGVkR2lmID0gaGFuZGxlVXNlcklucHV0KCk7XG4gIGdlbmVyYXRlR0lGKHNlYXJjaGVkR2lmKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9