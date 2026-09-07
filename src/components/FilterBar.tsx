import { categories, type Category } from '../data/projects'

interface Props {
  active: Category | 'all'
  onSelect: (cat: Category | 'all') => void
}

export function FilterBar({ active, onSelect }: Props) {
  return (
    <div class="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat.key}
          class={`filter-btn ${active === cat.key ? 'active' : ''}`}
          onClick={() => onSelect(cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
