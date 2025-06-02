document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-test');
    const testForm = document.getElementById('evolution-test');
    const resultsDiv = document.getElementById('results');
    const scoreSpan = document.getElementById('score');
    const resultMessage = document.getElementById('result-message');
    
    // Правильные ответы
    const correctAnswers = {
        q1: 'b', // Человек умелый
        q2: 'b', // 300 тыс. лет назад
        q3: 'b', // Человек прямоходящий
        q4: 'c', // Африка
        q5: 'b'  // 4-2 млн лет назад
    };
    
    submitButton.addEventListener('click', function() {
        let score = 0;
        const userAnswers = {};
        
        // Собираем ответы пользователя
        for (let i = 1; i <= 5; i++) {
            const questionName = 'q' + i;
            const selectedOption = testForm.elements[questionName].value;
            
            if (selectedOption === correctAnswers[questionName]) {
                score++;
            }
        }
        
        // Показываем результаты
        scoreSpan.textContent = score;
        testForm.style.display = 'none';
        resultsDiv.style.display = 'block';
        
        // Оценка результата
        if (score === 5) {
            resultMessage.textContent = 'Отлично! Вы отлично разбираетесь в эволюции человека!';
            resultMessage.style.color = '#4CAF50';
        } else if (score >= 3) {
            resultMessage.textContent = 'Хорошо! Но есть куда стремиться.';
            resultMessage.style.color = '#FFC107';
        } else {
            resultMessage.textContent = 'Попробуйте еще раз! Возможно, стоит перечитать материалы.';
            resultMessage.style.color = '#F44336';
        }
    });
});