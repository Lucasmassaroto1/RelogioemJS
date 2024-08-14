function atualizarRelogio(){
  var agora = new Date();
  //HORAS: MINUTOS: SEGUNDOS
  var hora = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();
  //DIA/ MES / ANO
  var dia = agora.getDate();
  var mes = agora.getMonth() + 1;
  var ano = agora.getFullYear();
  //ADICIONA 0 NOS NUMEROS ABAIXO DE 10
  hora = hora < 10 ? '0' + hora : hora;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;
  dia = dia < 10 ? '0' + dia : dia;
  mes = mes < 10 ? '0' + mes : mes;
  //MOSTRA A DATA E HORA EM TEMPO REAL NA TELA
  var horaAtual = `${hora}:${minutos}:${segundos}`;
  var dataAtual = `${dia}/${mes}/${ano}`; document.getElementById('clock').textContent = `${horaAtual} ${dataAtual}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();
