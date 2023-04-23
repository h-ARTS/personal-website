<template>
  <v-col :style="containerStyles" :cols="columnSize">
    <template v-if="block?.children">
      <component v-for="(child, idx) in block.children" :key="idx" :is="component[child.type]" :block="child" />
    </template>
  </v-col>
</template>

<script setup lang="ts">
import { defineProps, computed, markRaw } from 'vue'
const VHeadline = resolveComponent('VHeadline')
const VTeaser = resolveComponent('VTeaser')
const VGrid = resolveComponent('VGrid')
const VCard = resolveComponent('VCard')

interface BlockChild {
  type: keyof typeof component.value
}

const props = defineProps<{
  margin?: string
  padding?: string
  columns?: number
  block?: {
    content: {
      margin?: string
      padding?: string
      columns: number
    }
    children: BlockChild[]
  }
}>()

const containerStyles = computed(() => ({
  margin: props.block?.content.margin || props.margin,
  padding: props.block?.content.padding || props.padding
}))

const columnSize = computed(() => props.block?.content.columns || props.columns)

const component = ref({
  Headline: VHeadline,
  Teaser: VTeaser,
  Grid: VGrid,
  Card: VCard
})

markRaw({ containerStyles, columnSize })
</script>
