export default function Slider() {
    return (
        <section className="slider slider--bg">
            <div id="myCarousel" className="carousel container slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <div className="carousel-content">
                            <div className="">
                                <div className="text-center">
                                    <img src="assets/images/me.png" alt="" />
                                    <h4>Michael T. Hill</h4>
                                    <h6>Designer</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="carousel-content">
                            <div className="">
                                <div className="text-center">
                                    <img className="carousel-person-image" src="assets/images/team-2.png" alt="" />
                                    <h4>Leonard D. Downing</h4>
                                    <h6>Photographer</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="carousel-content">
                            <div className="">
                                <div className="text-center">
                                    <img className="carousel-person-image" src="assets/images/team-3.png" alt="" />
                                    <h4>Paula R. Mullins</h4>
                                    <h6>Designer</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                                    <div className="rating">
                                        <ul>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                            <li><i className="material-icons">star</i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}