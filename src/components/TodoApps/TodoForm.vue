<script setup lang="ts">
  import { ref } from 'vue';

  const todoInput = ref('')

</script>

<template>
  <input type="text" v-model="todoInput">
</template>