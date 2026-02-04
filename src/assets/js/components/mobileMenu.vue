<script setup>
import { ref } from "vue";

import menuToggle from "./menuToggle.vue";
</script>

<template>
  <menuToggle />
  <div class="vs-menu-wrapper" :class="{ 'vs-body-visible': isActive }">
    <div class="vs-menu-area text-center">
      <div class="mobile-logo">
        <a href="/"><img src="/img/logo.svg" alt="ebukz" class="logo" /></a>
        <button class="vs-menu-toggle"><i class="fal fa-times"></i></button>
      </div>
      <div class="vs-mobile-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li class="menu-item-has-children">
            <a href="shop.html">Shop</a>
            <ul class="sub-menu">
              <li><a href="shop.html">Shop</a></li>
              <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
              <li><a href="shop-details.html">Shop Details</a></li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="about.html">Vendor</a>
            <ul class="sub-menu">
              <li><a href="vendor.html">Vendor</a></li>
              <li><a href="vendor-details.html">Vendor Details</a></li>
            </ul>
          </li>
          <li class="menu-item-has-children mega-menu-wrap">
            <a href="#">Pages</a>
            <ul class="mega-menu">
              <li>
                <a href="shop.html">Page List 1</a>
                <ul>
                  <li><a href="index.html">Home 1</a></li>
                  <li><a href="index-2.html">Home 2</a></li>
                  <li><a href="index-3.html">Home 3</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Page List 2</a>
                <ul>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                  <li><a href="blog-sidebar-2.html">Blog Sidebar 2</a></li>
                  <li><a href="Blog-Standard.html">Blog Standard</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Page List 3</a>
                <ul>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="shop.html">Shop</a></li>
                  <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                  <li><a href="shop-details.html">Shop Details</a></li>
                  <li><a href="404.html">Error Page</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Page List 4</a>
                <ul>
                  <li><a href="wishlist.html">wishlist</a></li>
                  <li><a href="checkout.html">checkout</a></li>
                  <li><a href="author.html">All Authors</a></li>
                  <li><a href="author-details.html">Author Details</a></li>
                  <li><a href="vendor.html">Vendor</a></li>
                  <li><a href="vendor-details.html">Vendor Details</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="blog.html">Blog</a>
            <ul class="sub-menu">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
              <li><a href="blog-sidebar-2.html">Blog Sidebar 2</a></li>
              <li><a href="Blog-Standard.html">Blog Standard</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
