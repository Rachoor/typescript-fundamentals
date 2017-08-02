
# 1. Configuración App TypeScript

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

4. Lanzamos el compilador de Typescript desde la consola: ```tsc```

5. Comprobamos que se crea el archivo compilado en la carpeta ```dist/app.js```
