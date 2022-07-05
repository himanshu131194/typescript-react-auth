"use strict";
(self["webpackChunkguess_melody_client"] = self["webpackChunkguess_melody_client"] || []).push([["index"],{

/***/ 6136:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2577:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_use_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6750);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9218);
/* harmony import */ var _views_layouts_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6567);
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1282);
/* harmony import */ var _store_slices_user_process_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6339);
/* harmony import */ var _store_slices_game_data_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(217);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5893);







function App() {
    var authorizationStatus = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(_store_slices_user_process_selectors__WEBPACK_IMPORTED_MODULE_4__.getAuthorizationStatus);
    var isDataLoaded = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(_store_slices_game_data_selectors__WEBPACK_IMPORTED_MODULE_5__.getLoadedDataStatus);
    if ((0,_game__WEBPACK_IMPORTED_MODULE_1__.isCheckAuth)(authorizationStatus) || !isDataLoaded) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_loading_loading__WEBPACK_IMPORTED_MODULE_3__["default"], {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_views_layouts_default__WEBPACK_IMPORTED_MODULE_2__["default"], {
        authStatus: authorizationStatus
    });
}
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ 2116:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */




function AudioPlayer(_a) {
    var isPlaying = _a.isPlaying, src = _a.src, onPlayButtonClick = _a.onPlayButtonClick;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), isLoading = _b[0], setIsLoading = _b[1];
    var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (audioRef.current !== null) {
            audioRef.current.onloadeddata = function () { return setIsLoading(false); };
        }
        return function () {
            if (audioRef.current !== null) {
                audioRef.current.onloadeddata = null;
                audioRef.current = null;
            }
        };
    }, [src]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (audioRef.current === null) {
            return;
        }
        if (isPlaying) {
            audioRef.current.play();
            return;
        }
        audioRef.current.pause();
    }, [isPlaying]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                className: "track__button track__button--".concat(isPlaying ? 'pause' : 'play'),
                type: "button",
                disabled: isLoading,
                onClick: onPlayButtonClick
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "track__status",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("audio", {
                    src: src,
                    ref: audioRef,
                    "data-testid": "audio"
                })
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);


/***/ }),

/***/ 6914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_use_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6750);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


function ErrorMessage() {
    var error = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(function (_a) {
        var ERROR = _a.ERROR;
        return ERROR;
    }).error;
    if (error) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            style: {
                position: 'fixed',
                top: '30px',
                right: '30px',
                padding: '10px',
                backgroundColor: '#d96666',
                color: 'white',
                borderRadius: '5px'
            },
            children: error
        });
    }
    return null;
}
/* harmony default export */ __webpack_exports__["default"] = (ErrorMessage);


/***/ }),

/***/ 4841:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6974);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);
/* harmony import */ var _hocs_with_audio_player_with_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2258);
/* harmony import */ var _views_pages_question_artist_question_artist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8987);
/* harmony import */ var _views_pages_question_genre_question_genre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1694);
/* harmony import */ var _mistakes_mistakes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9938);
/* harmony import */ var _hooks_use_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6750);
/* harmony import */ var _store_slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5820);
/* harmony import */ var _store_slices_game_process_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4866);
/* harmony import */ var _store_slices_game_data_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(217);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5893);











var ArtistQuestionScreenWrapped = (0,_hocs_with_audio_player_with_audio_player__WEBPACK_IMPORTED_MODULE_1__["default"])(_views_pages_question_artist_question_artist__WEBPACK_IMPORTED_MODULE_2__["default"]);
var GenreQuestionScreenWrapped = (0,_hocs_with_audio_player_with_audio_player__WEBPACK_IMPORTED_MODULE_1__["default"])(_views_pages_question_genre_question_genre__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Game() {
    var step = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_store_slices_game_process_selectors__WEBPACK_IMPORTED_MODULE_7__.getStep);
    var mistakes = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_store_slices_game_process_selectors__WEBPACK_IMPORTED_MODULE_7__.getMistakesCount);
    var questions = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_store_slices_game_data_selectors__WEBPACK_IMPORTED_MODULE_8__.getQuestion);
    var dispatch = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
    var question = questions[step];
    if (mistakes >= _const__WEBPACK_IMPORTED_MODULE_0__.MAX_MISTAKE_COUNT) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Navigate, {
            to: _const__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Lose
        });
    }
    if (step >= questions.length || !question) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Navigate, {
            to: _const__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Result
        });
    }
    var onUserAnswer = function (questionItem, userAnswer) {
        dispatch((0,_store_slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_6__.incrementStep)());
        dispatch((0,_store_slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_6__.checkUserAnswer)({
            question: questionItem,
            userAnswer: userAnswer
        }));
    };
    switch (question.type) {
        case _const__WEBPACK_IMPORTED_MODULE_0__.GameType.Artist:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ArtistQuestionScreenWrapped, {
                question: question,
                onAnswer: onUserAnswer,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mistakes_mistakes__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    count: mistakes
                })
            }, step);
        case _const__WEBPACK_IMPORTED_MODULE_0__.GameType.Genre:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(GenreQuestionScreenWrapped, {
                question: question,
                onAnswer: onUserAnswer,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mistakes_mistakes__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    count: mistakes
                })
            }, step);
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Navigate, {
                to: _const__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Root
            });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ 6068:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);


