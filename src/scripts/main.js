AOS.init();

const datadoevento = new Date("Jun 04, 2024 00:00:00")
const timestampdoevento = datadoevento.getTime();

const contaashoras = setInterval(function() {
    const agora = new Date();
    const timestampatual = agora.getTime();

    const distanciaateoevento = timestampdoevento - timestampatual;

    const diaemms = 1000 * 60 * 60 * 24;
    const horaemms = 1000 * 60 * 60;
    const minutoemms = 1000 * 60;
    const segundoemms = 1000;

    const diasteoevento = Math.floor(distanciaateoevento / diaemms);
    const horasateoevento = Math.floor((distanciaateoevento % diaemms) / horaemms)
    const minutosateoevento = Math.floor((distanciaateoevento % horaemms) / minutoemms);
    const segundosateoevento = Math.floor((distanciaateoevento % minutoemms) / 1000);
    
    document.getElementById('contador').innerHTML = `${diasteoevento}d ${horasateoevento}h ${minutosateoevento}m ${segundosateoevento}s`;

    if (distanciaateoevento < 0) {
        clearInterval(contaashoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000);