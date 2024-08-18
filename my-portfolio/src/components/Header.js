import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header header--bg">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="/myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">SIMONA</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/skill">SKILL</Link></li>
                            <li><Link to="/portfolio">PORTFOLIO</Link></li>
                            <li><Link to="/blog">BLOG</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="header__content text-center">
                    <span className="header__content__block">HELLO</span>
                    <h1 className="header__content__title">I'M SIMONA OGNYANOVA</h1>
                    <ul className="header__content__sub-title">
                        <li>WEB DEVELOPER <span className="padding"></span></li>
                    </ul>
                    <Link className="header__button" to="/">HAVE PROJECT? LET'S TALK</Link>
                </div>
                <div className="social-icon pull-right">
                    <ul>
                        <li><Link to="/"><i className="flaticon-facebook-letter-logo"></i></Link></li>
                        <li><Link to="/"><i className="flaticon-twitter-logo"></i></Link></li>
                        <li><Link to="/"><i className="flaticon-behance-logo"></i></Link></li>
                        <li><Link to="/"><i className="flaticon-dribbble-logo"></i></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}