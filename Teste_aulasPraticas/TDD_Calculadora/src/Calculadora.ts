export class calculadora{
    static soma(a: number,b:number):number{
        const res = a + b
        return Number(res.toFixed(1));
    }


    static divisao(a:number,b:number):number{
        if(b===0){
            return Infinity;

        }return a / b;
    }
    
}
