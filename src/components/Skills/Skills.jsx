import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Front-End',
    color: 'cyan',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 75 },
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 72 },
    ],
  },
  {
    category: 'Estilização',
    color: 'purple',
    skills: [
      { name: 'Tailwind CSS', level: 88 },
      { name: 'CSS Modules', level: 85 },
      { name: 'BEM', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'PWAs', level: 65 },
    ],
  },
  {
    category: 'Back-End & Ferramentas',
    color: 'cyan',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'APIs REST', level: 80 },
      { name: 'HTTP / Web', level: 78 },
      { name: 'Terminal', level: 75 },
    ],
  },
]

function SkillBar({ name, level, color }) {
  return (
    <div className={styles.skill}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.bar}>
        <div
          className={`${styles.fill} ${styles[`fill_${color}`]}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="habilidades" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>// habilidades</span>
          <h2 className={styles.title}>Tecnologias & Ferramentas</h2>
          <p className={styles.subtitle}>
            Stack que utilizo para construir produtos modernos e escaláveis
          </p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map(({ category, color, skills }) => (
            <div key={category} className={styles.card}>
              <h3 className={`${styles.category} ${styles[`category_${color}`]}`}>
                {category}
              </h3>
              <div className={styles.skillList}>
                {skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} color={color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
