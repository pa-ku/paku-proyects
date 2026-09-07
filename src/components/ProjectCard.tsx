import type { Project } from '../data/projects'

const categoryColors: Record<string, string> = {
  juegos: '#f472b6',
  programacion: '#34d399',
  ai: '#a78bfa',
  otros: '#fbbf24',
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      class="project-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span
        class="category-badge"
        style={{ background: categoryColors[project.category] }}
      >
        {project.category}
      </span>
      <h3 class="project-name">{project.name}</h3>
      <p class="project-desc">{project.description}</p>
    </a>
  )
}
