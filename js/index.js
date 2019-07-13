$(function () {
    $('#dowebok').fullpage({
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered:false,
        navigation:true,
        navigationPosition: "right",
        afterLoad:function (link, index) {
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index-1).addClass('now');
            // console.log("idnex"+index);
        },
        //离开某页面
        onLeave:function(index,nextIndex,direction){
            if (index===2&&nextIndex===3){
            //    当页面从二页跳三页
                $('.section').eq(index-1).addClass('leaved');
            }else if (index===3&&nextIndex===4) {
                $('.section').eq(index-1).addClass('leaved');
            }
        },
        afterRender:function () {
            $('.more').on('click',function () {
                // $.fn 插件方法
                $.fn.fullpage.moveSectionDown();
            });
            /*当第四屏的购物车动画结束之后执行收货地址的动画*/
            $('.section04 .cart').on('transitionend',function () {
                /* :last :first :visible :hidden :checked :selected jquery扩展选择器*/
                $('.section04 .address').show().find('img:last').fadeIn(1000);
                $('.section04 .text').addClass('show');
            });
        },
        scrollingSpeed: 1000,
    });
});