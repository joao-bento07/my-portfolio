import { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import profileImg from '../../assets/profile.jpg'

const roles = ['Desenvolvedor Front-End', 'Estudante Full Stack JS', 'Engenheiro de Computação']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex(prev => (prev + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.gridLines} />
        <div className={styles.glow} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>Olá, me chamo</p>
          <h1 className={styles.name}>João Bento</h1>
          <div className={styles.roleWrapper}>
            <span className={styles.role}>{displayed}</span>
            <span className={styles.cursor}>|</span>
          </div>
          <p className={styles.description}>
            Acadêmico de Engenharia da Computação apaixonado por construir
            interfaces modernas, performáticas e acessíveis com as melhores
            tecnologias do ecossistema JavaScript.
          </p>
          <div className={styles.actions}>
            <a href="#projetos" className={styles.btnPrimary}>
              Ver Projetos
            </a>
            <a href="#contato" className={styles.btnSecondary}>
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageGlow} />
          <div className={styles.imageBorder}>
            <img src={profileImg} alt="João Bento" className={styles.profileImg} />
          </div>
          <div className={styles.badge1}>React</div>
          <div className={styles.badge2}>TypeScript</div>
          <div className={styles.badge3}>Next.js</div>
        </div>
      </div>

      <a href="#sobre" className={styles.scrollDown} aria-label="Rolar para baixo">
        <span className={styles.mouse}>
          <span className={styles.wheel} />
        </span>
      </a>
    </section>
  )
}