function GenreQuestionItem(props) {
    var answer = props.answer, id = props.id, onChange = props.onChange, renderPlayer = props.renderPlayer, userAnswer = props.userAnswer;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "track",
        children: [renderPlayer(answer.src, id), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "game__answer",
                children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                        className: "game__input visually-hidden",
                        type: "checkbox",
                        name: "answer",
                        value: "answer-".concat(id),
                        id: "answer-".concat(id),
                        checked: userAnswer,
                        onChange: function (_a) {
                            var target = _a.target;
                            var value = target.checked;
                            onChange(id, value);
                        }
                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                        className: "game__check",
                        htmlFor: "answer-".concat(id),
                        children: "\u041E\u0442\u043C\u0435\u0442\u0438\u0442\u044C"
                    })]
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (GenreQuestionItem);


/***/ }),

/***/ 1807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_use_user_answers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2883);
/* harmony import */ var _genre_question_item_genre_question_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6068);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);




function GenreQuestionList(props) {
    var onAnswer = props.onAnswer, question = props.question, renderPlayer = props.renderPlayer;
    var answers = question.answers;
    var _a = (0,_hooks_use_user_answers__WEBPACK_IMPORTED_MODULE_0__.useUserAnswers)(question), userAnswers = _a[0], handleAnswerChenge = _a[1];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
        className: "game__tracks",
        onSubmit: function (evt) {
            evt.preventDefault();
            onAnswer(question, userAnswers);
        },
        children: [answers.map(function (answer, id) {
                var keyValue = "".concat(id, "=").concat(answer.src);
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_genre_question_item_genre_question_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    answer: answer,
                    id: id,
                    onChange: handleAnswerChenge,
                    renderPlayer: renderPlayer,
                    userAnswer: userAnswers[id]
                }, keyValue);
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "game__submit button",
                type: "submit",
                children: "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C"
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (GenreQuestionList);


/***/ }),

/***/ 5505:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);



function HistoryRouter(props) {
    var history = props.history, basename = props.basename, children = props.children;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        action: history.action,
        location: history.location
    }), state = _a[0], setState = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () { return history.listen(setState); }, [history]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Router, {
        basename: basename,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        children: children
    });
}
/* harmony default export */ __webpack_exports__["default"] = (HistoryRouter);


/***/ }),

/***/ 1282:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function Loading() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: "Loading ..."
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Loading);


/***/ }),

/***/ 2257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9711);
/* harmony import */ var _images_melody_logo_ginger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9500);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
/* eslint-disable @typescript-eslint/no-unsafe-assignment */




function Logo() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        className: "game__back",
        to: "/",
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "visually-hidden",
                children: "\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437"
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                src: _images_melody_logo_ginger_png__WEBPACK_IMPORTED_MODULE_0__,
                className: "game__logo",
                alt: "\u0423\u0433\u0430\u0434\u0430\u0439 \u043C\u0435\u043B\u043E\u0434\u0438\u044E"
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Logo);


/***/ }),

/***/ 9938:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function Mistakes(_a) {
    var count = _a.count;
    var mistakes = Array.from({
        length: count
    }, function () { return ''; });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "game__mistakes",
        children: mistakes.map(function (_item, index) {
            var keyValue = "mistakes-".concat(index);
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "wrong",
                "data-testid": "mistake"
            }, keyValue);
        })
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Mistakes);


/***/ }),

/***/ 1305:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6974);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);



function PrivateRoute(props) {
    var authorizationStatus = props.authorizationStatus, children = props.children;
    return authorizationStatus === _const__WEBPACK_IMPORTED_MODULE_0__.AuthorizationStatus.Auth ? children : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
        to: _const__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Login
    });
}
/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);


/***/ }),

