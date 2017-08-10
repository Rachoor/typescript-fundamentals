/**
 * Crear Tipo de Dato Personalizado
 */
type ValidSymbol = '#' | '&' 

/**
 * Comprobación de Tipo de Dato: void
 */
function userAlert(): void {
    alert('Hello');
}

/**
 * Comprobación de Tipo de Dato: never
 * @returns {never} 
 */
function alertError(): never {
    throw new Error('error');
}

/**
 * Parámetro Genérico que se transformará en un Tipo(string, number, ...) con todos sus
 * métodos. Usamos la 'T' por convención pero podría ser cualquier nombre.
 * @template T 
 * @param {T} arg 
 * @returns {T} 
 */
function test<T>(arg: T): T {
    return arg;
}
test(1).toString();             // Lo convierte en 'number' y accedemos a sus métodos de 'number'.
test('Hector').toUpperCase();   // Lo convierte en 'string' y accedmos a los métodos de 'string'.

/**
 * Generar Interface para las Opciones del Generador
 * @interface GenerateConfig
 */
interface GenerateConfig {
    symbol: ValidSymbol,
    length: number
}

/**
 * Definición de la Función con Varialbes
 * @param {ValidSymbol} symbol 
 * @param {number} length 
 * @returns {string} 
 */
function generateRandomId(symbol: ValidSymbol, length: number) : string
/**
 * Definición de la Función con Interface
 * @param {GenerateConfig} options 
 * @returns {string} 
 */
function generateRandomId(options:GenerateConfig) : string
/**
 * Definición de la Función con 2 diferentes Tipos de Parámetros
 * @param {(GenerateConfig | ValidSymbol)} optionsOrSymbol 
 * @returns {string} 
 */
function generateRandomId(optionsOrSymbol: GenerateConfig | ValidSymbol) : string {
    // Comprobar el Tipo del Parámetro
    if(typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36).substr(2, length);    
    }
    return optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length);
}
generateRandomId('#', 5);
generateRandomId({ symbol:'#', length: 9});

/**
 * Función Principal de la APP
 */
function main() {
    var app = document.getElementById('app');
    setInterval(function() {
        if(app) {
            app.innerHTML = generateRandomId({
                                symbol: '#',
                                length: 7
                            });
        }        
    }, 1000);
};
