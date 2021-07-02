alert("You can take a picture and download it directly to your device! We don't save/store any of your data all of this is running on your local system!")
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const fxBtns = [...document.querySelectorAll('.fx input')];

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

getVideo();

function paintToCanvas() {
  const width = video.videoHeight;
  const height = video.videoWidth;
  [canvas.height, canvas.width] = [video.videoHeight, video.videoWidth];
  setInterval(() => {
    ctx.drawImage(video, 0, 0);
    let px = ctx.getImageData(0, 0, height, width);
    state = fxBtns.map(b => b.checked)
    if (state[0]) {
      chromaKey(px)
      document.querySelector('.rgb').classList.remove('hidden');
    } else if (state[1]) {
      px = redEffect(px);
      document.querySelector('.rgb').classList.add('hidden');
    }else if (state[2]) {
      px = rgbSplit(px);
      document.querySelector('.rgb').classList.add('hidden');
    }
    // ctx.globalAlpha = 0.5;
    ctx.putImageData(px, 0 , 0);
  }, 1);
}

function redEffect(px) {
  for (let i = 0; i < px.data.length; i = i += 4) {
    px.data[i+0] = px.data[i+0] + 100;  //red
    px.data[i+1] = px.data[i+0] - 100;  //green
    px.data[i+2] = px.data[i+0] * 0.5;  //blue
    // px[i+3] = px.data[i+0] + 100;  //alpha
  }
  return px;
}

function chromaKey(px) {
  const levels = {}

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  })

  for (let i = 0; i < px.data.length; i = i += 4) {
    red = px.data[i+0]
    green = px.data[i+1]
    blue = px.data[i+2]
    alpha = px.data[i+3]

    if(red >= levels.rmin 
      && green >= levels.gmin 
      && blue >= levels.bmin 
      && red <= levels.rmax 
      && green <= levels.gmax 
      && blue <= levels.bmax) {
      px.data[i + 3] = 0;
    } 
  }
  return px
}

function rgbSplit(px) {
  for (let i = 0; i < px.data.length; i = i += 4) {
    px.data[i - 250] = px.data[i + 0] //red
    px.data[i + 200] = px.data[i + 1] //green
    px.data[i - 250] = px.data[i + 2] //blue
  }
  return px;
}

function capture() {
  // playsound
  snap.currentTime = 0;
  snap.play();

  // get dat from canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'img-');
  link.innerHTML = `<img src="${data}" alt="picture">"`
  strip.insertBefore(link, strip.firstChild)
}

video.addEventListener('canplay', paintToCanvas);