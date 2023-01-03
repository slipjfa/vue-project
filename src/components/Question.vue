<script setup>
  import { defineProps, defineEmits } from 'vue';

  const {question} = defineProps(["question"]);
  
  const emit = defineEmits(["selectOption"]);

  const emitSelectedOption = (isCorrect) => {
    emit("selectOption", isCorrect);
  } 
</script>

<template>
  <div class="question-container mt-5">
    <h1 class="question text-4xl mb-5">
      {{ question.text }}
    </h1>
  </div>
  <div class="options-container">
    <div v-for="option in question.options" 
      :key="option.id" 
      class="option flex mb-5 cursor-pointer"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p class="option-label bg-[#F2D2BD] dark:bg-emerald-800 w-10 h-10 text-xl flex items-center justify-center ">
        {{ option.label }}
      </p>
      <div class="option-value bg-[rgb(244,239,239)] dark:bg-slate-600 w-full text-xl flex items-center px-5">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>