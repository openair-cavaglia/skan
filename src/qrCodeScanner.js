const qr = window.qrcode;

const video = document.createElement("video");
const canvasElement = document.getElementById("qr-canvas");
const canvas = canvasElement.getContext("2d");
const outputData = document.getElementById("outputData");
const btnScanQR = document.getElementById("btn-scan-qr");

let scanning = false;
let detection = false;
let qr_url  = "";

qr.callback = (res) => {
    if (res) {
      outputData.innerText = res;
      scanning = false;
  
      video.srcObject.getTracks().forEach(track => {
        track.stop();
      });
  
      qr.hidden = false;
      btnScanQR.hidden = false;
      canvasElement.hidden = true;
    }
  };

  btnScanQR.onclick = () => {
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
      scanning = true;
      outputData.hidden = false;
      btnScanQR.hidden = true;
      canvasElement.hidden = false;
      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.srcObject = stream;
      video.play();
      tick();
      scan();
    });
};

function tick() {
    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
  
    scanning && requestAnimationFrame(tick);
  }

  function scan() {
    try {
      qr.decode();
      detection = true; //flag. not used
      regenerate();
      scanning = false; // flag. used
    } catch (e) {
      setTimeout(scan, 300);
    }
  }

function regenerate() {
  try {
        qr_url = outputData.innerHTML.replace(/&amp;/g,"%26");
        qr_url = "https://api.qrserver.com/v1/create-qr-code/?data=".concat(qr_url, "&ecc=L&format=svg&size=100x100")
        var oHideFrame = document.getElementById("2print")
        oHideFrame.src = qr_url
        outputData.innerHTML = qr_url
        console.log(qr_url)
        window.addEventListener("load", print());
    } catch (e) {
      console.log("error in regenerate()")
    }
};