function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/* 
1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

  -Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

  -Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

  -Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> 
*/

function createDaysOfTheMonth() {
  const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dezDaysList = document.querySelector('#days');

  for (let key = 0; key < dezDays.length; key += 1) {
    const dezDay = dezDays[key];
    const dezDaysItem = document.createElement('li');
    dezDaysItem.innerText = dezDay;
    console.log (dezDaysItem.nodeType)

    const text = dezDaysItem.innerText;
    if (text === '24' || text === '25' || text === '31' || text === '4' || text === '11' || text === '18') {
      if (text === '25') {
        dezDaysItem.className = 'day holiday friday';

      } else if (text === '24' || text === '31') {
        dezDaysItem.className = 'day holiday';

      } else {
        dezDaysItem.className = 'day friday';

      }
    } else {
      dezDaysItem.className = 'day';
    }

    dezDaysList.appendChild(dezDaysItem);
  }
}

createDaysOfTheMonth();

/* 
2. Implemente uma função que receba como parâmetro a string `"Feriados"` e crie dinamicamente um botão com o nome `"Feriados"`.

  -Adicione a este botão a ID `"btn-holiday"`.

  -Adicione este botão como filho/filha da tag `<div>` com classe `"buttons-container"` .
 */

function dezHolidays(holiday) {
  const buttons = document.querySelector('.buttons-container');
  const btnHoliday = document.createElement('button');
  btnHoliday.innerText = holiday;
  btnHoliday.id = 'btn-holiday'

  buttons.appendChild(btnHoliday);
}

dezHolidays('Feriados');

/* 
3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe `"holiday"`.

  -É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
 */

function evidenceHolidays() {
  let holidaysButton = document.querySelector('#btn-holiday');
  let allHolidays = document.querySelectorAll('.holiday');

  holidaysButton.addEventListener('click', function() {
    for (let holi = 0; holi < allHolidays.length; holi += 1) {
      if (allHolidays[holi].style.backgroundColor === 'rgb(21, 248, 97)') {
        allHolidays[holi].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        allHolidays[holi].style.backgroundColor = 'rgb(21, 248, 97)';
      }
    }
  })
};

evidenceHolidays();

/* 
4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

  -Adicione a este botão o ID "btn-friday" .

  -Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
  */
