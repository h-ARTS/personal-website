<template>
  <ClientOnly>
    <div class="projects">
      <h2>My Projects</h2>
      <div class="projects-grid" ref="projectsRef">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <div class="project-image" :style="{ backgroundColor: project.color }"></div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.desc }}</p>
            <v-btn :href="project.link" target="_blank" small>View Project</v-btn>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Interactive Vue Dashboard',
    desc: 'A responsive dashboard built with Vue.js and Vuetify, featuring real-time data visualization.',
    link: '#',
    color: '#4CAF50'
  },
  {
    title: 'GSAP Animation Showcase',
    desc: 'Demonstrating advanced animations using GSAP ScrollTrigger for smooth scroll-based effects.',
    link: '#',
    color: '#FF9800'
  },
  {
    title: 'E-commerce Platform',
    desc: 'Full-stack e-commerce app with Nuxt.js, featuring product catalog and shopping cart.',
    link: '#',
    color: '#2196F3'
  },
  {
    title: 'Portfolio Website',
    desc: 'This very portfolio, built with Nuxt 3, Vuetify, and GSAP for stunning animations.',
    link: '#',
    color: '#9C27B0'
  },
  {
    title: 'TypeScript Utility Library',
    desc: 'A collection of reusable TypeScript utilities for frontend development.',
    link: '#',
    color: '#607D8B'
  },
  {
    title: 'Mobile-First Blog',
    desc: 'A blog platform optimized for mobile devices, using modern CSS and responsive design.',
    link: '#',
    color: '#795548'
  }
]

const projectsRef = ref<HTMLElement>()

onMounted(() => {
  const { gsap } = useGsap()
  if (projectsRef.value) {
    gsap.from('.project-card', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: projectsRef.value,
        start: 'top 80%'
      }
    })
  }
})

useHead({
  title: 'Projects - Portfolio'
})
</script>

<style scoped>
.projects {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  height: 200px;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  margin-bottom: 0.5rem;
}

.project-content p {
  margin-bottom: 1rem;
}
</style>