/***/ 4685:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIRST_GAME_STEP": function() { return /* binding */ FIRST_GAME_STEP; },
/* harmony export */   "MAX_MISTAKE_COUNT": function() { return /* binding */ MAX_MISTAKE_COUNT; },
/* harmony export */   "ERROR_COUNT": function() { return /* binding */ ERROR_COUNT; },
/* harmony export */   "STEP_COUNT": function() { return /* binding */ STEP_COUNT; },
/* harmony export */   "TIMEOUT_SHOW_ERROR": function() { return /* binding */ TIMEOUT_SHOW_ERROR; },
/* harmony export */   "HttpCode": function() { return /* binding */ HttpCode; },
/* harmony export */   "AppRoute": function() { return /* binding */ AppRoute; },
/* harmony export */   "AuthorizationStatus": function() { return /* binding */ AuthorizationStatus; },
/* harmony export */   "GameType": function() { return /* binding */ GameType; },
/* harmony export */   "APIRoute": function() { return /* binding */ APIRoute; },
/* harmony export */   "ReducerType": function() { return /* binding */ ReducerType; },
/* harmony export */   "ActionType": function() { return /* binding */ ActionType; },
/* harmony export */   "AsyncActionType": function() { return /* binding */ AsyncActionType; }
/* harmony export */ });
var FIRST_GAME_STEP = 0;
var MAX_MISTAKE_COUNT = 3;
var ERROR_COUNT = 3;
var STEP_COUNT = 1;
var TIMEOUT_SHOW_ERROR = 2000;
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpCode[HttpCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpCode[HttpCode["NOT_FOUND"] = 404] = "NOT_FOUND";
})(HttpCode || (HttpCode = {}));
var AppRoute;
(function (AppRoute) {
    AppRoute["Login"] = "/login";
    AppRoute["Lose"] = "/lose";
    AppRoute["Result"] = "/result";
    AppRoute["Root"] = "/";
    AppRoute["Game"] = "/game";
    AppRoute["NotFound"] = "*";
})(AppRoute || (AppRoute = {}));
var AuthorizationStatus;
(function (AuthorizationStatus) {
    AuthorizationStatus["Auth"] = "AUTH";
    AuthorizationStatus["NoAuth"] = "NO_AUTH";
    AuthorizationStatus["Unknown"] = "UNKNOWN";
})(AuthorizationStatus || (AuthorizationStatus = {}));
var GameType;
(function (GameType) {
    GameType["Artist"] = "artist";
    GameType["Genre"] = "genre";
})(GameType || (GameType = {}));
var APIRoute;
(function (APIRoute) {
    APIRoute["Questions"] = "/questions";
    APIRoute["Login"] = "/login";
    APIRoute["Logout"] = "/logout";
})(APIRoute || (APIRoute = {}));
var ReducerType;
(function (ReducerType) {
    ReducerType["Process"] = "PROCESS";
    ReducerType["Data"] = "DATA";
    ReducerType["User"] = "USER";
    ReducerType["Error"] = "ERROR";
})(ReducerType || (ReducerType = {}));
var ActionType;
(function (ActionType) {
    ActionType["incrementStep"] = "incrementStep";
    ActionType["checkUserAnswer"] = "checkUserAnswer";
    ActionType["resetGame"] = "reset";
    ActionType["loadQuestions"] = "loadQuestions";
    ActionType["requireAuthorization"] = "requireAuthorization";
    ActionType["setError"] = "setError";
})(ActionType || (ActionType = {}));
var AsyncActionType;
(function (AsyncActionType) {
    AsyncActionType["FetchQuestions"] = "/fetchQuestions";
    AsyncActionType["CheckAuth"] = "/checkAuth";
    AsyncActionType["Login"] = "/asLogin";
    AsyncActionType["Logout"] = "/asLogout";
    AsyncActionType["ClearError"] = "/clearError";
    AsyncActionType["RedirectToRoute"] = "/redirectToRoute";
})(AsyncActionType || (AsyncActionType = {}));


/***/ }),

/***/ 9218:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArtistAnswerCorrect": function() { return /* binding */ isArtistAnswerCorrect; },
/* harmony export */   "isGenreAnswerCorrect": function() { return /* binding */ isGenreAnswerCorrect; },
/* harmony export */   "isAnswerCorrect": function() { return /* binding */ isAnswerCorrect; },
/* harmony export */   "isCheckAuth": function() { return /* binding */ isCheckAuth; }
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);

var isArtistAnswerCorrect = function (question, userAnswer) { return userAnswer === question.song.artist; };
var isGenreAnswerCorrect = function (question, userAnswer) { return userAnswer.every(function (answer, index) { return answer === (question.answers[index].genre === question.genre); }); };
var isAnswerCorrect = function (question, answer) {
    if (question.type === _const__WEBPACK_IMPORTED_MODULE_0__.GameType.Artist && typeof answer === 'string') {
        return isArtistAnswerCorrect(question, answer);
    }
    if (question.type === _const__WEBPACK_IMPORTED_MODULE_0__.GameType.Genre && Array.isArray(answer)) {
        return isGenreAnswerCorrect(question, answer);
    }
    return false;
};
var isCheckAuth = function (authorizationStatus) { return authorizationStatus === _const__WEBPACK_IMPORTED_MODULE_0__.AuthorizationStatus.Unknown; };


/***/ }),

/***/ 2258:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _components_audio_player_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2116);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* eslint-disable react/jsx-props-no-spreading */



function withAudioPlayer(Component) {
    function WithAudioPlayer(props) {
        var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), activePlayerId = _a[0], setActivePlayerId = _a[1];
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, __assign(__assign({}, props), { renderPlayer: function (src, id) { /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_audio_player_audio_player__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: src,
                isPlaying: id === activePlayerId,
                onPlayButtonClick: function () {
                    setActivePlayerId(activePlayerId === id ? -1 : id);
                }
            }); } }));
    }
    return WithAudioPlayer;
}
/* harmony default export */ __webpack_exports__["default"] = (withAudioPlayer);


/***/ }),

/***/ 6750:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": function() { return /* binding */ useAppDispatch; },
/* harmony export */   "useAppSelector": function() { return /* binding */ useAppSelector; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(533);

var useAppDispatch = function () { return (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(); };
var useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 2883:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUserAnswers": function() { return /* binding */ useUserAnswers; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

var useUserAnswers = function (question) {
    var answersCount = question.answers.length;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Array.from({
        length: answersCount
    }, function () { return false; })), answers = _a[0], setAnswers = _a[1];
    var handleAnswerChenge = function (id, value) {
        var userAnswers = answers.slice(0);
        userAnswers[id] = value;
        setAnswers(userAnswers);
    };
    return [answers, handleAnswerChenge];
};


/***/ }),

/***/ 6692:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6136);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3935);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(533);
/* harmony import */ var _components_history_route_history_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5505);
/* harmony import */ var _utils_browser_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9729);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(235);
/* harmony import */ var _components_app_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2577);
/* harmony import */ var _components_error_message_error_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6914);
/* harmony import */ var _services_api_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8108);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5893);
/* eslint-disable @typescript-eslint/no-floating-promises */



 // import { BrowserRouter } from 'react-router-dom';








