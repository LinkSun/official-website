// $(function () {
  //需求1:给每一个li添加img(内容图片).
  //需求2:给每一个li设置鼠标移入事件:当前li的宽度变成800,其他兄弟li宽度变成100
  //需求3:鼠标移出大盒子,所有的li的宽度都变成默认的240


  //需求1:
  var $lis = $('#accordion li');
  //下面这句话是隐式迭代给每一个li设置相同的图片了.所以不符合题意.
  //$lis.html('<img src="images/collapse/1.jpg" alt=""/>'); //原生里面的innerHTML对应

  //遍历出每一个li标签.
  for(var i = 0 ; i < $lis.length; i++){
      //dom对象使用dom方法.
    // $lis[i].innerHTML = '<img src="images/collapse/'+(i+1)+'.jpg" alt=""/>';
      //使用jQuery的方法
      $($lis[i]).html('<a><img src="../image/collapse/'+(i+1)+'.jpg" alt="" width="100%" height="100%"/>');
  }


  //需求2:

  $lis.mouseenter(function () {
    $(this).stop(true,false).animate({width:475},500).siblings('li').stop(true,false).animate({width:381,height:400},500);
  });

  //需求3:
  $('#accordion').mouseleave(function () {
    //$(this).find('li');
    $lis.stop(true,false).animate({width:381},200);
  });


  $('.nav>ul>li').mouseover(function () {
    //$(this).children('ul').css('display','block');
    $(this).find('ul').show();//显示
  });


  //2.设置鼠标移出事件.
  $('.nav>ul>li').mouseout(function () {
    $(this).children('ul').hide();//隐藏
  });

// });



// 下拉菜单
$('.nav>ul>li').mouseenter(function () {
  //$(this).children('ul').css('display','block');
  $(this).find('ul').stop(true,false).slideDown(500);//显示
});


//2.设置鼠标移出事件.
$('.nav>ul>li').mouseleave(function () {
  $(this).children('ul').stop(true,false).slideUp(200);//隐藏
});




// $('#cartDemo').fullpage({
//   // 显示导航
//   // navigation:true,
//   // // 每一屏的背景颜色
//   // sectionsColor:['#00bfff','#9acd32','#ffa500','#008000','#87ceeb'],

//   // 当某一屏滚出会触发的回调函数
//   afterLoad:function(a,index){

//       // console.log(index);
//       // 不好的原因：是因为无论你滚出第几屏，它把所有屏都加了animation
//       // 例如页面一打开访问的是第一屏，那么你在页面一打开的时候所有屏上都加了animation，就代表动画在此刻都要走完，所以你再滚到下一页的时候就没有动画
//       // $('.section1').addClass('animation');
//       // $('.section2').addClass('animation');

//       //解决办法：谁滚出来才给谁加animation
//       //eq方法传入下标代表可以找到第几个，那么index是滚出来的屏数，从1开始，所以用index-1就能得到它对应的索引
//       $('.section').eq(index-1).addClass('animation').siblings().removeClass('animation');
      
//   }
// });

// $ ( window ).scroll ( function () {
//   if ( $ ( window ).scrollTop () > 2100 ) {
//       $ ( "#header" ).slideUp();
//       $ ( "#headerTow" ).slideDown();
//   } else {
//       $ ( "#header" ).slideDown();
//       $ ( "#headerTow" ).slideUp();
//   }
// } );


//   var banOffTop=$(".banner").offset().top;//获取到距离顶部的垂直距离
//   var scTop=0;//初始化垂直滚动的距离
//   $(document).scroll(function(){
//       scTop=$(this).scrollTop();//获取到滚动条拉动的距离
//       //console.log(scTop);查看滚动时，垂直方向上，滚动条滚动的距离
//       if(scTop>=banOffTop){
//       //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
//           $(".banner").addClass("fixDiv");
//       }else{
//           $(".banner").removeClass("fixDiv");
//       }

//   })
// })




