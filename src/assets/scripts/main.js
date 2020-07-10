// var url1 = 'https://static01.nyt.com/images/2019/10/29/world/29climber1/29climber1-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
// var url2 = 'https://occ-0-1818-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABceL_FxRrEg1Jm2LyiYugCJwBkJ2v4GmCBWQ_JNLBXCu1tpO1CMoOxGk9R74PCzrCR0FLIrjdgZlyIHnZEuiHArY6C9G.jpg?r=a82'


// function loadImage(url) {
//   return new Promise(function(resolve, reject){
//     var image = new Image(200);

//     document.body.appendChild(image);
//     image.src = url;
//     image.addEventListener('load',function(){
//       resolve();
//     });
//     image.addEventListener('error', function(){
//       reject();
//     });
//   });
// }

// loadImage(url1)
//   .then(() => loadImage(url2))
//   .then(() => console.log('downloaded'))
//   .catch(() => console.log('didnt download'));

// Promise.all(
//   [
//     loadImage(url1),
//     loadImage(url2)
//   ]
// ).then(() => console.log('all download'));

var button = document.querySelector('#send');
var result = document.querySelector('#result');

// button.addEventListener('click', function() {
//   var xhr = new XMLHttpRequest();

//   xhr.open('GET', 'text.txt');
//   xhr.send();
//   xhr.addEventListener('load', function(){
//     if (xhr.status >= 400) {
//       result.innerHTML = 'ошибка';
//     } else {
//       result.innerHTML = xhr.response;
//     }
//   })

// });


function loadFile(url) {
  return new Promise(function() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', function() {
      if (xhr.status >= 400) {
        reject();
      } else {
        resolve()
      }
    });
    xhr.addEventListener('error', function(){
      reject();
    });
  });
}

button.addEventListener('click',function() {
  loadFile('text.txt');
}