_store_store__WEBPACK_IMPORTED_MODULE_6__.store.dispatch((0,_services_api_actions__WEBPACK_IMPORTED_MODULE_9__.fetchQuestionAction)());
_store_store__WEBPACK_IMPORTED_MODULE_6__.store.dispatch((0,_services_api_actions__WEBPACK_IMPORTED_MODULE_9__.checkAuthAction)());
react_dom__WEBPACK_IMPORTED_MODULE_2__.render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
        store: _store_store__WEBPACK_IMPORTED_MODULE_6__.store,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_history_route_history_route__WEBPACK_IMPORTED_MODULE_4__["default"], {
            history: _utils_browser_history__WEBPACK_IMPORTED_MODULE_5__["default"],
            children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_error_message_error_message__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_app_app__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
        })
    })
}), document.getElementById('root'));


/***/ }),

/***/ 8108:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearErrorAction": function() { return /* binding */ clearErrorAction; },
/* harmony export */   "fetchQuestionAction": function() { return /* binding */ fetchQuestionAction; },
/* harmony export */   "checkAuthAction": function() { return /* binding */ checkAuthAction; },
/* harmony export */   "loginAction": function() { return /* binding */ loginAction; },
/* harmony export */   "logoutAction": function() { return /* binding */ logoutAction; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9829);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);
/* harmony import */ var _store_slices_game_data_game_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4414);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(235);
/* harmony import */ var _store_slices_user_process_user_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4856);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(752);
/* harmony import */ var _store_slices_error_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3191);
/* harmony import */ var _error_handle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(281);
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3670);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* eslint-disable import/no-cycle */









var clearErrorAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__.createAsyncThunk)("".concat(_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Error).concat(_const__WEBPACK_IMPORTED_MODULE_0__.AsyncActionType.ClearError), function () {
    setTimeout(function () { return _store_store__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_store_slices_error_error__WEBPACK_IMPORTED_MODULE_5__.setError)('')); }, _const__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_SHOW_ERROR);
});
var fetchQuestionAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__.createAsyncThunk)("".concat(_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Data).concat(_const__WEBPACK_IMPORTED_MODULE_0__.AsyncActionType.FetchQuestions), function (_arg, _a) {
    var dispatch = _a.dispatch, api = _a.extra;
    return __awaiter(void 0, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api.get(_const__WEBPACK_IMPORTED_MODULE_0__.APIRoute.Questions)];
                case 1:
                    data = (_b.sent()).data;
                    dispatch((0,_store_slices_game_data_game_data__WEBPACK_IMPORTED_MODULE_1__.loadQuestions)(data));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    (0,_error_handle__WEBPACK_IMPORTED_MODULE_6__.errorHandle)(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
var checkAuthAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__.createAsyncThunk)("".concat(_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.User).concat(_const__WEBPACK_IMPORTED_MODULE_0__.AsyncActionType.CheckAuth), function (_arg, _a) {
    var dispatch = _a.dispatch, api = _a.extra;
    return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api.get(_const__WEBPACK_IMPORTED_MODULE_0__.APIRoute.Login)];
                case 1:
                    _b.sent();
                    dispatch((0,_store_slices_user_process_user_process__WEBPACK_IMPORTED_MODULE_3__.requireAuthorization)(_const__WEBPACK_IMPORTED_MODULE_0__.AuthorizationStatus.Auth));
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    (0,_error_handle__WEBPACK_IMPORTED_MODULE_6__.errorHandle)(error_2);
                    dispatch((0,_store_slices_user_process_user_process__WEBPACK_IMPORTED_MODULE_3__.requireAuthorization)(_const__WEBPACK_IMPORTED_MODULE_0__.AuthorizationStatus.NoAuth));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
var loginAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__.createAsyncThunk)("".concat(_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.User).concat(_const__WEBPACK_IMPORTED_MODULE_0__.AsyncActionType.Login), function (_a, _b) {
    var email = _a.login, password = _a.password;
    var dispatch = _b.dispatch, api = _b.extra;
    return __awaiter(void 0, void 0, void 0, function () {
        var token, error_3;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api.post(_const__WEBPACK_IMPORTED_MODULE_0__.APIRoute.Login, {
                            email: email,
                            password: password
                        })];
                case 1:
                    token = (_c.sent()).data.token;
                    (0,_token__WEBPACK_IMPORTED_MODULE_4__.saveToken)(token);
                    dispatch((0,_store_slices_user_process_user_process__WEBPACK_IMPORTED_MODULE_3__.requireAuthorization)(_const__WEBPACK_IMPORTED_MODULE_0__.AuthorizationStatus.Auth));
                    dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_7__.redirectToRoute)(_const__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Result));
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _c.sent();
                    (0,_error_handle__WEBPACK_IMPORTED_MODULE_6__.errorHandle)(error_3);
                    dispatch((0,_store_slices_user_process_user_process__WEBPACK_IMPORTED_MODULE_3__.requireAuthorization)(_const__WEBPACK_IMPORTED_MODULE_0__.AuthorizationStatus.NoAuth));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
var logoutAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__.createAsyncThunk)("".concat(_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.User).concat(_const__WEBPACK_IMPORTED_MODULE_0__.AsyncActionType.Logout), function (_arg, _a) {
    var dispatch = _a.dispatch, api = _a.extra;
    return __awaiter(void 0, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api.delete(_const__WEBPACK_IMPORTED_MODULE_0__.APIRoute.Logout)];
                case 1:
                    _b.sent();
                    (0,_token__WEBPACK_IMPORTED_MODULE_4__.dropToken)();
                    dispatch((0,_store_slices_user_process_user_process__WEBPACK_IMPORTED_MODULE_3__.requireAuthorization)(_const__WEBPACK_IMPORTED_MODULE_0__.AuthorizationStatus.NoAuth));
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    (0,_error_handle__WEBPACK_IMPORTED_MODULE_6__.errorHandle)(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});


/***/ }),

/***/ 5449:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAPI": function() { return /* binding */ createAPI; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(752);
/* eslint-disable no-param-reassign */


var BACKEND_URL = 'https://9.react.pages.academy/guess-melody';
var REQUEST_TIMEOUT = 5000;
var createAPI = function () {
    var api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT
    });
    api.interceptors.request.use(function (config) {
        var token = (0,_token__WEBPACK_IMPORTED_MODULE_1__.getToken)();
        if (!config.headers) {
            config.headers = {};
        }
        if (token) {
            config.headers['x-token'] = token;
        }
        return config;
    });
    return api;
};


