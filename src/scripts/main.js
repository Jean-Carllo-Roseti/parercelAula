AOS.init();

const dataDoEvento = new Date("Dec 25, 2023 22:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    
    const diasAteOEvento = Math.floor(distanciaDoEvento / diasEmMS);
    const horasAteOEvento = Math.floor((distanciaDoEvento % diasEmMS) / horasEmMS);
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horasEmMS) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaDoEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaDoEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado.';
    }


}, 1000);
