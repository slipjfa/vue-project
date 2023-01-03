<script setup>
  import { defineProps } from 'vue';
  import { useRouter } from "vue-router";

  const router = useRouter();
  const { quiz } = defineProps(['quiz']);

  const navigateToQuiz = () => {
    router.push(`/quiz/${quiz.id}`);
  }
</script>

<template>
   <div @click="navigateToQuiz" class="card rounded-sm mb-9 mr-5 cursor-pointer shadow-card">
        <img class="img w-full h-48 w-[310px] m-0" :src="quiz.img" alt="">
        <div class="card-text pt-0 pr-1">
          <h2 class="text-bold">{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div>
</template>