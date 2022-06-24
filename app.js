
const API_KEY = '6d6b298a738ea278c8c263f2cdf6ac87';

const horario = document.getElementById('hours')
const horaUno = document.getElementById('hora-uno')
const horaDos = document.getElementById('hora-dos')
const horaTres = document.getElementById('hora-tres')
const horaCuatro = document.getElementById('hora-cuatro')
const horaCinco = document.getElementById('hora-cinco')
const horaSeis = document.getElementById('hora-seis')
const diaDos = document.getElementById('dia-dos')
const diaTres = document.getElementById('dia-tres')
const diaCuatro = document.getElementById('dia-cuatro')
const diaCinco = document.getElementById('dia-cinco')
const diaSeis = document.getElementById('dia-seis')
const diaSiete = document.getElementById('dia-siete')
const diaOcho = document.getElementById('dia-ocho')
const fetchData = position => {
    const { latitude, longitude } = position.coords;
     
    fetch(`https://api.openweathermap.org/data/2.5/onecall?units=metric&lang=es&lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${API_KEY}`)
    //fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lang=es&lat=${latitude}&lon=${longitude}&cnt=10&appid=${API_KEY}`)
   
        .then(response => response.json())
    .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);

    const weatherData = {
        
        location: getPalabra(data.timezone),
        description: data.current.weather[0].description,
        clouds: data.current.clouds,
        humidity: data.current.humidity,
        pressure: data.current.pressure,
        //temperature: Math.round(promedioTemp()),
        temperature: Math.round(data.current.temp),
        feels_like: Math.round(data.current.feels_like),
        temp_max:  Math.round(data.daily[0].temp.max),
        temp_min: Math.round(data.daily[0].temp.min),
        wind: Math.round(data.current.wind_speed),
        date: getDate(),
        hours: getDateHours(),
        visibility: data.current.visibility / 1000,
       
        temperatureUno: Math.round(data.hourly[2].temp),
        descriptionUno: data.hourly[2].weather[0].description,
        temperatureDos: Math.round(data.hourly[5].temp),
        descriptionDos: data.hourly[5].weather[0].description,
        temperatureTres: Math.round(data.hourly[8].temp),
        descriptionTres: data.hourly[8].weather[0].description,
        temperatureCuatro: Math.round(data.hourly[11].temp),
        descriptionCuatro: data.hourly[11].weather[0].description,
        temperatureCinco: Math.round(data.hourly[14].temp),
        descriptionCinco: data.hourly[14].weather[0].description,
        temperatureSeis: Math.round(data.hourly[17].temp),
        descriptionSeis: data.hourly[17].weather[0].description,
        
        temp_max2: Math.round(data.daily[1].temp.max),
        temp_min2: Math.round(data.daily[1].temp.min),
        humidity_dia_dos: data.daily[1].humidity,
        clouds_dia_dos: data.daily[1].clouds,
        wind_dia_dos: Math.round(data.daily[1].wind_speed),
        descriptionSiete: data.daily[1].weather[0].description,
        
        max3: Math.round(data.daily[2].temp.max),
        min3: Math.round(data.daily[2].temp.min),
        max4: Math.round(data.daily[3].temp.max),
        min4: Math.round(data.daily[3].temp.min),
        max5: Math.round(data.daily[4].temp.max),
        min5: Math.round(data.daily[4].temp.min),
        max6: Math.round(data.daily[5].temp.max),
        min6: Math.round(data.daily[5].temp.min),
        max7: Math.round(data.daily[6].temp.max),
        min7: Math.round(data.daily[6].temp.min),
        max8: Math.round(data.daily[7].temp.max),
        min8: Math.round(data.daily[7].temp.min),
    }
     
    function getPalabra(data) {
        return data.split("/").pop();
    }
    

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];

    });
    

   
    const iconoAnimadoTres = document.getElementById('icono-animado-tres');
    

    if (data.hourly[2].weather[0].main == "Clear" && horaUno.innerHTML > 7 && horaUno.innerHTML < 19) {
        iconoAnimadoTres.src = 'animated/sol.png'
    }else if (data.hourly[2].weather[0].main == "Clear") {
        iconoAnimadoTres.src = 'animated/luna2.png'
    }else if (data.hourly[2].weather[0].main == "Clouds" && horaUno.innerHTML > 7 && horaUno.innerHTML < 19) {
        iconoAnimadoTres.src = 'animated/solnube.png'
    }else if (data.hourly[2].weather[0].main == "Clouds") {
        iconoAnimadoTres.src = 'animated/lunanube.png'
    } else if (data.hourly[2].weather[0].main == "Thunderstorm") {
        iconoAnimadoTres.src = 'animated/nubetormenta2.png'
    } else if (data.hourly[2].weather[0].main == "Drizzle") {
        iconoAnimadoTres.src = 'animated/nubellovizna2.png'
    } else if (data.hourly[2].weather[0].main == "Snow") {
        iconoAnimadoTres.src = 'animated/nieve.png'
    } else if (data.hourly[2].weather[0].main == "Rain") {
        iconoAnimadoTres.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoTres.src = 'animated/sol.png'
    } 

    const iconoAnimadoCuatro = document.getElementById('icono-animado-cuatro');

    if (data.hourly[5].weather[0].main == "Clear" && horaDos.innerHTML > 7 && horaDos.innerHTML < 19) {
        iconoAnimadoCuatro.src = 'animated/sol.png'
    }else if (data.hourly[5].weather[0].main == "Clear") {
        iconoAnimadoCuatro.src = 'animated/luna2.png'
    }else if (data.hourly[5].weather[0].main == "Clouds" && horaDos.innerHTML > 7 && horaDos.innerHTML < 19) {
        iconoAnimadoCuatro.src = 'animated/solnube.png'
    }else if (data.hourly[5].weather[0].main == "Clouds") {
        iconoAnimadoCuatro.src = 'animated/lunanube.png'
    } else if (data.hourly[5].weather[0].main == "Thunderstorm") {
        iconoAnimadoCuatro.src = 'animated/nubetormenta2.png'
    } else if (data.hourly[5].weather[0].main == "Drizzle") {
        iconoAnimadoCuatro.src = 'animated/nubellovizna2.png'
    } else if (data.hourly[5].weather[0].main == "Snow") {
        iconoAnimadoCuatro.src = 'animated/nieve.png'
    } else if (data.hourly[5].weather[0].main == "Rain") {
        iconoAnimadoCuatro.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoCuatro.src = 'animated/sol.png'
    } 

    const iconoAnimadoCinco = document.getElementById('icono-animado-cinco');

    if (data.hourly[8].weather[0].main == "Clear" && horaTres.innerHTML > 7 && horaTres.innerHTML < 19) {
        iconoAnimadoCinco.src = 'animated/sol.png'
    }else if (data.hourly[8].weather[0].main == "Clear") {
        iconoAnimadoCinco.src = 'animated/luna2.png'
    }else if (data.hourly[8].weather[0].main == "Clouds" && horaTres.innerHTML > 7 && horaTres.innerHTML < 19) {
        iconoAnimadoCinco.src = 'animated/solnube.png'
    }else if (data.hourly[8].weather[0].main == "Clouds") {
        iconoAnimadoCinco.src = 'animated/lunanube.png'
    } else if (data.hourly[8].weather[0].main == "Thunderstorm") {
        iconoAnimadoCinco.src = 'animated/nubetormenta2.png'
    } else if (data.hourly[8].weather[0].main == "Drizzle") {
        iconoAnimadoCinco.src = 'animated/nubellovizna2.png'
    } else if (data.hourly[8].weather[0].main == "Snow") {
        iconoAnimadoCinco.src = 'animated/nieve.png'
    } else if (data.hourly[8].weather[0].main == "Rain") {
        iconoAnimadoCinco.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoCinco.src = 'animated/sol.png'
    } 

    const iconoAnimadoSeis = document.getElementById('icono-animado-seis');

    if (data.hourly[11].weather[0].main == "Clear" && horaCuatro.innerHTML > 7 && horaCuatro.innerHTML < 19) {
        iconoAnimadoSeis.src = 'animated/sol.png'
    }else if (data.hourly[11].weather[0].main == "Clear") {
        iconoAnimadoSeis.src = 'animated/luna2.png'
    }else if (data.hourly[11].weather[0].main == "Clouds" && horaCuatro.innerHTML > 7 && horaCuatro.innerHTML < 19) {
        iconoAnimadoSeis.src = 'animated/solnube.png'
    }else if (data.hourly[11].weather[0].main == "Clouds") {
        iconoAnimadoSeis.src = 'animated/lunanube.png'
    } else if (data.hourly[11].weather[0].main == "Thunderstorm") {
        iconoAnimadoSeis.src = 'animated/nubetormenta2.png'
    } else if (data.hourly[11].weather[0].main == "Drizzle") {
        iconoAnimadoSeis.src = 'animated/nubellovizna2.png'
    } else if (data.hourly[11].weather[0].main == "Snow") {
        iconoAnimadoSeis.src = 'animated/nieve.png'
    } else if (data.hourly[11].weather[0].main == "Rain") {
        iconoAnimadoSeis.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoSeis.src = 'animated/sol.png'
    } 

    const iconoAnimadoSiete = document.getElementById('icono-animado-siete');

    if (data.hourly[14].weather[0].main == "Clear" && horaCinco.innerHTML > 7 && horaCinco.innerHTML < 19) {
        iconoAnimadoSiete.src = 'animated/sol.png'
    }else if (data.hourly[14].weather[0].main == "Clear") {
        iconoAnimadoSiete.src = 'animated/luna2.png'
    }else if (data.hourly[14].weather[0].main == "Clouds" && horaCinco.innerHTML > 7 && horaCinco.innerHTML < 19) {
        iconoAnimadoSiete.src = 'animated/solnube.png'
    }else if (data.hourly[14].weather[0].main == "Clouds") {
        iconoAnimadoSiete.src = 'animated/lunanube.png'
    } else if (data.hourly[14].weather[0].main == "Thunderstorm") {
        iconoAnimadoSiete.src = 'animated/nubetormenta2.png'
    } else if (data.hourly[14].weather[0].main == "Drizzle") {
        iconoAnimadoSiete.src = 'animated/nubellovizna2.png'
    } else if (data.hourly[14].weather[0].main == "Snow") {
        iconoAnimadoSiete.src = 'animated/nieve.png'
    } else if (data.hourly[14].weather[0].main == "Rain") {
        iconoAnimadoSiete.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoSiete.src = 'animated/sol.png'
    } 

    const iconoAnimadoOcho = document.getElementById('icono-animado-ocho');

    if (data.hourly[17].weather[0].main == "Clear" && horaSeis.innerHTML > 7 && horaSeis.innerHTML < 19) {
        iconoAnimadoOcho.src = 'animated/sol.png'
    }else if (data.hourly[17].weather[0].main == "Clear") {
        iconoAnimadoOcho.src = 'animated/luna2.png'
    }else if (data.hourly[17].weather[0].main == "Clouds" && horaSeis.innerHTML > 7 && horaSeis.innerHTML < 19) {
        iconoAnimadoOcho.src = 'animated/solnube.png'
    }else if (data.hourly[17].weather[0].main == "Clouds") {
        iconoAnimadoOcho.src = 'animated/lunanube.png'
    } else if (data.hourly[17].weather[0].main == "Thunderstorm") {
        iconoAnimadoOcho.src = 'animated/nubetormenta2.png'
    } else if (data.hourly[17].weather[0].main == "Drizzle") {
        iconoAnimadoOcho.src = 'animated/nubellovizna2.png'
    } else if (data.hourly[17].weather[0].main == "Snow") {
        iconoAnimadoOcho.src = 'animated/nieve.png'
    } else if (data.hourly[17].weather[0].main == "Rain") {
        iconoAnimadoOcho.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoOcho.src = 'animated/sol.png'
    } 

    const iconoAnimadoNueve = document.getElementById('icono-animado-nueve');

    if (data.daily[1].weather[0].main == "Clear") {
        iconoAnimadoNueve.src = 'animated/sol.png' 
    }else if (data.daily[1].weather[0].main == "Clouds") {
        iconoAnimadoNueve.src = 'animated/nubesmov.png'
    } else if (data.daily[1].weather[0].main == "Thunderstorm") {
        iconoAnimadoNueve.src = 'animated/nubetormenta2.png'
    } else if (data.daily[1].weather[0].main == "Drizzle") {
        iconoAnimadoNueve.src = 'animated/nubellovizna2.png'
    } else if (data.daily[1].weather[0].main == "Snow") {
        iconoAnimadoNueve.src = 'animated/nieve.png'
    } else if (data.daily[1].weather[0].main == "Rain") {
        iconoAnimadoNueve.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoNueve.src = 'animated/sol.png'
    } 

    const iconoAnimadoDiez = document.getElementById('icono-animado-diez');

    if (data.daily[2].weather[0].main == "Clear") {
        iconoAnimadoDiez.src = 'animated/sol.png' 
    }else if (data.daily[2].weather[0].main == "Clouds") {
        iconoAnimadoDiez.src = 'animated/nubesmov.png'
    } else if (data.daily[2].weather[0].main == "Thunderstorm") {
        iconoAnimadoDiez.src = 'animated/nubetormenta2.png'
    } else if (data.daily[2].weather[0].main == "Drizzle") {
        iconoAnimadoDiez.src = 'animated/nubellovizna2.png'
    } else if (data.daily[2].weather[0].main == "Snow") {
        iconoAnimadoDiez.src = 'animated/nieve.png'
    } else if (data.daily[2].weather[0].main == "Rain") {
        iconoAnimadoDiez.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoDiez.src = 'animated/sol.png'
    } 

    const iconoAnimadoOnce = document.getElementById('icono-animado-once');

    if (data.daily[3].weather[0].main == "Clear") {
        iconoAnimadoOnce.src = 'animated/sol.png' 
    }else if (data.daily[3].weather[0].main == "Clouds") {
        iconoAnimadoOnce.src = 'animated/nubesmov.png'
    } else if (data.daily[3].weather[0].main == "Thunderstorm") {
        iconoAnimadoOnce.src = 'animated/nubetormenta2.png'
    } else if (data.daily[3].weather[0].main == "Drizzle") {
        iconoAnimadoOnce.src = 'animated/nubellovizna2.png'
    } else if (data.daily[3].weather[0].main == "Snow") {
        iconoAnimadoOnce.src = 'animated/nieve.png'
    } else if (data.daily[3].weather[0].main == "Rain") {
        iconoAnimadoOnce.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoOnce.src = 'animated/sol.png'
    } 

    const iconoAnimadoDoce = document.getElementById('icono-animado-doce');

    if (data.daily[4].weather[0].main == "Clear") {
        iconoAnimadoDoce.src = 'animated/sol.png' 
    }else if (data.daily[4].weather[0].main == "Clouds") {
        iconoAnimadoDoce.src = 'animated/nubesmov.png'
    } else if (data.daily[4].weather[0].main == "Thunderstorm") {
        iconoAnimadoDoce.src = 'animated/nubetormenta2.png'
    } else if (data.daily[4].weather[0].main == "Drizzle") {
        iconoAnimadoDoce.src = 'animated/nubellovizna2.png'
    } else if (data.daily[4].weather[0].main == "Snow") {
        iconoAnimadoDoce.src = 'animated/nieve.png'
    } else if (data.daily[4].weather[0].main == "Rain") {
        iconoAnimadoDoce.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoDoce.src = 'animated/sol.png'
    } 

    const iconoAnimadoTrece = document.getElementById('icono-animado-trece');

    if (data.daily[5].weather[0].main == "Clear") {
        iconoAnimadoTrece.src = 'animated/sol.png' 
    }else if (data.daily[5].weather[0].main == "Clouds") {
        iconoAnimadoTrece.src = 'animated/nubesmov.png'
    } else if (data.daily[5].weather[0].main == "Thunderstorm") {
        iconoAnimadoTrece.src = 'animated/nubetormenta2.png'
    } else if (data.daily[5].weather[0].main == "Drizzle") {
        iconoAnimadoTrece.src = 'animated/nubellovizna2.png'
    } else if (data.daily[5].weather[0].main == "Snow") {
        iconoAnimadoTrece.src = 'animated/nieve.png'
    } else if (data.daily[5].weather[0].main == "Rain") {
        iconoAnimadoTrece.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoTrece.src = 'animated/sol.png'
    } 

    const iconoAnimadoCatorce = document.getElementById('icono-animado-catorce');

    if (data.daily[6].weather[0].main == "Clear") {
        iconoAnimadoCatorce.src = 'animated/sol.png' 
    }else if (data.daily[6].weather[0].main == "Clouds") {
        iconoAnimadoCatorce.src = 'animated/nubesmov.png'
    } else if (data.daily[6].weather[0].main == "Thunderstorm") {
        iconoAnimadoCatorce.src = 'animated/nubetormenta2.png'
    } else if (data.daily[6].weather[0].main == "Drizzle") {
        iconoAnimadoCatorce.src = 'animated/nubellovizna2.png'
    } else if (data.daily[6].weather[0].main == "Snow") {
        iconoAnimadoCatorce.src = 'animated/nieve.png'
    } else if (data.daily[6].weather[0].main == "Rain") {
        iconoAnimadoCatorce.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoCatorce.src = 'animated/sol.png'
    } 

    const iconoAnimadoQuince = document.getElementById('icono-animado-quince');

    if (data.daily[7].weather[0].main == "Clear") {
        iconoAnimadoQuince.src = 'animated/sol.png' 
    }else if (data.daily[7].weather[0].main == "Clouds") {
        iconoAnimadoQuince.src = 'animated/nubesmov.png'
    } else if (data.daily[7].weather[0].main == "Thunderstorm") {
        iconoAnimadoQuince.src = 'animated/nubetormenta2.png'
    } else if (data.daily[7].weather[0].main == "Drizzle") {
        iconoAnimadoQuince.src = 'animated/nubellovizna2.png'
    } else if (data.daily[7].weather[0].main == "Snow") {
        iconoAnimadoQuince.src = 'animated/nieve.png'
    } else if (data.daily[7].weather[0].main == "Rain") {
        iconoAnimadoQuince.src = 'animated/nubelluvia2.png'
    } else {
        iconoAnimadoQuince.src = 'animated/sol.png'
    } 

    const iconoAnimado = document.getElementById('icono-animado');
    const iconoAnimadoDos = document.getElementById('icono-animado-dos');
    

    if ( data.current.weather[0].main == "Clear" && dianoche > 8 && dianoche <= 17) {      
        iconoAnimado.src = 'animated/sol.png'
        iconoAnimadoDos.src = 'animated/sol.png'
        document.body.classList.toggle('clear')
        iconoAnimado.classList.add('svgimg2')
        iconoAnimadoDos.classList.add('svgimg3')

        // div.classList.toggle('clouds')
    } else if (data.current.weather[0].main == "Clear" && dianoche == 7 ) {
        iconoAnimado.src = 'animated/solama.png'
        iconoAnimadoDos.src = 'animated/nubeama.png'
        document.body.classList.toggle('amanecer')
        iconoAnimado.classList.add('svgimg6')
    } else if (data.current.weather[0].main == "Clear" && dianoche == 18 ) {
        iconoAnimado.src = 'animated/solata.png'
        iconoAnimadoDos.src = 'animated/nubeata.png'
        document.body.classList.toggle('atardecer')
        iconoAnimado.classList.add('svgimg5')
    }else if(data.current.weather[0].main == "Clear") {
        iconoAnimado.src = 'animated/luna2.png'
        iconoAnimadoDos.src = 'animated/estrellas.png'
        document.body.classList.toggle('clearNight')
        iconoAnimado.classList.add('svgimg4')
        iconoAnimadoDos.classList.add('svgimg4')
        
        

    } else if (data.current.weather[0].main == "Clouds" && dianoche > 8 && dianoche < 18) {
        iconoAnimado.src = 'animated/sol.png'
        iconoAnimadoDos.src = 'animated/nubesmov.png'
        document.body.classList.toggle('diaNublado')
        iconoAnimado.classList.add('svgimg2')
        iconoAnimadoDos.classList.add('movlat')

    } else if (data.current.weather[0].main == "Clouds" && dianoche == 7 ) {
        iconoAnimado.src = 'animated/solama.png'
        iconoAnimadoDos.src = 'animated/nubeama.png'
        document.body.classList.toggle('amanecer')
        iconoAnimado.classList.add('svgimg6')
    } else if (data.current.weather[0].main == "Clouds" && dianoche == 19 ) {
        iconoAnimado.src = 'animated/solata.png'
        iconoAnimadoDos.src = 'animated/nubeata.png'
        document.body.classList.toggle('atardecer')
        iconoAnimado.classList.add('svgimg5')
    } else if (data.current.weather[0].main == "Clouds") {
        iconoAnimado.src = 'animated/luna2.png'
        iconoAnimadoDos.src = 'animated/nubesmov.png'
        document.body.classList.toggle('nocheNublada')
        iconoAnimadoDos.classList.add('movlat')

    } else if (data.current.weather[0].main == "Thunderstorm") {
        iconoAnimado.src = 'animated/nubetormenta.png'
        iconoAnimadoDos.src = 'animated/rayo.png'
        document.body.classList.toggle('tormenta')
        iconoAnimado.classList.add('movlat')
        iconoAnimadoDos.classList.add('rayo')

    } else if (data.current.weather[0].main == "Drizzle") {
        iconoAnimado.src = 'animated/nubellovizna.png'
        iconoAnimadoDos.src = 'animated/llovizna.png'
        document.body.classList.toggle('llovizna')
        iconoAnimado.classList.add('movlat')
        iconoAnimadoDos.classList.add('rayo')

    } else if (data.current.weather[0].main == "Snow") {
        iconoAnimado.src = 'animated/nieve.png'
        iconoAnimadoDos.src = 'animated/nieve.png'
        document.body.classList.toggle('nieve')
        iconoAnimado.classList.add('movlat')
        iconoAnimadoDos.classList.add('movlat')

    } else if (data.current.weather[0].main == "Rain") {
        iconoAnimado.src = 'animated/nubelluvia.png'
        iconoAnimadoDos.src = 'animated/lluvia.png'
        document.body.classList.toggle('lluvia')
        iconoAnimado.classList.add('movlat')
        iconoAnimadoDos.classList.add('rayo')

    } else if (dianoche > 7 && dianoche < 19){
        iconoAnimado.src = 'animated/sol.png'
        iconoAnimadoDos.src = 'animated/nubesmov.png'
        document.body.classList.toggle('diaNublado')
        iconoAnimado.classList.add('svgimg2')
        iconoAnimadoDos.classList.add('movlat')
    } else {
        iconoAnimado.src = 'animated/luna2.png'
        iconoAnimadoDos.src = 'animated/nubesmov.png'
        document.body.classList.toggle('diaNublado')
        iconoAnimadoDos.classList.add('movlat')
    }
                        

}


