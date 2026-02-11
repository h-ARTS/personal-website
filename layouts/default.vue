<template>
  <v-app-bar app>
    <v-toolbar-title>Portfolio</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" text>Home</v-btn>
    <v-btn to="/about" text>About</v-btn>
    <v-btn to="/projects" text>Projects</v-btn>
    <v-btn to="/contact" text>Contact</v-btn>
  </v-app-bar>
  <v-main>
    <slot />
  </v-main>
  <v-footer app>
    <span>&copy; 2026 Portfolio</span>
  </v-footer>
</template>

<script setup lang="ts">
// Initialize Lenis for smooth scrolling
useLenis()
</script>