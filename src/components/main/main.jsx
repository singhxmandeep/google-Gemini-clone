import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (prompt) => {
    setInput(prompt);
    onSent(prompt);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Mandeep,</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick("Help me find YouTube videos to learn and practice coding in efficient ways")}>
                <p>Help me find YouTube videos to learn and practice coding in efficient ways...</p>
                <img src={assets.youtube_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("Create Vibrant & playful image with lots of details")}>
                <p>Create Vibrant & playful image with lots of details</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick("Write code for a specific task, including edge cases")}>
                <p>Write code for a specific task, including edge cases</p>
                <img src={assets.code_icon} alt="" />
              </div>
              <div className="card last-card" onClick={() => handleCardClick("Give me tips for how to grow my YouTube channel")}>
                <p>Give me tips for how to grow my YouTube channel</p>
                <img src={assets.compass_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
