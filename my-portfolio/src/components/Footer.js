export default function Footer(){
    return (
        <footer className="footer footer--bg">
          <div className="container text-center">
            <h1 className="footer__title">OBELA</h1>
            <ul className="footer__contact-information">
              <li><a href="tel:5555555555"><i className="material-icons">phone</i> Hotline (+123) 45 67 89 21</a></li>
              <li><a href="mailto:sshariar458@gmail.com"><i className="material-icons">email</i> sshahriar458@gmail.com</a></li>
              <li><a href="#"><i className="material-icons">location_on</i> DartThemes address goes here.</a></li>
            </ul>
          </div>
          <hr style={{ border: '0', borderTop: '1px solid #525B60', display: 'block', marginTop: '40px' }} />
          <div className="container text-center">
            <div className="social-icon">
              <ul>
                <li><a href="#"><i className="flaticon-facebook-letter-logo"></i></a></li>
                <li><a href="#"><i className="flaticon-twitter-logo"></i></a></li>
                <li><a href="#"><i className="flaticon-behance-logo"></i></a></li>
                <li><a href="#"><i className="flaticon-dribbble-logo"></i></a></li>
              </ul>
            </div>
            <p className="footer__paragraph">Copyright &copy; 2017 DartThemes , All Rights Reserved.</p>
          </div>
        </footer>
    );
}