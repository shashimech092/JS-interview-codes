
function arrayCount(arr) {
    for (i = 0; i < arr.length; i++) {
        while (arr[i] < arr[i + 1]) {
          i++;
          if (arr[i] < arr[i - 1]) {
            return -1
          }
          else if (arr[i] > arr[i + 1]) {
            return i
          }
        } while (arr[i] > arr[i + 1]) {
          i++;
          if (arr[i] > arr[i - 1]) {
            return -1
          } else if (arr[i] < arr[i + 1]) {
            return i
          }
        }
      }
      return arr;
    }


let myarray=[5, 4, 3, 2, 10, 11] // stops at decreasing

let count=arrayCount(myarray)
console.log(count)
