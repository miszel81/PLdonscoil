import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import SponsorImage from "../Layout/img/sponsor.png";
import SchoolImage from "../Layout/img/school.png";
import NavBar from "./NavBar";
import "./ForschoolSet.css";

const About = props => {
  const { user } = props;
  return (
    // <React.Fragment>
    <div>
      <div className="container-fluid about-background-image2">
        <NavBar user={user} />
      </div>

      <section className="u-relative mb-5">
        <div className="u-absolute u-right0 u-width50pct u-height600 about-background-image"></div>
        <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
          <div className="h-text-font h-text-backround u-padding60 u-paddingBottom100 u-foreground u-width60pct u-borderBox u-marginTop8">
            <h1 className="h-text-fontMain">
              A place to make your projects come true
            </h1>
            <p className="h-text-font">
              The internet should connect people and ideas. That’s why we’ve
              created a platform where schools and philanthropist can come
              together. A place where public interest can profit from corporate
              social responsibility of our business leaders.
            </p>
          </div>
        </div>
      </section>
      <section className="u-relative">
        <div className="u-absolute u-left0 u-width50pct u-height450 about-background-image-profit"></div>
        <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
          <div className="h-text-font h-text-backround u-rightn40 u-padding60 u-paddingBottom100 u-foreground u-width60pct u-borderBox u-marginTop8">
            <h1 className="h-text-fontMain">Why should You involve</h1>
            <p className="h-text-font">
              We are aware that your school or enterprise needs to concentrate
              on its' core activities. That's why donscoil offers a platform to
              create, manage and promote all the fundraising and donations
              activities. We will help you with reaching the right audience and
              make your projects successful. It’s simple to use and takes no
              time.
            </p>
          </div>
        </div>
      </section>
      <section className="u-relative">
        <div className="u-absolute u-right0 u-width50pct u-height400 about-background-image-schools"></div>
        <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
          <div className="h-text-font h-text-backround u-padding60 u-paddingBottom100 u-foreground u-width60pct u-borderBox u-marginTop8">
            <h1 className="h-text-fontMain">
              Elevating eductaional experience
            </h1>
            <p className="h-text-font">
              We know how hard it is to keep students' focus. Modern school
              needs up to date equipment, materials and activities. It doesn’t
              matter whether you need computer lab, educational materials or
              just want to organise a trip to science musem. Donscoil will let
              you promote your project and facilitate the process of
              fundraising.
            </p>
          </div>
        </div>
      </section>
      <section className="u-relative">
        <div className="u-absolute u-left0 u-width44pct u-height350 about-background-image-csr"></div>
        <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
          <div className="h-text-font h-text-backround u-rightn40 u-padding60 u-paddingBottom100 u-foreground u-width60pct u-borderBox u-marginTop8">
            <h1 className="h-text-fontMain">Support long-term thinking</h1>
            <p className="h-text-font">
              Promote and drive the growth of your company by supporting the
              development of our children. Boost your customers and employees
              engagement by showing your social accountability. Invest in
              publicity instead of advertising.
            </p>
          </div>
        </div>
      </section>
      <section className="u-relative">
        <div className="u-maxWIdth1000 u-marginAuto u-paddingTop60 u-paddingBottom60 u-relative">
          <div className="h-text-font h-text-backround u-paddingTop100 u-paddingBottom100">
            <h1 className="h-text-fontMain u-textAlignCenter">
              Ready to join us?{" "}
            </h1>
            <div className="u-flex u-flexWrap u-maxWidth1000 u-marginAuto u-relative">
              <div className="u-paddingRight15 u-paddingLeft15 u-paddingTop60 u-xs-paddingRight30">
                <div className="u-height165 u-flexEnd u-relative u-marginBottom15 u-xs-height140">
                  <img src={SchoolImage} className="u-flex0" alt="search" />
                </div>
                <div className="u-flexTop">
                  <div className="u-width260 u-xs-width175">
                    <Link to="/register/school" className="btn btn-primary">
                      Register school
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" u-absolute u-right0 u-paddingRight15 u-paddingLeft15 u-paddingTop60 u-xs-paddingRight30">
                <div className="u-height165 u-flexEnd u-relative u-marginBottom15 u-xs-height140">
                  <img src={SponsorImage} className="u-flex0" alt="create" />
                </div>
                <div className="u-flexTop">
                  <div className="u-width260 u-xs-width175">
                    <Link
                      to="/register/sponsor"
                      className="btn btn-primary btn-space"
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
    </div>
    // </React.Fragment>
  );
};

export default About;
