/**
 * fullPage 2.5.4
 * Copyright (C) 2017
 */
 $(function(){

   //锁定菜单选项
   $(window).scroll(function(){


      $(window).scrollTop()>200 ? $("#menuHeader").addClass("fixedNav").animate({top:"0"},250)
        :
        $("#menuHeader").stop(!0,!0).removeClass("fixedNav").animate({top:"0"},20)
    });

});
