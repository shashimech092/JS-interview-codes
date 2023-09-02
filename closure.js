function outer(){
    let message ='Hello I am outer function'
    function inner(){
        console.log(message)
    }
    return inner()
}
outer()
