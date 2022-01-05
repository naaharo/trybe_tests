/* CRIAÇÃO DAS OPCÕES NO SELECT */
const selectState = document.getElementById('state');

function createStates(state) {
  for (let key = 0; key < state.length; key +=1) {
    const option = document.createElement('option');
    option.value = `state${key+1}`;
    option.innerText = state[key];

    selectState.appendChild(option);
  }
}

const states = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato GFrosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)'];

createStates(states);

/* VERIFICAÇÃO DA DATA */
const firstDay = document.getElementById('firstDay');
