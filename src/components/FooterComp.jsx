import { HeartFill, Facebook, Twitter, Linkedin } from 'react-bootstrap-icons';

function FooterComp() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-07">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <h2 className="footer-heading"><a href="#0" className="logo">Yum Yum Grocery</a></h2>
                            {/* <p className="menu">
                                <a href="#0">Home</a>
                                <a href="#0">About</a>
                                <a href="#0">Listing</a>
                                <a href="#0">Contact</a>
                            </p> */}
                            <ul className="ftco-footer-social p-0">
                                <li className="ftco-animate"><a href="#0"><Twitter /></a></li>
                                <li className="ftco-animate"><a href="#0"><Facebook /></a></li>
                                <li className="ftco-animate"><a href="#0"><Linkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12 text-center">
                            <p className="copyright">
                                Copyright &copy; {currentYear} All rights reserved | Made with  <HeartFill className='reactheart' color="white" size={20} /> by React
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FooterComp;