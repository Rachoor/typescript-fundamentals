"use strict";
/**
 * Comprobación de Tipo de Dato: void
 */
function userAlert() {
    alert('Hello');
}
/**
 * Comprobación de Tipo de Dato: never
 * @returns {never}
 */
function alertError() {
    throw new Error('error');
}
/**
 * Parámetro Genérico que se transformará en un Tipo(string, number, ...) con todos sus
 * métodos. Usamos la 'T' por convención pero podría ser cualquier nombre.
 * @template T
 * @param {T} arg
 * @returns {T}
 */
function test(arg) {
    return arg;
}
test(1).toString(); // Lo convierte en 'number' y accedemos a sus métodos de 'number'.
test('Hector').toUpperCase(); // Lo convierte en 'string' y accedmos a los métodos de 'string'.
/**
 * Definición de la Función con 2 diferentes Tipos de Parámetros
 * @param {(GenerateConfig | ValidSymbol)} optionsOrSymbol
 * @returns {string}
 */
function generateRandomId(optionsOrSymbol) {
    // Comprobar el Tipo del Parámetro
    if (typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36).substr(2, length);
    }
    return optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length);
}
generateRandomId('#', 5);
generateRandomId({ symbol: '#', length: 9 });
/**
 * Función Principal de la APP
 */
function main() {
    var app = document.getElementById('app');
    setInterval(function () {
        if (app) {
            app.innerHTML = generateRandomId({
                symbol: '#',
                length: 7
            });
        }
    }, 1000);
}
;
