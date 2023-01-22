// function Logger(target: Function) {
//     console.log(`Decorator logging ....`);
//     console.log(target);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// }
//Working with Decorator factories
function Logger(decoString) {
    console.log('MAIN DECORATOR FACTORY ......');
    return function Logger(target) {
        console.log(decoString);
        console.log(target);
    };
}
function AdvanceDeco(template, hookId) {
    return function Logger(constructor) {
        console.log('Decorator from the Advanced deco...');
        var hookElement = document.getElementById(hookId);
        if (hookElement) {
            var user = new constructor('MallamTY');
            hookElement.innerHTML = template;
            hookElement.querySelector('h1').textContent = user.name;
        }
    };
}
var Personn = /** @class */ (function () {
    function Personn(name) {
        this.name = name;
        console.log("The name of this class initiatior is ".concat(this.name));
    }
    Personn = __decorate([
        Logger("Decorator From Decorator Factory"),
        AdvanceDeco('<h1> Welcome to my Advance decorator learning page ...<h1>', 'test')
    ], Personn);
    return Personn;
}());
