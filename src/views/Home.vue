<script setup>
import MainBlock from "@/components/MainBlock.vue";
import Trending from "@/components/Trending.vue";
import MainLogos from "@/components/MainLogos.vue";
import Discount from "@/components/Discount.vue";
import Advantages from "@/components/Advantages.vue";
import Categories from "@/components/Categories.vue";
import InfoBlocks from "@/components/InfoBlocks.vue";
import NewArrivals from "@/components/NewArrivals.vue";
import LatestNews from "@/components/LatestNews.vue";
import SubScribe from "@/components/SubScribe.vue";
import InstaPhotos from "@/components/InstaPhotos.vue";
import HeaderArea from "@/components/HeaderArea.vue";
import FooterArea from "@/components/FooterArea.vue";
</script>

<template>
  <main class="content">
    <MainBlock />
    <Trending />
    <MainLogos />
    <Discount />
    <Advantages />
    <Categories />
    <InfoBlocks />
    <NewArrivals />
    <LatestNews />
    <SubScribe />
    <InstaPhotos />
  </main>
  <HeaderArea />
  <FooterArea />
</template>
<style lang="css">
@import "/css/style.css";
</style>
