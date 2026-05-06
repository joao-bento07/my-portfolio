import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.bracket}>&lt;</span>JB<span className={styles.bracket}>/&gt;</span>
        </a>
        <p className={styles.copy}>
          © {year} João Bento. Desenvolvido com React + CSS Modules.
        </p>
        <div className={styles.links}>
          <a
            href="https://github.com/joao-bento07"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-bento-1b992a36a/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
