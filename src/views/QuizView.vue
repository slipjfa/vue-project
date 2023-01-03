<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json"
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find(q => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);
const currentQuestion = computed(() => quiz.questions[currentQuestionIndex.value]);
//Computed solves this elegantly
// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);
// watch(() => currentQuestionIndex.value, () => {
//   questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
// })
const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);
const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`);
const onOptionSelected = (isCorrect) => {
  if (isCorrect) numberOfCorrectAnswers.value++;
  currentQuestionIndex.value++;
  if (quiz.questions.length === currentQuestionIndex.value) showResults.value = true;
}

</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
    <div>
      <Question v-if="!showResults" :question="currentQuestion" @selectOption="onOptionSelected" />
      <Result v-else :quizQuestionsLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers" />
    </div>
  </div>
</template>