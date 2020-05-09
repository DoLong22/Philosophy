var masonryF = function(){
  var containerBricks = $(".masonry-wrap");
  containerBricks.imagesLoaded(function(){
    containerBricks.masonry({
      itemSelector: '.masonry-brick',
      resize: true
    })
  })
} 

$(document).ready(function () {
  masonryF(); 
});