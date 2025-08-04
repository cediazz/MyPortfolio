import StarIcon from "../Icons/StarIcon"

function Header({ user }) {

    return (

        <header className="masthead my-header-background text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* Imagen del usuario con mejor estilo */}
                <div className="avatar-container mb-4">
                    <img
                        className="masthead-avatar rounded-circle border border-4 border-white shadow-lg"
                        src={user[0].user_profile.image}
                        alt={`${user[0].first_name} ${user[0].last_name}`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                        }}
                    />
                </div>

                <h1 className="masthead-heading text-uppercase mb-2">Hi! I'm {user[0].first_name} {user[0].last_name}</h1>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <StarIcon />
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                <p className="masthead-subheading font-weight-light mb-0 text-uppercase">
                    {user[0].user_profile.profession}
                </p>
            </div>
        </header>

    );
}

export default Header