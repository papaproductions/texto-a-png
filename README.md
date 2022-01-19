# texto-a-png
texto-a.png es una api que convierte texto en una imagen.

Corre en un servidor express, en la ruta /Random/texto-a.png.

## Configuración

1. Clona el repositorio.
2. Abre una terminal en el directorio del repositorio y escribe `npm start`
3. Escribe `node .` para iniciar el servidor (por predeterminado corre en puerto 5000, puedes cambiarlo escribiendo el numero de puerto despues del comando).

## Argumentos

* text - El texto. Ejemplo: texto-a.png?text=hola
* size - El tamaño de la fuente (Máximo 2000). Ejemplo: texto-a.png?size=100&text=hola
* padding - El tamaño del padding. Ejemplo: texto-a.png?padding=100&text=hola
* background - El color del fondo. Ejemplo: texto-a.png?background=red&text=hola
* foreground - El color del texto. Ejemplo: texto-a.png?foreground=blue&text=hola
