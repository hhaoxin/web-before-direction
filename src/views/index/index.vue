<template>
  <div>
    <!-- 导航 -->
    <div id="index">
         <div class="topBox">
            <div class="borderBottom">
                <div class="container">
                    <div class="languageBox"><a href="#">加入收藏</a></div>
                    
                    <div class="languageBox"><a href="#">设为首页</a></div>
                    
                    <div class="languageBox"><a href="#">学校首页</a></div>
                    <div class="languageBox"><span>招生代码 12668</span></div>
                    
                    
                    
                    
                    <!-- <div class="languageBox">
                        <a href="#" class="en">English</a><a href="#" class="zh">中文版</a>
                    </div> -->
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-8 logo"><a href="index.html"><img src="./images/logo.jpg" alt="MojoCube 官方" /></a></div>

                    <div class="col-xs-6 col-sm-3 col-md-2">
                        <div class="address"></div>
                    </div>

                    <div class="col-xs-6 col-sm-3 col-md-2">
                        <div class="tel">
                            <img src="./images/logo.jpg" alt="" /><br />
                        </div>
                    </div>

                </div>
            </div>
        </div> 
        <nav class="navbar navbar-static-top navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html"></a>             
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">

                        <li><a href="index.html">网站首页</a></li>

                        <li class="dropdown">
                            <a href="about.html" class="dropdown-toggle" data-toggle="dropdown">关于我们</a><a href="#" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class='' href='about.html'>关于我们</a></li>
                                <li><a class='' href='contact.html'>关于我们</a></li>
                            </ul>
                        </li>

                        <li class="dropdown">
                            <a href="article.html" class="dropdown-toggle" data-toggle="dropdown">新闻中心</a><a href="#" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class='' href='article.html'>新闻中心1</a></li>
                                <li><a class='' href='article.html'>新闻中心2</a></li>
                            </ul>
                        </li>

                        <li class="dropdown">
                            <a href="product.html" class="dropdown-toggle" data-toggle="dropdown">产品中心</a><a href="#" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class='' href='product.html'>产品中心</a></li>
                                <li><a class='' href='product.html'>产品中心</a></li>
                                <li><a class='' href='product.html'>产品中心</a></li>
                                <li><a class='' href='product.html'>产品中心</a></li>
                            </ul>
                        </li>

                        <li><a href="album.html">学术研究1</a></li>

                        <li><a href="comment.html">学术研究2</a></li>

                        <li><a href="contact.html">学术研究3</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
  <!-- 内容 -->
  <content-area></content-area>
  </div>

</template>

<script>
import './css/bootstrap.css'
import './css/style.css'
import './css/online.css'
import ContentArea from './content'
import  myJs from './js/index'
export default {  
    name: 'index',
    data() {
      return {
        msg:"hello"
      }
    },
     mounted(){
          myJs.dosuba52395a();
          myJs.hotKeysa52395a();
          myJs.setHomepagea52395a();
          myJs.slkdfj();
          myJs.lunbo();
          myJs.shiyan();
        },
    components:{
        ContentArea
    }
}
</script>
