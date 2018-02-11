# juiz-bot: Bot para discord
![alt text](https://k50.kn3.net/1/5/F/B/5/5/0EB.png "")

Bot básico de comandos ejecutado bajo NodeJS usando la API para desarrolladores de discord, y desplegado en Heroku con repositorio en github.

## Requerimientos:
- discord.js **v11.3.0**
- NodeJS.

## Funciones implementadas:

- [✔] Reconocer comandos enviados por el usuario.
- [X] Uso de API de terceros para ampliar funciones*.
- [X] Inteligencia artificial (ya sea con algún marco de trabajo o no).

(*) En desarrollo.

# Comandos
1. **Juiz**: Este es el comando principal que habilita poder usar los atributos que disparan las funcionalidades programadas. 
2. **-v** / **-version**: Atributo que devuelve la versión del bot.
3. **-g**: Atributo que dispara las opciones de juegos simples si le prosigue los siguientes atributos:
    - **moneda**: Lanzamiento de moneda. Devuelve un mensaje con el resultado: cara o cruz.
    - **dado**: Lanzamiento de dado. Devuelve un mensaje con el resultado numérico del dado.
    - **ppt**: Piedra, papel o tijera. Devuelve un mensaje con el resultado después de enviar la opción elegida, por ejemplo: 
    ```
    Mensaje de Usuario  : juiz -g ppt piedra
    Juiz-alpha          : Papel.  
    ```
*Todos los comandos y atributos no son sensibles a caracteres especiales (los cuales están definidos en la función de limpieza de caracteres especiales), por lo tanto, es lo mismo enviar el comando *juiz* a *JUIZ* o *JuIz*.

# Despliegue en Heroku con github
1. Creamos una nueva aplicación en nuestra cuenta de Heroku.

![alt text](https://k50.kn3.net/7/B/0/D/8/B/3F0.jpg)
2. Asignamos un nombre (que puede ser distinto al nombre del proyecto, tanto en GitHub como en discord developer) y aceptamos la creación de la aplicación. 

![alt text](https://k50.kn3.net/5/D/F/6/7/6/8C5.jpg)
3. En la pestaña ___Deploy___ vincularemos nuestra cuenta de GitHub para poder acceder a nuestro repositorio.

![alt text](https://k50.kn3.net/7/4/7/1/F/0/810.jpg)
4. Si la conexión a sido un éxito, veremos nuestro usuario de Github. A la derecha se encontrará un cuadro de búsqueda donde escribiremos el nombre exacto o no de nuestro repositorio que contiene el bot de discord. Seleccionamos dándole a ___Connect___.

![alt text](https://k50.kn3.net/3/1/5/1/6/D/F3F.jpg)
5. En el apartado ___Automatic Deploy___ habilitamos el despliegue automático. Aquí podemos elegir la rama que se deseea ejecutar. Por último, pulsamos el botón de encendido.

![alt text](https://k50.kn3.net/4/D/0/E/9/7/945.jpg)
6. En el apartado ___Manual Deploy___ desplegaremos manualmente el proyecto. Es necesario hacer este paso para iniciar la ejecución.

![alt text](https://k50.kn3.net/3/7/9/1/B/6/3F9.jpg) 

Si el despliegue manual es exitoso, se mostrará todos los check en color verde.

![alt text](https://k50.kn3.net/5/A/6/7/4/1/7EE.jpg)
7. En la pestaña ___Resources___, deshabilitaremos ___Web___ y habilitaremos ___Worker___. Presionamos confirmar.

![alt text](https://k50.kn3.net/4/8/D/8/5/1/3DE.jpg) 
8. Por último, en la pestaña ___Settings___ agregaremos las variables que tenemos que enlazar. en este caso el es __"BOT.TOKEN"__, al cual le asignaremos el valor generado por discord, y confirmaremos
![alt text](https://k50.kn3.net/F/B/E/3/7/A/394.jpg)
9. Si todo fue exitoso, sólo queda invitar al bot a nuestro servidor donde tengamos privilegio de administrador. En la documentación de discord indican la estructura del enlace, pero básicamente es la siguiente:

```
https://discordapp.com/api/oauth2/authorize?client_id=xxxxxxxxxxxxxx&scope=bot 
```
*Donde **client_id** es el id generado por discord.

El enlace debe ejecutarse en un navegador y redireccionará a una interfaz de validación del bot como de selección del servidor al que se le está agregando. Al aceptar estará listo y funcionando.

![alt text](https://k50.kn3.net/C/7/8/A/3/3/BAA.jpg)

# Referencias:

- https://discord.js.org/#/docs/main/stable/general/welcome
- https://discordapp.com/developers/docs/topics/oauth2
- https://www.relaxate.com/tutorial-javascript-limpiar-cadena-acentos-tildes-extranos

