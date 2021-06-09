<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>欢迎进入在线题库</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="image/k10.ico" type="image/x-icon">
    <link rel="stylesheet " type="text/css " href="css/venobox.css">
    <link rel="stylesheet " type="text/css " href="css/index2.css">
    <link rel="stylesheet " type="text/css " href="css/nav.css">
    <link rel="stylesheet " type="text/css " href="css/LeftNav.css">
    <script type="text/javascript " src="js/jquery.js "></script>
    <script type="text/javascript " src="js/LeftNav.js "></script>
    <script type="text/javascript " src="js/index2.js "></script>
</head>

<body>
    <header class="header">
        <div class=" left-part ">
            <b id="logo" style="color:aliceblue;">&nbsp;高 中 生 物 在 线 题 库&nbsp;</b>
        </div>
        <div class="right-part ">
            <div id="info">
                <a id="time"></a>
                <?php
                session_start();
                echo $_SESSION['name']; ?>
            </div>
        </div>
    </header>
    <a href="#cd-nav" class="cd-nav-trigger">Menu
        <span class="cd-nav-icon"></span>
        <svg x="0px" y="0px" width="54px" height="54px" viewBox="0 0 54 54">
        </svg>
    </a>

    <div id="cd-nav" class="cd-nav">
        <div class="cd-navigation-wrapper">
            <div id="title">
                <br>
                <a class="title"><b>题 库 目 录</b></a>
                <br>
            </div>
            <div><form class="left"></form></div>
            <div id="footer">
                <br>
                <a class="footer">&copy;BNU-EDU 2021</a>
                <br>
            </div>
        </div>
    </div>
    <div id="test">
        <div id="describe">
        <?php
        echo $_SESSION['describe'];
        ?>
        </div>
        <hr>
        <div id="optiona">
        <?php
        echo "A.".$_SESSION['a'];
        ?>
        </div>
        <div id="optionb">
        <?php
        echo "B.".$_SESSION['b'];
        ?>
        </div>
        <div id="optionc">
        <?php
        echo "C.".$_SESSION['c'];
        ?>
        </div>
        <div id="optiond">
        <?php
        echo "D.".$_SESSION['d'];
        ?>
        </div>
        <hr>
        <form>
        <div id="opb">
        <input type="radio" id="a1" name="q1" value="A">
        <label class="radio-label" for="a1">A</label>
        </div>
        <div id="opb">
        <input type="radio" id="b1" name="q1" value="B">
        <label class="radio-label" for="b1">B</label>
        </div>
        <div id="opb">
        <input type="radio" id="c1" name="q1" value="C">
        <label class="radio-label" for="c1">C</label>
        </div>
        <div id="opb">
        <input type="radio" id="d1" name="q1" value="D">
        <label class="radio-label" for="d1">D</label>
        </div>
        <div id="key" hidden="true">
            正确答案：
            <?php
            echo $_SESSION['answer'];
            ?>
        </div>
        <button id="check" type="submit" value="确认" onclick="return false;">确认</button>
        </form>
    </div>

</body>

</html>