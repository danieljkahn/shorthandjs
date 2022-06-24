var $ = document.querySelectorAll.bind(document);

/// Utility functions to add/remove css classes and mimick jquery's hide/show functions

NodeList.prototype.addClass = function(className) {
    this.forEach(n => {
        n.classList.add(className);
    });
    return this;
}
NodeList.prototype.removeClass = function(className) {
    this.forEach(n => {
        n.classList.remove(className);
    });
    return this;
}