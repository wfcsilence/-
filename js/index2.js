// 浏览器标题切换  
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '快回来，题库崩溃了！';
            clearTimeout(titleTime);
        } else {
            document.title = '骗你的~';
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            }, 1500);
        }
    })
    //导航栏



function timechange() {
    var d = new Date();
    var time = d.getHours();
    console.log(time);
    if (time >= 0 && time < 6) {
        $('#time').html('凌晨好，');
    } else if (time >= 6 && time < 8) {
        $('#time').html('早晨好，');
    } else if (time >= 9 && time < 11) {
        $('#time').html('上午好，');
    } else if (time >= 11 && time < 13) {
        $('#time').html('中午好，');
    } else if (time >= 13 && time < 17) {
        $('#time').html('下午好，');
    } else if (time >= 17 && time < 20) {
        $('#time').html('傍晚好，');
    } else if (time >= 20 && time < 24) {
        $('#time').html('夜深了，');
    }

}

jQuery(document).ready(function($) {
    //alert('登录成功\n↙左下角为目录按钮');
    var isLateralNavAnimating = false;
    //o打开或关闭导航菜单
    $('.cd-nav-trigger').on('click', function(event) {
        event.preventDefault();
        if ($("#cd-nav").width() == 220) {
            $("#cd-nav").width("0px");
        } else if ($("#cd-nav").width() == 0) {
            $("#cd-nav").width("220px");
        }
        //若动画正在进行，则停止
        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0)
                isLateralNavAnimating = true;
            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                //动画结束
                isLateralNavAnimating = false;
            });
        }
    });
});

$(document).ready(function() {
    $('.title').click(function() {
        alert("BNU-2019级教育技术学期末大作业");
    })
    timechange();
    $.leftNav(".left");
    $('#check').click(function(e) {
        e.preventDefault();
        var choose = 0;
        if (document.getElementsByName('q1')[0].checked) {
            choose = "A";
        } else if (document.getElementsByName('q1')[1].checked) {
            choose = "B";
        } else if (document.getElementsByName('q1')[2].checked) {
            choose = "C";
        } else if (document.getElementsByName('q1')[3].checked) {
            choose = "D";
        }
        console.log(choose);
        $.ajax({
            type: 'POST',
            url: 'php/check.php',
            dataType: "json",
            data: { choose: choose },
            success: function(flag) {
                console.log(flag);
                var key = document.getElementById("key");
                key.removeAttribute("hidden");
                if (flag == 1) {
                    alert("做对了！真棒！");
                } else {
                    key.style.color = "red";
                    alert("别灰心！加油！");
                }
            },
            error: function() {
                alert("error");
            }
        })
    })
});