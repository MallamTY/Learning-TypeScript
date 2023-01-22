// function Logger(target: Function) {
//     console.log(`Decorator logging ....`);
//     console.log(target);
 
// }


//Working with Decorator factories

function Logger(decoString:string) {
    console.log('MAIN DECORATOR FACTORY ......');
    
    return function Logger(target:Function) {
        console.log(decoString);
        console.log(target);
    }
}

function AdvanceDeco(template: string, hookId: string){
    return function Logger(constructor:any) {
        console.log('Decorator from the Advanced deco...');
        
        const hookElement = document.getElementById(hookId)
        if (hookElement) {
            const user = new constructor('MallamTY')
            hookElement.innerHTML = template
        hookElement.querySelector('h1')!.textContent = user.name;
            
        }
    }
}

@Logger(`Decorator From Decorator Factory`)
@AdvanceDeco('<h1> Welcome to my Advance decorator learning page ...<h1>', 'test')
class Personn {
    constructor(private name: string) {
        console.log(`The name of this class initiatior is ${this.name}`);
        
    }
}





