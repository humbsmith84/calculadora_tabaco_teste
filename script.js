const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const cigarette = document.getElementById('cigarette').value;
    const years = document.getElementById('years').value;

    const bmi = (years * (cigarrete / 20)).toFixed(2);

    const value = document.getElementById('value');
    let description = 'Teste calculadora tabagica';

    document.getElementById('infos').classList.remove('hidden');

    value.textContent = bmi;
    document.getElementById('description').textContent = description;
    
});