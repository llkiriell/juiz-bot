const Discord = require('discord.js');
const client = new Discord.Client();

var date_server = new Date();
var status_juiz = "Heroku";

//Mensaje a la consola
client.on('ready', () => {
    console.log("-----------------------------------------");
    console.log("# "+date_server.getDate() + "/" + (date_server.getMonth() +1) + "/" + date_server.getFullYear()+"_"+date_server.getHours()+":"+date_server.getMinutes()+":"+date_server.getSeconds()+": Juiz activa.");
});

//--Evento a la escucha del cliente de discord
client.on('message', message => {
    //Imprime el autor del ultimo mensaje escuchado
    console.log("\n---------\nMENSAJE -> "+message.author.username+"\n---------");
    //Limpia la cadena de caracteres especiales.
    msje = getCleanedString(message.content);

    //Valida que solo se evaluen los mensajes escritos por los otros usuarios
    //El nombre "Juiz-alpha" es exactamente el mismo que el nombre bot o aplicacion creada en dicord developers.
    //Este nombre respeta mayusculas.
    if (message.author.username != "Juiz-alpha") {
        //Busca el comando disparador y retorna su posicion. Si es mayor o igual 0, existe.
        var busqueda_act = msje.search("juiz ");
        if (busqueda_act == 0) {
            //remplazamos el comando
            //msje = msje.replace(/juiz /gi,"");
            //console.log("El mensaje es: "+msje);
    
            //Convertimos el mensaje en un Array
            var msje_array = msje.split(" ");
            console.log("Es un array: "+Array.isArray(msje_array));
            console.log("Atributo 1: "+msje_array[1]);
            
            //Validamos la accion de acuerdo al atributo en la segunda posición. 
            switch (msje_array[1]) {
                case "-v":
                    //Comando para mostrar version
                    message.channel.sendMessage("**Juiz** \n*version 1.0-alpha.*\n*status:* "+status_juiz);
                    break;
                case "-version":
                    message.channel.sendMessage("**Juiz** \n*version 1.0-alpha.*\n*status:* "+status_juiz);
                break;
                case "-g":
                    //Comando para juegos simples
                    switch (msje_array[2]) {
                        case "moneda":
                            var random_index=Math.round(Math.random()*1);
                            var result="Cruz.";
                            if (random_index==1) {
                                result = "Cara.";
                            }
                            message.channel.sendMessage("Lanzando moneda... "+result);
                        break;
                        case "dado":
                            var random_index=Math.round(Math.random()*6);
                            message.channel.sendMessage("Lanzando dado: "+random_index);
                        break;
                        case "ppt":
                        var random_index=Math.round(Math.random()*3);
                            switch (random_index) {
                                case 1:
                                message.channel.sendMessage("Piedra.");
                                break;
                                case 2:
                                message.channel.sendMessage("Papel.");    
                                break;
                                case 3:
                                message.channel.sendMessage("Tijera.");     
                                break;
                            }
                        break;
                        default:
                            message.channel.sendMessage("Lo siento. El atributo para el juego no ha sido identificado.");
                        break;
                    }
                break;     
                default:
                    message.channel.sendMessage("El atributo no ha sido identificado");
                break;
            }
        }
    }
});

//Funciones

//Funcion que limpia la cadena de caracteres especiales.
function getCleanedString (cadena){
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=[]\/{}|:<>?,.";
    // Los eliminamos todos
    for (var i = 0; i < specialChars.length; i++) {
        cadena = cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }
    // Conversion a minusuculas
    cadena = cadena.toLowerCase();
    // Quitamos tildes y enie.
    cadena = cadena.replace(/á/gi, "a");
    cadena = cadena.replace(/é/gi, "e");
    cadena = cadena.replace(/í/gi, "i");
    cadena = cadena.replace(/ó/gi, "o");
    cadena = cadena.replace(/ú/gi, "u");
    //cadena = cadena.replace(/ñ/gi,"n");
    return cadena;
};

// TOKEN DE LA APLICACION
//"process.env.BOT_TOKEN" es el parametro para Heroku.
client.login(process.env.BOT_TOKEN);
