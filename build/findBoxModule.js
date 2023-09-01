"use strict";
var database = require("./db");
var parseSize = function (size) {
    var _a = size.split("x").map(Number), length = _a[0], width = _a[1], height = _a[2];
    return [length, width, height];
};
var calculateVolume = function (size) {
    var _a = parseSize(size), length = _a[0], width = _a[1], height = _a[2];
    return length * width * height;
};
var findBox = function (size) {
    var volume = calculateVolume(size);
    var suitableBoxes = database.filter(function (box) {
        var _a = parseSize(box.size), boxL = _a[0], boxW = _a[1], boxH = _a[2];
        return boxL >= volume || boxW >= volume || boxH >= volume;
    });
    if (suitableBoxes.length === 0) {
        return "No suitable box found.";
    }
    var nearestBox = suitableBoxes.reduce(function (prev, curr) {
        var prevVolumeDiff = calculateVolume(prev.size) - volume;
        var currVolumeDiff = calculateVolume(curr.size) - volume;
        return Math.abs(currVolumeDiff) < Math.abs(prevVolumeDiff)
            ? curr
            : prev;
    });
    return nearestBox;
};
exports.findBox = findBox;
