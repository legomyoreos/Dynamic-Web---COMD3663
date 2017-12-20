function changePic(id, caption) {

  var targetPic = document.getElementById(id),
      targetThumb = event.target,
      prevPic = document.querySelector('#gallery img.active'),
      prevThumb = document.querySelector('#thumbnails img.active'),
      captionArea = document.getElementById('caption');

  prevPic.className = ''; // remove active class from previous picture
  targetPic.className = 'active'; // add active class back onto the target pic
  prevThumb.className = ''; // remove active class from previous thumbnail
  targetThumb.className = 'active'; // add active class back onto the target pic

  if (caption) { // Check if there is a caption argument, if yes print caption text
    captionArea.innerHTML = caption;
  } else { // if no, then remove any caption text.
    captionArea.innerHTML = '';
  }

  // if (targetPic === document.getElementById("2")) {
  //   captionArea.style.color = "#ffffff";
  // } else {
  //   captionArea.style.color = "#ffc826";
  // }
}