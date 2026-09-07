import type { Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div class="project-grid">
      {projects.map((p) => (
        <ProjectCard key={p.name} project={p} />
      ))}
    </div>
  )
}
