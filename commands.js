const fs = require("fs");
const request = require('request');
const bash = require('./bash')

module.exports = {
  pwd: function (imprimir) {
    imprimir(process.argv);
  },

  ls: function (imprimir) {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      let salida = files.map(archivo => archivo.toString() + "\n"); //variable en donde se almacenarán los nombres de los archivos 
     imprimir(salida)
    });
  },

  date: function (imprimir) {
    imprimir(Date());
  },

  echo: function (dato, imprimir) {
    imprimir(dato);
  },

  cat: function (nombreArchivo, imprimir) {
    fs.readFile(nombreArchivo, "utf8", function (err, data) {
      if (err) throw err;
      imprimir(data);
    });
  },

  head: function (nombreArchivo, imprimir) {
    fs.readFile(nombreArchivo, "utf8", function (err, data) {
      if (err) throw err;
      const cabeceraArray = data.split("\n")
      const cabecera = cabeceraArray.slice(0,5).join("\n")
      imprimir(cabecera);
    });
  },
  tail: function (nombreArchivo, imprimir) {
    fs.readFile(nombreArchivo, "utf8", function (err, data) {
      if (err) throw err;
      const colaArray = data.split("\n");
      const cola = colaArray.slice(colaArray.length -5, colaArray.lenght).join("\n");
      imprimir(cola);
    });
  },

  curl: function (url, imprimir) {
    request(url, function (err, response, body) {
      if (err) throw err;
      imprimir(body);
    });
  },
};