/***/ }),

/***/ 281:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorHandle": function() { return /* binding */ errorHandle; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_slices_error_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3191);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(235);
/* harmony import */ var _api_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8108);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4685);
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable import/no-cycle */





var errorHandle = function (error) {
    if (!axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
        throw error;
    }
    var handleError = function (message) {
        _store_store__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_store_slices_error_error__WEBPACK_IMPORTED_MODULE_1__.setError)(message));
        _store_store__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_api_actions__WEBPACK_IMPORTED_MODULE_3__.clearErrorAction)());
    };
    var response = error.response;
    if (response) {
        switch (response.status) {
            case _const__WEBPACK_IMPORTED_MODULE_4__.HttpCode.BAD_REQUEST:
                handleError(response.data.error);
                break;
            case _const__WEBPACK_IMPORTED_MODULE_4__.HttpCode.UNAUTHORIZED:
                handleError(response.data.error);
                break;
            case _const__WEBPACK_IMPORTED_MODULE_4__.HttpCode.NOT_FOUND:
                handleError(response.data.error);
                break;
        }
    }
};


/***/ }),

/***/ 752:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getToken": function() { return /* binding */ getToken; },
/* harmony export */   "saveToken": function() { return /* binding */ saveToken; },
/* harmony export */   "dropToken": function() { return /* binding */ dropToken; }
/* harmony export */ });
var AUTH_TOKEN_KEY_NAME = 'guess-melody-token';
var getToken = function () {
    var token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
    return token !== null && token !== void 0 ? token : '';
};
var saveToken = function (token) { return localStorage.setItem(AUTH_TOKEN_KEY_NAME, token); };
var dropToken = function () { return localStorage.removeItem(AUTH_TOKEN_KEY_NAME); };


/***/ }),

/***/ 3670:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redirectToRoute": function() { return /* binding */ redirectToRoute; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9829);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);


var redirectToRoute = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)("".concat(_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Process).concat(_const__WEBPACK_IMPORTED_MODULE_0__.AsyncActionType.RedirectToRoute));


/***/ }),

/***/ 741:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redirect": function() { return /* binding */ redirect; }
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);
/* harmony import */ var _utils_browser_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9729);
/* eslint-disable @typescript-eslint/no-unused-vars */


var redirect = function (_store) { return function (next) { return function (action) {
    if (action.type === "".concat(_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Process).concat(_const__WEBPACK_IMPORTED_MODULE_0__.AsyncActionType.RedirectToRoute)) {
        _utils_browser_history__WEBPACK_IMPORTED_MODULE_1__["default"].push(action.payload);
    }
    return next(action);
}; }; };


/***/ }),

/***/ 7781:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": function() { return /* binding */ rootReducer; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4890);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);
/* harmony import */ var _slices_game_data_game_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4414);
/* harmony import */ var _slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5820);
/* harmony import */ var _slices_user_process_user_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4856);
/* harmony import */ var _slices_error_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3191);
var _a;
/* eslint-disable import/prefer-default-export */






var rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.combineReducers)((_a = {},
    _a[_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Data] = _slices_game_data_game_data__WEBPACK_IMPORTED_MODULE_1__.gameData.reducer,
    _a[_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Process] = _slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_2__.gameProcess.reducer,
    _a[_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.User] = _slices_user_process_user_process__WEBPACK_IMPORTED_MODULE_3__.userProcess.reducer,
    _a[_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Error] = _slices_error_error__WEBPACK_IMPORTED_MODULE_4__.error.reducer,
    _a));


/***/ }),

/***/ 3191:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "error": function() { return /* binding */ error; },
/* harmony export */   "setError": function() { return /* binding */ setError; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9829);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);
var _a;


var initialState = {
    error: ''
};
var error = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: _const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Error,
    initialState: initialState,
    reducers: (_a = {},
        _a[_const__WEBPACK_IMPORTED_MODULE_0__.ActionType.setError] = function (state, action) {
            state.error = action.payload;
        },
        _a)
});
var setError = error.actions.setError;


/***/ }),

/***/ 4414:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameData": function() { return /* binding */ gameData; },
/* harmony export */   "loadQuestions": function() { return /* binding */ loadQuestions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9829);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);
var _a;


var initialState = {
    questions: [],
    isDataLoaded: false
};
var gameData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: _const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Data,
    initialState: initialState,
    reducers: (_a = {},
        _a[_const__WEBPACK_IMPORTED_MODULE_0__.ActionType.loadQuestions] = function (state, action) {
            state.questions = action.payload;
            state.isDataLoaded = true;
        },
        _a)
});
var loadQuestions = gameData.actions.loadQuestions;


