const Discord = require('discord.js');
const client = new Discord.Client();
var date_server = new Date();
var status_juiz = "LOCAL";

//Mensaje a la consola
client.on('ready', () => {
    console.log("# "+date_server.getHours()+":"+date_server.getMinutes()+":"+date_server.getSeconds()+": Juiz activa.");
});

//Evento a la escucha del cliente de discord
client.on('message', message => {
    //Notifica en consola que se recibió un mensaje
    //console.log("MENSAJE -> "+message.author.username);
    msje = getCleanedString(message.content);

    if (msje === 'juiz') {
        //message.reply('Hola, habla Juiz!');
        //message.channel.sendMessage('Hola, habla Juiz, otra vez!');
        message.reply("has entrado al área activa del sistema seleção.\nComienza a cumplir con las responsabilidades de los privilegiados, por favor.");
    }

    if (msje === 'hola') {
        //message.reply('Hola, habla Juiz!');
        //message.channel.sendMessage('Hola, habla Juiz, otra vez!');
        
        message.channel.sendMessage("Hola, "+message.author.username);
    }

    if (msje === 'hola juiz' || msje === 'juiz hola') {
        message.reply("Hola, "+message.author.username);
    }

    if (msje === 'quien eres' || msje === 'tu quien eres'|| msje === 'que eres') {
        //message.reply('Hola, habla Juiz!');
        //message.channel.sendMessage('Hola, habla Juiz, otra vez!');
        message.channel.sendMessage("Soy tu guardiana.\nMe esforzaré por continuar proveyéndote de lo mejor en servicio.");
    }

    if (msje === 'cual es mi saldo' ||msje === 'cual es mi saldo juiz' || msje === 'mi saldo' || msje === 'juiz mi saldo es'||msje === 'cuanto me queda de saldo'||msje === 'cuanto dinero tengo' || msje === 'cuanto tengo') {
        //message.reply('Hola, habla Juiz!');
        //message.channel.sendMessage('Hola, habla Juiz, otra vez!');
        message.channel.sendMessage("Tu saldo son 10 billones.\nEs tu deber gastarlo todo.");
    }

    if (msje === 'adios' || msje === 'adios juiz' || msje === 'juiz adios') {
        //message.reply('Hola, habla Juiz!');
        //message.channel.sendMessage('Hola, habla Juiz, otra vez!');
        message.channel.sendMessage("Hasta luego, **"+message.author.username+"**\nNoblesse Oblige. Continúa siendo nuestro salvador, por favor.");
  	}

    if (msje === 'juiz -v' || msje === 'juiz -status') {
        //message.reply('Hola, habla Juiz!');
        //message.channel.sendMessage('Hola, habla Juiz, otra vez!');
        message.channel.sendMessage("**Juiz** \n*version 1.0-alpha.*\n*status:* Local.");
      }
    if (msje === 'juiz -saldo') {
        //message.reply('Hola, habla Juiz!');
        //message.channel.sendMessage('Hola, habla Juiz, otra vez!');
        message.channel.sendMessage("Tu saldo son 10 billones.\nEs tu deber gastarlo todo.");
    }
    if (msje === 'juiz -status') {
        //message.reply('Hola, habla Juiz!');
        //message.channel.sendMessage('Hola, habla Juiz, otra vez!');
        message.channel.sendMessage("");
    }

});

//funciones
function getCleanedString (cadena){
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=[]\/{}|:<>?,.";

    // Los eliminamos todos
    for (var i = 0; i < specialChars.length; i++) {
        cadena = cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }

    // Lo queremos devolver limpio en minusculas
    cadena = cadena.toLowerCase();

    // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
    //cadena = cadena.replace(/ /g,"_");

    // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
    cadena = cadena.replace(/á/gi, "a");
    cadena = cadena.replace(/é/gi, "e");
    cadena = cadena.replace(/í/gi, "i");
    cadena = cadena.replace(/ó/gi, "o");
    cadena = cadena.replace(/ú/gi, "u");
    //cadena = cadena.replace(/ñ/gi,"n");
    return cadena;
};

// TOKEN DE LA APLICACION
client.login(process.env.BOT_TOKEN);
