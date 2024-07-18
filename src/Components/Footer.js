const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-white text-black dark:bg-base-200 dark:text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav       >
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
   <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-neutral-600">
                Enter your email address
              </span>
            </label>
            <div className="join  w-36 md:w-auto">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item w-36 bg-white text-slate-400 dark:bg-base-300 "
              />
              <button className="btn bg-pink-500 text-white join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </>
  );
};

export default Footer;
