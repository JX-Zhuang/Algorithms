/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var o = {};
    for (var item of strs) {
        let count = new Array(26).fill(0);
        for (var i of item) {
            count[i.charCodeAt() - 97]++;
        }
        o[count] ? o[count].push(item) : o[count] = [item];
    }
    return Object.values(o);
};