/***/ }),

/***/ 217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getQuestion": function() { return /* binding */ getQuestion; },
/* harmony export */   "getLoadedDataStatus": function() { return /* binding */ getLoadedDataStatus; }
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);

var getQuestion = function (state) { var _a; return ((_a = state[_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Data]) === null || _a === void 0 ? void 0 : _a.questions) || []; };
var getLoadedDataStatus = function (state) { var _a; return ((_a = state[_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Data]) === null || _a === void 0 ? void 0 : _a.isDataLoaded) || false; };


/***/ }),

/***/ 5820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameProcess": function() { return /* binding */ gameProcess; },
/* harmony export */   "incrementStep": function() { return /* binding */ incrementStep; },
/* harmony export */   "reset": function() { return /* binding */ reset; },
/* harmony export */   "checkUserAnswer": function() { return /* binding */ checkUserAnswer; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9829);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9218);
var _a, _b;



var initialState = {
    mistakes: 0,
    step: _const__WEBPACK_IMPORTED_MODULE_0__.FIRST_GAME_STEP
};
var gameProcess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
    name: _const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Process,
    initialState: initialState,
    reducers: (_a = {},
        _a[_const__WEBPACK_IMPORTED_MODULE_0__.ActionType.incrementStep] = function (state) {
            state.step += _const__WEBPACK_IMPORTED_MODULE_0__.STEP_COUNT;
        },
        _a[_const__WEBPACK_IMPORTED_MODULE_0__.ActionType.checkUserAnswer] = function (state, action) {
            var _a = action.payload, question = _a.question, userAnswer = _a.userAnswer;
            state.mistakes += Number(!(0,_game__WEBPACK_IMPORTED_MODULE_1__.isAnswerCorrect)(question, userAnswer));
        },
        _a[_const__WEBPACK_IMPORTED_MODULE_0__.ActionType.resetGame] = function (state) {
            state.mistakes = initialState.mistakes;
            state.step = initialState.step;
        },
        _a)
});
var incrementStep = (_b = gameProcess.actions, _b.incrementStep), reset = _b.reset, checkUserAnswer = _b.checkUserAnswer;


/***/ }),

/***/ 4866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStep": function() { return /* binding */ getStep; },
/* harmony export */   "getMistakesCount": function() { return /* binding */ getMistakesCount; }
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);

var initialValue = _const__WEBPACK_IMPORTED_MODULE_0__.FIRST_GAME_STEP;
var getStep = function (state) { var _a; return ((_a = state[_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Process]) === null || _a === void 0 ? void 0 : _a.step) || 0; };
var getMistakesCount = function (state) { var _a; return ((_a = state[_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.Process]) === null || _a === void 0 ? void 0 : _a.mistakes) || initialValue; };


/***/ }),

/***/ 6339:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAuthorizationStatus": function() { return /* binding */ getAuthorizationStatus; }
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);

var getAuthorizationStatus = function (state) { return state[_const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.User].authorizationStatus; };


/***/ }),

/***/ 4856:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userProcess": function() { return /* binding */ userProcess; },
/* harmony export */   "requireAuthorization": function() { return /* binding */ requireAuthorization; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9829);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);
var _a;


var initialState = {
    authorizationStatus: _const__WEBPACK_IMPORTED_MODULE_0__.AuthorizationStatus.Unknown
};
var userProcess = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: _const__WEBPACK_IMPORTED_MODULE_0__.ReducerType.User,
    initialState: initialState,
    reducers: (_a = {},
        _a[_const__WEBPACK_IMPORTED_MODULE_0__.ActionType.requireAuthorization] = function (state, action) {
            state.authorizationStatus = action.payload;
        },
        _a)
});
var requireAuthorization = userProcess.actions.requireAuthorization;


/***/ }),

/***/ 235:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": function() { return /* binding */ api; },
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9829);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7781);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5449);
/* harmony import */ var _middleware_redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(741);




var api = (0,_services_api__WEBPACK_IMPORTED_MODULE_1__.createAPI)();
var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({
    reducer: _root_reducer__WEBPACK_IMPORTED_MODULE_0__.rootReducer,
    middleware: function (getDefaultMiddleware) { return getDefaultMiddleware({
        thunk: {
            extraArgument: api
        }
    }).concat(_middleware_redirect__WEBPACK_IMPORTED_MODULE_2__.redirect); }
});


/***/ }),

/***/ 9729:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);

var browserHistory = (0,history__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)();
/* harmony default export */ __webpack_exports__["default"] = (browserHistory);


/***/ }),

/***/ 6567:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6974);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4685);
/* harmony import */ var _pages_welcome_welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5318);
/* harmony import */ var _pages_login_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3350);
/* harmony import */ var _pages_lose_lose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8934);
/* harmony import */ var _pages_result_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6386);
/* harmony import */ var _components_game_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4841);
/* harmony import */ var _components_private_route_private_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1305);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5893);

 // import NotFound from '../pages/not-found/not-found';








