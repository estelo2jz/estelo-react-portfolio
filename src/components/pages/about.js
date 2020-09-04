import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/headshot2.jpg";

export default function() {
    return (
      <div className="wrapper">
        <div className="content-page-wrapper">
          <div className="about-grid-container">
            <div className="about-summary-container">
              <div className="about-helper">
                {/* <div className="about-image">
                  <img src={profilePicture} />
                </div> */}
                <div className="about-summary-info">
                  <p><strong>Estelo Abellanosa Front-End Web Developer</strong></p>
                
                  <p>
                    Innovative Front-End Web Developer with 2 years of experience in building and implementing websites.
                    Proficient in HTML/SASS, JavaScript, NodeJS,  ReactJS, MySQL, JSON, ExpressJS, MongoDB, Firebase.
                  </p>
                  <p>
                    I learned the fundamentals of coding from Bottega tech an online cooding bootcamp. Where i learn how to be a Full Stack Developer.
                    Now I am still kearning differents types of languages and libraries to improve my current Development skills.
                    I was able to build differents types of website, using what I have learn in the bootcamp.
                  </p>
                </div>
              </div>
            </div>


            <div className="about-project-container">
              <div className="about-business-container">
                <p>
                  If you have a business and you are looking for a webpage.
                  Don't hesitate to contact me,
                  I can design, build, and manage your page.
                </p>
              </div>
              <div className="about-project-helper">
                <ul>
                  <div>
                    <p><strong>My Projects</strong></p>
                  </div>
                  <il>
                    <a href="https://svelte-razors-store.netlify.app/">
                      Razor
                    </a>
                  </il>
                  <il>
                    <a href="https://gummy-stickers.netlify.app/">
                      Code Sticker Shop
                    </a>
                  </il>
                  <il>
                    <a href="https://lawnpro.netlify.app/">
                      Grass pro
                    </a>
                  </il>
                  <il>
                    <a href="https://barberclone.netlify.app/">
                      Barber Clone
                    </a>
                  </il>
                  <il>
                    <a href="https://fakegucci.netlify.app/">
                      Fake Gucci Store
                    </a>
                  </il>
                  <il>
                    <a href="https://icydiamond.netlify.app/">
                      Ice Diamond Store
                    </a>
                  </il>
                  <il>
                    <a href="https://chinesefood.netlify.app/">
                      Chinese Food
                    </a>
                  </il>
                  <il>
                    <a href="https://companycultures.netlify.app/">
                      Top Company Cultures
                    </a>
                  </il>
                  <il>
                    <a href="https://ministore.netlify.app/">
                      Mini Online Store
                    </a>
                  </il>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}