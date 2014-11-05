var domModule = (function () {

    function appendChild(domElement, parentSelector) {
        var parentNode = document.querySelector(parentSelector);
        parentNode.appendChild(domElement);
    }

    function removeChild(parentSelector, childSelector) {
        var parentNode = document.querySelector(parentSelector);
        parentNode.removeChild(document.querySelector(childSelector));
    }

    function addHandler(nodeSelector, eventType, eventHandler) {
        var nodes = document.querySelectorAll(nodeSelector);
        for (var e in nodes) {
            nodes[e].addEventListener(eventType, eventHandler);
        }
       
    }

    function retrieveElements() {

        var elements = document.querySelectorAll(arguments[0]);

        return elements;
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements:retrieveElements
    };

})();


var liElement = document.createElement("li");
domModule.appendChild(liElement, ".birds-list");

domModule.removeChild("ul.birds-list", "li:first-child");

domModule.addHandler("li.birds", 'click', function () { alert("I'm a bird!") });

var elements = domModule.retrieveElements(".bird");