<script setup>
import PostTitle from "@/components/PostTitle.vue";
import PostArea from "@/components/PostArea.vue";
import SubScribe from "@/components/SubScribe.vue";
import InstaPhotos from "@/components/InstaPhotos.vue";
import HeaderArea from "@/components/HeaderArea.vue";
import FooterArea from "@/components/FooterArea.vue";
</script>

<template>
  <main class="content">
    <PostTitle />
    <PostArea />
    <SubScribe />
    <InstaPhotos />
  </main>
  <HeaderArea />
  <FooterArea />
</template>
<style lang="css">
@import "/css/style.css";
</style>
