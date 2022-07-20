let _el = document.querySelectorAll.bind(document);

// window / doc width
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

// window / doc height
var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
// test
// on doc ready
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    
// on viewport resize


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

// NodeList.prototype.find = function(selector) {
//     this.forEach(n => {
//         n.querySelectorAll(selector);
//     });
//     return this;
// }
