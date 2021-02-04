import React from "react";

//components
import { Banner } from "../../components/Banner";
export class HomePageContainer extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="home">
        <Banner />
      </div>
    );
  }
}
