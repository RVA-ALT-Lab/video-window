var video = document.querySelector("#videoElement");
var constraints = {video: {width: 640, height: 360, facingMode: "user"}};

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .then(() => log(video.videoWidth +"x"+ video.videoHeight))
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

const embedHolder = document.getElementById('new-embed')
console.log(embedHolder)
const presentation = document.getElementById('presentation')
console.log(presentation)

const source = document.getElementById('source');
const result = document.getElementById('result');

const inputHandler = function(e) {
  presentation.innerHTML = e.target.value;
}

embedHolder.addEventListener('input', inputHandler);
embedHolder.addEventListener('propertychange', inputHandler); // for IE8


//button hider
const hideButton = document.getElementById('hide')

hideButton.addEventListener('click', hider);

function hider(){
  const hideArea = document.getElementById('paste-area')
  hideArea.classList.toggle('hidden');
}

//size changers

const fullVideo = document.getElementById('full-video')
fullVideo.addEventListener('click', makeFullVideo);

function makeFullVideo(){
  const videoFrame = document.getElementById('video-frame');
  videoFrame.classList = 'col-md-12';
  const presentationFrame = document.getElementById('presentation-frame');
  presentationFrame.classList = 'hidden';
}


const fullPresentation = document.getElementById('full-presentation')
fullPresentation.addEventListener('click', makeFullPresentation);

function makeFullPresentation(){
  const presentationFrame = document.getElementById('presentation-frame');
  presentationFrame.classList = 'col-md-12';
   const videoFrame = document.getElementById('video-frame');
  videoFrame.classList = 'hidden';
}


const even = document.getElementById('even')
even.addEventListener('click', makeEven);

function makeEven(){
  const presentationFrame = document.getElementById('presentation-frame');
  presentationFrame.classList = 'col-md-7';
  const videoFrame = document.getElementById('video-frame');
  videoFrame.classList = 'col-md-5';
}


