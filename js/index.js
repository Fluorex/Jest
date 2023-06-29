'use strict'

export const indexOf = function (arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}


export const lastIndexOf = function (arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};

export const includes = function (arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return true;
    }
    return false;
};

export const some = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) return true;
    }
    return false;
};