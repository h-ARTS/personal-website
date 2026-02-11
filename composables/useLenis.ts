import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useLenis = () => {
  let lenis: Lenis | null = null

  onMounted(() => {
    lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time: number) => {
      lenis!.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
  })

  onUnmounted(() => {
    lenis?.destroy()
  })

  return { lenis }
}