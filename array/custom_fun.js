//(a) ForEach: Write a function called forEachArray that takes an array and a callback function as arguments. The forEachArray function should apply the callback function to each element of the array but does not return anything. Note: You cannot use the inbuilt forEach function.
let arry = [1, 2, 3, 4, 5, 6];
function forEachArray(arr, callback) {
    let i = 0;
    while (i< arr.length) {
        callback(arr[i]);
        i++;
    }
}

//(b) Map: Write a function called mapArray that takes an array and a callback function as arguments. The mapArray function should apply the callback function to each element of the array and return a new array containing the transformed elements. Note: You cannot use the inbuilt map function.
function mapArray(arr, callback) {
    let map1Array =[];
    let i= 0;
    while (i< arr.length) {
        map1Array.push(callback(arr[i]));
        i++;
    }
    return map1Array;
}

//(c) Filter: Write a function called filterArray that takes an array and a callback function as arguments. The filterArray function should apply the callback function to each element of the array and return a new array containing only the elements for which the callback function returns true. Note: You cannot use the inbuilt filter function.
function filterArray(arr, callback) {
    let filter1Array = [];
    let i = 0;
    while (i < arr.length) {
        if (callback(arr[i])) {
            filter1Array.push(arr[i]);
        }
        i++;
    }
    return filter1Array;
}

