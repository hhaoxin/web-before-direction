<template>
  <div>
      <!-- 内容 -->

        <div class="content index">
        <div class="index-left">
          <div class="index-one">
            <div class="inl">
              <div class="block">
              <el-carousel trigger="click">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
            </div>
             
            <div class="inr">
              <div class="title_s">中心简介</div>
              <p style="text-indent: 2em">
                经管实训中心是由工商管理学院和经济管理学院合建的，主要服务于我校文科院系及工科院系部分专业的经管实验实训教学中心，经过十来年的建设发展，已经初具规模，并取得了较大的教学成效和一定的社会影响力。截止到2017年年底，我校经管实训中心现有实验用房 1540平方米，电脑实验室15间共 800 余个机位，设备数量692台（件），设备总值近500万元。
                
                <a title="查看详情" href="jgsxzx/zxgk/zxjj_.htm" style="font-size: 13px">+查看详情</a>
              </p>
            </div>
          </div>
          <div class="index-two">
            <div class="intitle">
              <div class="title_s">
                <a href="syzx/syjx/sysxs_.htm" target="_blank" style="color: #fff">实验室介绍</a>
              </div>
            </div>
            <div id="demo">
              <table cellspacing="1" cellpadding="1" align="center" border="0" cellspace="0">
                <tbody>
                  <tr>
                    <td id="marquePic1" bgcolor="#ffffff" valign="top">
                      <table cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="会计综合实验室" href="info/2125/4796.htm" target="_blank">
                                <img border="0" alt="会计综合实验室" src="./images/1.png" width="200" height="134" />
                                <br />会计综合实验室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="金融综合实验室" href="info/2125/4795.htm" target="_blank">
                                <img border="0" alt="金融综合实验室" src="./images/1.png" width="200" height="134" />
                                <br />金融综合实验室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title=" 国际贸易综合实验室" href="info/2125/4797.htm" target="_blank">
                                <img border="0" alt=" 国际贸易综合实验室" src="./images/1.png" width="200" height="134" />
                                <br />国际贸易综合实验室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="财务管理综合实验室" href="info/2125/4798.htm" target="_blank">
                                <img border="0" alt="财务管理综合实验室" src="./images/1.png" width="200" height="134" />
                                <br />财务管理综合实验室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="ERP软件与沙盘模拟实验室" href="info/2125/5504.htm" target="_blank">
                                <img border="0" alt="ERP软件与沙盘模拟实验室" src="./images/1.png" width="200" height="134" />
                                <br />ERP软件与沙盘模拟实验室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="人力资源管理综合实训室" href="info/2125/5503.htm" target="_blank">
                                <img border="0" alt="人力资源管理综合实训室" src="./images/1.png" width="200" height="134" />
                                <br />人力资源管理综合实训室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="物流实训室" href="info/2125/5502.htm" target="_blank">
                                <img border="0" alt="物流实训室" src="./images/1.png" width="200" height="134" />
                                <br />物流实训室
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td id="marquePic2" valign="top">
                      <table cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="会计综合实验室" href="info/2125/4796.htm" target="_blank">
                                <img border="0" alt="会计综合实验室" src="./images/1.png" width="200" height="134" />
                                <br />会计综合实验室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="金融综合实验室" href="info/2125/4795.htm" target="_blank">
                                <img border="0" alt="金融综合实验室" src="./images/1.png" width="200" height="134" />
                                <br />金融综合实验室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title=" 国际贸易综合实验室" href="info/2125/4797.htm" target="_blank">
                                <img border="0" alt=" 国际贸易综合实验室" src="./images/1.png" width="200" height="134" />
                                <br />国际贸易综合实验室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="财务管理综合实验室" href="info/2125/4798.htm" target="_blank">
                                <img border="0" alt="财务管理综合实验室" src="./images/1.png" width="200" height="134" />
                                <br />财务管理综合实验室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="ERP软件与沙盘模拟实验室" href="info/2125/5504.htm" target="_blank">
                                <img border="0" alt="ERP软件与沙盘模拟实验室" src="./images/1.png" width="200" height="134" />
                                <br />ERP软件与沙盘模拟实验室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="人力资源管理综合实训室" href="info/2125/5503.htm" target="_blank">
                                <img border="0" alt="人力资源管理综合实训室" src="./images/1.png" width="200" height="134" />
                                <br />人力资源管理综合实训室
                              </a>
                            </td>
                            <td
                              align="center"
                              style="width: 200px;padding-left: 10px;padding-right: 10px"
                            >
                              <a title="物流实训室" href="info/2125/5502.htm" target="_blank">
                                <img border="0" alt="物流实训室" src="./images/1.png" width="200" height="134" />
                                <br />物流实训室
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="index-three">
            <div class="zhong">
              <div class="left gong">
                <div class="hd">
                  <h3  id="tab_1" class="xw cur"  @mouseenter="tabs(1)">新闻动态</h3>
                  <h3  id="tab_2" class="hz"  @mouseenter="tabs(2)">公告通知</h3>
                  <a class="chu" href="jgsxzx/xwdt/xwkx_.htm">更多</a>
                  <a href="jgsxzx/xwdt/ggtz.htm">更多</a>
                </div>
                <div class="bd no1" id="tab_a1" style="display:block">
                  <!--#begineditable name="新闻公告" clone="0" namechanged="0" order="2" ispublic="0" tagname="新闻公告" viewid="54290" contentviewid="" contype="" stylesysid="" layout="" action=""-->
                  <ul>
                    <li>
                      <span>2018-10-31</span>
                      <a title="第六届“民生证券杯”证券投资大赛启动" href="info/2121/5432.htm">第六届“民生证券杯”证券投资大赛启动</a>
                    </li>

                    <li>
                      <span>2018-10-31</span>
                      <a
                        title="经济管理学院获批教育部2018年首批产学合作协同育人项目3项"
                        href="info/2121/5433.htm"
                      >经济管理学院获批教育部2018年首批...</a>
                    </li>

                    <li>
                      <span>2018-10-28</span>
                      <a title="营销专家解读“新时代，新营销”专题讲座" href="info/2121/5452.htm">营销专家解读“新时代，新营销”专...</a>
                    </li>

                    <li>
                      <span>2018-10-26</span>
                      <a title="我院组织教师开展实验室安全教育培训活动" href="info/2121/5399.htm">我院组织教师开展实验室安全教育培...</a>
                    </li>

                    <li>
                      <span>2018-10-26</span>
                      <a title="理性投资，投资有道" href="info/2121/5400.htm">理性投资，投资有道</a>
                    </li>

                    <li>
                      <span>2018-10-25</span>
                      <a title="经济管理学院开展实验室安全教育培训" href="info/2121/5315.htm">经济管理学院开展实验室安全教育培训</a>
                    </li>

                    <li>
                      <span>2018-10-25</span>
                      <a
                        title="我院召开省级实验教学示范中心经管实训中心项目项目结项准备会"
                        href="info/2121/5316.htm"
                      >我院召开省级实验教学示范中心经管...</a>
                    </li>
                  </ul>
                  <!--#endeditable-->
                </div>
                <div class="bd" id="tab_a2" style="display:none">
                  <!--#begineditable name="公告通知" clone="0" namechanged="0" order="3" ispublic="0" tagname="公告通知" viewid="54291" contentviewid="" contype="" stylesysid="" layout="" action=""-->
                  <ul>
                    <li>
                      <span>2019-12-12</span>
                      <a
                        title="经济管理学院关于2016级学生毕业实习工作安排的通知"
                        href="info/2122/6186.htm"
                      >经济管理学院关于2016级学生毕业实...</a>
                    </li>

                    <li>
                      <span>2018-11-06</span>
                      <a
                        title="广东省2019年度全国会计专业技术初级资格考试考务日程安排及有关事项的通知"
                        href="info/2122/5548.htm"
                      >广东省2019年度全国会计专业技术初...</a>
                    </li>

                    <li>
                      <span>2018-10-30</span>
                      <a
                        title="经济管理学院关于开展“三爱”主题教育实践活动的通知"
                        href="info/2122/5549.htm"
                      >经济管理学院关于开展“三爱”主题...</a>
                    </li>

                    <li>
                      <span>2018-10-19</span>
                      <a
                        title="经济管理学院2018-2019第一学期期中教学检查工作方案"
                        href="info/2122/5368.htm"
                      >经济管理学院2018-2019第一学期期中...</a>
                    </li>

                    <li>
                      <span>2018-10-18</span>
                      <a
                        title="关于2017-2018学年学生奖励学分申请情况的公示"
                        href="info/2122/5369.htm"
                      >关于2017-2018学年学生奖励学分申请...</a>
                    </li>

                    <li>
                      <span>2018-09-27</span>
                      <a title="经济管理学院关于组织学生申请奖励学分的通知" href="info/2122/5370.htm">经济管理学院关于组织学生申请奖励...</a>
                    </li>

                    <li>
                      <span>2018-07-01</span>
                      <a
                        title="经济管理学院关于表彰2018届优秀毕业实习生的决定"
                        href="info/2122/5371.htm"
                      >经济管理学院关于表彰2018届优秀毕...</a>
                    </li>
                  </ul>
                  <!--#endeditable-->
                </div>
              </div>
              <div class="center gong">
                <div class="hd">
                  <h3 class="xw cur" id="tab_3"  @mouseenter="tabs(3)">实验教学</h3>
                  <h3 class="hz" id="tab_4"  @mouseenter="tabs(4)">创新实践</h3>
                  <a class="chu" href="jgsxzx/syjx.htm">更多</a>
                  <a href="jgsxzx/cxsj.htm">更多</a>
                </div>
                <div class="bd no1"  id="tab_a3" style="display:black">
                  <!--#begineditable name="实验教学" clone="0" namechanged="0" order="4" ispublic="0" tagname="实验教学" viewid="54292" contentviewid="" contype="" stylesysid="" layout="" action=""-->
                  <ul>
                    <li>
                      <span>2018-11-02</span>
                      <a title="中心教师队伍信息一览表" href="info/2124/5430.htm">中心教师队伍信息一览表</a>
                    </li>

                    <li>
                      <span>2018-11-02</span>
                      <a title="中心专业实验教学应用系统（软件平台）一览表" href="info/2126/5427.htm">中心专业实验教学应用系统（软件平...</a>
                    </li>

                    <li>
                      <span>2018-11-02</span>
                      <a title="中心实验实训室一览表（含校内实训基地）" href="info/2125/5426.htm">中心实验实训室一览表（含校内实训...</a>
                    </li>

                    <li>
                      <span>2019-01-04</span>
                      <a title="校园e银行如期举行换届会议" href="info/2123/5664.htm">校园e银行如期举行换届会议</a>
                    </li>

                    <li>
                      <span>2018-11-16</span>
                      <a title="第六届“民生证券杯”系列讲座开讲" href="info/2123/5575.htm">第六届“民生证券杯”系列讲座开讲</a>
                    </li>

                    <li>
                      <span>2018-11-06</span>
                      <a title="市场营销综合实验室" href="info/2125/5505.htm">市场营销综合实验室</a>
                    </li>

                    <li>
                      <span>2018-11-06</span>
                      <a title="ERP软件与沙盘模拟实验室" href="info/2125/5504.htm">ERP软件与沙盘模拟实验室</a>
                    </li>
                  </ul>
                  <!--#endeditable-->
                </div>
                <div class="bd"  id="tab_a4" style="display:none">
                  <!--#begineditable name="创新实践" clone="0" namechanged="0" order="5" ispublic="0" tagname="创新实践" viewid="54293" contentviewid="" contype="" stylesysid="" layout="" action=""-->
                  <ul>
                    <li>
                      <span>2018-11-02</span>
                      <a title="我校学生获省级以上项目立项情况一览表" href="info/2128/5521.htm">我校学生获省级以上项目立项情况一览表</a>
                    </li>

                    <li>
                      <span>2018-11-02</span>
                      <a title="学生学科竞赛获奖一览表" href="info/2127/5418.htm">学生学科竞赛获奖一览表</a>
                    </li>

                    <li>
                      <span>2018-10-26</span>
                      <a title="中心校外实习、实训基地一览表" href="info/2129/5314.htm">中心校外实习、实训基地一览表</a>
                    </li>

                    <li>
                      <span>2018-10-31</span>
                      <a title="第六届“民生证券杯”证券投资大赛启动" href="info/2127/5435.htm">第六届“民生证券杯”证券投资大赛启动</a>
                    </li>

                    <li>
                      <span>2018-10-31</span>
                      <a
                        title="经济管理学院获批教育部2018年首批产学合作协同育人项目3项"
                        href="info/2129/5578.htm"
                      >经济管理学院获批教育部2018年首批...</a>
                    </li>

                    <li>
                      <span>2018-10-19</span>
                      <a
                        title="我院举行“福思特杯”会计税务技能创新大赛校内选拔赛"
                        href="info/2127/5318.htm"
                      >我院举行“福思特杯”会计税务技能...</a>
                    </li>

                    <li>
                      <span>2018-09-28</span>
                      <a
                        title="2018年“福思特杯”大学生会计税务技能创新大赛正式启动"
                        href="info/2127/5325.htm"
                      >2018年“福思特杯”大学生会计税务...</a>
                    </li>
                  </ul>
                  <!--#endeditable-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="index-right">
          <div class="right">
            <div class="quickse">
              <h3>中心信息平台</h3>
              <ul>
                <li>
                  <a href="http://10.0.22.17/" target="_blank">实验室预约申请</a>
                </li>
                <li>
                  <a href="http://10.0.22.17" target="_blank">实验课表查询</a>
                </li>
                <li>
                  <a href="http://10.0.22.17" target="_blank">实验教学管理系统</a>
                </li>
                <li>
                  <a href="http://ids.thxy.cn/authserver/login" target="_blank">实验室设备维护服务平台</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="xia">
            <div class="you">
              <div class="hd">网络实验教学平台</div>
              <select id="Select1" class="te" name="m1" onchange="location1(this)">
                <option selected>---会计学专业---</option>
                <option value="http://10.0.22.64:8090/netinnet_ckyjx">基础会计实训平台</option>
                <option value="http://10.0.22.64:8090/netinnet_ckyjx">中级财务会计实训平台</option>
                <option value="http://10.0.22.64:8090/netinnet_ckyjx">成本会计实训平台</option>
                <option value="http://10.0.22.64:8090/netinnet_ckyjx">电子报税实训平台</option>
                <option value="http://10.0.22.64:8080/netinnet_zzskp_v21">增值税开票模拟教学平台</option>
              </select>
              <select id="Select1" class="te" name="m1" onchange="location1(this)">
                <option selected>---财务管理专业---</option>
                <option value="http://10.0.22.64:8090/netinnet_ckyjx">基础会计实训平台</option>
                <option value="http://10.0.22.64:8090/netinnet_ckyjx">中级财务会计实训平台</option>
                <option value="http://10.0.22.64:8090/netinnet_ckyjx">成本会计实训平台</option>
                <option value="http://10.0.22.64:8090/netinnet_ckyjx">电子报税实训平台</option>
                <option value="http://10.0.22.64:8080/netinnet_zzskp_v21">增值税开票模拟教学平台</option>
                <option value="http://10.0.22.64:8086/qcpt">福思特财务管理实训平台</option>
              </select>
              <select id="Select1" class="te" name="m1" onchange="location1(this)">
                <option selected>---经济学专业---</option>
                <option value="http://gdjssfthxy.gtadata.com">证券虚拟交易所</option>
                <option value="http://10.0.22.65:8081/BANK/">商业银行综合业务实训平台</option>
                <option value="#">创业之星</option>
              </select>
              <select id="Select1" class="te" name="m1" onchange="location1(this)">
                <option selected>---国际经济与贸易专业---</option>
                <option value="http://10.0.22.65:8088/simtrade/login.aspx">世格外贸实习平台</option>
                <option value="http://10.0.22.65:8099/">智盛国际结算模拟系统</option>
                <option value="http://10.0.22.65/sylx">国际贸易单证实训平台</option>
                <option value="http://10.0.22.65/sysw">国际贸易实务教学系统</option>
                <option value="http://10.0.22.65/sysx">国际贸易综合实习平台</option>
              </select>
              <select id="Select1" class="te" name="m1" onchange="location1(this)">
                <option selected>---人力资源管理专业---</option>
                <option value="http://10.0.22.92:3003/">约创云平台沙盘模拟系统</option>
                <option value="http://10.0.22.91:8080/Account/index">人力资源模拟仿真沙盘实训平台</option>
              </select>
              <select id="Select1" class="te" name="m1" onchange="location1(this)">
                <option selected>---电子商务专业---</option>
                <option value="http://10.0.22.189:8888/bxframe">CRM模拟实训平台</option>
                <option value="http://10.0.22.92:3003/">约创云平台沙盘模拟系统</option>
              </select>
              <select id="Select1" class="te" name="m1" onchange="location1(this)">
                <option selected>---物流管理专业---</option>
                <option value="http://10.0.22.68">货代与报关物流管理实训平台</option>
                <option value="http://10.0.22.67">第三方物流管理实训平台</option>
                <option value="http://10.0.22.92:3003/">约创云平台沙盘模拟系统</option>
                <option value="http://10.0.22.188">物流仿真实训教学平台</option>
              </select>
              <select id="Select1" class="te" name="m1" onchange="location1(this)">
                <option selected>---市场营销专业---</option>
                <option value="http://10.0.22.189:8888/bxframe">CRM模拟实训平台</option>
                <option value="http://10.0.22.92:3003/">约创云平台沙盘模拟系统</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>
          <span>版权所有：广东技术师范大学天河学院经济与管理实验教学中心 地址：广州市白云区太和兴太三路638号 联系电话：020-87433403</span>
        </p>
      </div>
    </div>