function Default(_a) {
    var authStatus = _a.authStatus;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, {
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
                path: _const__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Root,
                element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_pages_welcome_welcome__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    errorsCount: _const__WEBPACK_IMPORTED_MODULE_0__.MAX_MISTAKE_COUNT
                })
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
                path: _const__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Login,
                element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_pages_login_login__WEBPACK_IMPORTED_MODULE_2__["default"], {})
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
                path: _const__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Lose,
                element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_pages_lose_lose__WEBPACK_IMPORTED_MODULE_3__["default"], {})
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
                path: _const__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Result,
                element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_private_route_private_route__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    authorizationStatus: authStatus,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_pages_result_result__WEBPACK_IMPORTED_MODULE_4__["default"], {})
                })
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
                path: _const__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Game,
                element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_game_game__WEBPACK_IMPORTED_MODULE_5__["default"], {})
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Default);


/***/ }),

/***/ 3350:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6974);
/* harmony import */ var _images_melody_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2963);
/* harmony import */ var _hooks_use_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6750);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4685);
/* harmony import */ var _services_api_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8108);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5893);
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */








function Login() {
    var loginRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    var dispatch = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    var onSubmit = function (authData) {
        dispatch((0,_services_api_actions__WEBPACK_IMPORTED_MODULE_4__.loginAction)(authData));
    };
    var handleSubmit = function (evt) {
        evt.preventDefault();
        if (loginRef.current !== null && passwordRef.current !== null) {
            onSubmit({
                login: loginRef.current.value,
                password: passwordRef.current.value
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
        className: "login",
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "login__logo",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: _images_melody_logo_png__WEBPACK_IMPORTED_MODULE_1__,
                    alt: "\u0423\u0433\u0430\u0434\u0430\u0439 \u043C\u0435\u043B\u043E\u0434\u0438\u044E",
                    width: "186",
                    height: "83"
                })
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
                className: "login__title",
                children: "\u0412\u044B \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043C\u0435\u043B\u043E\u043C\u0430\u043D!"
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "login__text",
                children: "\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0437\u043D\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442? \u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0442\u0435\u0441\u044C!"
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
                className: "login__form",
                action: "",
                onSubmit: handleSubmit,
                children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                        className: "login__field",
                        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                                className: "login__label",
                                htmlFor: "name",
                                children: "\u041B\u043E\u0433\u0438\u043D"
                            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                                ref: loginRef,
                                className: "login__input",
                                type: "text",
                                name: "name",
                                id: "name",
                                "data-testid": "login"
                            })]
                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                        className: "login__field",
                        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                                className: "login__label",
                                htmlFor: "password",
                                children: "\u041F\u0430\u0440\u043E\u043B\u044C"
                            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                                ref: passwordRef,
                                className: "login__input",
                                type: "text",
                                name: "password",
                                id: "password",
                                "data-testid": "password"
                            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                                className: "login__error",
                                children: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
                            })]
                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                        className: "login__button button",
                        type: "submit",
                        children: "\u0412\u043E\u0439\u0442\u0438"
                    })]
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                onClick: function () { return navigate(_const__WEBPACK_IMPORTED_MODULE_3__.AppRoute.Game); },
                className: "replay",
                type: "button",
                children: "\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437"
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Login);


/***/ }),

/***/ 8934:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_melody_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2963);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6974);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);
/* harmony import */ var _hooks_use_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6750);
/* harmony import */ var _store_slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5820);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);
/* eslint-disable @typescript-eslint/no-unsafe-assignment */







function Lose() {
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    var dispatch = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
        className: "result",
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "result__logo",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: _images_melody_logo_png__WEBPACK_IMPORTED_MODULE_0__,
                    alt: "\u0423\u0433\u0430\u0434\u0430\u0439 \u043C\u0435\u043B\u043E\u0434\u0438\u044E",
                    width: "186",
                    height: "83"
                })
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                className: "result__title",
                children: "\u041A\u0430\u043A\u0430\u044F \u0436\u0430\u043B\u043E\u0441\u0442\u044C!"
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "result__total result__total--fail",
                children: "\u0423 \u0432\u0430\u0441 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u0432\u0441\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0438. \u041D\u0438\u0447\u0435\u0433\u043E, \u043F\u043E\u0432\u0435\u0437\u0451\u0442 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0437!"
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                onClick: function () {
                    dispatch((0,_store_slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_3__.reset)());
                    navigate(_const__WEBPACK_IMPORTED_MODULE_1__.AppRoute.Game);
                },
                className: "replay",
                type: "button",
                children: "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437"
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Lose);


/***/ }),

/***/ 8987:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_logo_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2257);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */



function QuestionArtist(props) {
    var question = props.question, onAnswer = props.onAnswer, renderPlayer = props.renderPlayer, children = props.children;
    var answers = question.answers, song = question.song;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
        className: "game game--artist",
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
                className: "game__header",
                children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_logo_logo__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "timer",
                        viewBox: "0 0 780 780",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
                            className: "timer__line",
                            cx: "390",
                            cy: "390",
                            r: "370",
                            style: {
                                filter: 'url(#blur)',
                                transform: 'rotate(-90deg) scaleY(-1)',
                                transformOrigin: 'center'
                            }
                        })
                    }), children]
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
                className: "game__screen",
                children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                        className: "game__title",
                        children: "\u041A\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u044D\u0442\u0443 \u043F\u0435\u0441\u043D\u044E?"
                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                        className: "game__track",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                            className: "track",
                            children: renderPlayer(song.src, 0)
                        })
                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("form", {
                        className: "game__artist",
                        children: answers.map(function (answer, id) { /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                            className: "artist",
                            children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                                    className: "artist__input visually-hidden",
                                    type: "radio",
                                    name: "answer",
                                    value: "artist-".concat(id),
                                    id: "answer-".concat(id),
                                    onChange: function (evt) {
                                        evt.preventDefault();
                                        onAnswer(question, answer.artist);
                                    }
                                }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                                    className: "artist__name",
                                    htmlFor: "answer-".concat(id),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                                        className: "artist__picture",
                                        src: answer.picture,
                                        alt: answer.artist
                                    })
                                })]
                        }, answer.artist); })
                    })]
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (QuestionArtist);


