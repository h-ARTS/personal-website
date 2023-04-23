<template>
  <div>
    <v-header />
    <v-main>
      <component v-for="(block, idx) in data.blocks" 
            :key="idx" 
            :is="component[block.type]" 
            :block="block" />
    </v-main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, markRaw } from 'vue'
const VHeadline = resolveComponent('VHeadline')
const VTeaser = resolveComponent('VTeaser')
const VGrid = markRaw(resolveComponent('VGrid'))
const VCard = resolveComponent('VCard')

useHead({
  title: 'Hanan Mufti - Software Engineer',
})

interface Data {
  url?: URL | null,
  blocks: Array<Block>
}

interface Block {
  type: keyof typeof component.value
}

const data: Data = reactive({ url: null, blocks: [] })

const handleReceiveMessage = (event: MessageEvent) => {
  console.log('Received message:', event.data);
  data.blocks = event.data
  console.log('Data blocks:', data.blocks);
};

onMounted(() => {
  const currentUrl = new URL(window.location.href)
  data.url = currentUrl
  if (currentUrl.searchParams.has('editMode'))
    window.addEventListener('message', handleReceiveMessage)
})

const component = ref({
  Headline: VHeadline,
  Teaser: VTeaser,
  Grid: VGrid,
  Card: VCard
})

onUnmounted(() => {
  window.removeEventListener('message', handleReceiveMessage)
})
</script>

<style lang="scss" scoped>
</style>
