
import StarIcon from "../Icons/StarIcon"

function AboutSection({user}) {

    return (
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                       <StarIcon />
                    </div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ms-auto">
                    <textarea
                            class="mb-4 lead text-white"
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
                           {user[0].user_profile.about_me} 
                        </textarea>
                    </div>
                    <div class="col-lg-4 me-auto">
                        <textarea
                            class="mb-4 lead text-white"
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
                            {user[0].user_profile.skills}
                        </textarea>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light"  href={`${process.env.REACT_APP_BACKEND_HOST}/cvs/download-cv/`}>
                        <i class="fas fa-download me-2"></i>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}
export default AboutSection