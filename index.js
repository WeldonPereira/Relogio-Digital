const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

const clock = setInterval(
    function tempo(){
        const hora_definida = new Date()
        const hrs = hora_definida.getHours()
        const min = hora_definida.getMinutes()
        const sec = hora_definida.getSeconds()


        horas.textContent = hrs
        minutos.textContent = min
        segundos.textContent = sec
    }, 1000
)