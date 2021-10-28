/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    var objS = {};
    for (var i of s) {
        if (!objS.hasOwnProperty(i)) objS[i] = 0;
        objS[i]++;
    }
    var objT = {};
    for (var i of t) {
        if (!objT.hasOwnProperty(i)) objT[i] = 0;
        objT[i]++;
    }
    for (var k in objS) {
        if (objS[k] !== objT[k]) return false;
    }
    return true;
};