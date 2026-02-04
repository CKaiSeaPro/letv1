<script setup>
import ContactDetail from "@/components/ContactDetail.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import MainLogos from "@/components/MainLogos.vue";
import ContactDiscount from "@/components/ContactDiscount.vue";
import SubScribe from "@/components/SubScribe.vue";
import InstaPhotos from "@/components/InstaPhotos.vue";
import HeaderArea from "@/components/HeaderArea.vue";
import FooterArea from "@/components/FooterArea.vue";
</script>

<template>
  <main class="content">
    <ContactDetail />
    <ContactInfo />
    <MainLogos />
    <ContactDiscount />
    <SubScribe />
    <InstaPhotos />
  </main>
  <HeaderArea />
  <FooterArea />
</template>
<style lang="css">
@import "/css/style.css";
</style>
