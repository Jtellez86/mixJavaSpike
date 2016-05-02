(function (namespace) {
    'use strict';
    var ajax = namespace.ajax;
    var api = new namespace.Api();
    
    var getRequestBtn = document.getElementById('get-request-btn');
    var getRequestInput = document.getElementById('get-request-text');
    var clearBtn = document.getElementById('clear-btn');
    
    getRequestBtn.onclick = function() {
        api.get(null, function(rep) {
            getRequestInput.value = rep.responseText;
        });
    }
    
    clearBtn.onclick = function () {
        getRequestInput.value = '';
    }
})(typeof exports !== 'undefined' ? exports : this);