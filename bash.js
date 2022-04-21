const commands = require("./commands"); //Importa las funciones de commands.js
const chalk = require("chalk") 



function imprimir(parametro) { //Función que imprime el parámetro y un salto de línea y después imprime un prompt
    process.stdout.write(chalk.green(parametro) + '\n');
    process.stdout.write("\nprompt > ");
}

process.stdout.write('prompt>') // Imprime un prompt inicial

process.stdin.on('data', function(data){
    let cmd = data.toString().trim() //transforma data a string (lo recibe en hexadecimal)
    const cmdArray = cmd.split(' ')  //coloca en un arreglo la data recibida
    const comando = cmdArray.shift() //remueve el comando recibido y lo almacena en la variable comando
    let result = cmdArray.join(" ").trim() //lo que se escribió después del comando lo vuelve un string separado por un espacio y lo almacena en result 

    if (cmd === 'pwd') {
        commands.pwd(imprimir)
        console.log(data)
        
    } else  if(cmd === 'date') {
        commands.date(imprimir)

    } else  if(cmd === 'ls') {
        commands.ls(imprimir)
        
    } else  if(comando === 'echo') {
        commands.echo(result, imprimir)

    } else  if(comando === 'cat') {
        commands.cat(result, imprimir)
        
    } else  if(comando === 'head') {
        commands.head(result, imprimir)

    } else  if(comando === 'tail') {
        commands.tail(result, imprimir)

    } else  if(comando === 'curl') {
        commands.curl(result, imprimir)
    } else {
        imprimir(chalk.red('Error, ingrese un comando permitido'))
    }
})