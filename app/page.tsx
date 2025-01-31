import Hero from '@/app/components/Hero/Headline'
import Projects from '@/app/components/Projects/ProjectGrid'
import Experience from '@/app/components/Experience/experience'
import Education from '@/app/components/Education/education'
import NeuralNetwork from '@/app/components/Skills/NeuralNetwork'
import SkillNodes from '@/app/components/Skills/SkillNodes'
import ContactForm from '@/app/Contact/ContactForm'
import SocialLinks from '@/app/Contact/SocialLinks'

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <NeuralNetwork />
      <SkillNodes />
      <ContactForm />
      <SocialLinks />
    </main>
  )
}