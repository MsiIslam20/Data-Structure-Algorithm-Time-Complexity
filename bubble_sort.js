//Refer Link:
//https://medium.com/javascript-in-plain-english/simple-sorting-algorithms-in-javascript-57d512ceaf5d

const numbers = [10, 20, 23, 2, 8, 70, 22, 33, 6, 55, 97];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function bubbleSortDesc(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] < array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

const sorted = bubbleSort(numbers);
const sortedDes = bubbleSortDesc(numbers);
// console.log(sorted);
// console.log(sortedDes);