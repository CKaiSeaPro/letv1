<script setup>
import { ref } from "vue";
const isActive = ref(false);
const toggle = () => (isActive.value = !isActive.value);
</script>

<template>
  <button class="category-toggler" @click="toggle">
    <i class="fa-solid fa-bars-sort"></i>
    Categories
  </button>
  <div class="vs-box-nav" :class="{ active: isActive }">
    <ul>
      <li>
        <a href="/shop"
          ><img src="/img/icons/categori-i-1.svg" alt="icon" />Romance</a
        >
      </li>
      <li>
        <a href="/shop"
          ><img src="/img/icons/categori-i-2.svg" alt="icon" />Thriller</a
        >
      </li>
      <li>
        <a href="/shop"
          ><img src="/img/icons/categori-i-3.svg" alt="icon" />Fantasy</a
        >
      </li>
      <li>
        <a href="/shop"
          ><img src="/img/icons/categori-i-4.svg" alt="icon" />Science
          Fiction</a
        >
      </li>
      <li>
        <a href="/shop"
          ><img src="/img/icons/categori-i-5.svg" alt="icon" />Science</a
        >
      </li>
      <li>
        <a href="/shop"
          ><img src="/img/icons/categori-i-6.svg" alt="icon" />Adventure</a
        >
      </li>
      <li>
        <a href="/shop"
          ><img src="/img/icons/categori-i-7.svg" alt="icon" />Kids</a
        >
      </li>
      <li>
        <a href="/shop"
          ><img src="/img/icons/categori-i-8.svg" alt="icon" />Cartoon &amp;
          Story</a
        >
      </li>
    </ul>
  </div>
</template>
