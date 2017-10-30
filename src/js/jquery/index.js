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

    //个人中心创建计划模板点击效果
    $(".paln_wrapper li").hover(function(event) {
      var index= $(".paln_wrapper li").index(this);
      //$(this).find(".menu-title").show();
      $(".paln_wrapper li").eq(index).addClass('selected').siblings(".paln_wrapper li").removeClass('selected');
      /* Act on the event */
   });

    //点击导航显示隐藏左侧边栏
    var isClosed =  false;
    $("#menu-toggle").click(function(event) {

          if(isClosed == true){
              $("#sidebar").addClass('is-open');
              console.log("111");
              isClosed = false;
          } else {

            $("#sidebar").removeClass('is-open');
            isClosed = true;
            console.log("222");
          }
      /* Act on the event */
 });

/*左侧导航栏鼠标经过展示区域*/
 $("#side-menu li").hover(function(event) {
   var index=$("#side-menu li").index(this);
   if($(".navbar-static-side").hasClass('is-open')){
     $("#side-menu li").find(".menu-title").hide();
     $(this).find(".menu-title").show();
   } else {
       //$(this).find(".menu-title").show();
       $("#side-menu li").eq(index).addClass('nav-hover').siblings("#side-menu li").removeClass('nav-hover');
   }

    /* Act on the event */
  });

});
