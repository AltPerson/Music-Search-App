import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./AlbumItem.css";

function AlbumItem({ src, title, artist, date, tracks }) {
  return (
    <div className="album-wrapper album">
      <div className="album-container">
        <div className="album-content">
          <div className="album-content__left left">
            <img src={src} alt="album__img" className="left_img" />
          </div>
          <div className="album-content__right right">
            <h3 className="right__title">{title}</h3>
            <h3 className="right__subtitle">{artist}</h3>
            <h4 className="right__subbtitle">{date}</h4>
            <div className="right__tracks">
              {tracks.map((item) => (
                <div id={item.id} className="track-wrapper track">
                  {tracks.length > 1 ? (
                    <h4 className="track__title">{item.title}</h4>
                  ) : (
                    ""
                  )}
                  <ReactAudioPlayer
                    src={item.preview}
                    autoPlay={false}
                    controls
                    className="track__song"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumItem;
