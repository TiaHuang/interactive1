   $(document).ready(function () {
       $('.circles').click(function () {

         $('.memes').removeClass('show');
         $('.sound').removeClass('show');
         $('.text').removeClass('show');
         //$('#circle-01').removeClass('red');

         var data = $(this).data('num');
         $('.memes-'+data+'').addClass("show");
         $('.sound-'+data+'').addClass("show");
         $('.text-'+data+'').addClass("show");
        //$('#circle-01').addClass('red');

        $('.circles').removeClass('clicked');
        $(this).addClass('clicked');        

        $('body').removeClass();
        $('body').addClass('bg-'+data+'');     
       });    
   });

