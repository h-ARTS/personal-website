<template>
  <div class="headline" :style="{ backgroundImage: `url(${backgroundImageUrl})` }" v-lazy="backgroundImageUrl">
    <h1 class="title">{{ block.content.title }}</h1>
    <h2 class="subtitle">{{ block.content.subtitle }}</h2>
    <v-btn v-if="block.content.cta_button_label" @click="onButtonClick">
      {{ block.content.cta_button_label }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps<{
  block: {
    content: {
      title: string
      subtitle: string
      cta_button_label: string
      bg_image_url: string
    }
    children: []
  }
}>()

const emit = defineEmits(['button-click'])

const onButtonClick = () => {
  emit('button-click')
}

const backgroundImageUrl = ref(props.block.content.bg_image_url)
</script>

<style scoped>
.headline {
   text-align: center;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.v-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3f51b5;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}

.v-button:hover {
  background-color: #283593;
}
</style>
