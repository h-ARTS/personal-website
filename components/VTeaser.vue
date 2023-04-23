<template>
  <v-container :class="[spacings.margin, spacings.padding]" :fluid="block?.content.fluid">
    <v-row justify="center">
      <v-col class="text-center">
        <h1>Welcome to My Nuxt Vuetify App!</h1>
        <p>This is a simple Nuxt.js app with Vuetify and three components.</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <slot />
      <template v-if="block?.children">
        <component v-for="(child, idx) in block.children" :key="idx" :is="component[child.type]" :block="child" />
      </template>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { defineProps, defineComponent, ref, computed } from 'vue'
const VHeadline = resolveComponent('VHeadline')
const VTeaser = resolveComponent('VTeaser')
const VGrid = resolveComponent('VGrid')
const VCard = resolveComponent('VCard')

defineComponent({
  name: 'v-teaser'
})

interface BlockChild {
  type: keyof typeof component.value
}

const props = defineProps<{
  block?: {
    content: {
      fluid: boolean
      background_color: string
      margin: string
      padding: string
    }
    children: BlockChild[]
  }
}>()

const component = ref({
  Headline: VHeadline,
  Teaser: VTeaser,
  Grid: VGrid,
  Card: VCard
})

const spacings = computed(() => ({
  margin: `ma-${props.block?.content.margin}`,
  padding: `pa-${props.block?.content.padding}`
}))
</script>