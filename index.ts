interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }
    createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }
    createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

interface AbstractProductA {
    usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'Resultado de produto A1.';
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'Resultado do produto A2.';
    }
}

interface AbstractProductB {
    usefulFunctionB(): string;
    /**
     * Produto b poderá colaborar com o produto A
     */
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'Resultado do produto B1.';
    }

    /**
     * A variante de produto b1 aceitará qualquer instancia
     * de AbstractProduct A como argumento
     */
    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `Resultado do produto B1 colaborando com (${result})`;
    }
}

class ConcreteProductB2 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'Resultado do produto B2.';
    }

    /**
     * A variante de produto b1 aceitará qualquer instancia
     * de AbstractProduct A como argumento
     */
    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `Resultado do produto B2 colaborando com (${result})`;
    }
}

/**
 * O código client-side funciona com factorys e products dos tipos abstratos
 * AbstractFactory and AbstractProduct. Isso permite que você passe qualquer factory
 * ou produto ao client sem quebrar nada
 */
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('Client: Teste com a primeira factory...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Teste com a segunda factory...');
clientCode(new ConcreteFactory2());
