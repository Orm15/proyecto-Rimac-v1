document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let surveyData = {};
    formData.forEach((value, key) => {
        surveyData[key] = value;
    });
    console.log(surveyData);
    alert('Encuesta enviada. ¡Gracias por tu participación!');
    event.target.reset();
});
