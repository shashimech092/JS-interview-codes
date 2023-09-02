// // MemoizeAdder program will ask many times in interview

// const memoizeAdder=()=>{
//     const cache={};
//     return (arg1, arg2)=>{
//         const [a, b]=[arg1, arg2]
//         const key=`${a}-${b}`

//         if(cache[key]){
//             console.log('return from cache')
//             return cache[key]
//         }
//         const result=a+b;
//         cache[key]=result 
//         return result
//        }
// }

// const calc=memoizeAdder();
// console.log(calc(1, 4))



