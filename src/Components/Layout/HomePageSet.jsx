import React from "react";
import TrendingProjects from "../Layout/TrendingProjects/TrendingProjects";
import Partners from "./Partners/Partners";
import SchoolSearchBox from "../Account/SchoolSearchBox";
import "./HomePageSet.css";
import "./Common.css";
import "./About.css";
import NavBar from "./NavBar";
import MainPageHowJoin from "./MainPageHowJoin";
import ScrollImg from "../../Components/Layout/img/scroll.gif";
import RecentlyRegistered from "./RecentlyRegistered";
import { Helmet } from "react-helmet";

const HomePageSet = props => {
  // render top of the page.
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>donscoil</title>
        <meta
          name="description"
          content="Donscoil - Find. Create. Support. An innovative online community of schools, parents and supporting companies in Ireland."
        />
      </Helmet>
      <div className="ge-background">
        <div className="container-fluid">
          <NavBar user={props.user} />
        </div>
        <div className="container home-page-set ">
          <div className="searchbox">
            <SchoolSearchBox props={props} />
          </div>
        </div>
        <div className="scrollImage text-right">
          <img src={ScrollImg} alt="donscoil" />
        </div>
      </div>

      <div className="container-fluid geSet home-trending-project u-paddingBottom60">
        <div className="trendingprojects">
          <TrendingProjects />
        </div>
      </div>

      <div>
        <MainPageHowJoin />
      </div>
      <div className="">
        <RecentlyRegistered />
      </div>

      <div className="container-fluid geSet">
        <div className="partners">
          <Partners />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePageSet;
