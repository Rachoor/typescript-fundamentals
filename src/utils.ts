/**
 * Crear Tipo de Dato Personalizado
 */
export type ValidSymbol = '#' | '&' 

export function userAlert(): void {
    alert('Hello');
}

export function alertError(): never {
    throw new Error('error');
}

export function test<T>(arg: T): T {
    return arg;
}

export interface GenerateConfig {
    symbol: ValidSymbol,
    length: number
}

export function generateRandomId(symbol: ValidSymbol, length: number) : string
export function generateRandomId(options:GenerateConfig) : string
export function generateRandomId(optionsOrSymbol: GenerateConfig | ValidSymbol) : string {
    // Comprobar el Tipo del Parámetro
    if(typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36).substr(2, length);    
    }
    return optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length);
}
