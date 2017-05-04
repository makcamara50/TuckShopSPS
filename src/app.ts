import $ from 'jquery';
import Rx from 'rxjs/Rx';



class ryan1 {
    name:string
    constructor () {
        this.name="hi"
    }
}
function ryan() {
    let name: string = "hi"
    const that = {
        name
    }
    return that
}

let a = ryan()
console.log(a)
let b = new ryan1()
console.log(b.name)
    
function hi() 
{

}