;(function() {
  var slider = tns({
    container: '.projects-slider',
    items: 1,
    gutter: 20,
    center: true,
    nav: false,
    autoplay: true,
    controls: false,
    edgePadding: 20,
    responsive: {
      1200: {
        items: 3
      }
    }
  });

}());
