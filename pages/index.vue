<template>
  <ClientOnly>
    <div class="hero">
      <h1 class="hero-title">Hanan Mufti</h1>
      <p class="hero-subtitle">Software Engineer - Frontend Specialist</p>
      <v-btn to="/about" class="hero-btn">Explore My Work</v-btn>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
useHead({
  title: 'Hanan Mufti - Software Engineer'
})

onMounted(() => {
  const { gsap } = useGsap()
  gsap.from('.hero-title', {
    opacity: 0,
    y: -50,
    duration: 1
  })
  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5
  })
  gsap.from('.hero-btn', {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    delay: 1
  })
})
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.hero-btn {
  background: white;
  color: #667eea;
}
</style>