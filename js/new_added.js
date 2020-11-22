$(window).load(function(){
 


    $('.right_area').height($('#contentwrapper').height()-40);
    setTimeout(function(){
        $('.loading_container').fadeOut('1500');
    },10)

})
$(window).resize(function(){
    $('.right_area').css('height','500px');        
    setTimeout(function(){
        //alert(0)
        $('.right_area').height($('.left_area').height()-40);        
    },100);
    var win_height = $(window).innerHeight()-93;
    $('.left_area').css('height', win_height);
})


$(document).ready(function(){
    var win_height = $(window).innerHeight()-93;
    $('.left_area').css('height', win_height);

    $('.show_li').click(function(){
        $('.table_struc').toggleClass('p_hide')
    })
    $('.full_icon').click(function(){
        $('.new_design').toggleClass('full_screen');
        newCanvas();
        $(this).toggleClass('active');
    })


    $('.dash_icon').click(function(){
        $('.dash_icon').toggleClass('active')
        $('.right_area').toggleClass('hide')
        $('body').toggleClass('full_screen')
    })

    $(".midalteacher>a, .midalteacher a.close").click(function () {
        $('.midalteacher').toggleClass('active')
    })
    $(".unit4_home .midalteacher>a, .unit4_home .midalteacher_show a.close").click(function () {
        $('.home_popup').toggleClass('active');
    })
    $('.dashboard8 .card').click(function(){
        $('.cliffs').toggleClass('active');
    })
    $('.show_content').click(function(){
        var show_content = $(this).data('content');
        $('.'+show_content).fadeToggle();
        return false;

    })
    $('.printer').click(function (e) {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = "rgba(255, 255, 255, 0)";
        $("#canvas").removeClass("pen");
        $("#canvas").removeClass("eraserr");
        window.print();
    })

    $('.note_pop a').click(function(){
        $(this).next('.pop').fadeToggle(600)

    })
    $('.popup_contain a').click(function(){
        $(this).next('.pop_up_note').fadeToggle(600);

    })

    $('.popup_contain a.open').click(function(){
        $(this).next('.pop_up_note').fadeUp(600);

    })


    $('.table_struc ul').each(function(){  

        var highestBox = 0;
        $('li', this).each(function(){

            if($(this).height() > highestBox) 
                highestBox = $(this).height(); 
        });  

        $('li',this).height(highestBox+10);

    });  


    $('.popwrap area').click(function(){
        var ppo = $(this).data('pop');
        $('.note_pop.'+ ppo+' .pop').fadeToggle();
    })
    $('.ans_table .block').click(function(){
        $(this).addClass('active');
    })

    $('.block_square .top li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.block_square .bottom li').eq($(this).index()).animate({'opacity':'0'},500);
        }else{
            $(this).addClass('active');
            $('.block_square .bottom li').eq($(this).index()).animate({'opacity':'1'},500);
        }
    })
    $('.page_10 div').click(function(){
        $(this).toggleClass('active')

    })

    $('.game_plate ul.even').each(function(){
        $(this).children('li:even').each(function(){
            $(this).addClass('even');
        })
    })
    $('.game_plate ul.odd').each(function(){
        $(this).children('li:odd').each(function(){
            $(this).addClass('even');
        })
    })

    $('.pop_btn, .popup_container a.close').click(function(){

        $('.new_design').toggleClass('open_pop');
        $(this).data('pop_data');
        $('.new_design').toggleClass($(this).data('pop_data'));
    })

    $('.bottom_content a').click(function(){
        $('.common_dash').toggleClass($(this).data('color'));
    })
    $('.unit4_9 h3 a').click(function(){
        $('.common_dash').toggleClass($(this).data('color'));
    })
    $('.but_center a').click(function(){
        $('.common_dash').toggleClass($(this).data('color'));
    });
    $('.right_side a.hide_table').click(function(){
        if ( $('.table_struc ul+ul li p').css('visibility') == 'hidden')
            $('.table_struc ul+ul li p').css('visibility','visible');
        else
            $('.table_struc ul+ul li p').css('visibility','hidden');
    });

    /* Links setting */
    $(".new_design .side_nav ul li").eq(0).children('a').prop("href", "page2.html")
    $(".new_design .side_nav ul li").eq(1).children('a').prop("href", "page4.html")
    $(".new_design .side_nav ul li").eq(2).children('a').prop("href", "page25.html")
    $(".new_design .side_nav ul li").eq(3).children('a').prop("href", "page5.html")
    $(".new_design .side_nav ul li").eq(4).children('a').prop("href", "page12.html")
    $(".new_design .side_nav ul li").eq(5).children('a').prop("href", "page19.html")
    $(".new_design .side_nav ul li").eq(6).children('a').prop("href", "page22.html")
    $(".new_design .side_nav ul li").eq(7).children('a').prop("href", "page24.html")
    $(".new_design .side_nav ul li").eq(8).children('a').prop("href", "page26.html")

    var page_name = $(location).attr('href').substring($(location).attr('href').lastIndexOf('/') + 1);

    if(page_name=="page2.html" || page_name=="page3.html" ){
        $(".new_design .side_nav ul li a").removeClass('active');
        $(".new_design .side_nav ul li").eq(0).children('a').addClass('active');
    }
    if(page_name=="page4.html"){
        $(".new_design .side_nav ul li a").removeClass('active');
        $(".new_design .side_nav ul li").eq(1).children('a').addClass('active');
    }
    if(page_name=="page25.html" || page_name=="page31.html" ){
        $(".new_design .side_nav ul li a").removeClass('active');
        $(".new_design .side_nav ul li").eq(2).children('a').addClass('active');
    }
    if(page_name=="page5.html" || page_name=="page6.html" || page_name=="page7.html" || page_name=="page8.html" || page_name=="page9.html" || page_name=="page10.html" || page_name=="page11.html" ){
        $(".new_design .side_nav ul li a").removeClass('active');
        $(".new_design .side_nav ul li").eq(3).children('a').addClass('active');
    }
    if(page_name=="page12.html" || page_name=="page13.html" || page_name=="page14.html" || page_name=="page15.html" || page_name=="page16.html" || page_name=="page17.html" || page_name=="page18.html" ){
        $(".new_design .side_nav ul li a").removeClass('active');
        $(".new_design .side_nav ul li").eq(4).children('a').addClass('active');
    }
    if(page_name=="page19.html" || page_name=="page20.html" || page_name=="page21.html" ){
        $(".new_design .side_nav ul li a").removeClass('active');
        $(".new_design .side_nav ul li").eq(5).children('a').addClass('active');
    }
    if(page_name=="page22.html" || page_name=="page23.html" ){
        $(".new_design .side_nav ul li a").removeClass('active');
        $(".new_design .side_nav ul li").eq(6).children('a').addClass('active');
    }
    if(page_name=="page24.html"  ){
        $(".new_design .side_nav ul li a").removeClass('active');
        $(".new_design .side_nav ul li").eq(7).children('a').addClass('active');
    }
    if(page_name=="page26.html" || page_name=="page27.html" || page_name=="page28.html" || page_name=="page29.html" || page_name=="page30.html" || page_name=="page32.html" || page_name=="page33.html" ){
        $(".new_design .side_nav ul li a").removeClass('active');
        $(".new_design .side_nav ul li").eq(8).children('a').addClass('active');
    }


})


