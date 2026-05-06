import styles from './About.module.css'

const highlights = [
  { value: '19', label: 'anos' },
  { value: '2+', label: 'anos estudando' },
  { value: '10+', label: 'tecnologias' },
  { value: '5+', label: 'projetos' },
]

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>// sobre mim</span>
          <h2 className={styles.title}>Quem sou eu</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Sou <strong>João Bento</strong>, estudante de{' '}
              <strong>Engenharia da Computação</strong> e graduando em
              Desenvolvimento Full Stack JavaScript pela <strong>EBAC</strong>.
              Tenho 19 anos e uma paixão genuína por transformar ideias em
              produtos digitais através do código.
            </p>
            <p>
              Meu foco está no desenvolvimento <strong>Front-End</strong>,
              construindo interfaces responsivas, performáticas e com ótima
              experiência de usuário. Utilizo React como minha principal
              ferramenta, sempre buscando boas práticas e código limpo.
            </p>
            <p>
              Estou em constante evolução, aprendendo sobre arquiteturas
              modernas com <strong>Next.js</strong>, tipagem estática com{' '}
              <strong>TypeScript</strong>, e expandindo meu conhecimento para
              o Back-End com <strong>Node.js</strong>.
            </p>
            <div className={styles.actions}>
              <a href="#contato" className={styles.btn}>
                Vamos Conversar
              </a>
              <a
                href="https://github.com/joao-bento07"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnGhost}
              >
                GitHub →
              </a>
            </div>
          </div>

          <div className={styles.stats}>
            {highlights.map(({ value, label }) => (
              <div key={label} className={styles.statCard}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