const getDate = () => {
    let date = new Date();
        dia = date.getDate(),
        mes = date.getMonth() + 1,
        anio = date.getFullYear(),
        diaSemana = date.getDay();
    
    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);
    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let showSemana = (semana[diaSemana]);

    let showDia2 = (semana[diaSemana + 1])
    diaDos.innerHTML = "Mañana " + showDia2

    let showDia3 = (semana[diaSemana + 2])
    diaTres.innerHTML = showDia3

    let showDia4 = (semana[diaSemana + 3])
    diaCuatro.innerHTML = showDia4

    let showDia5 = (semana[diaSemana + 4])
    diaCinco.innerHTML = showDia5

    let showDia6 = (semana[diaSemana + 5])
    diaSeis.innerHTML = showDia6

    let showDia7 = (semana[diaSemana + 6])
    diaSiete.innerHTML = showDia7

    let showDia8 = (semana[diaSemana + 7])
    diaOcho.innerHTML = showDia8


    return `${showSemana} ${date.getDate()}-${( '0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

const getDateHours = () => {
    let hours = new Date();
        let timeString = hours.toLocaleTimeString();
    horario.innerHTML = timeString;
    let hora = hours.getHours();
    dianoche = hora

    let timeUnoString = hours.getHours() + 3;
    timeUnoString > 24 ? horaUno.innerHTML = ('0' + timeUnoString).slice(1) - 24 : horaUno.innerHTML = ('0' + timeUnoString).slice(1)
    
    
    let timeDosString = hours.getHours() + 6;
    timeDosString > 24 ? horaDos.innerHTML = ('0' + timeDosString).slice(1) - 24 : horaDos.innerHTML = ('0' + timeDosString).slice(1);
    
    let timeTresString = hours.getHours() + 9;
    timeTresString > 24 ? horaTres.innerHTML = ('0' + timeTresString).slice(1) - 24 : horaTres.innerHTML = ('0' + timeTresString).slice(1);
    
    let timeCuatroString = hours.getHours() + 12;
    timeCuatroString > 24 ? horaCuatro.innerHTML = ('0' + timeCuatroString).slice(1) - 24 : horaCuatro.innerHTML = ('0' + timeCuatroString).slice(1);
    
    let timeCincoString = hours.getHours() + 18;
    timeCincoString > 24 ? horaCinco.innerHTML = ('0' + timeCincoString).slice(1) - 24 : horaCinco.innerHTML = ('0' + timeCincoString).slice(1);
    
    let timeSeisString = hours.getHours() + 21;
    timeSeisString > 24 ? horaSeis.innerHTML = ('0' + timeSeisString).slice(1) - 24 : horaSeis.innerHTML = ('0' + timeSeisString).slice(1);
}

   





const onload = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}

setInterval(() => {
getDateHours()
}, 1000);


// ----------------------------------------------------------------

