"use strict";
var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "no label" : _b, _c = _a.size, size = _c === void 0 ? "h2" : _c, allCaps = _a.allCaps, color = _a.color, _d = _a.FontColor, FontColor = _d === void 0 ? "#5517ac" : _d, _e = _a.backgroundColor, backgroundColor = _e === void 0 ? 'transparent' : _e;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "".concat(size, " text-").concat(color), style: { color: FontColor, backgroundColor: backgroundColor } }, { children: !allCaps ? label : label.toUpperCase() })));
};
exports.MyLabel = MyLabel;
