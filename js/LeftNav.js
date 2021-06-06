(function($, window, document, undefined) {
    $.leftNav = function(where, data) {
        var where = where;
        var menu = "";
        var html = "";
        var defaultmenu = {
            name: '', //名字
            level: '0', //第几级
            haschildren: true, //是否有子节点
            url: '#', //url路径
            isopen: false, //是否展开
            children: [{ //子节点
                name: '1 细胞',
                level: '1',
                haschildren: true,
                url: '',
                isopen: true,
                children: [{
                    name: '1.1 细胞代谢',
                    level: '2',
                    haschildren: true,
                    url: '',
                    isopen: false,
                    children: [{
                        name: '1.1.1 代谢的历程',
                        level: '3',
                        haschildren: true,
                        url: '',
                        isopen: false,
                        children: [{
                            name: '1.1.1.1 光合作用',
                            level: '4',
                            haschildren: false,
                            url: '光合作用',
                            isopen: false,
                            children: ''
                        }, {
                            name: '1.1.1.2 呼吸作用',
                            level: '4',
                            haschildren: false,
                            url: '呼吸作用',
                            isopen: false,
                            children: ''
                        }, {
                            name: '1.1.1.3 物质运输',
                            level: '4',
                            haschildren: false,
                            url: '物质运输',
                            isopen: false,
                            children: ''
                        }]
                    }, {
                        name: '1.1.2 代谢的物质基础',
                        level: '3',
                        haschildren: false,
                        url: '代谢的物质基础',
                        isopen: false,
                        children: ''
                    }, {
                        name: '1.1.3 代谢的环境因素',
                        level: '3',
                        haschildren: false,
                        url: '代谢的环境因素',
                        isopen: false,
                        children: ''
                    }]
                }, {
                    name: '1.2 细胞的生命过程',
                    level: '2',
                    haschildren: true,
                    url: '',
                    isopen: false,
                    children: [{
                        name: '1.2.1 无丝分裂',
                        level: '3',
                        haschildren: false,
                        url: '无丝分裂',
                        isopen: false,
                        children: ''
                    }, {
                        name: '1.2.2 有丝分裂',
                        level: '3',
                        haschildren: false,
                        url: '有丝分裂',
                        isopen: false,
                        children: ''
                    }, {
                        name: '1.2.3 细胞分化',
                        level: '3',
                        haschildren: false,
                        url: '细胞分化',
                        isopen: false,
                        children: ''
                    }, {
                        name: '1.2.4 细胞死亡',
                        level: '3',
                        haschildren: false,
                        url: '细胞死亡',
                        isopen: false,
                        children: ''
                    }, {
                        name: '1.2.5 细胞衰老',
                        level: '3',
                        haschildren: false,
                        url: '细胞衰老',
                        isopen: false,
                        children: ''
                    }]
                }, {
                    name: '1.3 细胞的结构',
                    level: '2',
                    haschildren: true,
                    url: '',
                    isopen: false,
                    children: [{
                        name: '1.3.1 分子组成',
                        level: '3',
                        haschildren: true,
                        url: '',
                        isopen: false,
                        children: [{
                            name: '1.3.1.1 元素组成',
                            level: '4',
                            haschildren: false,
                            url: '元素组成',
                            isopen: false,
                            children: ''
                        }, {
                            name: '1.3.1.2 无机物',
                            level: '4',
                            haschildren: false,
                            url: '无机物',
                            isopen: false,
                            children: ''
                        }, {
                            name: '1.3.1.3 有机物',
                            level: '4',
                            haschildren: false,
                            url: '有机物',
                            isopen: false,
                            children: ''
                        }]
                    }, {
                        name: '1.3.2 生物分类',
                        level: '3',
                        haschildren: true,
                        url: '',
                        isopen: false,
                        children: [{
                            name: '1.3.2.1 细胞结构',
                            level: '4',
                            haschildren: false,
                            url: '细胞结构',
                            isopen: false,
                            children: ''
                        }, {
                            name: '1.3.2.2 非细胞结构',
                            level: '4',
                            haschildren: false,
                            url: '非细胞结构',
                            isopen: false,
                            children: ''
                        }]
                    }, {
                        name: '1.3.3 细胞分类',
                        level: '3',
                        haschildren: false,
                        url: '细胞分类',
                        isopen: false,
                        children: ''
                    }, {
                        name: '1.3.4 细胞器',
                        level: '3',
                        haschildren: false,
                        url: '细胞器',
                        isopen: false,
                        children: ''
                    }, {
                        name: '1.3.5 细胞壁',
                        level: '3',
                        haschildren: false,
                        url: '细胞壁',
                        isopen: false,
                        children: ''
                    }, {
                        name: '1.3.6 细胞核',
                        level: '3',
                        haschildren: false,
                        url: '细胞核',
                        isopen: false,
                        children: ''
                    }, {
                        name: '1.3.7 细胞膜',
                        level: '3',
                        haschildren: true,
                        url: '',
                        isopen: false,
                        children: [{
                            name: '1.3.7.1 细胞膜的功能',
                            level: '4',
                            haschildren: false,
                            url: '细胞膜的功能',
                            isopen: false,
                            children: ''
                        }, {
                            name: '1.3.7.2 细胞膜的结构',
                            level: '4',
                            haschildren: false,
                            url: '细胞膜的结构',
                            isopen: false,
                            children: ''
                        }]
                    }, {
                        name: '1.3.8 细胞质',
                        level: '3',
                        haschildren: false,
                        url: '细胞质',
                        isopen: false,
                        children: ''
                    }]
                }]
            }]
        };
        var here = $("body").find(where);
        if (!here.length) {
            where = "body";
        }
        if (data) {
            menu = data;
        } else {
            menu = defaultmenu;
        }
        $(where).append('<div class="nav_box"><ul class="nav"></ul></div>');
        sidebarNav(menu);

        function sidebarNav(data) {
            html += '<li class="left_nav_list">';
            html += '<div class="left_nav_name level' + data.level;
            if (data.isopen) {
                html += ' nav_open';
            }
            html += '"><em><input type="button" value="' + data.name + '"/></em></div>';
            if (data.haschildren) {
                html += '<ul class="nav_ul"';
                if (data.isopen) {
                    html += ' style="display:block;"';
                }
                html += '>';
                for (var i = 0, l = data.children.length; i < l; i++) {
                    var children = data.children[i];
                    if (children.haschildren) {
                        sidebarNav(children);
                    } else {
                        html += '<li class="nav_li level' + children.level;
                        if (children.isopen) {
                            html += ' nav_li_open';
                        }
                        html += '" data-url="' + children.url + '">';
                        html += '<em><input type="submit" value="' + children.name + '"/></em>';
                        html += '</li>';
                    }
                }
                html += '</ul>';
            }
            html += '</li>';
        }
        $(where + " .nav").html(html);
        $(where + " .left_nav_name").on("click", function() {
            var open = $(this).hasClass("nav_open");
            if (open) {
                $(this).removeClass("nav_open");
                $(this).next(".nav_ul").slideUp();
            } else {
                $(this).addClass("nav_open");
                $(this).next(".nav_ul").slideDown();
                $(this).parents(".left_nav_list").siblings("li").find(".nav_ul").slideUp();
                $(this).parents(".left_nav_list").siblings("li").find(".left_nav_name").removeClass("nav_open");
            }
        })
        $(where + " .nav_li").on("click", function(event) {
            event.preventDefault();
            $(where + " .nav_li").removeClass("nav_li_open");
            $(this).addClass("nav_li_open");
            $(this).siblings(".left_nav_list").find(".nav_ul").slideUp();
            $(this).siblings(".left_nav_list").find(".left_nav_name").removeClass("nav_open");
            var url = "url=" + $(this).attr("data-url");
            //$('#top').html('当前知识点：' + url);
            console.log(url);
            //window.location.href = "php/gettest.php?url=" + url;
            $.ajax({
                type: 'POST',
                url: 'php/gettest.php',
                dataType: "json",
                data: url,
                success: function(res) {
                    if (res == 1) {
                        console.log('success3');
                        window.open("index2.php", "_self");
                    } else {
                        console.log('null');
                        alert("暂未有该知识点对应题目");
                        window.open("index2.php", "_self");
                    }
                },
                error: function(xhr, textStatus, errorThrown) {
                    /*错误信息处理*/
                    console.log("进入error---");　　　　　　　　
                    console.log("状态码：" + xhr.status);　　　　　　　　
                    console.log("状态:" + xhr.readyState); //当前状态,0-未初始化，1-正在载入，2-已经载入，3-数据进行交互，4-完成。
                    console.log("错误信息:" + xhr.statusText);　　　　　　　　
                    console.log("返回响应信息：" + xhr.responseText); //这里是详细的信息
                    console.log("请求状态：" + textStatus);
                    console.log(errorThrown);　　　　　　
                    console.log("请求失败");　　　　
                }
            });
        })
    }
})(jQuery, window, document);