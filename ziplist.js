function zipList(list1, list2) {
    var newList = [];
    for (var i = 0; i < list1.length; i++) {
        newList.push(list1[i]);
        newList.push(list2[i]);
    }
    return newList;
}
function zipListTheFunctionalWay(list1, list2) {
    var result = [];
    list1.forEach(function (element, index) {
        result.push(element, list2[index]);
    });
    return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
