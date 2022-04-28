"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseComment = (commentFromReq) => {
    if (!isString(commentFromReq)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromReq;
};
const parseDate = (dateFromReq) => {
    if (!isString(dateFromReq) || !isDate(dateFromReq)) {
        console.log('incorect date');
        throw new Error('Incorrect or missing date');
    }
    return dateFromReq;
};
const parseWeather = (weatherFromReq) => {
    if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromReq;
};
const parseVisibility = (visibilityFromReq) => {
    if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromReq;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
const isString = (string) => {
    return typeof string === 'string' || string instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
exports.default = toNewDiaryEntry;
