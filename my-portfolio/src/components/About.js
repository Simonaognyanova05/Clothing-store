export default function About() {
    return (
        <section className="about">
            <div className="container about__container--narrow">
                <div className="page-section">
                    <h2 className="page-section__title">ABOUT ME</h2>
                    <img className="page-section__title-style" src="assets/images/title-style.png" alt="" />
                    <p className="page-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="row gutters-80">
                        <div className="col-md-4">
                            <div className="about__image">
                                <img src="assets/images/about-me-image.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 about__content">
                            <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                            <div className="row row--margin-top">
                                <div className="col-md-4">
                                    <p className="about__bio"><strong>NAME :</strong> Jonny D. Dorsch</p>
                                    <p className="about__bio"><strong>AGE :</strong> 21</p>
                                </div>
                                <div className="col-md-4">
                                    <p className="about__bio"><strong>JOB TITLE :</strong> UI&#47;UX Designer</p>
                                    <p className="about__bio"><strong>LOCATION :</strong> California,USA</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <a className="button button--colorful button--margin" href="#">DOWNLOAD CV</a>
                                </div>
                                <div className="col-md-4">
                                    <a className="button button--colorful button--margin" href="#">HIRE ME</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}