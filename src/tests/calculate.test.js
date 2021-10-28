import calculate from '../logic/calculate';

describe('operation', () => {
    test('adds 4 + 2 to equal 6', () => {
        const obj = {
            total: 4,
            next: 2,
            operation: '+',
        }
        const result = calculate(obj, '=')
        expect(result).toEqual({"next": null, "operation": null, "total": "6"});
    });
    test('Testing total value of objects', () => {
        
        let obj = calculate({}, '2')
         obj = calculate(obj, '5')
         obj = calculate(obj, '+')
         obj = calculate(obj, '2')
         obj = calculate(obj, '=')
        expect(obj.total).toEqual('27');
    });
    test('testing next value of object', () => {
        
        let obj = calculate({}, '2')
         obj = calculate(obj, '5')
         
        expect(obj.next).toBe('25');
    });
    test('testing operation value of objects', () => {
        
        let obj = calculate({}, '2')
         obj = calculate(obj, '5')
         obj = calculate(obj, '%')
         
        expect(obj.operation).toBe('%');
    });
    test('testing all values of object', () => {
        
        let obj = calculate({}, '2')
         obj = calculate(obj, '5')
         obj = calculate(obj, 'x')
         obj = calculate(obj, '4')
         
        expect(obj).toStrictEqual({"next": "4", "operation": "x", "total": "25"});
    });
    test('testing decimal operations', () => {
        
        let obj = calculate({}, '2')
         obj = calculate(obj, '5')
         obj = calculate(obj, 'x')
         obj = calculate(obj, '4')
         obj = calculate(obj, '.')
         obj = calculate(obj, '6')
    
         
        expect(obj).toStrictEqual({"next": "4.6", "operation": "x", "total": "25"});
    });
    test('testing decimal operations with total value', () => {
        
        let obj = calculate({}, '2')
         obj = calculate(obj, '5')
         obj = calculate(obj, 'x')
         obj = calculate(obj, '4')
         obj = calculate(obj, '=')
         obj = calculate(obj, '.')
         obj = calculate(obj, '6')
         obj = calculate(obj, '=')
         
        expect(obj.total).toStrictEqual(undefined);
    });
    test('testing decimal operations', () => {
        
        let obj = calculate({}, '7')
         obj = calculate(obj, '+')
         obj = calculate(obj, '.')
         obj = calculate(obj, '6')
         
        expect(obj.next).toStrictEqual('0.6');
    });
    test('testing +/- operation', () => {
        
        let obj = calculate({}, '7')
         obj = calculate(obj, '9')
         obj = calculate(obj, '+/-')
         
        expect(obj.next).toStrictEqual('-79');
    });
    test('testing +/- operation when there is a total value', () => {
        
        let obj = calculate({}, '7')
         obj = calculate(obj, '+')
         obj = calculate(obj, '5')
         obj = calculate(obj, '0')
         obj = calculate(obj, '=')
         obj = calculate(obj, '+/-')
         
        expect(obj.total).toStrictEqual('-57');
    });
});
