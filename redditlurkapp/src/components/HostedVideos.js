import React from "react";

const HostedVideos = ({ hostVideos }) => {
  return hostVideos.map(vals => {
    return (
        <video src={vals.data.media.reddit_video.fallback_url} controls></video>
    );
  });
};

export default HostedVideos;
