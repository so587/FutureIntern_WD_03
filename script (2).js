let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')
     function roundNumber(number){
       return Math.round(number*100)/100
     }
     celsiusInput.addEventListener('input',function(){
       let cTemp = parseFloat(celsiusInput.value)
       let ftemp = (ctemp*(9/5))/100 +32
       let ktemp = cTemp +273.15
     fahrenheitInput.value = roundNumber(fTemp)
     kelvinInput.value = roundNumber(kTemp)
     })
     fahrenheitInput.addEventListener('input',function(){
       let fTemp = parseFloat(fahrenheitInput.value)
       let ctemp = (ftemp - 32) * (5/9)
       let ktemp =  (ftemp - 32) * (5/9) +273.15
     celsiusInput.value = roundNumber(cTemp)
     kelvinInput.value = roundNumber(kTemp)
     })
     kelvinInput.addEventListener('input',function(){
       let kTemp = parseFloat(kelvinInput.value)
       let ftemp = (kTemp -273.15) * (9/5) + 32
       let ctemp = kTemp -273.15
       celsiusInput.value = roundNumber(cTemp)
     fahrenheitInput.value = roundNumber(kTemp)
     
     })
     
     btn.addEventListener('click',()>{
       celsiusInput.value = ""
      fahrenheitInput.value = ""
         kelvinInput.value = ""
     })
     
     
     
     
