function checkAnswer(questionNumber) {
    let answer;
    let correctAnswer;
    let nextQuestion;
    let imageId;

    // Determine the correct answer and next question based on the question number
    if (questionNumber === 1) {
        answer = document.getElementById('answer1').value.trim().toLowerCase();
        correctAnswer = 'edric'; // Correct answer for question 1
        nextQuestion = 'question2';
        imageId = 'image1';
    } else if (questionNumber === 2) {
        answer = document.getElementById('answer2').value.trim().toLowerCase();
        correctAnswer = 'thomas'; // Correct answer for question 2
        nextQuestion = 'question3';
        imageId = 'image2';
    } else if (questionNumber === 3) {
        answer = document.getElementById('answer3').value.trim().toLowerCase();
        correctAnswer = 'dance'; // Correct answer for question 3
        nextQuestion = 'question4';
        imageId = 'image3';
    } else if (questionNumber === 4) {
        answer = document.getElementById('answer4').value.trim().toLowerCase();
        correctAnswer = 'rizwan'; // Correct answer for question 4
        imageId = 'image4';
    }

    if (answer === correctAnswer) {
        // Show the image for the current question
        document.getElementById(imageId).style.display = 'block';
        
        // After a brief moment, show the next question
        setTimeout(() => {
            // Hide current question and image
            document.getElementById(`question${questionNumber}`).classList.remove('active');
            document.getElementById(imageId).style.display = 'none';

            // Show next question if there is one
            if (nextQuestion) {
                document.getElementById(nextQuestion).classList.add('active');
            } else {
                alert('You have completed the quiz!');
            }
        }, 2000); // Wait for 2 seconds before moving to the next question
    } else {
        // Show error message
        document.getElementById(`error${questionNumber}`).style.display = 'block';
    }
}


