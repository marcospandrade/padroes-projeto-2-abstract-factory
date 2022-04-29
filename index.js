var ConcreteFactory1 = /** @class */ (function () {
    function ConcreteFactory1() {
    }
    ConcreteFactory1.prototype.createProductA = function () {
        return new ConcreteProductA1();
    };
    ConcreteFactory1.prototype.createProductB = function () {
        return new ConcreteProductB1();
    };
    return ConcreteFactory1;
}());
var ConcreteFactory2 = /** @class */ (function () {
    function ConcreteFactory2() {
    }
    ConcreteFactory2.prototype.createProductA = function () {
        return new ConcreteProductA2();
    };
    ConcreteFactory2.prototype.createProductB = function () {
        return new ConcreteProductB2();
    };
    return ConcreteFactory2;
}());
var ConcreteProductA1 = /** @class */ (function () {
    function ConcreteProductA1() {
    }
    ConcreteProductA1.prototype.usefulFunctionA = function () {
        return 'Resultado de produto A1.';
    };
    return ConcreteProductA1;
}());
var ConcreteProductA2 = /** @class */ (function () {
    function ConcreteProductA2() {
    }
    ConcreteProductA2.prototype.usefulFunctionA = function () {
        return 'Resultado do produto A2.';
    };
    return ConcreteProductA2;
}());
var ConcreteProductB1 = /** @class */ (function () {
    function ConcreteProductB1() {
    }
    ConcreteProductB1.prototype.usefulFunctionB = function () {
        return 'Resultado do produto B1.';
    };
    /**
     * A variante de produto b1 aceitará qualquer instancia
     * de AbstractProduct A como argumento
     */
    ConcreteProductB1.prototype.anotherUsefulFunctionB = function (collaborator) {
        var result = collaborator.usefulFunctionA();
        return "Resultado do produto B1 colaborando com (".concat(result, ")");
    };
    return ConcreteProductB1;
}());
var ConcreteProductB2 = /** @class */ (function () {
    function ConcreteProductB2() {
    }
    ConcreteProductB2.prototype.usefulFunctionB = function () {
        return 'Resultado do produto B2.';
    };
    /**
     * A variante de produto b1 aceitará qualquer instancia
     * de AbstractProduct A como argumento
     */
    ConcreteProductB2.prototype.anotherUsefulFunctionB = function (collaborator) {
        var result = collaborator.usefulFunctionA();
        return "Resultado do produto B2 colaborando com (".concat(result, ")");
    };
    return ConcreteProductB2;
}());
/**
 * O código client-side funciona com factorys e products dos tipos abstratos
 * AbstractFactory and AbstractProduct. Isso permite que você passe qualquer factory
 * ou produto ao client sem quebrar nada
 */
function clientCode(factory) {
    var productA = factory.createProductA();
    var productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
console.log('Client: Teste com a primeira factory...');
clientCode(new ConcreteFactory1());
console.log('');
console.log('Client: Teste com a segunda factory...');
clientCode(new ConcreteFactory2());
