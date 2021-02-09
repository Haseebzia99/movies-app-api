import React from "react";

//components
import { Banner } from "../../components/Banner";
import { AddMovie } from "../../components/AddMovie";
export class HomePageContainer extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="home">
        <Banner />
        <AddMovie />
      </div>
    );
  }
}
