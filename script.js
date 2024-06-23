document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 1;
    const totalSteps = 6;

    function showStep(step) {
        // Mostrar o ocultar desafíos según el paso actual
        document.querySelectorAll('.challenge').forEach((challenge, index) => {
            if (index + 1 === step) {
                challenge.classList.add('active');
            } else {
                challenge.classList.remove('active');
            }
        });

        // Actualizar estado de los números de paso
        document.querySelectorAll('.step-number').forEach((indicator, index) => {
            if (index + 1 === step) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    showStep(currentStep);

    // Manejar eventos para avanzar al siguiente paso
    document.querySelectorAll('.button-next').forEach((button) => {
        button.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    // Manejar eventos para saltar directamente a un paso al hacer clic en un número de paso
    document.querySelectorAll('.step-number').forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentStep = index + 1;
            showStep(currentStep);
        });
    });
});
