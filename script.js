const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const cigarette = document.getElementById('cigarette').value;
    const years = document.getElementById('years').value;

    const bmi = (years * (cigarette / 20)).toFixed(2);

    const value = document.getElementById('value');
    // let description = '';

    document.getElementById('infos').classList.remove('hidden');
    document.getElementById('clear').classList.remove('hidden');
    document.getElementById('calculate').classList.add('hidden');


    value.textContent = bmi;
    // document.getElementById('description').textContent = description;
    
});

function clearForm() {
    location.reload();
}