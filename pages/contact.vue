<template>
  <ClientOnly>
    <div class="contact">
      <h2>Contact Me</h2>
      <div class="contact-content" ref="contactRef">
        <div class="contact-info">
          <p>Feel free to reach out for collaborations or opportunities.</p>
          <p>Email: hanan@example.com</p>
          <p>LinkedIn: /in/hananmufti</p>
        </div>
        <v-form class="contact-form" ref="form" @submit.prevent="submitForm">
          <v-text-field
            v-model="form.name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            label="Email"
            type="email"
            required
          ></v-text-field>
          <v-textarea
            v-model="form.message"
            label="Message"
            required
          ></v-textarea>
          <v-btn type="submit" color="primary">Send Message</v-btn>
        </v-form>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  message: ''
})

const contactRef = ref<HTMLElement>()

const submitForm = () => {
  console.log('Form submitted:', form.value)
  // Handle form submission
}

onMounted(() => {
  const { gsap } = useGsap()
  if (contactRef.value) {
    gsap.from('.contact-info, .contact-form', {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contactRef.value,
        start: 'top 80%'
      }
    })
  }
})

useHead({
  title: 'Contact - Portfolio'
})
</script>

<style scoped>
.contact {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.contact-info {
  padding: 1.5rem;
  border: 1px solid #333;
  border-radius: 8px;
}

.contact-form {
  padding: 1.5rem;
  border: 1px solid #333;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>