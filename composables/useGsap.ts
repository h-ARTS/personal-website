import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGsap = () => {
  const initGsap = () => {
    gsap.registerPlugin(ScrollTrigger)
  }

  onMounted(() => {
    initGsap()
  })

  return { gsap, ScrollTrigger }
}