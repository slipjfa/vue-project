<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const { quizQuestionsLength, numberOfCorrectAnswers } = defineProps(["quizQuestionsLength", "numberOfCorrectAnswers"]);
</script>

<template>
  <div class="results text-center py-24 px-0">
    <p class="text-2xl">Your results...</p>
    <h1 class="text-7xl">{{  numberOfCorrectAnswers }}/{{ quizQuestionsLength }}</h1>
    <RouterLink to="/" class="text-indigo-600">Go Back</RouterLink>
  </div>
</template>