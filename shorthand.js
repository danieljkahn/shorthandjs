var _ = document.querySelectorAll.bind(document);

// window / doc width
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

// window / doc height

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

// on doc ready

// on resize

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
NodeList.prototype.click = function(fn) {
    this.forEach(n => {
        n.addEventListener('click', fn);
    })
    return this;
}


