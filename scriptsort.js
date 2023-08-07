let arr = [1, 4, 3, 6, 5];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-1-i; j++) {
            if (arr[j + 1] < arr[j]) {
                let t = arr[j + 1]; arr[j + 1] = arr[j]; arr[j] = t; }
            }
        }
        return arr;
    }

    console.log(bubbleSort(arr));