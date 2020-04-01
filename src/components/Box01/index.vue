<template>
  <div>
    <div class="top1">
      <div class="left headeLeft">
        <div class="top">
          <el-button class="btn"
                     @click="selectNewStrategy">1</el-button>
          <el-button class="btn"
                     @click="selectNewStrategy1">2</el-button>
        </div>
        <div class="top">
          <el-button class="btn"
                     @click="selectNewStrategy2">3</el-button>
          <el-button class="btn"
                     @click="selectNewStrategy3">4</el-button>
        </div>
      </div>
      <div class="left headeRight">
        <div class="title">策略实例列表</div>
        <div class="headContent">
          <div class="clearfix">
            <div class="left">
              <el-select v-model="allAccountsVal"
                         class="smallSelect"
                         placeholder="全部账户">
                <el-option v-for="item in allAccounts"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="tacticsVal"
                         class="smallSelect"
                         placeholder="全部策略">
                <el-option v-for="item in tactics"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="allStatesVal"
                         class="smallSelect"
                         placeholder="全部状态">
                <el-option v-for="item in allStates"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="allCaseVal"
                         class="smallSelect"
                         placeholder="全部实例">
                <el-option v-for="item in allCase"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="right">
              <el-button size="small">启动</el-button>
              <el-button size="small">暂停</el-button>
              <el-button size="small">删除</el-button>
            </div>
          </div>
          <div class="clearfix"
               style="padding: 10px 0px;">
            <el-table ref="multipleTable"
                      :data="tableData"
                      tooltip-effect="dark"
                      style="width: 100%;padding: 10px 10px;"
                      @selection-change="handleSelectionChange">
              <el-table-column type="selection"
                               width="55">
              </el-table-column>
              <el-table-column prop="id"
                               label="序号">
              </el-table-column>
              <el-table-column prop="code"
                               label="代码">
              </el-table-column>
              <el-table-column prop="name"
                               label="名称">
              </el-table-column>
              <el-table-column prop="sc"
                               label="市场">
              </el-table-column>
              <el-table-column prop="zyj"
                               label="止盈价">
              </el-table-column>
              <el-table-column prop="zsj"
                               label="止损价">
              </el-table-column>
              <el-table-column prop="wtsl"
                               label="委托数量">
              </el-table-column>
              <el-table-column prop="jglx"
                               label="价格类型">
              </el-table-column>
              <el-table-column prop="kmsl"
                               label="可卖数量">
              </el-table-column>
              <el-table-column prop="zxj"
                               label="最新价">
              </el-table-column>
              <el-table-column prop="ztj"
                               label="涨停价">
              </el-table-column>
              <el-table-column prop="dtj"
                               label="跌停价">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="top2">
      <div class="listContent">
        <el-tabs v-model="strategyList"
                 type="border-card">
          <el-tab-pane label="策略委托表"
                       name="entrustBox">
            <div class="headContent">
              <div class="clearfix">
                <div class="left">
                  <el-select v-model="allAccountsVal"
                             class="smallSelect"
                             placeholder="全部账户">
                    <el-option v-for="item in allAccounts"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select v-model="tacticsVal"
                             class="smallSelect"
                             placeholder="全部策略">
                    <el-option v-for="item in tactics"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select v-model="allStatesVal"
                             class="smallSelect"
                             placeholder="全部状态">
                    <el-option v-for="item in allStates"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select v-model="allCaseVal"
                             class="smallSelect"
                             placeholder="全部实例">
                    <el-option v-for="item in allCase"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="right">
                  <el-button size="small">启动</el-button>
                  <el-button size="small">暂停</el-button>
                  <el-button size="small">删除</el-button>
                </div>
              </div>
              <div class="clearfix"
                   style="padding: 10px 0px;">
                <el-table ref="multipleTable"
                          :data="entrustTable"
                          tooltip-effect="dark"
                          style="width: 100%;padding: 10px 10px;"
                          @selection-change="handleentrustTableChange">
                  <el-table-column type="selection"
                                   width="55">
                  </el-table-column>
                  <el-table-column prop="id"
                                   label="序号">
                  </el-table-column>
                  <el-table-column prop="wtsj"
                                   label="委托时间">
                  </el-table-column>
                  <el-table-column prop="zhmc"
                                   label="账户名称">
                  </el-table-column>
                  <el-table-column prop="slid"
                                   label="实例ID">
                  </el-table-column>
                  <el-table-column prop="zqdm"
                                   label="证券代码">
                  </el-table-column>
                  <el-table-column prop="zqmc"
                                   label="证券名称">
                  </el-table-column>
                  <el-table-column prop="mmfx"
                                   label="买卖方向">
                  </el-table-column>
                  <el-table-column prop="jglx"
                                   label="价格类型">
                  </el-table-column>
                  <el-table-column prop="wtzt"
                                   label="委托状态">
                  </el-table-column>
                  <el-table-column prop="wtjg"
                                   label="委托价格">
                  </el-table-column>
                  <el-table-column prop="wtlx"
                                   label="委托类型">
                  </el-table-column>
                  <el-table-column prop="wtsl"
                                   label="委托数量">
                  </el-table-column>
                  <el-table-column prop="wtsl"
                                   label="委托数量">
                  </el-table-column>
                  <el-table-column prop="wtje"
                                   label="委托金额">
                  </el-table-column>
                  <el-table-column prop="wwcsl"
                                   label="未完成数量">
                  </el-table-column>
                  <el-table-column prop="cjjj"
                                   label="成交均价">
                  </el-table-column>
                  <el-table-column prop="cjsl"
                                   label="成交数量">
                  </el-table-column>
                  <el-table-column prop="cjje"
                                   label="成交金额">
                  </el-table-column>
                  <el-table-column prop="cjbl"
                                   label="成交比例">
                  </el-table-column>
                  <el-table-column prop="zczh"
                                   label="资产账户">
                  </el-table-column>
                  <el-table-column prop="gtwtbh"
                                   label="柜台委托编号">
                  </el-table-column>
                  <el-table-column prop="wtbh"
                                   label="委托编号">
                  </el-table-column>
                  <el-table-column prop="slbz"
                                   label="实例备注">
                  </el-table-column>
                  <el-table-column prop="sflx"
                                   label="算法类型">
                  </el-table-column>
                  <el-table-column prop="bz"
                                   label="备注">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="策略成交表"
                       name="turnoveBox">
            <div class="headContent">
              <div class="clearfix">
                <div class="left">
                  <el-select v-model="allAccountsVal"
                             class="smallSelect"
                             placeholder="全部账户">
                    <el-option v-for="item in allAccounts"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select v-model="tacticsVal"
                             class="smallSelect"
                             placeholder="全部策略">
                    <el-option v-for="item in tactics"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select v-model="allStatesVal"
                             class="smallSelect"
                             placeholder="全部状态">
                    <el-option v-for="item in allStates"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select v-model="allCaseVal"
                             class="smallSelect"
                             placeholder="全部实例">
                    <el-option v-for="item in allCase"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="right">
                  <el-radio v-model="deal"
                            label="1">按实例ID+代码汇总</el-radio>
                  <el-radio v-model="status"
                            label="2">按代码汇总</el-radio>
                  <el-radio v-model="status"
                            label="3">明细</el-radio>
                </div>
              </div>
              <div class="clearfix"
                   style="padding: 10px 0px;">
                <el-table ref="multipleTable"
                          :data="turnoveTable"
                          tooltip-effect="dark"
                          style="width: 100%;padding: 10px 10px;"
                          @selection-change="handleturnoveTableChange">
                  <el-table-column prop="cjsj"
                                   label="成交时间">
                  </el-table-column>
                  <el-table-column prop="zqmc"
                                   label="证券名称">
                  </el-table-column>
                  <el-table-column prop="zqdm"
                                   label="证券代码">
                  </el-table-column>
                  <el-table-column prop="mmfx"
                                   label="买卖方向">
                  </el-table-column>
                  <el-table-column prop="wtlx"
                                   label="委托类型">
                  </el-table-column>
                  <el-table-column prop="cjjg"
                                   label="成交价格">
                  </el-table-column>
                  <el-table-column prop="cjsl"
                                   label="成交数量">
                  </el-table-column>
                  <el-table-column prop="cjje"
                                   label="成交金额">
                  </el-table-column>
                  <el-table-column prop="zhmc"
                                   label="账户名称">
                  </el-table-column>
                  <el-table-column prop="zczh"
                                   label="资产账户">
                  </el-table-column>
                  <el-table-column prop="slid"
                                   label="实例ID">
                  </el-table-column>
                  <el-table-column prop="cjbh"
                                   label="成交编号">
                  </el-table-column>
                  <el-table-column prop="gtwtbh"
                                   label="柜台委托编号">
                  </el-table-column>
                  <el-table-column prop="wtbh"
                                   label="委托编号">
                  </el-table-column>
                  <el-table-column prop="slbh"
                                   label="实例备注">
                  </el-table-column>
                  <el-table-column prop="sflx"
                                   label="算法类型">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="持仓"
                       name="bondsBox">
            <div class="headContent">
              <div class="clearfix">
                <div class="left">
                  <label>账户名称</label>
                  <el-select v-model="testAccoutValue"
                             placeholder="全部账户">
                    <el-option v-for="item in testAccout"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                  </el-select>
                  <label>证券代码</label>
                  <el-input v-model="stkcd"
                            class="smallInput"></el-input>
                </div>
                <div class="right">
                  <el-radio v-model="listStatus"
                            label="1">汇总</el-radio>
                  <el-radio v-model="listStatus"
                            label="2">明细</el-radio>
                </div>
              </div>
              <div class="clearfix"
                   style="padding: 10px 0px;">
                <el-table :data="bondsTableData"
                          style="width: 100%;padding: 10px 10px;">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-form label-position="left"
                               inline
                               class="bondsFrom">
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.zqmc }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.zqdm }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.zxj }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.dqcc }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.kysl }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.zhmc }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.zczh }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.sz }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.cccb }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.yk }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.ykb }}</span>
                        </el-form-item>
                        <el-form-item class="bondsItem">
                          <span>{{ props.row.zczb }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                  <el-table-column label="证券名称"
                                   prop="zqmc">
                  </el-table-column>
                  <el-table-column label="证券代码"
                                   prop="zqdm">
                  </el-table-column>
                  <el-table-column label="最新价"
                                   prop="zxj">
                  </el-table-column>
                  <el-table-column label="当前持仓"
                                   prop="dqcc">
                  </el-table-column>
                  <el-table-column label="可用数量"
                                   prop="kysl">
                  </el-table-column>
                  <el-table-column label="资产名称"
                                   prop="zhmc">
                  </el-table-column>
                  <el-table-column label="资产账号"
                                   prop="zczh">
                  </el-table-column>
                  <el-table-column label="成本价"
                                   prop="cbj">
                  </el-table-column>
                  <el-table-column label="市值"
                                   prop="sz">
                  </el-table-column>
                  <el-table-column label="持仓成本"
                                   prop="cccb">
                  </el-table-column>
                  <el-table-column label="盈亏"
                                   prop="yk">
                  </el-table-column>
                  <el-table-column label="盈亏比"
                                   prop="ykb">
                  </el-table-column>
                  <el-table-column label="资产占比(%)"
                                   prop="zczb">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="top3">
      <div class="ournal">
        <div class="left clearfix">
          策略运行日志
        </div>
        <div class="ournalContent clearfix">
          <div class="left">
            <label for="123">账户名称</label>
            <el-select v-model="ournalAccoutVal"
                       class="smallSelect"
                       placeholder="27717">
              <el-option v-for="item in ournalAccout"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
            <label for="123">日志级别</label>
            <el-select v-model="logLevelVal"
                       class="smallSelect"
                       placeholder="所有">
              <el-option v-for="item in logLevel"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="clearfix"
               style="padding: 10px 0px;">
            <el-table ref="ournalTable"
                      :data="ournalTableData"
                      tooltip-effect="dark"
                      style="padding: 10px 10px;"
                      @selection-change="handleOurnalTableChange">
              <el-table-column prop="rzcfss"
                               label="日志触发时间">
              </el-table-column>
              <el-table-column prop="rzdj"
                               label="日志等级">
              </el-table-column>
              <el-table-column prop="bz"
                               label="备注">
              </el-table-column>
              <el-table-column prop="slh"
                               label="实例号">
              </el-table-column>
              <el-table-column prop="rznr"
                               label="日志内容">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <!-- 新建策略1 -->
    <el-dialog title="新建策略"
               class="newStrategy"
               :visible.sync="dialogNewStrategyVisible">
      <i class="el-icon-arrow-right arrow-right"
         v-if="isNewStrategyVisible"
         @click="handleChangeNext"></i>
      <i class="el-icon-arrow-left arrow-right"
         v-else
         @click="handleChange"></i>

      <div class="newStrategyTitle clearfix">
        <div class="left">
          <label for="123">账户名称</label>
          <el-select v-model="testAccoutValue"
                     placeholder="test_client149">
            <el-option v-for="item in testAccout"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="right">
          <el-checkbox v-model="checked">记住当前填写内容</el-checkbox>
        </div>
      </div>
      <div class="newStrategyContent">
        <div class="newStrategyContentTitle">
          <ul class="line lineTitle">
            <li>参数名</li>
            <li class="lineWidth">参数值</li>
            <li>参数描述</li>
          </ul>
          <ul class="line">
            <li>证券代码</li>
            <li class="lineWidth">
              <el-input v-model="account"
                        placeholder=""></el-input>
            </li>
            <li>单只标的：例如"601688"</li>
          </ul>
          <ul class="line">
            <li>委托方向</li>
            <li class="lineWidth">
              <el-select v-model="delegateDirectionVal"
                         placeholder="买入">
                <el-option v-for="item in delegateDirection"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>买入，卖出</li>
          </ul>
          <ul class="line">
            <li>委托价格</li>
            <li class="lineWidth">
              <el-select v-model="commissionPriceValue"
                         placeholder="最新价">
                <el-option v-for="item in commissionPrice"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>条件触发时，实行行情对应挡位价格</li>
          </ul>
          <ul class="line">
            <li>委托量方式</li>
            <li class="lineWidth">
              <el-select v-model="modeEntrustVal"
                         placeholder="按数量">
                <el-option v-for="item in modeEntrust"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>委托数量的计量方式</li>
          </ul>
          <ul class="line">
            <li>委托数量</li>
            <li class="lineWidth">
              <el-input v-model="entrustQuantity"
                        style="width: 90%"
                        placeholder=""></el-input>
              <span>股</span>
            </li>
            <li>单只标的：例如"601688"</li>
          </ul>
          <ul class="line">
            <li>买入条件</li>
          </ul>
          <ul class="line">
            <li>
              <el-checkbox v-model="breaksChecked">a.下破:</el-checkbox>
            </li>
            <li class="lineWidth">
              <span>最新价格下破:</span>
              <el-select v-model="latestPriceBreaksVal"
                         class="inputWidth"
                         placeholder="按数量">
                <el-option v-for="item in latestPriceBreaks"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <el-input v-model="latestPriceBreak"
                        class="inputWidth"
                        style="80px"
                        placeholder="0"></el-input>
              <span>元 执行</span>
            </li>
            <li class="txt"
                title="策略启动后最新价>=下破价,随后，若最新价
              <下破价,则自动买入">策略启动后最新价>=下破价,随后，若最新价 小于下破价,则自动买入
            </li>
          </ul>
          <ul class="line">
            <li>
              <el-checkbox v-model="upChecked">b.上穿:</el-checkbox>
            </li>
            <li class="lineWidth">
              <span>最新价格上穿:</span>
              <el-select v-model="latestUpPriceVal"
                         class="inputWidth"
                         placeholder="按数量">
                <el-option v-for="item in latestPrice"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <el-input v-model="latestUpPrice"
                        class="inputWidth"
                        style="80px"
                        placeholder="0"></el-input>
              <span>元 执行</span>
            </li>
            <li class="txt"
                title="策略启动后最新价<=上穿价,随后，若最新价
              >上穿价,则自动买入">策略启动后最新价 小于等于上 穿价,随后，若最新价>上穿价,则自动买入</li>
          </ul>
          <ul class="line">
            <li>
              <el-checkbox v-model="reboundChecked">c.反弹:</el-checkbox>
            </li>
            <li class="lineWidth">
              <p>
                <span>最新价格下破:</span>
                <el-select v-model="reboundLatestPriceBreakVal"
                           class="inputWidth"
                           placeholder="按价位">
                  <el-option v-for="item in reboundLatestPriceBreak"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                </el-select>
                <el-input v-model="reboundLatestPrice"
                          class="inputWidth"
                          style="80px"
                          placeholder="0"></el-input>
                <span>元 后</span>
              </p>
              <p>
                <span>反弹:</span>
                <el-select v-model="reboundLatestPriceBreaksVal"
                           style="80px"
                           class="selectInput"
                           placeholder="按比例">
                  <el-option v-for="item in reboundLatestPriceBreaks"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                </el-select>
                <el-input v-model="reboundLatestPrice"
                          class="inputWidth"
                          style="80px"
                          placeholder="0"></el-input>
                <span>元执行</span>
              </p>
            </li>
            <li class="txt"
                title="策略启动后,若最新价下破设定值,随后,若反弹（最新价比下破后的最低价高xx元高xx%），则自动买入">策略启动后,若最新价下破设定值,随后,若反弹（最新价比下破后的最低价高xx元高xx%），则自动买入</li>
          </ul>
          <ul class="line"
              style="padding-top: 20px">
            <li>备注</li>
            <li class="lineWidth">
              <el-input v-model="account"
                        placeholder="买入最新价0股"></el-input>
            </li>
            <li>供使用者对策略实例做标记</li>
          </ul>
          <div v-show="isNewStrategyVisible">
            <ul class="line">
              <li class="titleBlue">策略说明</li>
            </ul>
            <p style="text-align: left;margin-top:-10px;">
              条件策略，是针对标的证券预先设置条件埋单，最多可设置三种触发条件，当最新价满足任一条件时，立即触发自动下单；特别需要注意的是，当委托价格对应的盘口价格为0时，策略暂停，不予下单；若下单成功，策略状态更新为“已完成”，且第二个交易日起不再重建；若一直未触发且策略实例未被删除，则第二个交易日重建该策略。
            </p>
          </div>
          <div class="submit">
            <el-button size='small'>确定</el-button>
            <el-button size='small'
                       @click="handleCancel">取消</el-button>
          </div>
        </div>
      </div>
      <!-- <p>hello world</p> -->
    </el-dialog>
    <!-- 新建策略2 -->
    <el-dialog title="新建策略"
               class="newStrategy2"
               :visible.sync="dialogNewStrategyVisible2">
      <i class="el-icon-arrow-right arrow-right"
         @click="handleChangeNext2"
         v-if="isNewStrategyVisible2"></i>
      <i class="el-icon-arrow-left arrow-right"
         v-else
         @click="handleChange2"></i>
      <div class="newStrategyTitle clearfix">
        <div class="left">
          <label for="123">账户名称</label>
          <el-select v-model="testAccoutValue2"
                     placeholder="test_client149">
            <el-option v-for="item in testAccout2"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="newStrategyContent">
        <ul class="line lineTitle">
          <li>参数名</li>
          <li class="lineWidth">参数值</li>
          <li>参数描述</li>
        </ul>
        <ul class="line">
          <li>证券代码</li>
          <li class="lineWidth">
            <el-input v-model="code2"
                      placeholder=""></el-input>
          </li>
          <li>单只标的，例如'601688'</li>
        </ul>
        <ul class="line">
          <li>最新价</li>
          <li class="lineWidth">
            <el-input v-model="latestPrice2"
                      placeholder=""></el-input>元
          </li>
          <li>标的最新价</li>
        </ul>
        <ul class="line">
          <li>委托方向</li>
          <li class="lineWidth">
            <el-select v-model="delegateDirectionVal2"
                       placeholder="买入">
              <el-option v-for="item in delegateDirection2"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>买入,卖出</li>
        </ul>
        <ul class="line">
          <li>委托总量</li>
          <li class="lineWidth">
            <el-input v-model="totalEntrustment"
                      style="width: 90%"
                      placeholder=""></el-input>股
          </li>
          <li>该策略最多能成交的股数</li>
        </ul>
        <ul class="line">
          <li>委托限价</li>
          <li class="lineWidth">
            <el-input v-model="mitedPrice"
                      style="width: 90%"
                      placeholder=""></el-input>元
          </li>
          <li></li>
        </ul>
        <ul class="line">
          <li>触发条件</li>
          <li class="lineWidth">
            <el-radio v-model="trigger"
                      label="1">a.下破</el-radio>
            <el-radio v-model="trigger"
                      label="2">b.上穿</el-radio>
          </li>
          <li class="txt"
              title="下破买入：当最新价<=委托限价 自动买入上穿买入：当最新价>=委托限价 自动买入">下破买入：当最新价 小于等于委托限价 自动买入 下破买入：当最新价小于等于委托限价 自动买入
          </li>
        </ul>
        <ul class="line">
          <li>盘口深度</li>
          <li class="lineWidth">
            <el-select v-model="depthVal"
                       placeholder="1">
              <el-option v-for="item in depth"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>盘口深度挂单之和*扫盘比例、剩余委托数量两者较小值为委托数量</li>
        </ul>
        <ul class="line">
          <li>扫盘比例</li>
          <li class="lineWidth">
            <el-input v-model="ratio"
                      style="width: 90%"
                      placeholder=""></el-input>%
          </li>
          <li></li>
        </ul>
        <ul class="line">
          <li>自动撤单</li>
          <li class="lineWidth">
            <el-input v-model="spontaneous"
                      style="width: 90%"
                      placeholder=""></el-input>%
          </li>
          <li class="txt"
              title="该时间间隔后仍未完全成交，自动撤回原委托，重新分布，0表示不撤单">该时间间隔后仍未完全成交，自动撤回原委托，重新分布，0表示不撤单</li>
        </ul>
        <ul class="line">
          <li>运行时间</li>
          <li class="lineWidth">
            <el-input v-model="startTime"
                      class="inputWidth"
                      style="80px"
                      placeholder="101447"></el-input>~
            <el-input v-model="endTime"
                      class="inputWidth"
                      style="80px"
                      placeholder="145700"></el-input>
          </li>
          <li class="txt"
              title="策略运行时段，格式为'时时分分秒秒'">策略运行时段，格式为'时时分分秒秒'</li>
        </ul>
        <ul class="line">
          <li>备注</li>
          <li class="lineWidth">
            <el-input v-model="remarks"
                      placeholder=""></el-input>
          </li>
          <li class="txt"
              title="供使用者对策略实例做标记">供使用者对策略实例做标记</li>
        </ul>
        <div v-show="isNewStrategyVisible2"
             style="height: 100px;">
          <ul class="line">
            <li class="left clearfix titleBlue">策略说明</li>
          </ul>
          <ul class="line txtLine">
            <li class="left clearfix">市场流动性交易策略是单标的策略，在运行时间段内，系统实时监控行情，当最新价>=委托限价（上穿/止盈）或最新价 小于等于委托限价（下破/止损）时，自动下达委托。当累计成交量等于委托总量时，策略状态更新为“已完成”。该策略为单日策略，无论是否完成，下一个交易日均不重建。
            </li>
          </ul>
        </div>
        <div class="submit">
          <el-button size='small'>确定</el-button>
          <el-button size='small'
                     @click="handleCancel">取消</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 新建策略3 -->
    <el-dialog title="新建策略"
               class="newStrategy3"
               :visible.sync="dialogNewStrategyVisible3">
      <i class="el-icon-arrow-right arrow-right"
         @click="handleChangeNext3"
         v-if="isNewStrategyVisible3"></i>
      <i class="el-icon-arrow-left arrow-right"
         v-else
         @click="handleChange3"></i>
      <div class="newStrategyTitle clearfix">
        <div class="left">
          <label for="123">账户名称</label>
          <el-select v-model="testAccoutValue3"
                     placeholder="test_client149">
            <el-option v-for="item in testAccout3"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="newStrategyContent">
        <ul class="line lineTitle">
          <li>参数名</li>
          <li class="lineWidth">参数值</li>
          <li>参数描述</li>
        </ul>
        <ul class="line">
          <li>代码</li>
          <li class="lineWidth">
            <el-input v-model="code"
                      placeholder=""></el-input>
          </li>
          <li>单只标的，例如'601688'</li>
        </ul>
        <ul class="line">
          <li>买入类型</li>
          <li class="lineWidth">
            <el-select v-model="buyingTypeVal"
                       placeholder="普通买入">
              <el-option v-for="item in buyingType"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>买入方向委托类型</li>
        </ul>
        <ul class="line">
          <li>卖出类型</li>
          <li class="lineWidth">
            <el-select v-model="sellingTypeVal"
                       placeholder="普通卖出">
              <el-option v-for="item in sellingType"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>卖出方向委托类型</li>
        </ul>
        <ul class="line">
          <li>证券市场</li>
          <li class="lineWidth">
          </li>
          <li>1-上海 2-深圳</li>
        </ul>
        <ul class="line">
          <li>基准价</li>
          <li class="lineWidth">
            <el-input v-model="basePrice"
                      placeholder=""></el-input>
          </li>
          <li class="txt"
              title="用于生成卖单委托价格的基准价">用于生成卖单委托价格的基准价</li>
        </ul>
        <ul class="line">
          <li>委托量方式</li>
          <li class="lineWidth">
            <el-select v-model="delegateModeVal"
                       placeholder="按数量">
              <el-option v-for="item in delegateMode"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>委托数量的计量方式</li>
        </ul>
        <ul class="line">
          <li>委托量</li>
          <li class="lineWidth">
            <el-input v-model="orderVolume"
                      placeholder=""></el-input>
          </li>
          <li class="txt"
              title="买入卖出委折的委托数量或.买入/卖出委托的委托数量或金额，为金额时，委托数量金额/买入价，向下取整:注:若计算出的委托数量为10以下季股，取整为0，该方向不予下达">买入卖出委折的委托数量或.买入/卖出委托的委托数量或金额，为金额时，委托数量金额/买入价，向下取整:注:若计算出的委托数量为10以下季股，取整为0，该方向不予下达</li>
        </ul>
        <ul class="line">
          <li>差价</li>
          <li class="lineWidth">
            <el-input v-model="disparity"
                      placeholder=""></el-input>
          </li>
          <li>委托与基础价格之间的偏离值</li>
        </ul>
        <ul class="line">
          <li>上限价</li>
          <li class="lineWidth">
            <el-input v-model="ceilingPrice"
                      placeholder=""></el-input>
          </li>
          <li class="txt"
              title="委托价格最大值,委托价格>=上限价时,不予下达该笔委托">委托价格最大值,委托价格>=上限价时,不予下达该笔委托</li>
        </ul>
        <ul class="line">
          <li>下限价</li>
          <li class="lineWidth">
            <el-input v-model="lowerPrice"
                      placeholder=""></el-input>
          </li>
          <li class="txt"
              title="委托价格最大值,委托价格>=上限价时,不予下达该笔委托">委托价格最小值,委托价格 小于等于下限价时,不予下达该笔委托
          </li>
        </ul>
        <ul class="line">
          <li>最小持仓量</li>
          <li class="lineWidth">
            <el-input v-model="minimumPosition"
                      placeholder=""></el-input>
          </li>
          <li class="txt"
              title="持仓数量-卖出挂单数量-预卖出委托数量>=最小持仓量">持仓数量-卖出挂单数量-预卖出委托数量>=最小持仓量</li>
        </ul>
        <ul class="line">
          <li>最大持仓量</li>
          <li class="lineWidth">
            <el-input v-model="maximumPosition"
                      placeholder=""></el-input>
          </li>
          <li class="txt"
              title="持仓数量-买入挂单数量-预卖出委托数量<=最大持仓量">持仓数量-买入挂单数量-预卖出委托数量 小于等于最大持仓量
          </li>
        </ul>
        <div v-show="isNewStrategyVisible3">
          <ul class="line">
            <li class="left clearfix titleBlue">策略说明</li>
          </ul>
          <ul class="line txtLine">
            <li class="left clearfix">在上下限构成的区间内，根据基准价和价差构成的网格价进行买卖，实现自动低买高卖。</li>
          </ul>
          <ul class="line">
            <li class="left clearfix titleBlue">执行效果图</li>
          </ul>
          <p>
            <img src=""
                 alt="">
          </p>
        </div>
        <div class="submit">
          <el-button size='small'>确定</el-button>
          <el-button size='small'
                     @click="handleCancel">取消</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 新建策略4 -->
    <el-dialog title="新建策略"
               class="newStrategy3"
               :visible.sync="dialogNewStrategyVisible4">
      <i class="el-icon-arrow-right arrow-right"
         @click="handleChangeNext4"
         v-if="isNewStrategyVisible4"></i>
      <i class="el-icon-arrow-left arrow-right"
         v-else
         @click="handleChange4"></i>
      <el-tabs v-model="standard">
        <el-tab-pane label="单标的"
                     name="single">
          <div class="newStrategyTitle clearfix">
            <div class="left">
              <label for="123">账户名称</label>
              <el-select v-model="testAccoutValue4"
                         class="smallSelect"
                         placeholder="test_client149">
                <el-option v-for="item in testAccout4"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <label for="123">证券代码</label>
              <el-input v-model="code4"
                        class="smallInput"></el-input>-
              <label for="123"
                     style="padding-left: 20px">成本价</label> -
            </div>
          </div>
          <div class="newStrategyContent">
            <ul class="line lineTitle">
              <li>参数名</li>
              <li class="lineWidth">参数值</li>
              <li>参数描述</li>
            </ul>
            <ul class="line">
              <li>止盈价格</li>
              <li class="lineWidth">
                <el-input v-model="profitRate"
                          class="smallInput"></el-input>%
                <el-input v-model="profit"
                          class="smallInput"></el-input>元
              </li>
              <li class="txt"
                  title="成本价*(1+比例)，也可直接输入价格">成本价*(1+比例)，也可直接输入价格</li>
            </ul>
            <ul class="line">
              <li>止损价格</li>
              <li class="lineWidth">
                <el-input v-model="stopPriceRate"
                          class="smallInput"></el-input>%
                <el-input v-model="stopPrice"
                          class="smallInput"></el-input>元
              </li>
              <li class="txt"
                  title="成本价*(1-比例)，也可直接输入价格">成本价*(1-比例)，也可直接输入价格</li>
            </ul>
            <ul class="line">
              <li>卖出数量</li>
              <li class="lineWidth">
                <el-input v-model="selling"
                          aria-placeholder="0"></el-input>股
              </li>
              <li class="txt"
                  title="触发止盈/止损条件，卖出的委托数量">触发止盈/止损条件，卖出的委托数量</li>
            </ul>
            <ul class="line">
              <li>委托价格</li>
              <li class="lineWidth">
                <el-select v-model="entrustVal4"
                           placeholder="触发价">
                  <el-option v-for="item in entrust"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                </el-select>
              </li>
              <li class="txt"
                  title="触发止盈/止损条件，卖出的委托价格">触发止盈/止损条件，卖出的委托价格</li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="双标的"
                     name="double">
          <div class="newStrategyTitle clearfix">
            <div class="left clearfix">
              <label for="123">账户名称</label>
              <el-select v-model="testAccoutValue5"
                         class="smallSelect"
                         placeholder="test_client149">
                <el-option v-for="item in testAccout5"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
            <p class="clearfix"></p>
            <div class="left">证券列表</div>
            <div class="right">新建</div>

          </div>
          <div class="newStrategyContent clearfix">
            <el-table ref="multipleTable"
                      :data="tableData"
                      tooltip-effect="dark"
                      style="width: 100%"
                      @selection-change="handleSelectionChange">
              <el-table-column type="selection"
                               width="55">
              </el-table-column>
              <el-table-column prop="id"
                               label="序号">
              </el-table-column>
              <el-table-column prop="code"
                               label="代码">
              </el-table-column>
              <el-table-column prop="name"
                               label="名称">
              </el-table-column>
              <el-table-column prop="sc"
                               label="市场">
              </el-table-column>
              <el-table-column prop="zyj"
                               label="止盈价">
              </el-table-column>
              <el-table-column prop="zsj"
                               label="止损价">
              </el-table-column>
              <el-table-column prop="wtsl"
                               label="委托数量">
              </el-table-column>
              <el-table-column prop="jglx"
                               label="价格类型">
              </el-table-column>
              <el-table-column prop="kmsl"
                               label="可卖数量">
              </el-table-column>
              <el-table-column prop="zxj"
                               label="最新价">
              </el-table-column>
              <el-table-column prop="ztj"
                               label="涨停价">
              </el-table-column>
              <el-table-column prop="dtj"
                               label="跌停价">
              </el-table-column>
            </el-table>
            <p class="left p10">共0只代码，选中0只进行交易</p>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div v-show="isNewStrategyVisible4"
           style="height: 260px">
        <ul class="line">
          <li class="left clearfix titleBlue">策略说明</li>
        </ul>
        <ul class="line txtLine">
          <li class="left clearfix"
              style="height: 110px;">止盈止损策略，是指针对标的证券设置止盈价、止损价、委托价格、委托数量，当证券最新价≥止盈价或最新价≤止损价，向柜台发送预埋的卖出委托。触发后，策略状态更新为“已完成”，且下一个交易日起不再重建；若一直未触发且策略实例未被删除，则下一个交易日依然重建该策略。 多标的止盈止损策略，可针对多只证券设置止盈价、止损价、委托数量、价格类型。当证券最新价>=止盈价或最新价 小于等于止损价（可选涨停不卖），向柜台发送预埋的卖出委托。所有标的均触发，策略状态更新为“已完成”。该策略为单日策略，无论是否完成，下一个交易日均不重建。
          </li>
        </ul>
        <ul class="line">
          <li class="left clearfix titleBlue"
              style="margin-top: 20px">执行效果图</li>
        </ul>
        <p>
          <img src=""
               alt="">
        </p>
      </div>
      <div class="submit">
        <el-button size='small'>确定</el-button>
        <el-button size='small'
                   @click="handleCancel">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Box01',
  data () {
    return {
      // 全部账户
      allAccountsVal: '',
      allAccounts: [
        {
          value: 'test_client149',
          label: 'test_client149'
        }, {
          value: 'test_client256',
          label: 'test_client256'
        }
      ],
      // 全部策略
      tacticsVal: '',
      tactics: [
        {
          value: 'tactics01',
          label: '条件单'
        }, {
          value: 'tactics02',
          label: '流动性策略'
        },
        {
          value: 'tactics03',
          label: '网络交易'
        },
        {
          value: 'tactics03',
          label: '止盈止损'
        }
      ],
      // 全部状态
      allStatesVal: '',
      allStates: [
        {
          value: 'states01',
          label: '未启动'
        }, {
          value: 'states02',
          label: '运行在'
        },
        {
          value: 'states03',
          label: '已暂停'
        }, {
          value: 'states04',
          label: '已完成'
        },
        {
          value: 'states05',
          label: '当日已过期'
        }
      ],
      // 全部实例
      allCaseVal: '',
      allCase: [
        {
          value: '26717',
          label: '26717'
        }, {
          value: '26718',
          label: '26718'
        }
      ],
      ournalTableData: [],
      // 日志级别
      logLevelVal: '',
      logLevel: [
        {
          value: 'log01',
          label: 'Critcal'
        }, {
          value: 'log02',
          label: 'Error'
        }, {
          value: 'log03',
          label: 'Warring'
        }, {
          value: 'log04',
          label: 'Info'
        }
      ],
      ournalAccoutVal: '26717',
      ournalAccout: [
        {
          value: '26717',
          label: '26717'
        }, {
          value: '26716',
          label: '26716'
        }
      ],
      bondsTableData: [
        {
          zqmc: '平安银行[1]',
          zqdm: '000001',
          zxj: 13.27,
          dqcc: 206726300,
          kysl: 906726300,
          zhmc: '汇总',
          zczh: '汇总',
          cbj: '00',
          sz: '1206852731600',
          cccb: 87227970060,
          yk: 11214323,
          ykb: 1283.68,
          zczb: '0'
        }, {
          zqmc: '平安银行',
          zqdm: '000001',
          zxj: 13.27,
          dqcc: 206726300,
          kysl: 906726300,
          zhmc: '汇总',
          zczh: '汇总',
          cbj: '___',
          sz: '1206852731600',
          cccb: 87227970060,
          yk: 11214323,
          ykb: 1283.68,
          zczb: ''
        }
      ],
      // 证券代码
      stkcd: '',
      listStatus: '1',
      deal: '1',
      // 状态
      status: '1',
      // 策略列表
      strategyList: 'entrustBox',
      // 以下是新建策略弹窗4数据
      tableData: [],
      // 委托价格
      entrustVal: '',
      entrust: [
        {
          value: 'entrust01',
          label: '触发价'
        }, {
          value: 'entrust02',
          label: '最新价'
        }, {
          value: 'entrust03',
          label: '买一'
        }, {
          value: 'entrust04',
          label: '卖一'
        }],
      // 卖出数量
      selling: '',
      // 止盈价格
      profitRate: '',
      profit: '',
      // 止损价格
      stopPriceRate: '',
      stopPrice: '',
      // 证券代码
      code4: '',
      // 账户名称(单标)
      testAccoutValue4: '',
      testAccout4: [
        {
          value: '149',
          label: 'test_client149'
        }, {
          value: '256',
          label: 'test_client256'
        }],
      // 账户名称(双标)
      testAccoutValue5: '',
      testAccout5: [
        {
          value: '149',
          label: 'test_client149'
        }, {
          value: '256',
          label: 'test_client256'
        }],
      // tabs标签
      standard: 'single',
      // 以下是新建策略弹窗2数据
      // 备注
      remarks: '',
      // 运行时间
      startTime: '',
      endTime: '',
      // 自动撤单
      spontaneous: '',
      // 最大笔数
      maximum: '',
      // 扫盘比例
      ratio: '',
      // 盘口深度
      depth: [
        {
          value: 'depth01',
          label: '1'
        }, {
          value: 'depth02',
          label: '2'
        }, {
          value: 'depth03',
          label: '3'
        }, {
          value: 'depth04',
          label: '4'
        }, {
          value: 'depth05',
          label: '5'
        }, {
          value: 'depth06',
          label: '6'
        }, {
          value: 'depth07',
          label: '7'
        }, {
          value: 'depth08',
          label: '8'
        }, {
          value: 'depth09',
          label: '9'
        }, {
          value: 'depth10',
          label: '10'
        }
      ],
      depthVal: '',
      // 触发条件
      trigger: '',
      // 委托限价
      mitedPrice: '',
      // 委托总量
      totalEntrustment: '',
      // 委托方向
      delegateDirection2: [
        {
          value: 'buy',
          label: '买入'
        }, {
          value: 'sell',
          label: '卖出'
        }],
      delegateDirectionVal2: '',
      // 最新价
      latestPrice2: '',
      // 证券代码
      code2: '',
      // 账户名称
      testAccout2: [
        {
          value: '149',
          label: 'test_client149 2019243'
        }, {
          value: '256',
          label: 'test_client256 20048659'
        }],
      testAccoutValue2: '',
      // 以下是新建策略弹窗3数据
      // 上限价
      ceilingPrice: '',
      // 下限价
      lowerPrice: '',
      // 最大持仓量
      maximumPosition: '',
      // 最小持仓量
      minimumPosition: '',
      // 差价
      disparity: '',
      // 委托量
      orderVolume: '',
      // 委托方式
      delegateMode: [
        {
          value: 'delegateQuantity',
          label: '按数量'
        }, {
          value: 'delegateAmount',
          label: '按金额'
        }],
      delegateModeVal: '',
      // 基准价
      basePrice: '',
      // 卖出类型
      sellingTypeVal: '',
      sellingType: [
        {
          value: 'sellingType01',
          label: '普通卖出'
        }, {
          value: 'sellingType02',
          label: '担保品卖出'
        }, {
          value: 'sellingType03',
          label: '买券还款'
        }, {
          value: 'sellingType04',
          label: '专项融券卖出'
        }],
      // 买入类型
      buyingTypeVal: '',
      buyingType: [
        {
          value: 'buyingType01',
          label: '普通买入'
        }, {
          value: 'buyingType02',
          label: '担保品买入'
        }, {
          value: 'buyingType03',
          label: '融资买入'
        }, {
          value: 'buyingType04',
          label: '买券还券'
        }],
      // 代码
      code: '',
      // 账户名称
      testAccout3: [
        {
          value: '149',
          label: 'test_client149 2019243'
        }, {
          value: '256',
          label: 'test_client256 20048659'
        }],
      testAccoutValue3: '',
      // 以下是新建策略弹窗1数据
      // 反弹最新价格下破
      reboundLatestPrice: 0,
      reboundLatestPriceBreakVal: '',
      reboundLatestPriceBreak: [
        {
          value: 'lpbPrice',
          label: '按价格'
        }, {
          value: 'lpbUpDown',
          label: '按涨跌幅'
        }],
      // 反弹
      reboundLatestPriceBreaksVal: '',
      reboundLatestPriceBreaks: [
        {
          value: 'lpbPrices',
          label: '按价格'
        }, {
          value: 'inProportion',
          label: '按比例'
        }],
      // 最新价格上穿
      latestUpPriceVal: '',
      latestUpPrice: '',
      latestPrice: [
        {
          value: 'lpPrice',
          label: '按价格'
        }, {
          value: 'lpUpDown',
          label: '按涨跌幅'
        }],
      // 选择下破
      breaksChecked: false,
      // 选择上穿
      upChecked: false,
      // 选择反弹
      reboundChecked: false,
      // 最新价格下破
      latestPriceBreak: '',
      latestPriceBreaks: [
        {
          value: 'lpbPrice',
          label: '按价格'
        }, {
          value: 'lpbUpDown',
          label: '按涨跌幅'
        }],
      latestPriceBreaksVal: '',
      // 委托数量
      entrustQuantity: '',
      // 委托量方式
      modeEntrust: [
        {
          value: 'quantity',
          label: '按数量'
        }, {
          value: 'amount',
          label: '按金额'
        }],
      modeEntrustVal: '',
      // 委托价格
      commissionPrice: [
        {
          value: 'price01',
          label: '最新价'
        }, {
          value: 'price02',
          label: '涨停价'
        }, {
          value: 'price03',
          label: '买一价'
        }, {
          value: 'price04',
          label: '买二价'
        }, {
          value: 'price05',
          label: '买三价'
        }, {
          value: 'price06',
          label: '买四价'
        }, {
          value: 'price07',
          label: '买五价'
        }, {
          value: 'price08',
          label: '卖一价'
        }, {
          value: 'price09',
          label: '卖二价'
        }, {
          value: 'price10',
          label: '卖三价'
        }],
      commissionPriceValue: '',
      // 委托方向
      delegateDirection: [
        {
          value: 'buy',
          label: '买入'
        }, {
          value: 'sell',
          label: '卖出'
        }],
      delegateDirectionVal: '',
      // 证券代码
      account: '',
      // 新建策略弹窗
      dialogNewStrategyVisible: false,
      isNewStrategyVisible: false,
      // 新建策略弹窗2
      dialogNewStrategyVisible2: false,
      isNewStrategyVisible2: false,
      // 新建策略弹窗3
      dialogNewStrategyVisible3: false,
      isNewStrategyVisible3: false,
      // 新建策略弹窗4
      dialogNewStrategyVisible4: false,
      isNewStrategyVisible4: false,
      // 显示新建策略弹窗2
      // 账户名称
      testAccout: [
        {
          value: '149',
          label: 'test_client149'
        }, {
          value: '256',
          label: 'test_client256'
        }],
      testAccoutValue: '',
      // 记住当前填写内容
      checked: false
    }
  },
  methods: {
    // 新建策略上面两个弹窗事件
    handleChange: function () {
      this.isNewStrategyVisible = true
    },
    handleChangeNext: function () {
      this.isNewStrategyVisible = false
    },
    // 取消
    // handleCancel: function () {
    //   this.dialogNewStrategyVisible = false
    // },
    // 新建策略1
    selectNewStrategy: function () {
      this.dialogNewStrategyVisible = true
      this.isNewStrategyVisible = false
    },
    // 新建策略2
    selectNewStrategy1: function () {
      this.dialogNewStrategyVisible2 = true
      this.isNewStrategyVisible2 = false
    },
    // 新建策略3
    selectNewStrategy2: function () {
      this.dialogNewStrategyVisible3 = true
      this.isNewStrategyVisible3 = false
    },
    // 新建策略4
    selectNewStrategy3: function () {
      this.dialogNewStrategyVisible4 = true
      this.isNewStrategyVisible4 = false
    },
    // 新建策略2弹窗事件
    handleChange2: function () {
      this.isNewStrategyVisible2 = true
    },
    handleChangeNext2: function () {
      this.isNewStrategyVisible2 = false
    },
    // 新建策略3弹窗事件
    handleChange3: function () {
      this.isNewStrategyVisible3 = true
    },
    handleChangeNext3: function () {
      this.isNewStrategyVisible3 = false
    },
    // 新建策略4弹窗事件
    handleChange4: function () {
      this.isNewStrategyVisible4 = true
    },
    handleChangeNext4: function () {
      this.isNewStrategyVisible4 = false
    },
    // 取消
    handleCancel: function () {
      this.dialogNewStrategyVisible = false
      this.dialogNewStrategyVisible2 = false
      this.dialogNewStrategyVisible3 = false
      this.dialogNewStrategyVisible4 = false
    }
  }
}
</script>
<style>
/* 新建策略2弹窗 */
.newStrategy2 .el-dialog .el-dialog__body {
  padding: 10px 20px;
  font-size: 12px;
}
.newStrategy2 .el-dialog .el-dialog__title {
  float: left;
  font-size: 14px;
  line-height: 1;
}
.newStrategy2 .newStrategyTitle .el-input,
.newStrategy2 .newStrategyTitle .el-input__inner,
.newStrategy2 .line .el-input,
.newStrategy2 .line .el-input__inner {
  height: 24px !important;
  width: auto;
}
.newStrategy2,
.newStrategyContent,
.newStrategyContent .right .el-checkbox .checkbox__label {
  font-size: 12px !important;
}
.newStrategy2 .newStrategyContent .line {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
}
img {
  display: block;
  background: #4f9ae6;
  height: 80px;
  width: 100%;
}
.newStrategy2 .newStrategyContent .txtLine {
  margin: -10px 0 10px 0;
}
.newStrategy2 .newStrategyContent .line li {
  height: 22px;
  flex: 1;
  text-align: left;
}
.newStrategy2 .newStrategyContent .line .lineWidth {
  height: 22px;
  flex: 2;
  text-align: left;
}
.newStrategy2 .newStrategyContent .line .txt {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.newStrategy2 .newStrategyContent .lineTitle li {
  text-align: center;
}
.newStrategy2 .line .inputWidth .el-input,
.newStrategy2 .line .inputWidth .el-input__inner {
  width: 100px !important;
}
/* 新建策略3弹窗 */
.newStrategy3 .el-dialog .el-dialog__body {
  padding: 10px 20px;
  font-size: 12px;
}
.newStrategy3 .el-dialog .el-dialog__title {
  float: left;
  font-size: 14px;
  line-height: 1;
}
.newStrategy3 .newStrategyTitle .el-input,
.newStrategy3 .newStrategyTitle .el-input__inner,
.newStrategy3 .line .el-input,
.newStrategy3 .line .el-input__inner {
  height: 24px !important;
  width: auto;
}
.newStrategy3,
.newStrategyContent,
.newStrategyContent .right .el-checkbox .checkbox__label {
  font-size: 12px !important;
}
.newStrategy3 .newStrategyContent .line {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
}
.newStrategy3 .newStrategyContent img {
  display: block;
  background: #4f9ae6;
  height: 80px;
  width: 100%;
}
.newStrategy3 .newStrategyContent .txtLine {
  margin: -10px 0 10px 0;
}
.newStrategy3 .newStrategyContent .line li {
  height: 22px;
  flex: 1;
  text-align: left;
}
.newStrategy3 .newStrategyContent .line .lineWidth {
  height: 22px;
  flex: 2;
  text-align: left;
}
.newStrategy3 .newStrategyContent .line .txt {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.newStrategy3 .newStrategyContent .lineTitle li {
  text-align: center;
}
/* 新建策略1、2弹窗 */
.newStrategy .el-dialog .el-dialog__body {
  padding: 10px 20px;
  font-size: 12px;
}
.newStrategy .el-dialog .el-dialog__title {
  float: left;
  font-size: 14px;
  line-height: 1;
}
.newStrategy,
.newStrategyContent,
.newStrategyContentTitle .right .el-checkbox .checkbox__label {
  font-size: 12px !important;
}
.newStrategy .newStrategyContent .newStrategyContentTitle .line {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
}
.newStrategy .newStrategyTitle .el-input,
.newStrategy .newStrategyTitle .el-input__inner,
.newStrategy .line .el-input,
.newStrategy .line .el-input__inner {
  height: 24px !important;
  width: auto;
}
.newStrategy .line .inputWidth .el-input,
.newStrategy .line .inputWidth .el-input__inner {
  width: 80px !important;
}
.newStrategy .selectInput,
.newStrategy .selectInput .el-input__inner {
  width: 80px !important;
}
.newStrategy .newStrategyContent .newStrategyContentTitle .line li {
  height: 22px;
  flex: 1;
  text-align: left;
}
.newStrategy .newStrategyContent .newStrategyContentTitle .line .lineWidth {
  height: 22px;
  flex: 2;
  text-align: left;
}
.newStrategy .newStrategyContent .newStrategyContentTitle .line .txt {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.newStrategy .newStrategyContent .newStrategyContentTitle .lineTitle li {
  text-align: center;
}
/* 提交按钮 */
.submit {
  padding: 10px 0;
}
.submit .el-button--small,
.el-button--small.is-round {
  padding: 5px 15px;
}
/* 公共 */
.smallSelect,
.smallSelect .el-input__inner,
.smallInput,
.smallInput .el-input__inner {
  width: 90px !important;
}
.el-input__inner,
.el-input__inner {
  height: 24px !important;
}
.titleBlue {
  color: #4f9ae6;
}
.arrow-right {
  position: absolute;
  top: 16px;
  right: 36px;
  cursor: pointer;
}
.left {
  display: block;
  float: left;
}
.right {
  display: block;
  float: right;
}
.p10 {
  padding: 10px 0;
}
.clearfix {
  zoom: 1;
  clear: both;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  line-height: 0;
  clear: both;
  visibility: hidden;
}
.btn {
  margin-top: 10px;
}
.top1,
.top2,
.top3 {
  box-sizing: border-box;
  min-height: 300px;
  background: #fafafa;
  border: 1px solid yellow;
}
.ournal {
  padding: 15px 20px;
}
.ournal .ournalContent {
  padding: 15px 0px;
}
.top1 .headeLeft {
  width: 30%;
  height: 100%;
  border: 1px solid khaki;
}
.top1 .headeRight {
  width: 68%;
}
.top1 .headeRight .title {
  text-align: left;
  padding: 10px 20px;
}
.top1 .headeRight .headContent {
  padding-left: 20px;
}
.bondsFrom {
  display: flex;
  flex-direction: row;
  /* margin: 20px 0; */
}
.bondsItem {
  flex: 1;
}
</style>
