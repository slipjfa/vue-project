<script setup>
import { defineProps } from "vue";

const { 
  questionStatus, 
  barPercentage 
} = defineProps([
  "questionStatus", 
  "barPercentage"
]);

</script>

<template>
  <header>
    <h4 class="mt-5 text-3xl">Question {{ questionStatus }}</h4>
    <div class="bar w-72 h-12 border border-2 border-solid border-[#F2D2BD]">
      <div :style="{width: barPercentage}" class="completion h-full bg-[#F2D2BD] flex items-center"><p class="relative left-52">{{ barPercentage }}</p></div>
    </div>
  </header>
</template>