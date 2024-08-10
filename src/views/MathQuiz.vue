<template>
  <div class="container">
    <h1>Math Quiz</h1>
    <div v-if="question">
      <p>{{ question.text }}</p>
      <input v-model="userAnswer" @keyup.enter="checkAnswer" type="number" placeholder="Your answer" />
      <button @click="checkAnswer">Submit</button>
    </div>
    <div v-else>
      <button @click="generateQuestion">Start Quiz</button>
    </div>
    <div v-if="feedback">
      <p>{{ feedback }}</p>
      <button @click="nextQuestion">Next Question</button>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      question: null, // Stores the current math question object
      userAnswer: "", // Stores the user's answer
      feedback: "" // Stores the feedback message to display to the user
    };
  },
  methods: {
    generateQuestion() {
      // Generate two random numbers between 1 and 10
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;

      
      this.question = {
        text: `${num1} + ${num2} = ?`, // The text of the question
        answer: num1 + num2 // The correct answer 
      };

      // Reset variebles
      this.userAnswer = "";
      this.feedback = "";
    },
    
    checkAnswer() {
      // Compare the user's answer to the correct answer
      if (parseInt(this.userAnswer) === this.question.answer) {
        this.feedback = "Correct!"; // If correct, set feedback to "Correct!"
      } else {
        // If incorrect, set feedback to show the correct answer
        this.feedback = `Wrong! The correct answer was ${this.question.answer}.`;
      }
    },
    nextQuestion() {
      this.generateQuestion();
    }
  }
};
</script>


