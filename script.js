const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const cigarette = document.getElementById('cigarette').value;
    const years = document.getElementById('years').value;

    const bmi = (cigarette / (years * years)).toFixed(2);

    const value = document.getElementById('value');
    let description = 'teste';

    document.getElementById('infos').classList.remove('hidden');

    value.textContent = bmi;
    document.getElementById('description').textContent = description;
    
});