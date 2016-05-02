/**
 * ajax proxy for JSON request 
 */
(function (namespace) {
    'use strict';

    var ajax = namespace.ajax || (namespace.ajax = {});

    ajax.getJSON = function (method, url, data, completion, onprogress) {
        completion = completion || function () { };
        onprogress = onprogress || function () { };

        var xhr = undefined;
        if (typeof XMLHttpRequest !== 'undefined') {
            xhr = new XMLHttpRequest();
        } else {
            try {
                xhr = new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {
                try {
                    xhr = new ActiveXObject('Microsoft.XMLHTTP');
                } catch (e) {
                    if (!this.err) {
                        this.err(e);
                    }
                }
            }
            if (!xhr) {
                return;
            }
        }

        data = typeof data === 'object' ? JSON.stringify(data) : data;
        xhr.open(method, url, true);
        xhr.onprogress = onprogress;
        xhr.onerror = function () {
            completion({
                success: false,
                xhr: this,
                data: null
            });
        };

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.setRequestHeader("Accept", "application/json,text/javascript, */*");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    if (completion) {
                        if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob') {
                            completion(xhr.response);
                        } else if (xhr.responseText.length > 0) {
                            completion({
                                success: true,
                                xhr: xhr,
                                data: JSON.parse(xhr.responseText)
                            });
                        } else {
                            completion(null);
                        }
                    }
                } else if (xhr.status == 401) {
                    if (window && window.location) {
                        window.location.reload();
                    } else {
                        if (completion) {
                            completion({
                                success: false,
                                data: null,
                                xhr: xhr
                            });
                        }
                    }
                } else {
                    if (completion) {
                        completion({
                            success: false,
                            data: null,
                            xhr: xhr
                        });
                    }
                }
            }
        };

        xhr.send(data);
    }

})(typeof exports !== 'undefined' ? exports : this);




