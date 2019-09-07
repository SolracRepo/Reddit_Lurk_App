import React, { Component } from "react";
import axios from "axios";
import ListImages from "./components/ListImages";
import ListVideos from "./components/ListVideos";
import ListOtherVids from "./components/ListOtherVids";
import HostedVideos from "./components/HostedVideos";

class App extends Component {
  state = {
    data: [],
    subreddit: "",
    after: "",
    before: "",
    url: "https://www.reddit.com/r/",
    jsonStr: ".json?limit=30",
    afterStr: "&after=",
    beforeStr: "&before="
  };

  handleChange = async e => {
    await this.setState({
      subreddit: e.target.value
    });

    const link = this.state.subreddit;
    const url = "https://www.reddit.com/r/";

    axios.get(url + link + this.state.jsonStr).then(response => {
      this.setState({
        data: response.data.data.children,
        after: response.data.data.after
      });
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const link = this.state.subreddit;
    const url = "https://www.reddit.com/r/";
    console.log(url + link + ".json?limit=10");
  };

  handleNext = () => {
    axios
      .get(
        this.state.url +
          this.state.subreddit +
          this.state.jsonStr +
          this.state.afterStr +
          this.state.after
      )
      .then(response => {
        this.setState({
          data: response.data.data.children,
          after: response.data.data.after
        });
      });
  };
  componentWillMount() {}
  componentDidMount() {
    // axios
    //  .get(
    //    "https://www.reddit.com/r/foodporn.json?&limit=10"
    //  )
    // .then(response => {
    //   console.log(response.data.data.after)
    //    this.setState({data: response.data.data.children})
    //  });
  }

  render() {
    const images = this.state.data.filter(vals => {
      return vals.data.post_hint === "image";
    });
    const links = this.state.data.filter(vals => {
      return vals.data.post_hint === "link";
    });
    const hosted = this.state.data.filter(vals => {
      return vals.data.post_hint === "hosted:video";
    });

    return (
      <div>
        <div className="row">
          <form
            className="col s12 m6 push-m3"
            onSubmit={this.handleSubmit}
            autocomplete="off"
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="reddit"
                  type="text"
                  className="validate white red-text"
                  onChange={this.handleChange}
                />
                <label for="reddit">Enter SubReddit:</label>
                <button
                  className="btn waves-effect waves-light col s12"
                  onClick={this.handleNext}
                >
                  Next Set
                </button>
              </div>
            </div>
          </form>
        </div>
          <ListImages images={images} />
          <ListVideos video={this.state.data} />
          <ListOtherVids otherVideos={links} />
          <HostedVideos hostVideos={hosted} />
      </div>
    );
  }
}

export default App;

/*
  "link fallback url done"
  "rich:video done"
  "hosted:video"
*/
