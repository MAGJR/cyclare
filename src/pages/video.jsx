import React from "react";

class Vturb extends React.Component {
  static script;
  static mount = () => {
    this.script = document.createElement("script");
    this.script.src = `
    https://scripts.converteai.net/9c1356bc-b9b5-40dd-8e6e-e356cb7978c3/players/6453f344b0ab0b000926401f/player.js
    `;
    this.script.async = true;
    this.script.type = "text/javascript";
    this.script.id = "smartplayer-script-head";
    setTimeout(() => {
      document.head.appendChild(this.script);
    }, 1);
  };

  static verifyScriptIsLoaded = () => {
    return document.getElementById("smartplayer-script-head");
  };

  static unmount = () => {
    if (this.script && this.verifyScriptIsLoaded())
      document.head.removeChild(this.script);
  };

  static videoDelay = (onShow) => {
    /* ALTERE O VALOR 10 PARA OS SEGUNDOS EM QUE AS SEÇÕES VÃO APARECER */
    var SECONDS_TO_DISPLAY = 1480;

    /* DAQUI PARA BAIXO NAO PRECISA ALTERAR */
    var attempts = 0;
    var elsDisplayed = false;
    var alreadyDisplayedKey = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`;
    var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);
    var showHiddenElements = function () {
      if (onShow) onShow(true);
      elsDisplayed = true;
      localStorage.setItem(alreadyDisplayedKey, true);
    };
    var startWatchVideoProgress = function () {
      if (
        typeof window.smartplayer === "undefined" ||
        !(window.smartplayer.instances && window.smartplayer.instances.length)
      ) {
        if (attempts >= 10) return;
        attempts += 1;
        return setTimeout(function () {
          startWatchVideoProgress();
        }, 1000);
      }
      window.smartplayer.instances[0].on("timeupdate", () => {
        if (
          elsDisplayed ||
          window.smartplayer.instances[0].smartAutoPlay
        )
          return;
        if (window.smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY)
          return;
        showHiddenElements();
      });
    };
    if (alreadyElsDisplayed === "true") {
      setTimeout(function () {
        showHiddenElements();
      }, 100);
    } else {
      startWatchVideoProgress();
    }
  };

  componentDidMount() {
    Vturb.mount();
    Vturb.videoDelay(() => {});
  }

  componentWillUnmount() {
    Vturb.unmount();
  }

  render() {
    return null;
  }
}

export default Vturb;