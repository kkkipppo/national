       
       
       // banner slick
        $(function(){
            $('.bnCon').slick({
                Infinity : true,
                arrows : false,
                dots : true,
                autoplay : true,
                autoplayspeed : 1200,
                draggable : true,
            });
        });
        


        //window scroll
        $(window).on('scroll',function(){

        let scr = $(window).scrollTop();
        // let hig = $('.disney').height();

        if(scr > 600){
            $('header').addClass('active');
            $('.hbtn').show();

            $('.hbtn').on('mouseover',function(){
            $('header').stop().removeClass('active');
            });

        }else{
            $('header').removeClass('active');
            $('.hbtn').hide();
        }

        });




