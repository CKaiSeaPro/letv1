<script setup>
import MakeUpTitle from "@/components/MakeUpTitle.vue";
import MakeUpArea from "@/components/MakeUpArea.vue";
import SubScribe from "@/components/SubScribe.vue";
import InstaPhotos from "@/components/InstaPhotos.vue";
import HeaderArea from "@/components/HeaderArea.vue";
import FooterArea from "@/components/FooterArea.vue";
</script>

<template>
  <main class="content">
    <MakeUpTitle />
    <MakeUpArea />
    <SubScribe />
    <InstaPhotos />
  </main>
  <HeaderArea />
  <FooterArea />
</template>
<style lang="css">
@import "/css/style.css";
</style>
