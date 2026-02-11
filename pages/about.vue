<template>
  <ClientOnly>
    <div class="about">
      <section class="bio">
        <h2>About Me</h2>
        <p>I am a passionate Software Engineer with a focus on Frontend development. I love creating beautiful, interactive web experiences using modern technologies like Vue.js, Nuxt, and GSAP.</p>
      </section>
      <section class="skills">
        <h2>Skills</h2>
        <div class="skills-grid" ref="skillsRef">
          <div v-for="skill in skills" :key="skill.name" class="skill-card">
            <v-icon size="large">{{ skill.icon }}</v-icon>
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.desc }}</p>
          </div>
        </div>
      </section>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Vue.js', icon: 'mdi-vuejs', desc: 'Component-based framework' },
  { name: 'Nuxt.js', icon: 'mdi-nuxt', desc: 'Full-stack Vue framework' },
  { name: 'TypeScript', icon: 'mdi-language-typescript', desc: 'Typed JavaScript' },
  { name: 'GSAP', icon: 'mdi-animation', desc: 'Animation library' },
  { name: 'Vuetify', icon: 'mdi-material-design', desc: 'Material Design components' },
  { name: 'CSS/SCSS', icon: 'mdi-language-css3', desc: 'Styling and animations' }
]

const skillsRef = ref<HTMLElement>()

onMounted(() => {
  const { gsap } = useGsap()
  if (skillsRef.value) {
    gsap.from('.skill-card', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: skillsRef.value,
        start: 'top 80%'
      }
    })
  }
})

useHead({
  title: 'About - Portfolio'
})
</script>

<style scoped>
.about {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.bio {
  margin-bottom: 4rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-card {
  padding: 1.5rem;
  border: 1px solid #333;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
}

.skill-card:hover {
  transform: translateY(-10px);
}
</style>