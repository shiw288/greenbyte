// $(document).ready(function() {
//     $('input[data-target]').on('click', function() {
//       var targetFormClass = $(this).data('target');
//       var targetForm = $('.' + targetFormClass);
      
//       // Hide all forms
//       $('form').addClass('hidden');
      
//       // Display the target form
//       if (targetForm.length > 0) {
//         targetForm.removeClass('hidden').parents('div').removeClass('hidden');
//       }
//     });
  
//     $('.profile__form-btn').click(function() {
//       var visibleForm = $('form:not(.hidden)');
//       var prevForm = visibleForm.prev('form');
      
//       if (prevForm.length > 0) {
//         visibleForm.addClass('hidden').parents('div').addClass('hidden');
//         prevForm.removeClass('hidden').parents('div').removeClass('hidden');
//       }
//     });
//   });