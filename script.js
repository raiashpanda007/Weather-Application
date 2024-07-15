const textBox = document.querySelector('input');
const button1 = document.querySelector('#Button1');
const button2 = document.querySelector('#Button2');
const weatherForecast = document.querySelector('.WeatherForecast'); 
const noresult = document.querySelector('.NoResult')
const Temperature = document.querySelector('.Temperature')
const FeelsLikeTemp = document.querySelector('.FeelsLikeTemp')
const Max = document.querySelector('.MaxTempValue');
const Min = document.querySelector('.MinTempValue');
const Image = document.querySelector('img');
const Wind = document.querySelector('.WindValue')
const Humid = document.querySelector('.HumidityValue')
const Press = document.querySelector('.PressureValue')
const Visible = document.querySelector('.VisibilityValue');
const Type = document.querySelector('.TypeOfWeather');













textBox.addEventListener('focusin',function(){
    textBox.classList.add('onFocus');
    textBox.addEventListener('keypress',function(e){
        if(e.key === 'Enter'){
            let cityName = textBox.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={f9a6f4dee666d2a61135a1feb5d65a68}`
    const weather = fetch(url);
    weather.then(function(response){
        return response.json();
    }).then(function(data){
        if(data.cod === '404' || data.cod === '400'){
            if(!weatherForecast.classList.contains('displayZero')){
                weatherForecast.classList.add('displayZero');
            }
            noresult.classList.remove('displayZero');
        }
        // else if(data.cod === '200'){
        else{
            if(!noresult.classList.contains('displayZero')){
                noresult.classList.add('displayZero');
            }
            Temperature.innerText = (data.main.temp - 273).toFixed(2);
            FeelsLikeTemp.innerText = (data.main.feels_like - 273).toFixed(2);
            Min.innerText = (data.main.temp_min - 273).toFixed(2);
            Max.innerText = (data.main.temp_max - 273).toFixed(2);
            let imageId = "";
            imageId = data.weather[0].icon;
            Image.src = `https://openweathermap.org/img/wn/${imageId}@2x.png`;
            let windspeed = data.wind.speed;
            Wind.innerText = `Wind Speed : ${windspeed} m/s`;
            let pressure = (data.main.pressure).toFixed(2);
            Press.innerText = `Pressure : ${pressure} hPA`;
            let humid = (data.main.humidity).toFixed(2);
            Humid.innerText = `Humidity : ${humid} %`;
            let vis = (data.visibility).toFixed(2);
            Visible.innerText = `Visibility : ${vis} m`;
            let type = "";
            type = data.weather[0].main;
            Type.innerText = type;
            if(weatherForecast.classList.contains('displayZero')){
                weatherForecast.classList.remove('displayZero');
            }
        }
    })
        }
    })
});
textBox.addEventListener('focusout',function(){
    textBox.classList.remove('onFocus');
});
button1.addEventListener('mouseenter',function(){
    button1.classList.remove('iconOutFocus');
    button1.classList.add('iconFocus');
})
button1.addEventListener('mouseleave',function(){
    button1.classList.remove('iconFocus');
    button1.classList.add('iconOutFocus');

})
button2.addEventListener('mouseenter',function(){
    button2.classList.remove('iconOutFocus');
    button2.classList.add('iconFocus');

})
button2.addEventListener('mouseleave',function(){
    button2.classList.remove('iconFocus');
    button2.classList.add('iconOutFocus');

})
button2.addEventListener('click',function(){
    let cityName = textBox.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f9a6f4dee666d2a61135a1feb5d65a68`
    const weather = fetch(url);
    weather.then(function(response){
        return response.json();
    }).then(function(data){
        if(data.cod === '404' || data.cod === '400'){
            noresult.classList.remove('displayZero');
        }
        // else if(data.cod === '200'){
        else{
            Temperature.innerText = (data.main.temp - 273).toFixed(2);
            FeelsLikeTemp.innerText = (data.main.feels_like - 273).toFixed(2);
            Min.innerText = (data.main.temp_min - 273).toFixed(2);
            Max.innerText = (data.main.temp_max - 273).toFixed(2);
            let imageId = "";
            imageId = data.weather[0].icon;
            Image.src = `https://openweathermap.org/img/wn/${imageId}@2x.png`;
            let windspeed = data.wind.speed;
            Wind.innerText = `Wind Speed : ${windspeed} m/s`;
            let pressure = (data.main.pressure).toFixed(2);
            Press.innerText = `Pressure : ${pressure} hPA`;
            let humid = (data.main.humidity).toFixed(2);
            Humid.innerText = `Humidity : ${humid} %`;
            let vis = (data.visibility).toFixed(2);
            Visible.innerText = `Visibility : ${vis} m`;
            let type = "";
            type = data.weather[0].main;
            Type.innerText = type;
            if(weatherForecast.classList.contains('displayZero')){
                weatherForecast.classList.remove('displayZero');
            }
        }
    })
})



