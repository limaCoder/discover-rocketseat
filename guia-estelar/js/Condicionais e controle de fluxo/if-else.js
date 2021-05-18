// if...else 
let temperature = 36.9

if(temperature >= 37.5)  {
  console.log('Febre alta')
} else if(temperature < 37.5 && temperature >= 37) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature)  {
  console.log('Febre alta')
} else if(mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}

if(0)  { // com valor falsy, sempre irá entrar nas outras condições
  console.log('Febre alta')
} else if(mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}

if({})  { // com valor truthy, sempre irá entrar nessa condição
  console.log('Febre alta')
} else if(mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}