import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import "./App.css";
import React, {useState} from "react";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);
  const [show, setShow] = useState(false);
  const newurl = window.location.href;
  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote} className="gen">
            Generate Another Quote
          </button>
          <button
            className="share"
            onClick={() => {
              setShow(!show);
            }}>
            +share
          </button>
        </div>
      </div>
      {show && (
        <div className="social-btns">
          <div className="item">
            <LinkedinShareButton
              url={newurl}
              title={"quote"}
              summary={quote.content}
              source={quote.author}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <div className="item">
            <FacebookShareButton
              url={newurl}
              quote={quote.content}
              hashtag="Quote">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div className="item">
            <TwitterShareButton
              url={newurl}
              quote={quote.content}
              hashtag="Quote">
              <XIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className="item">
            <WhatsappShareButton
              url={newurl}
              quote={quote.content}
              hashtag="Quote">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div className="item">
            <TelegramShareButton
              url={newurl}
              quote={quote.content}
              hashtag="Quote">
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
