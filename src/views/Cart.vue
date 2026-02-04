<script setup>
import CartTitle from "@/components/CartTitle.vue";
import CartArea from "@/components/CartArea.vue";
import SubScribe from "@/components/SubScribe.vue";
import InstaPhotos from "@/components/InstaPhotos.vue";
import HeaderArea from "@/components/HeaderArea.vue";
import FooterArea from "@/components/FooterArea.vue";
</script>

<template>
  <main class="content">
    <CartTitle />
    <CartArea />
    <SubScribe />
    <InstaPhotos />
  </main>
  <HeaderArea />
  <FooterArea />
</template>
<style lang="css">
@import "/css/style.css";
</style>
