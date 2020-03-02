import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import NavBar from "./NavBar";
import "./ForschoolSet.css";
import { Helmet } from "react-helmet";

const About = props => {
  const { user } = props;
  return (
    // <React.Fragment>
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="container-fluid table-background full-page">
        <NavBar user={user} />

        <div className="jumbotron jumbotron-about">
          <h1 className="h-text-fontMainTitle text-center mt-5 mb-5">
            Find.Create.Support!
          </h1>

          <h3 className="text-center mb-3 mt-3">
            Inspiring school initiatives.
          </h3>
          <div className="about-container">
            <section className="u-relative mt-5 mb-5">
              <div className="container">
                <section className="u-relative">
                  <div className="u-absolute u-right0 u-width50pct u-height400 about-background-image"></div>
                  <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
                    <div className="h-text-font h-text-backround u-padding60 u-paddingBottom100 u-foreground u-width60pct u-borderBox u-marginTop8">
                      <h1 className="h-text-fontMain">
                        Make your ideas come true
                      </h1>
                      <p className="h-text-font">
                        The internet should connect people and ideas. That’s why
                        we’ve created a platform where schools and businesses
                        can come together.
                      </p>
                    </div>
                  </div>
                  <div className="mobile-pic about-background-image"></div>
                </section>
                <section className="u-relative">
                  <div className="u-absolute u-left0 u-width50pct u-height400 about-background-image-profit"></div>
                  <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
                    <div className="h-text-font h-text-backround u-rightn40 u-padding60 u-paddingBottom100 u-foreground u-width60pct u-borderBox u-marginTop8">
                      <h1 className="h-text-fontMain">
                        Why should you get involved?
                      </h1>
                      <p className="h-text-font">
                        We are aware that your school or enterprise needs to
                        concentrate on its' core activities. That's why donscoil
                        offers a platform to create, manage and promote all the
                        fundraising and donations activities. We will help you
                        with reaching the right audience and make your projects
                        successful. It’s simple to use and takes no time.
                      </p>
                    </div>
                  </div>
                </section>
                <div className="mobile-pic3 about-background-image-schools"></div>
                <section className="u-relative">
                  <div className="u-absolute u-right0 u-width50pct u-height400 about-background-image-schools"></div>
                  <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
                    <div className="h-text-font h-text-backround u-padding60 u-paddingBottom100 u-foreground u-width60pct u-borderBox u-marginTop8">
                      <h1 className="h-text-fontMain">
                        Improving educational experience
                      </h1>
                      <p className="h-text-font">
                        We know how hard it is to keep students focused. Modern
                        schools needs up to date equipment, materials and
                        activities. It doesn’t matter whether you need a
                        computer lab, educational materials or just want to
                        organise a trip to a science museum. Donscoil will let
                        you promote your project and facilitate the process of
                        fundraising.
                      </p>
                    </div>
                  </div>
                </section>
                <div className="mobile-pic2 about-background-image-profit"></div>
                <section className="u-relative about-images">
                  <div className="u-absolute u-left0 u-width44pct u-height400 about-background-image-csr"></div>
                  <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
                    <div className="h-text-font h-text-backround u-rightn40 u-padding60 u-paddingBottom100 u-foreground u-width60pct u-borderBox u-marginTop8">
                      <h1 className="h-text-fontMain">
                        Support long-term thinking
                      </h1>
                      <p className="h-text-font">
                        Promote and drive the growth of your company by
                        supporting the development of our children. Invest in
                        publicity instead of advertising.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="container">
                    <div>
                      <h1 className="h-text-fontMain u-textAlignCenter mt-5">
                        Join the largest network in Ireland{" "}
                      </h1>
                      <div className="about-call-to-action">
                        <div className="join-item text-center">
                          <div className="text-center">
                            {/* <img src={SchoolImage} alt="search" /> */}
                            <i className="fas fa-graduation-cap fa-5x"></i>
                          </div>
                          <div className="text-center">
                            <Link
                              to="/register/school"
                              className="btn btn-secondary mt-3"
                            >
                              Register school
                            </Link>
                          </div>
                        </div>
                        <div className="join-item text-center">
                          <div className="text-center">
                            {/* <img src={SponsorImage} alt="create" /> */}
                            <i className="fas fa-user-tie fa-5x"></i>
                          </div>
                          <div className="text-center">
                            <div>
                              <Link
                                to="/register/sponsor"
                                className="btn btn-secondary mt-3"
                              >
                                Register sponsor
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* end of container */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    // </React.Fragment>
  );
};

export default About;
