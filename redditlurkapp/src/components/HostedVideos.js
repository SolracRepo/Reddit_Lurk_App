import React from "react";

const HostedVideos = ({ hostVideos }) => {
  return hostVideos.map(vals => {
    return (
      <div className="img-container">
        <video src={vals.data.media.reddit_video.fallback_url} controls></video>
      </div>
    );
  });
};

export default HostedVideos;
