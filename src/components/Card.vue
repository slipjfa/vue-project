<script setup>
  import { defineProps } from 'vue';

  const { quiz } = defineProps(['quiz']);
  console.log(quiz)
</script>

<template>
   <div class="card rounded-sm mb-9 mr-5 cursor-pointer shadow-card">
        <img class="img w-full h-48 w-[310px] m-0" :src="quiz.img" alt="">
        <div class="card-text pt-0 pr-1">
          <h2 class="text-bold">{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div>
</template>