/***/ }),

/***/ 1694:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_logo_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2257);
/* harmony import */ var _components_genre_question_list_genre_question_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1807);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);




function QuestionGenre(props) {
    var question = props.question, onAnswer = props.onAnswer, renderPlayer = props.renderPlayer, children = props.children;
    var genre = question.genre;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "game game--genre",
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
                className: "game__header",
                children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_logo_logo__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "timer",
                        viewBox: "0 0 780 780",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                            className: "timer__line",
                            cx: "390",
                            cy: "390",
                            r: "370",
                            style: {
                                filter: 'url(#blur)',
                                transform: 'rotate(-90deg) scaleY(-1)',
                                transformOrigin: 'center'
                            }
                        })
                    }), children]
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
                className: "game__screen",
                children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
                        className: "game__title",
                        children: ["\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ", genre, " \u0442\u0440\u0435\u043A\u0438"]
                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_genre_question_list_genre_question_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        question: question,
                        onAnswer: onAnswer,
                        renderPlayer: renderPlayer
                    })]
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (QuestionGenre);


/***/ }),

/***/ 6386:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_melody_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2963);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6974);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9711);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);
/* harmony import */ var _hooks_use_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6750);
/* harmony import */ var _services_api_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8108);
/* harmony import */ var _store_slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5820);
/* harmony import */ var _store_slices_game_process_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4866);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5893);
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */









function Result() {
    var step = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_store_slices_game_process_selectors__WEBPACK_IMPORTED_MODULE_5__.getStep);
    var mistakes = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_store_slices_game_process_selectors__WEBPACK_IMPORTED_MODULE_5__.getMistakesCount);
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
    var dispatch = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    var correctlyQuestionsCount = step - mistakes;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
        className: "result",
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "result-logout__wrapper",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
                    className: "result-logout__link",
                    onClick: function (evt) {
                        evt.preventDefault();
                        dispatch(_services_api_actions__WEBPACK_IMPORTED_MODULE_3__.logoutAction);
                    },
                    to: "/",
                    children: "\u0412\u044B\u0445\u043E\u0434"
                })
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "result__logo",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                    src: _images_melody_logo_png__WEBPACK_IMPORTED_MODULE_0__,
                    alt: "\u0423\u0433\u0430\u0434\u0430\u0439 \u043C\u0435\u043B\u043E\u0434\u0438\u044E",
                    width: "186",
                    height: "83"
                })
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                className: "result__title",
                children: "\u0412\u044B \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043C\u0435\u043B\u043E\u043C\u0430\u043D!"
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                className: "result__total",
                children: ["\u0412\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430 ", correctlyQuestionsCount, " \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u043B\u0438 ", mistakes, " \u043E\u0448\u0438\u0431\u043A\u0438"]
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                onClick: function () {
                    dispatch((0,_store_slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_4__.reset)());
                    navigate(_const__WEBPACK_IMPORTED_MODULE_1__.AppRoute.Game);
                },
                className: "replay",
                type: "button",
                children: "\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437"
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Result);


/***/ }),

/***/ 5318:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6974);
/* harmony import */ var _images_melody_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2963);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);
/* harmony import */ var _hooks_use_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6750);
/* harmony import */ var _store_slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5820);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);
/* eslint-disable @typescript-eslint/no-unsafe-assignment */







function Welcome(_a) {
    var errorsCount = _a.errorsCount;
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    var dispatch = (0,_hooks_use_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
        className: "welcome",
        children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "welcome__logo",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: _images_melody_logo_png__WEBPACK_IMPORTED_MODULE_0__,
                    alt: "\u0423\u0433\u0430\u0434\u0430\u0439 \u043C\u0435\u043B\u043E\u0434\u0438\u044E",
                    width: "186",
                    height: "83"
                })
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                type: "submit",
                className: "welcome__button",
                onClick: function () {
                    dispatch(_store_slices_game_process_game_process__WEBPACK_IMPORTED_MODULE_3__.reset);
                    navigate(_const__WEBPACK_IMPORTED_MODULE_1__.AppRoute.Game);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "visually-hidden",
                    children: "\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443"
                })
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                className: "welcome__rules-title",
                children: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B"
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "welcome__text",
                children: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u043E\u0441\u0442\u044B:"
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
                className: "welcome__rules-list",
                children: [/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                        children: "\u041D\u0443\u0436\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B."
                    }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                        children: ["\u041C\u043E\u0436\u043D\u043E \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C ", errorsCount, " \u043E\u0448\u0438\u0431\u043A\u0438."]
                    })]
            }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "welcome__text",
                children: "\u0423\u0434\u0430\u0447\u0438!"
            })]
    });
}
/* harmony default export */ __webpack_exports__["default"] = (Welcome);


/***/ }),

/***/ 9500:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/melody-logo-ginger.png";

/***/ }),

/***/ 2963:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/melody-logo.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors"], function() { return __webpack_exec__(6692); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map