export default function Service() {
    return (
        <section className="service">
            <div className="container">
                <div className="page-section">
                    <h2 className="page-section__title">MY SERVICES</h2>
                    <img className="page-section__title-style" src="assets/images/title-style.png" alt="" />
                    <p className="page-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="row gutters-70">
                        <div className="col-md-4">
                            <div className="thumbnail text-center">
                                <img src="assets/images/logo-design.png" alt="" />
                                <h4 className="service__single-section__title">LOGO DESIGN</h4>
                                <p className="service__single-section__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail text-center">
                                <img src="assets/images/website-design.png" alt="" />
                                <h4 className="service__single-section__title">WEBSITE DESIGN</h4>
                                <p className="service__single-section__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail text-center">
                                <img src="assets/images/support.png" alt="" />
                                <h4 className="service__single-section__title">SUPPORT</h4>
                                <p className="service__single-section__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}