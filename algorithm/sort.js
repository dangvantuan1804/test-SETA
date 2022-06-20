var rowSize = 4;
var collumSize = 5;
var arr = [
    [89,45,99,102,37],
    [12,20,1,5,18],
    [45,55,56,2,7],
    [66,11,44,100,98]
];

// Đưa mảng 2 chiều ban đầu về mảng 1 chiều
var arr1 = []
for(let i = 0; i<rowSize; i++){
    for(let j = 0; j< collumSize ; j++){
        arr1.push(arr[i][j])
    }
}

// Sắp xếp mảng 1 chiều
for(let i = 0; i<arr1.length-1; i++){
    for(let j = i+1; j< arr1.length ; j++){
        let temp;
        if(arr1[i] > arr1[j]){
            temp = arr1[i]
            arr1[i] = arr1[j]
            arr1[j] = temp
        }
    }
}

// Ghi lại mảng vừa sắp xếp về dạng mảng 2 chiều
var n = 0 
for(let i = 0; i<rowSize; i++){
    for(let j = 0; j< collumSize ; j++){
        arr[i][j] = arr1[n];
        n++;
    }
}
console.log(arr);

//Độ phức tạp thuật toán là O(n^2)