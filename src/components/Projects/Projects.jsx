import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Menu Restaurante',
    description:
      'Cardápio digital responsivo para restaurante web, com navegação por categorias, layout adaptado para mobile e desktop e apresentação visual dos pratos.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
    github: 'https://github.com/joao-bento07/menu-restaurante',
    demo: null,
    highlight: true,
  },
  {
    id: 2,
    title: 'Diário de Bordo',
    description:
      'Aplicação web para registro de anotações e experiências diárias, com interface intuitiva para criação e visualização de entradas.',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/joao-bento07/diario-de-bordo',
    demo: null,
    highlight: false,
  },
  {
    id: 3,
    title: 'Portal de Viagens',
    description:
      'Portal web temático de viagens com seções de destinos, informações turísticas e layout responsivo focado em experiência visual.',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/joao-bento07/portal-viagens',
    demo: null,
    highlight: false,
  },
  {
    id: 4,
    title: 'Web Blog',
    description:
      'Blog web com listagem de artigos, páginas de conteúdo e navegação entre posts. Design limpo e leitura confortável em qualquer dispositivo.',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/joao-bento07/web-blog',
    demo: null,
    highlight: false,
  },
]

export default function Projects() {
  return (
    <section id="projetos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>// projetos</span>
          <h2 className={styles.title}>Trabalhos Recentes</h2>
          <p className={styles.subtitle}>
            Projetos desenvolvidos ao longo dos estudos, cada um com desafios e aprendizados únicos
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className={styles.more}>
          <a
            href="https://github.com/joao-bento07"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.moreBtn}
          >
            Ver todos no GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
