import "./footer.css";



function Footer(){
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              MyRecipes is a community-driven platform where food lovers can
              find, share, and save recipes. Discover new dishes, connect with
              other food enthusiasts, and elevate your cooking journey.
            </p>
          </div>


         
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} MyRecipes. All rights reserved.
          </p>
        </div>
      </footer>
    );
}

export default Footer;