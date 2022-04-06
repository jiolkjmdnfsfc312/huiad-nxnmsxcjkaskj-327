var qsRegex;

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer'
  },
  filter: function() {
    return qsRegex ? $(this).text().match(qsRegex) : true;
  }
});

var $quicksearch = $('.quicksearch').keyup(debounce(function() {
  qsRegex = new RegExp($quicksearch.val(), 'gi');
  $grid.isotope();
}, 200));

function debounce(fn, threshold) {
  var timeout;
  return function debounced() {
    if (timeout) {
      clearTimeout(timeout);
    }

    function delayed() {
      fn();
      timeout = null;
    }
    timeout = setTimeout(delayed, threshold || 100);
  }
}

$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});