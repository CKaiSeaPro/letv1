<script setup>
import { ref } from "vue";
const isActive = ref(false);
const menuToggle = () => (isActive.value = !isActive.value);
</script>

<template>
  <button class="vs-menu-toggle d-inline-block d-lg-none" @click="menuToggle">
    <i class="fal fa-bars"></i>
  </button>
</template>
