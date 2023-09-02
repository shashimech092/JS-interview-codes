// function printme(a) {
//     for (i=0; i<a; i++) {
//         console.log(i)
//     }
// }

// printme(10)


// with generator function // check in terminal  with node and copy the code and paste in terminal and check 
function* printme(a) {
    for (i=0; i<a; i++) {
        yield i
    }
}

var test=printme(10)
test.next()