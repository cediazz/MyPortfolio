import StarIcon from "../Icons/StarIcon"

function Modal({ id, projectName, description, website_url, repository_url, image }) {

  return (
    <div class="portfolio-modal modal" id={`modal${id}`} tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
          <div class="modal-body text-center pb-5">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{projectName}</h2>
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><StarIcon /></div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <img class="img-fluid rounded mb-5" src={image} alt="..." />
                  <textarea
                    class="mb-4"
                    rows={5}
                    readOnly
                    style={
                      {
                        width: '100%',
                        border: 'none',
                        resize: 'none',
                        background: 'transparent',
                        boxShadow: 'none',
                        userSelect: 'none'
                      }
                    }
                  >
                    {description}
                  </textarea>
                  <a href={website_url} class="btn btn-primary me-1" >
                    Website
                  </a>
                  <a href={repository_url} class="btn btn-primary me-1" >
                    Repository
                  </a>
                  <button class="btn btn-primary me-1" data-bs-dismiss="modal">
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Modal