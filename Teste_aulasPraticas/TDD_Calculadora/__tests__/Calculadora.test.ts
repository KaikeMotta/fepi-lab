import { calculadora } from "../src/Calculadora";

describe("Teste da calculadora", () =>{

    test("soma de 1 + 2 deve ser 3",() =>{
        expect(calculadora.soma(1,2)).toBe(3);
    });

    test("soma de 1245 + 2000 deve ser 3245",() =>{
        expect(calculadora.soma(1245,2000)).toBe(3245); 
    }); 

    test("soma de 0.1 + 0.2 deve ser 0.3",() =>{
        expect(calculadora.soma(0.1,0.2)).toBe(0.3); 
    });



    

    //divisao
    
    test('divide 10/2 deve ser 5',() => {
        expect(calculadora.divisao(10,2)).toBe(5);
    });
    
    test('divide 5/0 deve ser infinity',() => {
        expect(calculadora.divisao(5,0)).toBe(Infinity);
    });




})