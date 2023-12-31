import { useState } from 'react'
import CategoryButton from './CategoryButton'

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const changeCategoryHandle = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  }

  return (
    <div className='portfolio__categories'>
      {
        categories.map(category => (
          <CategoryButton key={category} category={category} onChangeCategory={() => changeCategoryHandle(category)} className={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'}`} />
        ))
      }
    </div>
  )
}

export default ProjectsCategories