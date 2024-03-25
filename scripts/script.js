"use strict";
$(document).ready(function() {
  let header = $(".header");
  let headerBurger = $(".header__close-btn");
  let headerMenu = $(".header__nav-mobile");

  let currYearBlock = $(".curr-year");
  let currYear = new Date().getFullYear();
  currYearBlock.text(currYear);

// header burger
  let body = $("body");
  headerBurger.on("click", function() {
    headerBurger.toggleClass("active");
    headerMenu.toggleClass("active");
    body.toggleClass("lock");
  });
});


// tabs
$(document).ready(function() {
  // Initially hide all content blocks except for the one corresponding to the first tab
  $('.favorites__content').hide();
  $('#favorites__content-recepts').show();

  // Handle click events on tab buttons
  $('.favorite__tabs-btn').click(function() {
    var tabId = $(this).attr('id');
    $('.favorite__tabs-btn').removeClass('favorite__tabs-btn-full'); // Remove the class from all buttons
    $(this).addClass('favorite__tabs-btn-full'); // Add the class to the clicked button
    $('.favorites__content').hide();
    $('#favorites__content-' + tabId).show();
  });
});

// 
$(document).ready(function() {
  $(".recipes__inputs button").click(function(event) {
    // Remove 'recipe__input-selected' class from all buttons
    $(".recipes__inputs button").removeClass("recipe__input-selected");
    
    // Add 'recipe__input-selected' class to the clicked button
    $(this).addClass("recipe__input-selected");
    
    // Check if the clicked button has the desired ID
    if ($(this).attr("id") === "mainly-dishes") {
      // Check if .recipes__kind block doesn't already have the 'show' class
      if (!$(".recipes__kind").hasClass("recipes__kind-show")) {
        $(".recipes__kind").addClass("recipes__kind-show");
      }
    } else {
      // If any other button is clicked, remove 'recipes__kind-show' class only if mainly-dishes is not selected
      if (!$("#mainly-dishes").hasClass("recipe__input-selected")) {
        $(".recipes__kind").removeClass("recipes__kind-show");
      }
    }

    event.stopPropagation(); // Prevent event bubbling
  });
});


// 
$(document).ready(function() {
  $(".recipes__inputs button").click(function(event) {
    $(".recipes__inputs button").removeClass("recipe__input-selected");
    $(this).addClass("recipe__input-selected");
    if ($(this).attr("id") === "mainly-dishes") {
      if (!$(".recipes__kind").hasClass("recipes__kind-show")) {
        $(".recipes__kind").addClass("recipes__kind-show");
      }
    } else {
      if (!$("#mainly-dishes").hasClass("recipe__input-selected")) {
        $(".recipes__kind").removeClass("recipes__kind-show");
      }
    }
    event.stopPropagation(); // Prevent event bubbling
  });
});


// $(document).ready(function() {
//   $(".article__small").each(function(index) {
//     $(this).delay(100 * index).queue(function(next) {
//       $(this).addClass("animated");
//       next();
//     });
//   });
// });


// cards animation
// This function adds the "animated" class to each element with the class "article__small"
// in a sequential delay, to create an animated effect.
$(document).ready(function() {
  // The 'each' function is used to iterate over each element with the class "article__small"
  $(".article__small").each(function(index) {
    // The 'delay' function is used to delay the execution of the next function by 100ms * the index
    // of the current element, creating a sequential delay effect.
    $(this).delay(100 * index).queue(function(next) {
      // The 'addClass' function is used to add the "animated" class to the current element
      $(this).addClass("animated");
      // The 'next' function is called to dequeue the next function in the queue
      next;
    });
  });
});



$(document).ready(function() {
  // Function to adjust the top position and height of .header__nav-mobile
  function adjustMobileNav() {
    var headerHeight = $('.header').height(); // Get header height
    $('.header__nav-mobile').css('height', headerHeight); // Set height of .header__nav-mobile
    if ($('.header__nav-mobile').hasClass('active')) {
      $('.header__nav-mobile').css('top', headerHeight); // Apply header height to top position if active
      $('.header__nav-mobile').css('height', 'calc(100vh - ' + headerHeight + 'px)');
    } else {
      $('.header__nav-mobile').css('top', ''); // Remove top property if not active
    }
  }

  // Initial adjustment on page load
  adjustMobileNav();

  // Mutation observer to check for changes in class attribute of .header__nav-mobile
  var observer = new MutationObserver(function(mutationsList, observer) {
    for(var mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        adjustMobileNav(); // Adjust top position and height on class change
      }
    }
  });

  // Start observing changes in class attribute of .header__nav-mobile
  observer.observe(document.querySelector('.header__nav-mobile'), { attributes: true });

  // Recalculate and adjust on window resize
  $(window).resize(function() {
    adjustMobileNav();
  });
});