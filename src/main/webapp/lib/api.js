/// <reference path="ajax.js" />

/**
* Wrap data fetching.
*/
(function (namespace) {
    'use strict';
    var ajax = namespace.ajax;

    var Api = namespace.Api = function (baseUrl) {
        this.baseUrl = baseUrl ? baseUrl : ''; // should be undefined if not set;
        this.getPath = this.baseUrl + "data";
        this.postPath = '';
    }


    Api.prototype.get = function (paramObj, completion, progress) {
        ajax.getJSON('GET', this.getPath, paramObj, completion, progress);
    };

    Api.prototype.post = function (paramObj, completion, progress) {
        ajax.getJSON('POST', this.postPath, paramObj, completion, progress);
    }

})(typeof exports !== 'undefined' ? exports : this);