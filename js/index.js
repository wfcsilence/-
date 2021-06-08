$(document).ready(function() {
    /*$('#login').click(function() {
        $('#dlg-login').dialog({
            title: '登录',
            modal: true,
            width: 360,
            height: 263,
            closed: true,
            //动画效果
            autoOpen: true,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            },
            buttons: {
                /*'确定': function() {
                    /*console.log('success1');
                    $.getJSON('../php/login.php', function(res) {
                        /*data：将表单里的数据传给php，回调函数接受php返回来的值*/
    /*console.log('success2');
    if (res == 3) { //用户名、密码、验证码都输入正确
        var name = $('#tb_name').val();
        var pswd = $('#tb_pswd').val();
        $('#login').text('欢迎，' + name);
        $('#sp-login-msg').text('Access Success');
        /*window.open("index2.html", _self);
        /*toggle(); /*修改首页选项菜单*/
    /*$('#dlg-login').modal('hide'); /*关闭模态框*/
    /*} else if (res == 2) {
                            $('#sp-login-msg').html('用户名或密码有误')
                        }
                    });
        }*/
    /*}
        })
})*/

    $('#form_login').submit(function(e) {
        console.log('success1');
        e.preventDefault();
        $('#info').html('正在登录中');
        var data = $('#form_login').serialize(); /*将表单里的数据包装起来*/
        console.log(data);
        //location.href = "php/login.php?name=" + $('#zh1').val() + '&pswd=' + $('#pw1').val();
        $.ajax({
            type: 'POST',
            url: 'php/login.php',
            dataType: "json",
            data: data,
            success: function(flag) {
                console.log(flag);
                if (flag == 3) {
                    console.log('success2');
                    var name = $('#zh1').val();
                    var pswd = $('#pw1').val();
                    $('#login').text('欢迎，' + name);
                    $('#info').text('Access Success');
                    setTimeout(function() {
                        $('#loginer').modal('hide');
                        window.open("index2.php", "_blank");
                    }, 5000); /*关闭模态框*/
                } else if (flag == 2) {
                    $('#info').text('姓名或密码输入错误');
                }
            }
        });
    });
    /*
            $.getJSON('php/login.php', data, function(res) {
                /*data：将表单里的数据传给php，回调函数接受php返回来的值*/
    /*console.log('success2');
    if (res == 3) { //用户名、密码、验证码都输入正确
        var name = $('#zh1').val();
        var pswd = $('#pw1').val();
        $('#login').text('欢迎，' + name);
        /*$('#info').text('Access Success');
        /*toggle(); /*修改首页选项菜单*/
    /* window.open("index2.html", "_blank");
     $('#loginer').modal('hide'); /*关闭模态框*/
    /* } else if (res == 2) {
                $('#info').html('用户名或密码有误');
            }
        }).fail(function(d, textStatus, error) {
            console.error("getJSON failed, status:" + textStatus + ",error:" + error)
        });
})*/

    $('#logout').click(function() {
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf("Firefox") != -1 ||
            userAgent.indexOf("Chrome") != -1) {
            window.location.href = "about:blank";
        } else {
            window.opener = null;
            window.open("", "_self");
            window.close();
        }
    })

    $('#logo').click(function() {
        alert("BNU-2019级教育技术学期末大作业\n小组成员：范宇轩、蒋芮、周千阳、温方辰");
    })
})