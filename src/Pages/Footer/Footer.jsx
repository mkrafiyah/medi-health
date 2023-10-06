

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content mt-12">
                <nav>
                    <header className="footer-title">GENERAL</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Career</a>
                    <a className="link link-hover">News</a>
                </nav>
                <nav>
                    <header className="footer-title">RESOURCES</header>
                    <a className="link link-hover">Hospitals</a>
                    <a className="link link-hover">Doctors</a>
                    <a className="link link-hover">International Patients</a>
                    <a className="link link-hover">Investor Relations</a>
                </nav>
                <nav>
                    <header className="footer-title">SOCIAL</header>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Linkedin</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Youtube</a>
                </nav>
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Enter Your Email..." className="input input-bordered w-full pr-16" />
                            <button className="btn bg-red-800 text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;