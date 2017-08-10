
# 1. Configuración App TypeScript

### 1.1 De HTML5 estático a TypeScript.
1. Instalamos TypeScript utilizando ```yarn```: 
```javascript
yarn global add typescript
```

2. Creamos el archivo de configuración de TypeScript:
    ```tsc --init``` que creará el archivo ```tsconfig.json``` donde modificaremos algunas opciones.

3. Creamos la carpeta ```dist``` y modificamos la opción de salida del copilador en el ```tsconfig.json```:
```javascript
"outDir": "dist"
```

4. Lanzamos el compilador de Typescript desde la consola: ```tsc```.

5. Comprobamos que se crea el archivo compilado en la carpeta ```dist/app.js```.

### 1.2 Lanzar Compilador TypeScript en 'Watch Mode'.
1. Cambiamos la terminación del ```app.js``` a ```app.ts```.
2. Lanzamos ```tsc -w``` lo que lanzará TypeScript en modo 'watch' lo que nos permite hacer cambios en caliente en nuestros archivos ```.ts```.


# 2. Tipos Básicos y sus Usos.

### 2.1 Cadenas de Texto (Strings) y Tipos de Números.
1. ``` var symbol: string = '#' ``` -> Declarar un 'string'.
2. ``` var length: number = 7 ``` -> Declarar un 'number'.

### 2.2 No Emitir Errores TypeScript.
1. ``` noEmit: true ``` -> Si hay un error en la compilación del código TS no 'emite' un nuevo fichero, finaliza la compilación.

### 2.3 Constantes (strings).
1. ``` const symbol = '#' ``` -> Declar una Constante.

### 2.4 Tipos de Unión y Alias de Tipo.
1. ``` const symbol: '#' | '&' | '@' = '#' ``` -> Tipos de Unión con ``` | ```. La Constante puede aceptar tantos valores como queramos.
2. Crear un Tipo: ``` type ValidSymbol = '#' | '&' ```.
3. Asignar el Tipo que creamos a una Variable: ``` const symbol: ValidSymbol | '@' = '#' ``` .

### 2.5 Parámetros de Funciones y Tipos de Return.
1. En la definición de la Función le pasamos las Variables y los Tipos de estas ```(symbol: ValidSymbol, length: number) ```  y le definimos el Tipo del Return ``` : string ```:
```javascript
function generateRandomId(symbol: ValidSymbol, length: number) : string {
    return symbol + Math.random().toString(36).substr(2, length);
}
```
2. Podemos eliminar las defeniciones de las Variables que fueron definidas en la Función:
```javascript
// const symbol: ValidSymbol = '&';
// var length: number = 6;
```
### 2.6 Tipos 'Void' y 'Never Return Type'.
1. Cuando una función NO devuleve nada usamos ```: void```:
```javascript
function userAlert(): void {
    alert('Hello');
}
```
2. Cuando una Función NUNCA devuelve nada usamos ```: never```:
```javascript
function alertError(): never {
    throw new Error('error');
}
```

### 2.7 Tipos 'Null' y 'Undefined'.
1. Modificamos el archivo de configuración de TS ```tsconfig.json``` habilitando :
```javascript
"strictNullChecks": true  /* Enable strict null checks. */
```
2. Comprobamos con un ``ìf``` si existe la Variable para evitar el error del ```null```.
```javascript
if(app) {
    app.innerHTML = generateRandomId('#', 7);
}   
```
3. Para convertir un parámetro en opcional usamos ```?``` después del nombre del parámetro, que como Tipo en este caso puede ser: ```number | undefined```.
```javascript
function generateRandomId(symbol: ValidSymbol, length?: number) : string
```
4. En lugar de utilizar ```?```para declarar la Variable opcional podemos inicializarla en la defición:
```javascript
function generateRandomId(symbol: ValidSymbol, length: number = 7) : string
```

### 2.8 Describiendo valores usando Interfaces.
1. Creamos una ```interface```:
```javascript
interface GenerateConfig {
    symbol: ValidSymbol,
    length: number
}
```
2. Le pasamos un Objeto que llamamos ```options``` a la Función el cúal será una ```interface```:
```javascript
function generateRandomId(options:GenerateConfig) : string {...}
```
3. Accedemos a las Variables del Objeto:
```javascript
return options.symbol + Math.random().toString(36).substr(2, options.length);
```

# 3. Funciones 'Funky'.

### 3.1. Sobrecarga de Funciones.
1. Definir la misma Función con diferentes Tipos de Parámetros:

    1.1. Con 2 Parámetros:
    ```javascript
    function generateRandomId(symbol: ValidSymbol, length: number) : string 
    ```

    1.2. Con Interface:
    ```javascript
    function generateRandomId(options:GenerateConfig) : string
    ```

    1.3. Definición final de la Función:
    ```javascript
    function generateRandomId(optionsOrSymbol: GenerateConfig | ValidSymbol) : string {
        if(typeof optionsOrSymbol === 'string') {
            return optionsOrSymbol + Math.random().toString(36).substr(2, length);    
        }
        return optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length);
    }
    ```

    1.4. Opciones que tenemos ahora para llamar a la Función:
    ```javascript
    generateRandomId('#', 5);
    generateRandomId({ symbol:'#', length: 9});
    ```

### 3.2. Genéricos y Tipos de Parámetros.
1. Definimos la Función y la definimos con el Tipo ```'T'```. Lo que quiere decir que el Tipo va a ser Genérico y TS hará la conversión por nosotros, dándonos acceso a todos los métodos del Tipo detectado.
```javascript
function test<T>(arg: T): T {
    return arg;
}
test(1).toString();             // Lo convierte en 'number' y accedemos a sus métodos de 'number'.
test('Hector').toUpperCase();   // Lo convierte en 'string' y accedmos a los métodos de 'string'.
```