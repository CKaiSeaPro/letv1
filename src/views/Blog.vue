<script setup>
import BlogTitle from "@/components/BlogTitle.vue";
import BlogArea from "@/components/BlogArea.vue";
import SubScribe from "@/components/SubScribe.vue";
import InstaPhotos from "@/components/InstaPhotos.vue";
import HeaderArea from "@/components/HeaderArea.vue";
import FooterArea from "@/components/FooterArea.vue";
</script>

<template>
  <main class="content">
    <BlogTitle />
    <BlogArea />
    <SubScribe />
    <InstaPhotos />
  </main>
  <HeaderArea />
  <FooterArea />
</template>
<style lang="css">
@import "/css/style.css";
</style>
