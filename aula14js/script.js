function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();

    document.getElementById('mesAno').textContent = `${mes} de ${ano}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();