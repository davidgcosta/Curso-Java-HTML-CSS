const data = new Date();
const diaSemana = data.getDay(Date);
let diaSemanaTexto;

console.log(diaSemana);
 
// switch (diaSemana) {
// case 0:
//      diaSemanaTexto = "Domingo";
//      break;
//  case 1:
//      diaSemanaTexto = "Segunda";
//      break;
//  case 2:
//      diaSemanaTexto = "Terça";
//      break;
//  case 3:
//      diaSemanaTexto = "Quarta";
//      break;
//  case 4:
//      diaSemanaTexto = "Quinta";
//      break;
//  case 5:
//      diaSemanaTexto = "Sexta";
//      break;
//  case 6:
//      diaSemanaTexto = "Sábado";
//      break;
// }
    


//  if (diaSemana === 0) {
//      diaSemanaTexto = 'Domingo';    
//  } else if (diaSemana === 1) {
//      diaSemanaTexto = 'Segunda-feira';
//  } else if (diaSemana === 2) {
//      diaSemanaTexto = 'Terça-feira';
//  } else if (diaSemana === 3) {
//      diaSemanaTexto = 'Quarta-feira';
//  } else if (diaSemana === 4) {
//      diaSemanaTexto = 'Quinta-feira';
//  } else if (diaSemana === 5) {
//      diaSemanaTexto = 'Sexta-feira';
//  } else if (diaSemana === 6) {
//      diaSemanaTexto = 'Sábado';
//  } else {
//      diaSemanaTexto = 'Insira dados válidos.';
//  }

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
         diaSemanaTexto = "Domingo";
         return diaSemanaTexto;
     case 1:
         diaSemanaTexto = "Segunda";
         return diaSemanaTexto;
     case 2:
         diaSemanaTexto = "Terça";
         return diaSemanaTexto;
     case 3:
         diaSemanaTexto = "Quarta";
         return diaSemanaTexto;
     case 4:
         diaSemanaTexto = "Quinta";
         return diaSemanaTexto;
     case 5:
         diaSemanaTexto = "Sexta";
         return diaSemanaTexto;
     case 6:
         diaSemanaTexto = "Sábado";
         return diaSemanaTexto;

    return diaSemanaTexto;
    }
}

const diaSemanaTexto1 = getDiaSemanaTexto(diaSemana);




console.log(diaSemana, diaSemanaTexto1);
