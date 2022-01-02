let right = n - 1; left = 0; var max = 0;

while (left < right) {

    if (arr[left] > arr[right]) {
        left++;
    } else if (arr[left] < arr[right]) {
        let diff = - arr[left] + arr[right];
        if (max < diff) {
            max = diff;
        }
        right--;
    }



}
// console.log(count);  
console.log(max);
