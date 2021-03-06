import React from "react";
import getProject from '../../../api/Project';
import config from '../../../config/config';
import "./Projects.css";
export class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Projects: []
    };
  }

  componentDidMount() {
    getProject().then(res => {
      this.setState({ Projects: res.data });
    });
  }

  render() {
    let main = this.state.Projects.map((ele, index) => {
      return (
        <div
          className="col-md-3 text-center col-padding animate-box"
          key={index}
        >
          <div
            onClick={() => window.open(ele.liveURL ? ele.liveURL : ele.gitHubURL, "_blank")}
            className="work"
            style={{
              backgroundImage: `url(${config.picSumBaseURL +
                Math.floor(Math.random() * (200 - 100)) +
                "/400/"})`,
              marginBottom: "10px",
              cursor: "pointer"
            }}
          >
            <div className="desc">
              <h3>{ele.name}</h3>
              <span>{ele.tagLine}</span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div id="fh5co-work" className="fh5co-bg-dark">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 style={{ fontSize: "xx-large", marginBottom: "6%" }}>
                  Projects
                </h2>
              </div>
            </div>
            <div className="row">{main}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
