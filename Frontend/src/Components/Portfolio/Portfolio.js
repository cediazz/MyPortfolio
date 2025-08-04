import Project from "../PortfolioItems/Project/Project"
import { useState, useEffect } from "react"
import axios from 'axios'
import StarIcon from "../Icons/StarIcon"

function Portfolio() {

  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/projects/list-projects`)
      if (response.status === 200)
        setProjects(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProjects()
  }, [])


  return (
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <StarIcon />
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <div class="row ">
          {
            projects.map(project =>
              <div class="col-md-6 col-lg-4 mb-5" key={project.id}>
                <Project
                  id={project.id}
                  projectName={project.name}
                  description={project.description}
                  image={project.image}
                  repository_url={project.repository_url}
                  website_url={project.website_url}
                />

              </div>
            )
          }

        </div>
      </div>
    </section>
  );
}

export default Portfolio;
