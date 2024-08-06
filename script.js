function atualizarRelogio(){
  var agora = new Date();
  var hora = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();
  hora = hora < 10 ? '0' + hora : hora;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;
  var horaAtual = `${hora}:${minutos}:${segundos}`; document.getElementById('clock').textContent = horaAtual;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();
