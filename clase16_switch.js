var signo = prompt('¿Cual es tu signo?').toLowerCase(); 

switch(signo){
    case 'aries':
        console.log('Soy de aries'); 
        break; 
    case 'capricornio':
        console.log('Soy de capricornio'); 
        break; 
    case 'libra':
        console.log('Soy de libra'); 
        break;
    case 'sagitario':
        console.log('Soy de sagitario'); 
        break; 
    case 'piscis':
        console.log('Soy de piscis'); 
        break; 
    case 'cancer':
    case 'cáncer':
        console.log('Soy de cancer'); 
        break;
    default:
        console.log('narnia'); 
}