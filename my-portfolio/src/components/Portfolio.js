export default function Portfolio() {
    return (
        <section className="portfolio">
            <div className="container">
                <div className="page-section">
                    <h2 className="page-section__title">MY PORTFOLIO</h2>
                    <img className="page-section__title-style" src="assets/images/title-style.png" alt="" />
                    <p className="page-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="portfolio__button-group">
                        <a className="button button--default" data-filter="all" href="#">ALL</a>
                        <a className="button button--default" data-filter=".category-a" href="#">DEVELOPMENT</a>
                        <a className="button button--default" data-filter=".category-b" href="#">DESIGN</a>
                        <a className="button button--default" data-filter=".category-c" href="#">HTML</a>
                        <a className="button button--default" data-filter=".category-d" href="#">JAVA</a>
                    </div>
                    <div className="row gutters-40">
                        <div className="col-md-4">
                            <div className="portfolio__single-section mix category-a category-b category-c" data-order="1">
                                <img className="portfolio__single-section__image img-responsive" src="assets/images/portfolio-1.png" alt="" />
                                <div className="portfolio__single-section__overlay">
                                    <div className="overlay-content">
                                        <h4>LOGO DESIGN</h4>
                                        <p>Designer</p>
                                    </div>
                                    <div className="portfolio__single-section__search-icon">
                                        <a href="#"><img src="assets/images/search-icon.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="portfolio__single-section mix category-a category-c" data-order="2">
                                <img className="portfolio__single-section__image img-responsive" src="assets/images/portfolio-2.png" alt="" />
                                <div className="portfolio__single-section__overlay">
                                    <div className="overlay-content">
                                        <h4>WEBSITE DESIGN</h4>
                                        <p>Designer</p>
                                    </div>
                                    <div className="portfolio__single-section__search-icon">
                                        <a href="#"><img src="assets/images/search-icon.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="portfolio__single-section mix category-c" data-order="3">
                                <img className="portfolio__single-section__image img-responsive" src="assets/images/portfolio-3.png" alt="" />
                                <div className="portfolio__single-section__overlay">
                                    <div className="overlay-content">
                                        <h4>LOGO DESIGN</h4>
                                        <p>Designer</p>
                                    </div>
                                    <div className="portfolio__single-section__search-icon">
                                        <a href="#"><img src="assets/images/search-icon.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gutters-40">
                        <div className="col-md-4">
                            <div className="portfolio__single-section mix category-b category-d" data-order="4">
                                <img className="portfolio__single-section__image img-responsive" src="assets/images/portfolio-4.png" alt="" />
                                <div className="portfolio__single-section__overlay">
                                    <div className="overlay-content">
                                        <h4>PHOTOGRAPHY</h4>
                                        <p>photographer</p>
                                    </div>
                                    <div className="portfolio__single-section__search-icon">
                                        <a href="#"><img src="assets/images/search-icon.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="portfolio__single-section mix category-b category-d" data-order="5">
                                <img className="portfolio__single-section__image img-responsive" src="assets/images/portfolio-5.png" alt="" />
                                <div className="portfolio__single-section__overlay">
                                    <div className="overlay-content">
                                        <h4>WEBSITE DESIGN</h4>
                                        <p>Designer</p>
                                    </div>
                                    <div className="portfolio__single-section__search-icon">
                                        <a href="#"><img src="assets/images/search-icon.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="portfolio__single-section mix category-d" data-order="6">
                                <img className="portfolio__single-section__image img-responsive" src="assets/images/portfolio-6.png" alt="" />
                                <div className="portfolio__single-section__overlay">
                                    <div className="overlay-content">
                                        <h4>LOGO DESIGN</h4>
                                        <p>Designer</p>
                                    </div>
                                    <div className="portfolio__single-section__search-icon">
                                        <a href="#"><img src="assets/images/search-icon.png" alt="" /></a>
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