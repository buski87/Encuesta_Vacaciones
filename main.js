const form = document.getElementById('vacationForm');
const activitiesQuestion = document.getElementById('activitiesQuestion');
const marActivities = document.getElementById('marActivities');
const montanaActivities = document.getElementById('montanaActivities');

form.elements['environment'].forEach((element) => {
    element.addEventListener('change', () => {
        activitiesQuestion.style.display = 'block';
        if (element.value === 'mar') {
            marActivities.style.display = 'block';
            montanaActivities.style.display = 'none';
        } else {
            marActivities.style.display = 'none';
            montanaActivities.style.display = 'block';
        }
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Gracias por enviar tus preferencias de vacaciones!');
});