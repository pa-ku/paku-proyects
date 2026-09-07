import { useState } from 'preact/hooks'
import { projects, type Category } from './data/projects'
import { FilterBar } from './components/FilterBar'
import { ProjectGrid } from './components/ProjectGrid'
import './app.css'

export default function App() {
  const [filter, setFilter] = useState<Category | 'all'>('all')

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div class="app">
      <header class="header">
        <h1 class="title">Paku Projects</h1>
        <p class="subtitle">Mis proyectos personales</p>
      </header>
      <FilterBar active={filter} onSelect={setFilter} />
      <ProjectGrid projects={filtered} />
    </div>
  )
}
