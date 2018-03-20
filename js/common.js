
$(function () {
    //我的订单分类
    $(".myorder-class li").on("click", function () {
        var orderList = $(this);
        var orderList_nb = $(orderList).index();
        $(orderList).addClass("ahover").siblings().removeClass("ahover");
        $(".myorder-list li").eq(orderList_nb).addClass("ahover").siblings().removeClass("ahover");
    })

    //出售羔羊-处理方式
    $(".money-list select").on("click", function () {
        var mntips = $(this).val();
        if (mntips ==1) {
            $(".tips-product").show();
            $(".tips-sold").hide();
            $(".tips-tourism").hide();
        }
        if (mntips == 2) {
            $(".tips-product").hide();
            $(".tips-sold").show();
            $(".tips-tourism").hide();
        }
        if (mntips == 3) {
            $(".tips-product").hide();
            $(".tips-sold").hide();
            $(".tips-tourism").show();
        }
    })

    //视频标题切换
    $(".sheepvideo-title li").on("click", function () {
        var videoList = $(this);
        var videoList_nb = $(videoList).index();
        $(videoList).addClass("ahover").siblings().removeClass("ahover");
        $(".sheepvideo-list li").eq(videoList_nb).addClass("ahover").siblings().removeClass("ahover");
    })
    //视频分类切换
    $(".videoClass span").on("click", function () {
        $(this).addClass("classAhover").siblings().removeClass("classAhover");
    })

    $(".videoTips a").on("click", function () {
        $(".sheepvideo-title li").eq(1).click();
    })

    //优惠券标题切换
    $(".coupon-title li").on("click", function () {
        var videoList = $(this);
        var videoList_nb = $(videoList).index();
        $(videoList).addClass("ahover").siblings().removeClass("ahover");
        $(".coupon-list li").eq(videoList_nb).addClass("ahover").siblings().removeClass("ahover");
    })
});


//默认手机参数
var isPhone = 1;
//手机获取验证码
function getCode(e) {
    checkPhone(); //验证手机号
    if (isPhone) {
        resetCode(); //倒计时
    }
}
//验证手机号
function checkPhone() {
    var phone = $('.phoneNumb').val();
    var pattern = /^1[0-9]{10}$/;
    if (phone == '') {
        alert('请输入手机号码');
        isPhone = 0;
        return;
    }
    if (!pattern.test(phone)) {
        alert('请输入正确的手机号码');
        isPhone = 0;
        return;
    }
}
//倒计时
function resetCode() {
    $('.obtainCode').val('60秒后重新获取验证码');
    var second = 60;
    var timer = null;
    timer = setInterval(function () {
        second -= 1;
        if (second > 0) {
            $('.obtainCode').val(second + "秒后重新获取验证码");
            $('.obtainCode').attr("disabled", true);
        } else {
            clearInterval(timer);
            $('.obtainCode').val("重新发送");
            $('.obtainCode').attr("disabled", false);
        }
    }, 1000);
}

(function ($) {
    $.fn.extend({
        "slideUp": function (value) {

            var docthis = this;
            //默认参数
            value = $.extend({
                "li_h": "30",
                "time": 2000,
                "movetime": 1000
            }, value)

            //向上滑动动画
            function autoani() {
                $("li:first", docthis).animate({ "margin-top": -value.li_h }, value.movetime, function () {
                    $(this).css("margin-top", 0).appendTo(".notice-line");
                })
            }

            //自动间隔时间向上滑动
            var anifun = setInterval(autoani, value.time);

            //悬停时停止滑动，离开时继续执行
            $(docthis).children("li").hover(function () {
                clearInterval(anifun);			//清除自动滑动动画
            }, function () {
                anifun = setInterval(autoani, value.time);	//继续执行动画
            })
        }
    })
})(jQuery)