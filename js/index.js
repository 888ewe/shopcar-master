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
    });
});