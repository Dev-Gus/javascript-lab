function once(fn) {
    let done = false;
    let result;

    return (...args)=> {
        if(!done) {
            result = fn.apply(this, ...args);
            done = true;
        } return result;
    }
    
}