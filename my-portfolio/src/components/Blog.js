export default function Blog(){
    return (
        <section className="blog">
          <div className="container">
            <div className="page-section">
              <h2 className="page-section__title">BLOG POST</h2>
              <img className="page-section__title-style" src="assets/images/title-style.png" alt="" />
              <p className="page-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div className="row gutters-40">
                <div className="col-md-4">
                  <div className="thumbnail text-center">
                    <img className="img-responsive" src="assets/images/blog-1.png" alt="" />
                    <p className="blog__single__date">MAY 25 , 2017 </p>
                    <i className="material-icons">comment</i> 5
                    <a href="#"><h4 className="blog__single__title">HEADLINE LATEST WORLD NEWS</h4></a>
                    <p className="blog__single__paragraph">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore  Ut enim ad minim veniam <a href="#"><span className="blog__single__paragraph--read-more">READ MORE...</span></a></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="thumbnail text-center">
                    <img src="assets/images/blog-2.png" alt="" />
                    <p className="blog__single__date">MAY 25 , 2017 </p>
                    <i className="material-icons">comment</i> 5
                    <a href="#"><h4 className="blog__single__title">HEADLINE LATEST WORLD NEWS</h4></a>
                    <p className="blog__single__paragraph">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore  Ut enim ad minim veniam <a href="#"><span className="blog__single__paragraph--read-more">READ MORE...</span></a></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="thumbnail text-center">
                    <img src="assets/images/blog-3.png" alt="" />
                    <p className="blog__single__date">MAY 25 , 2017 </p>
                    <i className="material-icons">comment</i> 5
                    <a href="#"><h4 className="blog__single__title">HEADLINE LATEST WORLD NEWS</h4></a>
                    <p className="blog__single__paragraph">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore  Ut enim ad minim veniam <a href="#"><span className="blog__single__paragraph--read-more">READ MORE...</span></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}