$( function () {



    $(window).scroll(function(event){

        var scroll = $(window).scrollTop();
        console.log('Este es el valor del scroll-->',scroll)

        if(scroll >= 200){

            $('nav').addClass('nav-color')
            console.log('Es mayor o igual a 100')
            //Agrega el color

        }else{
            $('nav').removeClass('nav-color')
            //Quita el color
            console.log('Es menor a 100 o sea 99');
        }});

        $(".smooth-scroll ul a").on("click", function (e) {
            // 1
            e.preventDefault();
            // 2
            const href = $(this).attr("href");
            // 3
            $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
        });
