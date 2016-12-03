class Event{
    constructor(){
        this.callbacks = {}
    }
    set(key, value){
        if(!key)
            return

        if(key in this.callbacks)
            (this.callbacks[key])(value)
    }
    on(key, fn){
        if(!key || typeof(fn) != 'function'){
            return false
        }
        this.callbacks[key] = fn
        return true
    }
}

export default new Event()