</template>
<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  myJs from './js/index'
Vue.use(ElementUI);
export default {
  name:'content',
  methods:{
      tabs(n) {
        var len = 4;
        if(n==1 || n==2){
        for (var i = 1; i <=2; i++) {
            document.getElementById('tab_a' + i).style.display = (i == n) ? 'block' : 'none';
            document.getElementById('tab_' + i).className = (i == n) ? 'cur' : 'none';
        }
        }else {
          for (var i = 3; i <=4; i++) {
            document.getElementById('tab_a' + i).style.display = (i == n) ? 'block' : 'none';
            document.getElementById('tab_' + i).className = (i == n) ? 'cur' : 'none';
        }
        }

    },
    outStyle(i){
      document.getElementById('tab_' + i).className = 'none';
    }
  }
}
</script>

<style scoped>
a{
	text-decoration: none;
   }
   a:link,a:visited{color:#333;}
   *{
	padding: 0px;
	margin: 0px;
   }
   ul{
	list-style: none;
   }
   .clear{
	clear: both;
   }
   img{
	border: none;
   }
   a:hover{
	color: #3669aa;
   }
   
   body{
	font:12px/30px "寰蒋闆呴粦";
	color: #333;
   }
   .inner{width:1000px;position:relative;margin:0 auto;}
   .header{
	height: 163px;
	position: relative;
	margin: 0 auto;
	z-index:100010;
   }
   .header .sfzx{
	font:20px/20px "寰蒋闆呴粦";
	color: #700100;
	position: absolute;
	top:16px;
	right: 6px;
   }
   .header .subnav{
	position: absolute;
	top:50px;
	right: 8px;
	font:12px/12px "寰蒋闆呴粦";
	color: #000;
   }
   .header .subnav a{
	font:12px/12px "寰蒋闆呴粦";
	color: #000;
   }
   .header .subnav span{
	font:12px/12px "寰蒋闆呴粦";
	color: #000;
   }
   .header .subnav a:hover{
	color: #991a21;
   }
   .header .soso{
	position: absolute;
	top:76px;
	right: 8px;
   }
   .header .notxt{
	width: 170px;
	height: 23px;
	outline: none;
	border: 1px solid #acacac;
	color: #d3d3d3;
	font:12px/12px "瀹嬩綋";
	_line-hight: 24px;
	padding-left: 5px;
   }
   .header .notxt1{
	position: absolute;
	top:0px;
	right:0px;
	width: 38px;
	height: 25px;
	/* background: url(./images/fangda.jpg) no-repeat; */
	border: none;
	outline: none;
   }
   #head {
   height: 127px;
   background-position: 0 0;
   background-repeat: no-repeat;
   position: relative;
   /* background: url(img/bg.jpg) no-repeat left top; */
   }
   .logo {
   font-size: 20px;
   top: 25px;
   left:90px;
   overflow: hidden;
   /* background: url(./img/logo.png) no-repeat 0 15px; */
   padding-left: 0;
   padding-top: 32px;
   position: absolute;
   width: 510px;
   font-weight: 600;
   }
   .logo a, .logo a:hover {
   text-decoration: none;
   color: #333;
   font-size: 28px;
   font-family: SimHei;
   }
   .logo span {
   font-size: 10px;
   margin-top: -1px;
   display: block;
   font-weight: normal;
   }
   
   .logo p {
   font-family: 寰蒋闆呴粦;
   font-size: 12px;
   margin-top: -12px;
   
   }
   .right-logo {
   width: 400px;
   height: 127px;
   position: absolute;
   right: 0;
   top: 0;
   /* background: url(./img/xiaoxun5.jpg) no-repeat right center; */
   text-align: right;
   }
   
   .in-right-logo{
	padding-right: 45px;
   }
   
   .right-logo span, .right-logo a {
   margin-left: 15px;
   }
   .right-logo span strong {
   vertical-align: middle;
   }
   /* .xiaohui{background:url(./img/xiaohui.png) no-repeat 0 28px;height:100%;} */
   .header .nav{
	height: 35px;
	border: 1px solid #c57574;
	border-bottom: none;
	background: #3669aa;
	z-index: 9999;
   }
   .header .nav ul li.fuli{
	width: 124px;
	height: 35px;
	text-align: center;
	/* background: url(img/xian.jpg) no-repeat left top; */
	position: relative;
	float: left;
   }
   .header .nav ul li.first{
	background: none;
   }
   .header .nav ul li.fuli a{
	font:16px/35px "寰蒋闆呴粦";
	color: #fff;
   }
   .header .nav ul li.cur{
	/* background: #700100 url(img/xian.jpg) no-repeat left top; */
   }
   .header .nav ul li.fuli .menu{
	position: absolute;
	top:35px;
	left: 2px;
	width: 123px;
	padding-top: 5px;
	padding-bottom: 5px;
	/* background: url(img/hei.png); */
	display: none;
	z-index:100010;
   } 
   .header .nav ul li.fuli .menu ul li{
	text-align: center;
   }
   .header .nav ul li.fuli .menu ul li a{
	font:14px/30px "寰蒋闆呴粦";
	color: #fff;
   }
   .header .nav ul li.fuli .menu ul li a:hover{
	color: #700100;
   }
   
   
   .index{overflow:hidden;}
   .index-one{overflow:hidden;}
   .index-left{float:left;width:784px;margin:20px 0 0px!important;}
   .index-left .inl{float:left;width:477px;}
   .slide_x{overflow:hidden;position:relative;width:475px;height:248px;border:1px solid #ddd;background:#000;}
   .slide_x a{color:#eee;text-decoration:none;}
   .slide_x .box{overflow:hidden;position:relative;width:475px;height:248px;}
   .slide_x .list{overflow:hidden;width:9999px;}
   .slide_x .list li{float:left;position:relative;width:475px;}
   .slide_x .list img{vertical-align:top;}
   .slide_x .list p{position:absolute;bottom:0;left:0;width:100%;height:24px;color:#eee;font:12px/24px "寰蒋闆呴粦";text-indent:12px;
   filter:progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#99000000',endColorstr='#99000000');background:rgba(0,0,0,0.6);}
   .slide_x .btn{overflow:hidden;position:absolute;bottom:4px;right:6px;}
   .slide_x .btn li{float:left;width:16px;height:16px;margin:0 0 0 10px;border-radius:2px;background:#eee;color:#333;font:11px/16px "寰蒋闆呴粦";text-align:center;cursor:pointer;}
   .slide_x .btn .selected{background:#f30;color:#fff;}
   .index-left .inr{float:left;width:256px;border: 1px solid #ddd;padding: 0 10px 10px;margin-left: 15px;height: 300px;}
   .index-left .title_s {
	   height: 30px;
	   line-height: 30px;
	   padding: 0 10px;
	   color: #fff;
	   font-weight: bold;
	   float: left;
	   margin-top: 8px;
	   margin-bottom: 2px;
	background: #3669aa;
   }
   .index-left .inr p {
	   width: 100%;
	   float: left;
	   font-size: 13px;
	   line-height: 22px;
   }
   .index-right{float:right;width:215px;margin:20px 0!important;}
   .index-two{overflow:hidden;margin-top:10px;padding-right:11px;}
   .index-two .intitle{width:100%;border-bottom:1px solid #ccc;overflow:hidden;}
   .index-two .title_s{margin-bottom:0;}
   #demo{width:779px; overflow:hidden; margin:10px auto;margin-left:-10px;}
   #demo a:hover {text-decoration: underline;}
   #demo a{font-size: 15px; font-family: 寰蒋闆呴粦;}
   .index-three{overflow:hidden;}
   .content{
	width: 1000px;
	margin: 0 auto;
   }
   .content .zhong{
   
	overflow: hidden;
   }
   .content .zhong .gong{
	float: left;
	width: 386px;
	height: 262px;
   }
   .content .zhong .gong .hd{
	position: relative;
	width: 372px;
	height: 35px;
	border-bottom: 1px solid #7E7E7E;
   }
   .content .zhong .gong .hd h3{
	float: left;
	height: 32px;
	width: 100px;
	text-indent: 10px;
	font:15px/35px "寰蒋闆呴粦";
	color: #373737;
	cursor: pointer;
   }
   .content .zhong .gong .hd h3.xw{
	position: absolute;
	top:2px;
	left: 0px;
	_top:-1px;
   }
   .content .zhong .gong .hd h3.hz{
	position: absolute;
	top:2px;
	left: 100px;
   }
   .content .zhong .gong .hd h3.cur{
	border-bottom: 3px solid #3669aa;
   }
   .content .zhong .gong .hd a{
	display: none;
    position: absolute;
    top: 14px;
    right: 0px;
    width: 48px;
    height: 12px;
    font: 12px/12px "\5BF0\E1BF\848B\95C6\5474\7CA6";
    color: #373737;
    padding-left: 24px;
    text-align: right;
   }
   .content .zhong .gong .hd a.chu{
	display: block;
   }
   .content .zhong .gong .bd{
	width: 372px;
	padding-top: 8px;
	display: none;
   }
   .content .zhong .gong .no1{
	display: block;
   }
   .content .zhong .gong .bd ul li{
	padding-left: 23px;
	/* background: url(img/icon2.jpg) no-repeat 10px 10px; */
   
   }
   .content .zhong .gong .bd ul li span{
	float: right;
	padding-right: 10px;
	font:12px/28px "寰蒋闆呴粦";
	color: #373737;
   
   }
   .content .zhong .gong .bd ul li a{
	font:12px/28px "寰蒋闆呴粦";
	color: #373737;
   }
   .content .zhong .center{
	float: left;
	width: 398px;
   }
   .content .right{
	width: 215px;
   }
   .content .right .quickse h3{
	font:16px/16px "寰蒋闆呴粦";
	color: #171717;
	font-weight: bold;
	text-indent: 6px;
	width: 215px;
	height: 22px;
   }
   .content .right .quickse ul{
	padding-top: 4px;
	padding-left: 20px;
   }
   .content .right .quickse ul li{
	width: 174px;
	height: 34px;
	background: #dddddd 10px 9px;
	margin-top: 8px;
   }
   .content .right .quickse ul li a{
	font:14px/34px "寰蒋闆呴粦";
	color: #3e3e3e;
	width: 100%;
	text-align: center;
   
   }
   .content .right .quickse ul li a:hover{
	color: #3669aa;
   }
   .content .zhong .gong .bd ul li a:hover{
	color: #3669aa;
   }
   .content .xia{
	margin:15px 0px;
	overflow:hidden;
   }
   .content .xia .you{
	float: right;
	width: 100%;
   }
   .content .xia .you .hd{
	width: 100%;
	height: 45px;
	background:#3669aa;
	font:16px/44px "寰蒋闆呴粦";
	color: #fff;
	text-align: center;
	border-top-left-radius:15px;
	border-top-right-radius:15px;
   }
   .content .xia .you select{
	width: 100%;
	height: 38px;
	border: 1px solid #797979;
	margin-top:10px;
	outline: none;
   }
   .content .xia .you select.te{
	margin-top: 16px;
   }
   .content .xia .you select option{
	font:12px/38px "寰蒋闆呴粦";
	color: #171717;
   
   }
   .footer{
	width: 100vw;
	margin: 10px auto;
	border-top: 1px solid #5A5959;
	padding-top: 12px;
	clear: both;
	text-align:center
   }
   .footer p{
	font:12px/24px "寰蒋闆呴粦";
	color: #474646;
   }
   .footer p span{
	font:12px/24px "寰蒋闆呴粦";
	color: #474646;
   }
   
   
   
   .content1{
	width: 1000px;
	margin: 0 auto;
	overflow: hidden;
   }
   .content1 .left{
	width: 226px;
	float: left;
	background: #E5E5E5;
	border-top: 1px solid #CECECE;
   }
   .content1 .left ul li{
	border-bottom: 1px solid #CECECE;
	height: 59px;
	width: 226px;
	text-align: center;
   }
   .content1 .left ul li a{
	width: 226px;
	height: 59px;
	display: block;
	font:16px/59px "寰蒋闆呴粦";
	color: #9C2626;
   }
   .content1 .left ul li a:hover{
	border-left: 5px solid #9C2626;
	width: 221px;
   }
   .content1 .right{
	float: right;
	width: 748px;
	padding-left: 26px;
   }
   .content1 .right .bread{
	font:14px/48px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .right .bread a{
	font:14px/48px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .right .bread a:hover{
	color: #9C2626;
   }
   .content1 .right ul.liebiao{
	padding-top: 8px;
	overflow: hidden;
	padding-bottom: 7px;
   }
   .content1 .right ul.liebiao li{
	padding-left: 36px;
	/* background: url(img/icon4.jpg) no-repeat 15px 8px; */
   }
   .content1 .right ul.liebiao li .inner{
	border-bottom: 1px solid #E5E5E5;
   }
   .content1 .right ul.liebiao li a{
	font:12px/29px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .right ul.liebiao li span{
	font:12px/29px "Arial";
	color: #323232;
	float: right;
   }
   .content1 .right ul.liebiao li a:hover{
	color: #9c2626;
   }
   .yema{
	font:12px/40px "寰蒋闆呴粦";
	color: #323232;
	text-align: center;
	
	padding-bottom: 15px;
   }
   .yema a{
	font:12px/40px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .right .lietu {
   margin: 10px 0 0 0;
   overflow: hidden;
   width: 734px;
   text-align: center;
   }
   .content1 .right .lietu ul {
   width: 800px;
   padding-top: 13px;
   overflow: hidden;
   }
   .content1 .right  .lietu ul li {
   float: left;
   height: 174px;
   width: 214px;
   padding: 0;
   padding-right: 42px;
   padding-bottom: 35px;
   background: none;
   }
   .content1 .right .lietu ul li a {
   
   line-height: 30px;
   font-size: 14px;
   
   color: #444;
   }
   .content1 .right .lietu ul li a:hover{
	color: #991A21;
   }
   .content1 .right .article h2{
	font-size: 18px;
	color: #991A21;
	line-height: 40px;
	padding: 10px 0px 0px 0px;
	text-align: center;
   }
   .content1 .right .article .resource {
   height: 30px;
   text-align: center;
   line-height: 30px;
   color: #777;
   border-bottom: 1px solid #ccc;
   margin-bottom: 10px;
   }
   .content1 .right .fujian {
   padding: 10px 20px 20px 0px;
   overflow: hidden;
   }
   .content1 .right .fujian h3 {
   font-size: 16px;
   line-height: 30px;
   color: #991A21;
   padding: 0 0 0 8px;
   }
   .content1 .right .fujian ul{
	padding-top: 10px;
   }
   .content1 .right .fujian ul li {
   height: 26px;
   line-height: 26px;
   /* background: url(img/icon2.jpg) no-repeat 20px center; */
   padding-left: 42px;
   }
	.content1 .right .fujian ul li a {
   font-size: 12px;
   line-height: 24px;
   color: #656464;
   }
	.content1 .right .fujian ul li a:hover{
	 color: #991A21;
	}
   .content1 .right .tou{
	  position: relative;
	  height: 40px;
	 }
   .content1 .right .tou h3{
	font:16px/40px "寰蒋闆呴粦";
	color: #991A21;
	font-weight: bold;
   }
   .content1 .right .tou a{
	position: absolute;
	top:0px;
	right:10px;
	font:12px/40px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .tong{
	width: 1000px;
	margin: 0 auto;
   }
   .content1 .tong .bread{
	font: 14px/48px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .tong .bread a{
	font: 14px/48px "寰蒋闆呴粦";
	color: #323232;
   }
   .content1 .tong .bread a:hover{
	color: #9C2626;
   }
   .content1 .tong ul.liebiao {
   padding-top: 8px;
   overflow: hidden;
   padding-bottom: 7px;
   }
   .content1 .tong ul.liebiao li {
   padding-left: 36px;
   /* background: url(img/icon4.jpg) no-repeat 15px 8px; */
   }
   .content1 .tong ul.liebiao li .inner {
   border-bottom: 1px solid #E5E5E5;
   }
   .content1 .tong ul.liebiao li span {
   font: 12px/29px "Arial";
   color: #323232;
   float: right;
   }
   .content1 .tong ul.liebiao li a {
   font: 12px/29px "寰蒋闆呴粦";
   color: #323232;
   }
   .content1 .tong ul.liebiao li a:hover{
	color: #991A21;
   }
   .content1 .tong .bread{
	padding-left: 11px;
   }
   .content1 .yema a:hover{
	color: #991A21;
   }
   .content1 .tong .article h2 {
	font-size: 18px;
	color: #991A21;
	line-height: 40px;
	padding: 10px 0px 0px 0px;
	text-align: center;
   }
   .content1 .tong .article .resource {
	height: 30px;
	text-align: center;
	line-height: 30px;
	color: #777;
	border-bottom: 1px solid #ccc;
	margin-bottom: 10px;
   }
   .content1 .tong .fujian {
   padding: 10px 20px 20px 0px;
   overflow: hidden;
   }
   .content1 .tong .fujian h3 {
   font-size: 16px;
   line-height: 30px;
   color: #991A21;
   padding: 0 0 0 8px;
   }
   .content1 .tong .fujian ul {
   padding-top: 10px;
   }
   .content1 .tong .fujian ul li {
   height: 26px;
   line-height: 26px;
   /* background: url(img/icon2.jpg) no-repeat 20px center; */
   padding-left: 42px;
   }
   .content1 .tong .fujian ul li a {
   font-size: 12px;
   line-height: 24px;
   color: #656464;
   }
   .content1 .tong .fujian ul li a:hover{
	color: #991A21;
   }
   
   
   
   .celan{
	 width: 226px;
	 float: left;
	 background: #E5E5E5;
	 border-top: 1px solid #CECECE;
   }
   
   
   .celan h2{
	  background:#9C2626; 
	  height:60px; 
	  line-height:60px; 
	  text-align:center; 
	  color:#fff;
   }
   
   
   .celan ul{
	list-style: none;
   }
   
   .celan ul li{
	border-bottom: 1px solid #CECECE;
	   height: 59px;
	   width: 226px;
	   text-align: center;
   }
   
   .celan ul li a{
	width: 226px;
	   height: 59px;
	   display: block;
	   font: 16px/59px "寰蒋闆呴粦";
	   color: #9C2626;
   }
   
   .celan ul li a:hover{
	border-left: 5px solid #9C2626;
   }
   
   
   
   .about{
	float: right;
	   width: 748px;
	   padding-left: 26px;
   }
   
   .about .bread{
	font: 14px/48px "寰蒋闆呴粦";
	   color: #323232;
   }
   
   
   .about .title{
	position: relative;
	   height: 40px;
   }
   
   .about .title h3{
	font: 16px/40px "寰蒋闆呴粦";
	   color: #991A21;
	   font-weight: bold;
   }
   
   .about .title a{
	position: absolute;
	   top: 0px;
	   right: 10px;
	   font: 12px/40px "寰蒋闆呴粦";
	   color: #323232;
   }
   
   
   .about .liebiao{
	list-style: none;
	padding-top: 8px;
	   overflow: hidden;
	   padding-bottom: 7px;
   }
   
   .about .liebiao li{
	padding-left: 36px;
	   /* background: url(./img/icon4.jpg) no-repeat 15px 8px; */
   }
   
   .about .liebiao li .neirong{
	border-bottom: 1px solid #E5E5E5;
   }
   
   .about .liebiao li .neirong span{
	font: 12px/29px "Arial";
	   color: #323232;
	   float: right;
   }
   
   .about .liebiao li .neirong a{
	font: 12px/29px "寰蒋闆呴粦";
	   color: #323232;
   }
   
   
   
   .article h2{
	font-size: 18px;
	   color: #991A21;
	   line-height: 40px;
	   padding: 10px 0px 0px 0px;
	   text-align: center;
   }
   
   .article p{
	   font-size: 14pt;
	   line-height: 150%;
	   font-family: 瀹嬩綋;
   }
   
   .imgbar{
	display: inline-block;
	padding: 0 15px;
	width: 300px;
	   padding-left: 43px; 
	padding-bottom: 10px; 
   }
   
   .imgbar p{
	text-align: center;
   
   }
   
   .imgbar img{
	width: 100%;
	height: auto;
	border: 0;
	border-radius:10px; 
	-webkit-border-radius:10px; 
	-moz-border-radius:10px; 
   }

   /* The slider */
.iviewSlider {
	overflow: hidden;
}

/* The timer in the Slider */
#iview-timer {
	position: absolute;
	z-index: -10;
	border-radius: 5px;
	cursor: pointer;
}

#iview-timer div {
	border-radius: 3px;
}

/* The Preloader in the Slider */
#iview-preloader {
	position: absolute;
	z-index: 1000;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	border: #000 1px solid;
	padding: 1px;
	width: 100px;
	height: 3px;
}
#iview-preloader div {
	float: left;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	height: 3px;
	background: #000;
	width: 0px;
}

/* The strips and boxes in the Slider */
.iview-strip {
	display:block;
	position:absolute;
	z-index:5;
}
.iview-block {
	display:block;
	position:absolute;
	z-index:5;
}

/* Direction nav styles (e.g. Next & Prev) */
.iview-directionNav a {
	position:absolute;
	top:45%;
	z-index:9;
	cursor:pointer;
}
.iview-prevNav {
	left:0px;
}
.iview-nextNav {
	right:0px;
}

/* Control nav styles (e.g. 1,2,3...) */
.iview-controlNav {
	position:absolute;
	z-index:1000;
}
.iview-controlNav a {
	z-index:1000;
	cursor:pointer;
}
.iview-controlNav a.active {
	font-weight:bold;
}
.iview-controlNav .iview-items ul {
	list-style: none;
}
.iview-controlNav .iview-items ul li {
	position: relative;
}
.iview-controlNav .iview-tooltip {
	position: absolute;
}

/* The captions in the Slider */
.iview-caption {
	position:absolute;
	z-index:4;
	overflow: hidden;
	cursor: default;
}

/* The video show in the Slider */
.iview-video-show {
	background: #000;
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 101;
}
.iview-video-show .iview-video-container {
	position: relative;
	width: 100%;
	height: 100%;
}
.iview-video-show .iview-video-container a.iview-video-close {
	position: absolute;
	right: 10px;
	top: 10px;
	background: #222;
	color: #FFF;
	height: 20px;
	width: 20px;
	text-align: center;
	line-height: 29px;
	font-size: 22px;
	font-weight: bold;
	overflow: hidden;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	border-radius: 15px;
}
.iview-video-show .iview-video-container a.iview-video-close:hover {
	background: #444;
}

.container {
	width:1000px; height:293px; margin:0 auto; position:relative;
}

#iview {
	display: block;
	width: 760px;
	height: 293px;
	position: relative;
}


#iview .iviewSlider {
	display: block;
	width: 760px;
	height: 293px;
	overflow: hidden;
}
#iview .iviewSlider a{ display:block; width: 760px; height:293px; position:absolute; left:0; top:0; z-index:10000;}
#iview .iviewSlider a img{ display:block; width: 760px; height:293px;}
.iview-controlNav {
	position: absolute; display:block;
	top: 0px;
	right: -240px;width: 230px;
	height: 293px; z-index:1000;
}

/*.iview-controlNav a {
	text-indent: -9999px;
}*/

.iview-controlNav a {display:block; background:#ccc;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity:0;opacity:0; line-height:68px; text-align:center; width:230px; height:68px; overflow:hidden;}

.iview-controlNav a.iview-controlPrevNav {
	float: left;
	width: 50px;
	height: 44px;
	/* background: url('../../img/slider-controls.png') no-repeat; display:none; */
}

.iview-controlNav a.iview-controlNextNav {
	float: left;
	width: 50px;
	height: 44px;
	/* background: url('../../img/slider-controls.png') no-repeat -50px 0px; display:none; */
}

.iview-controlNav div.iview-items {
	width:230px;
	height: 293px;
}
.iview-controlNav div.iview-items ul{ width: 230px; height:293px;}
.iview-controlNav div.iview-items ul li{ display:block; font-size:12px; line-height:68px; text-align:center; width:230px; height:68px; overflow:hidden;}
.iview-controlNav div.iview-items ul li a{ display:block; font-size:12px; line-height:68px; text-align:center; width:230px; height:68px; overflow:hidden;}
.iview-controlNav a.iview-control {
	display:block; text-align:center;
	width: 230px;
	height: 68px;
	line-height: 68px;color:#000;
}

.iview-controlNav a.iview-control.active {
	display:block; width:230px; height:68px; overflow:hidden;
}

.iview-caption {
	color: #FFF;
	border-radius: 3px;
	padding: 10px 15px;
	font-family: Verdana;
	font-size: 12px;
	text-shadow: #000 1px 1px 0px;
}

.iview-caption.caption1 {
	font-size: 36px;
	font-weight: bold;
	height: 45px;
}

.iview-caption.caption2 {
	background: #00b4ff;
	font-size: 36px;
	font-weight: bold;
	text-shadow: none;
}

.iview-caption.caption3 {
	background: #FFF;
	color: #000;
	font-size: 26px;
	text-shadow: none;
}

.iview-caption.caption4 {
	font-size: 22px;
	font-weight: bold;
}

.iview-caption.caption5 {
	background: #c4302b;
	box-shadow: rgba(0, 0, 0, 0.7) 10px 10px 15px 0px;
	font-size: 20px;
	font-weight: bold;
	text-shadow: none;
}

.iview-caption.caption6 {
	font-size: 18px;
}

.iview-caption.caption7 {
	text-align: left;
	font-size: 11px;
	color: #888;
	border-radius: 0px;
}

.iview-caption.caption7 div {
	line-height: 200%;
}

.iview-caption.caption7 h3 {
	margin-bottom: 20px;
	color: #FFF;
}

.iview-caption.blackcaption {
	background: #000;
	box-shadow: rgba(0, 0, 0, 0.7) 10px 10px 15px 0px;
	text-shadow: none;
}

#iview-preloader {
	border: #666 1px solid;
	width: 150px
}

#iview-preloader div {
	background: #666;
}

.iview-controlNav div.iview-items ul li {
	width: 230px;
	height: 68px;
	line-height: 68px; margin-bottom:7px;
}

#iview #iview-tooltip {
	display:block;
	position: absolute;
	width: 230px;
	height:293px;
	top: 0px;
	right: -240px;
	z-index: 1;
}

#iview #iview-tooltip div.holder {
	display: block;
	width: 230px;
	height: 293px;
	overflow: hidden;
}

#iview #iview-tooltip div.holder div.container {
	display: block;
	width: 230px;
}

#iview #iview-tooltip div.holder div.container div {
	float: left;
	display: block;
	overflow: hidden;
	width: 230px;
	height: 68px;
	right: -240px;
	text-align: center; margin-bottom:7px; cursor:pointer;
}

#iview #iview-tooltip div.holder div.container div img {
	width:230px;height: 68px;
	margin:0 auto;
}
.closestyle54553{ font-size:12px;color:#333333;text-decoration: none ;}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

html, body { min-width: 600; width: 100vw !important;}
@media screen and (max-width:920px) {
	.content,.zhong,.index-one{
    width:100vw;
		display: flex;
		flex-direction: column;
  }
  .index-one .inl{
    width: 100vw;
  }
  .index-right{
    display: none;
  }
  .gong{
      width: 100%;
  }
  .content .zhong .gong, .hd,.content .zhong .gong .bd {
    width: 100vw !important;
  }
  .inr{
    width: 100vw !important;
    margin-left: 0px !important;
  }
  .index-left .inr{
    height: auto !important;
  }
}
</style>