(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("button.base.html",
    "<div>\n" +
    "  <div passage=\"默认\">\n" +
    "    <div preview>\n" +
    "      <div class=\"btn\">元素</div>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn\">按钮</button>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <a href=\"\" class=\"btn\">链接</a>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn btn-outline\">边框按钮</button>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn btn-noline\">无框按钮</button>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>&lt;button&gt;</span>\n" +
    "      <span>.btn</span>\n" +
    "      <span>.btn-outline</span>\n" +
    "      <span>.btn-noline</span>\n" +
    "    </div>\n" +
    "    \n" +
    "  </div>\n" +
    "\n" +
    "  <div passage=\"颜色\">\n" +
    "    <div preview>\n" +
    "      <button class=\"btn btn-warning\">警告</button>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn btn-warning btn-outline\">警告按钮</button>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn btn-warning btn-noline\">警告按钮</button>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn btn-success\">确认</button>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn btn-success btn-outline\">确认按钮</button>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn btn-success btn-noline\">确认按钮</button>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>.btn-warning</span>\n" +
    "      <span>.btn-success</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div passage=\"禁用状态\">\n" +
    "    <div preview>\n" +
    "      <div class=\"btn btn-disabled\">禁用按钮(div)</div>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn btn-disabled\" disabled>禁用按钮(button)</button>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn btn-outline\" disabled>禁用按钮</button>\n" +
    "      <span class=\"text-space\"></span>\n" +
    "      <button class=\"btn btn-noline\" ng-disabled=\"1\">禁用按钮</button>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>[disabled]</span>\n" +
    "      <span>.btn-disabled</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div passage=\"尺寸\">\n" +
    "    <div preview>\n" +
    "      <p>\n" +
    "        <button class=\"btn btn-fill\">100%宽度的按钮</button>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <button class=\"btn btn-small btn-fill\">100%宽度的按钮</button>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <button class=\"btn btn-small\">小按钮</button>\n" +
    "        <span class=\"text-space\"></span>\n" +
    "        <button class=\"btn btn-warning btn-small\">小按钮</button>\n" +
    "        <span class=\"text-space\"></span>\n" +
    "        <button class=\"btn btn-outline btn-small\">小按钮</button>\n" +
    "        <span class=\"text-space\"></span>\n" +
    "        <button class=\"btn btn-small\" disabled>小按钮</button>\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <button class=\"btn btn-narrow\">紧凑按钮</button>\n" +
    "        <span class=\"text-space\"></span>\n" +
    "        <button class=\"btn btn-wide\">宽阔按钮</button>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>.btn-fill</span>\n" +
    "      <span>.btn-small</span>\n" +
    "      <span>.btn-narrow</span>\n" +
    "      <span>.btn-wide</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("component.brow.html",
    "<div>\n" +
    "    <div preview>\n" +
    "        <div class=\"brow brow-border\">\n" +
    "            <div class=\"brow-title\">\n" +
    "                页标题\n" +
    "                <small>副标题</small>\n" +
    "            </div>\n" +
    "            <div class=\"brow-extend\">\n" +
    "                <input type=\"text\" class=\"form-text\" size=\"20\">\n" +
    "                <button class=\"btn\">操作</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("component.modal.html",
    "<div>\n" +
    "    \n" +
    "    <div preview>\n" +
    "        \n" +
    "        <div ng-class=\"{'modal-wrap':modalOpen}\">\n" +
    "            <div class=\"modal\">\n" +
    "                <button class=\"modal-close\"  ng-click=\"modalOpen=false\"></button>\n" +
    "                <div class=\"modal-title\">\n" +
    "                    标题\n" +
    "                </div>\n" +
    "                <div class=\"modal-content\">\n" +
    "                    modal是所有弹出式交互的基础实现\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer text-center\">\n" +
    "                    <button ng-click=\"modalOpen=false\">确定</button>\n" +
    "                    <button class=\"btn-outline\" ng-click=\"modalOpen=false\">取消</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"padding-all text-center\">\n" +
    "            <button class=\"btn-outline btn-success\" ng-click=\"modalOpen=!modalOpen\">{{modalOpen?'Close':'Open'}}</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("component.nav.html",
    "<div>\n" +
    "    <div preview>\n" +
    "        <div class=\"nav\">\n" +
    "            <div class=\"nav-item\">BADGE</div>\n" +
    "        \n" +
    "            <a href=\"\" class=\"nav-item current\">User</a>\n" +
    "            <a href=\"\" class=\"nav-item\">Content</a>\n" +
    "            <a href=\"\" class=\"nav-item\">Setting</a>\n" +
    "\n" +
    "            <div class=\"right\">\n" +
    "                <a href=\"\" class=\"nav-item\">Logout</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("component.pages.html",
    "<div>\n" +
    "    <div preview>\n" +
    "        <div class=\"pages\">\n" +
    "            <div class=\"left\">\n" +
    "                <a href=\"\" class=\"prev-page\"></a>\n" +
    "                <a href=\"#\" class=\"current\">1</a>\n" +
    "                <a href=\"#\">2</a>\n" +
    "                <a href=\"#\">3</a>\n" +
    "                <span class=\"text-muted\">…</span>\n" +
    "                <a href=\"#\">13</a>\n" +
    "                <a href=\"\" class=\"next-page\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"right\">\n" +
    "                <em class=\"text-muted\">\n" +
    "                    13 页 <span class=\"text-space\">/</span> 128条\n" +
    "                </em>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--<div class=\"pages pages-border\">\n" +
    "            <a href=\"\">&lt;</a>\n" +
    "            <a href=\"#\">1</a>\n" +
    "            <a href=\"#\">2</a>\n" +
    "            <a href=\"#\">3</a>\n" +
    "            ...\n" +
    "            <a href=\"\">&gt;</a>\n" +
    "        </div>-->\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("form.base.html",
    "<div>\n" +
    "    <div passage=\"单行输入框\">\n" +
    "        <div preview>\n" +
    "            <input type=\"text\" class=\"form-text\" placeholder=\"请输入内容\">\n" +
    "            <br><br>\n" +
    "            <input type=\"text\" class=\"form-text\" disabled placeholder=\"请输入内容\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div passage=\"多行输入框\">\n" +
    "        <div preview>\n" +
    "            <textarea class=\"form-text\" rows=\"4\" cols=\"40\"></textarea>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div passage=\"下拉菜单\">\n" +
    "        <div preview>\n" +
    "            <select class=\"form-select\">\n" +
    "                <option value=\"\">天王盖地虎</option>\n" +
    "                <option value=\"\">小鸡炖蘑菇</option>\n" +
    "                <option value=\"\">宝塔镇河妖</option>\n" +
    "                <option value=\"\">蘑菇放辣椒</option>\n" +
    "            </select>\n" +
    "            <select class=\"form-select\" disabled>\n" +
    "                <option value=\"\">莫望浮云遮望眼</option>\n" +
    "                <option value=\"\">风物长宜放眼量</option>\n" +
    "\n" +
    "            </select>\n" +
    "            <select size=\"3\" class=\"form-select\">\n" +
    "                <option value=\"\">下拉选项一</option>\n" +
    "                <option value=\"\">下拉选项二</option>\n" +
    "                <option value=\"\">下拉选项三</option>\n" +
    "                <option value=\"\">下拉选项四</option>\n" +
    "                <option value=\"\">下拉选项五</option>\n" +
    "            </select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div passage=\"选择框\">\n" +
    "        <div preview>\n" +
    "            <label class=\"form-label\">\n" +
    "                <input type=\"checkbox\" class=\"form-checkbox\">\n" +
    "                复选框\n" +
    "            </label>\n" +
    "            <br>\n" +
    "            <label class=\"form-label\">\n" +
    "                <input type=\"checkbox\" class=\"form-checkbox\" disabled>\n" +
    "                复选框\n" +
    "            </label>\n" +
    "            <br>\n" +
    "            <label class=\"form-label\">\n" +
    "                <input type=\"radio\" class=\"form-radio\">\n" +
    "                单选框\n" +
    "            </label>\n" +
    "            <br>\n" +
    "            <label class=\"form-label\">\n" +
    "                <input type=\"radio\" class=\"form-radio\" disabled>\n" +
    "                单选框\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("form.layout.html",
    "<div>\n" +
    "    <!--<fieldset>\n" +
    "        <legend>表单分组</legend>\n" +
    "    </fieldset>-->\n" +
    "    <!--<div preview>\n" +
    "        <div class=\"form-grid\">\n" +
    "            <div class=\"form-row\">\n" +
    "                <label class=\"form-label\">用户名：</label>\n" +
    "                <div class=\"form-field\">\n" +
    "                    <input class=\"form-text\" type=\"text\" name=\"\" value=\"\">\n" +
    "                    <div class=\"form-help\">\n" +
    "                        help-text\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-row\">\n" +
    "                <label class=\"form-label\">密码：</label>\n" +
    "                <div class=\"form-field\">\n" +
    "                    <input class=\"form-text\" type=\"text\" name=\"\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-row\">\n" +
    "                <div class=\"form-footer\">\n" +
    "                    <button type=\"\">Submit</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>-->\n" +
    "    <div passage=\"典型应用\">\n" +
    "        <div preview>\n" +
    "            <!-- \n" +
    "                挑选表单使用时的各种典型场景进行演示\n" +
    "                并尝试多种情况组合下的效果\n" +
    "            -->\n" +
    "            <table class=\"form form-divider\">\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        用户名：\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <input class=\"form-text\" type=\"text\" name=\"\" value=\"\">\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <label>密 码：</label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div class=\"form-block\">\n" +
    "                            <input class=\"form-text\" type=\"password\" name=\"\" value=\"\" placeholder=\"请输入密码\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-block\">\n" +
    "                            <input class=\"form-text\" type=\"password\" name=\"\" value=\"\" placeholder=\"确认密码\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-block text-muted text-small\">\n" +
    "                            help message...\n" +
    "                        </div>\n" +
    "                        <!--\n" +
    "                            多个block元素排列时默认会紧贴，此时如果block元素带有border，border也会紧贴在一起\n" +
    "                            此时应该使用.form-block控制多个block元素的排版，css会自动在多个block元素上增加间距\n" +
    "                        -->\n" +
    "                        <!--\n" +
    "                            使用已提供的基本的样式组合（.form-block + .text-muted）已经可以用来展示表单的辅助信息，比如输入内容解释或表单验证结果\n" +
    "                            但通常，我们更建议根据使用场景约定一些样式，如.form-help来展示辅助信息，.form-validate来展示表单验证结果，这样更有助于在交互层面的统一控制\n" +
    "                        -->\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <label>简介：</label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <textarea class=\"form-text\" rows=\"6\"></textarea>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        地区：\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div class=\"form-inline\">\n" +
    "                            <select class=\"form-select\">\n" +
    "                                <option value=\"\">河北省</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-inline\">\n" +
    "                            <select class=\"form-select\">\n" +
    "                                <option value=\"\">唐山市</option>\n" +
    "                            </select>\n" +
    "                        </div>\n" +
    "                        <!--\n" +
    "                            html中的空格会对排版造成影响，\n" +
    "                            如果源码中对代码进行换行操作，多个inline元素横排时会有一个空格的自然间距\n" +
    "                            但如果代码被压缩后，空格消失，多个inline元素会紧贴一起\n" +
    "                            这时应该使用.form-inline控制inline元素横排，css会在多个inline上增加间距\n" +
    "                        -->\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>权限：</td>\n" +
    "                    <td>\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\">\n" +
    "                            中央厨房\n" +
    "                            <small class=\"text-muted\"> - 输入原料，产出食物</small>\n" +
    "                        </label>\n" +
    "                        <br>\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\">\n" +
    "                            数据工厂\n" +
    "                            <small class=\"text-muted\"> - 科学发展，和谐世界</small>\n" +
    "                        </label>\n" +
    "                        <br>\n" +
    "                        <label>\n" +
    "                            <input type=\"checkbox\">\n" +
    "                            五谷粮仓\n" +
    "                            <small class=\"text-muted\"> - 秋收春种，冬养夏劳</small>\n" +
    "                        </label>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <label>验证码：</label>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div class=\"form-inline\">\n" +
    "                            <input class=\"form-text\" type=\"text\" name=\"\" value=\"\" size=\"12\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-inline\">\n" +
    "                            <button class=\"btn-outline btn-narrow\">获取验证码</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-inline text-muted text-small\">\n" +
    "                            验证码已发送,请注意查收.\n" +
    "                            <span class=\"text-showy\">89秒</span>后可再次发送\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>所属分组：</td>\n" +
    "                    <td>\n" +
    "                        <div class=\"form-block\">\n" +
    "                            <strong>不可编辑的文字内容</strong>\n" +
    "                            <br>\n" +
    "                            <span>即使折行,排版依旧</span>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td></td>\n" +
    "                    <td>\n" +
    "                        <label>\n" +
    "                            <input class=\"form-checkbox\" type=\"checkbox\" name=\"\" value=\"\">\n" +
    "                            remember me?\n" +
    "                        </label>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <!--\n" +
    "                    一些带交互功能的功能不能仅使用样式实现，需要通过脚本加样式实现出一个完整的组件，并且在以后，会有大量带有交互效果的组件出现在表单中\n" +
    "                    默认不用提供太多的组件，但需要给出组件开发约束，保证各个组件在表单布局中可以做到符合要求的间距，尺寸，排列组合\n" +
    "                -->\n" +
    "                <tr class=\"form-footer\">\n" +
    "                    <td></td>\n" +
    "                    <td>\n" +
    "                        <button class=\"btn-wide\" type=\"\">Submit</button>\n" +
    "                        <button class=\"btn btn-outline btn-wide\" type=\"\">Cancel</button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--\n" +
    "    虽然使用<div>{display:table;}可以模拟一个表格布局的表单，但没必要为了使用div而使用\n" +
    "    使用<table>作为表单布局可以减少大量class的用量，通过:first-child等伪类甚至可以不用给label列添加class，\n" +
    "    tr,td等标签可以让代码结构更加清晰易读，同时，table原生的结构布局可以在样式缺失的情况下依然保持表单该有的排版\n" +
    "-->");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("helper.base.html",
    "<div>\n" +
    "    <div passage=\"浮动\">\n" +
    "        <div preview>\n" +
    "            <div class=\"clearfix\">\n" +
    "                <div class=\"left width-ms border-all padding-all text-center\">\n" +
    "                    .left 向左浮动\n" +
    "                </div>\n" +
    "                <div class=\"right width-ms border-all padding-all text-center\">\n" +
    "                    .left 向左浮动\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix width-ms border-all padding-all text-center\">\n" +
    "                .clearfix 清除浮动\n" +
    "            </div>\n" +
    "            <div class=\"center width-ms border-all padding-all text-center\">\n" +
    "                .center 居中\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div passage=\"文字\">\n" +
    "        <div preview>\n" +
    "            <div class=\"left\">\n" +
    "                <input type=\"text\" class=\"form-text\">\n" +
    "            </div>\n" +
    "            <div class=\"right padding-left\">\n" +
    "                <div class=\"form-block\">\n" +
    "                    文字块对齐\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <p>\n" +
    "        <small class=\"text-muted\">\n" +
    "            .text-box 用于在没有外部约束的条件下对无关联的组件和文字对齐操作\n" +
    "            <br>\n" +
    "            默认文字行高24px，上下边距4px，可以和大部分32px高的元素组合，并且在折行时，并不会因为过高的行距对排版造成影响\n" +
    "            <br>\n" +
    "            变更框架元件基准高度时，.text-box的高度也应随之调整\n" +
    "        </small>\n" +
    "    </p>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("helper.size.html",
    "<div>\n" +
    "    \n" +
    "    <div passage=\"宽度\">\n" +
    "        <div preview>\n" +
    "            \n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("layout.box-model.html",
    "<div>\n" +
    "    <div preview>\n" +
    "        <div class=\"demo-box-model\">\n" +
    "            <div class=\"demo-box-margin\">\n" +
    "                <em class=\"text-small margin-left\">.margin-(top|left|right|bottom)</em>\n" +
    "                <div class=\"demo-box-border margin-left margin-right margin-bottom padding-left padding-right padding-bottom\">\n" +
    "                    <em class=\"text-small\">.border-(top|left|right|bottom)</em>\n" +
    "                    <div class=\"demo-box-padding padding-left padding-right padding-bottom\">\n" +
    "                        <em class=\"text-small\">.padding-(top|left|right|bottom)</em>\n" +
    "                        <div class=\"demo-box-content text-center\">\n" +
    "                            content\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<div selector>\n" +
    "        <div class=\"clearfix\">\n" +
    "            <span>.padding-top</span>\n" +
    "            <span>.padding-left</span>\n" +
    "            <span>.padding-right</span>\n" +
    "            <span>.padding-bottom</span>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix\">\n" +
    "            <span>.margin-top</span>\n" +
    "            <span>.margin-left</span>\n" +
    "            <span>.margin-right</span>\n" +
    "            <span>.margin-bottom</span>\n" +
    "        </div>\n" +
    "    </div>-->\n" +
    "\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("layout.grid.html",
    "<div class=\"grid-display\">\n" +
    "    <div passage=\"默认\">\n" +
    "        <div preview>\n" +
    "            <div class=\"grid\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>4/12 格</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-8\">\n" +
    "                        <p>8/12 格</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div passage=\"分隔线\">\n" +
    "        <div preview>\n" +
    "            <div class=\"grid grid-divider\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div passage=\"间距\">\n" +
    "        <div preview>\n" +
    "            <div class=\"grid grid-exlarge\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"grid grid-collapse\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-4\">\n" +
    "                        <p>col 4/12</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "            <!--<div class=\"row-5\">\n" +
    "                <div class=\"col-1\">\n" +
    "                    <p>col 1/5</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-1\">\n" +
    "                    <p>col 1/5</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-1\">\n" +
    "                    <p>col 1/5</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-1\">\n" +
    "                    <p>col 1/5</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-1\">\n" +
    "                    <p>col 1/5</p>\n" +
    "                </div>\n" +
    "            </div>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("table.base.html",
    "<div>\n" +
    "    <div preview>\n" +
    "        <table class=\"table table-justify table-hover\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <input type=\"checkbox\" name=\"\" value=\"\">\n" +
    "                    </td>\n" +
    "                    <td width=\"48\"></td>\n" +
    "                    <td>用户名</td>\n" +
    "                    <td>最后登录</td>\n" +
    "                    <td>操作</td>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td><input type=\"checkbox\" name=\"\" value=\"\"></td>\n" +
    "                    <td>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <strong>administrator</strong>\n" +
    "                        <span class=\"text-space\"></span>\n" +
    "                        <small class=\"text-italic text-muted table-hover-show\"># 10001</small>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <small>2016-10-30 02:18:02</small>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <a href=\"javascript:;\">编辑</a>\n" +
    "                        <span class=\"text-space\">|</span>\n" +
    "                        <a href=\"javascript:;\">删除</a>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td><input type=\"checkbox\" name=\"\" value=\"\"></td>\n" +
    "                    <td>\n" +
    "                        <img src=\"https://cdn.v2ex.co/avatar/e271/b6ed/18318_normal.png\" class=\"avatar-32 left\" alt=\"\">\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <strong>guest</strong>\n" +
    "                        <span class=\"text-space\"></span>\n" +
    "                        <small class=\"text-italic text-muted table-hover-show\"># 10002</small>\n" +
    "                        <br>\n" +
    "                        <small class=\"text-muted\">guest@website.com</small>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <small>2016-10-30 02:18:02</small>\n" +
    "                        <br>\n" +
    "                        <small class=\"text-muted\">192.168.1.1</small>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <button type=\"button\" class=\"btn btn-small\">编辑</button>\n" +
    "                        <button type=\"button\" class=\"btn btn-warning btn-small\">删除</button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("text.font.html",
    "<div>\n" +
    "  <div preview>\n" +
    "    <p>\n" +
    "      哈啊哈～哈啊哈！\n" +
    "      西湖美芹，山药甜呐！\n" +
    "      春芋入酒，溜乳燕呐！\n" +
    "      有圆千鲤来相烩，无圆炖面手揽钳。\n" +
    "      十年修得同涮肚！\n" +
    "      百年修得共抻面！\n" +
    "      若是呛呀腌呀有灶哇！\n" +
    "      白薯通心菜眼前！\n" +
    "      若是呛呀腌呀有灶哇！\n" +
    "      白薯通心菜眼前！\n" +
    "      辣辣辣辣辣～辣辣辣辣辣～辣～辣～辣辣辣辣辣辣......…… \n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div preview>\n" +
    "    <p class=\"text-indent\">\n" +
    "      To see the world, \n" +
    "      things dangerous to come to, \n" +
    "      To see behind walls, \n" +
    "      to draw closer, \n" +
    "      To find each other and to feel, \n" +
    "      That is the Purpose of LIFE.\n" +
    "    </p>\n" +
    "    <p class=\"text-right text-small text-muted\">\n" +
    "      <em>-- The Secret Life of Walter Mitty</em>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "<!--   <p>\n" +
    "    样式用来实现效果，提升开发效率，样式越多越好，满足多样需求。    规范用来约束样式，保持体验统一，规范越少越好，避免随意滥用。\n" +
    "  </p> -->\n" +
    "\n" +
    "  <p>\n" +
    "    <small class=\"text-muted\">\n" +
    "      默认字号: <em>14px</em> <br>\n" +
    "      默认字体: <em>'Helvetica Neue','Hiragino Sans GB','WenQuanYi Micro Hei','Microsoft Yahei',sans-serif;</em><br>\n" +
    "       使用<mark>-webkit-font-smoothing: antialiased;</mark>优化在webkit核心浏览器中的文字渲染效果。 \n" +
    "    </small>\n" +
    "  </p>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("text.style.html",
    "<div showcode=\"right\">\n" +
    "\n" +
    "  <div preview>\n" +
    "    <span>默认正常文字 ABCdef012345678 -_.!@#$%&amp;*() ，；：。！《》“”</span>\n" +
    "  </div>\n" +
    "\n" +
    "  <div passage=\"尺寸\">\n" +
    "    <div preview>\n" +
    "      <p><small>小号文本尺寸 (&lt;small&gt; | .text-small) 12px ABCdef012345678 -_.!@#$%&amp;*() ，；：。！《》“”</small></p>\n" +
    "      <p>默认尺寸 14px ABCdef012345678 -_.!@#$%&amp;*() ，；：。！《》“”</p>\n" +
    "      <p class=\"text-big\">大号文本尺寸 (.text-big) 16px ABCdef012345678 -_.!@#$%&amp;*() ，；：。！《》“”</p>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>&lt;small&gt;</span>\n" +
    "      <span>.text-small</span>\n" +
    "      <span>.text-big</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div passage=\"颜色\">\n" +
    "    <div preview>\n" +
    "      <span>默认文字颜色 ABCdef012345678 -_.!@#$%&amp;*() ，；：。！《》“”</span> <br>\n" +
    "      <span class=\"text-muted\">次要 (.text-muted) 文字颜色 ABCdef012345678 -_.!@#$%&amp;*() ，；：。！《》“”</span> <br>\n" +
    "      <span class=\"text-showy\">醒目 (.text-showy) 文字颜色 ABCdef012345678 -_.!@#$%&amp;*() ，；：。！《》“”</span> <br>\n" +
    "      <a href=\"javascript:;\">默认链接颜色 ABCdef012345678 -_.!@#$%&amp;*() ，；：。！《》“”</a>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>.text-muted</span>\n" +
    "      <span>.text-showy</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div passage=\"修饰\">\n" +
    "    <div preview>\n" +
    "      <span class=\"text-thin\">细体文字(.text-thin) ABCdef012345678 -_.!@#$%&amp;*() ，；：。！《》“”</span> <br>\n" +
    "      <strong class=\"text-bold\">粗体文字(.text-bold) ABCdef012345678 -_.!@#$%&amp;*() ，；：。！《》“”</strong> <br>\n" +
    "      <strong class=\"text-regular\">\n" +
    "        .text-regular 可以使文字粗细恢复默认\n" +
    "      </strong>\n" +
    "      \n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>.text-thin</span>\n" +
    "      <span>.text-bold</span>\n" +
    "      <span>&lt;strong&gt;</span>\n" +
    "      <span>.text-regular</span>\n" +
    "    </div>\n" +
    "    <div preview>\n" +
    "        <u>下划线 (&lt;u&gt;|.text-underline)</u> <span class=\"text-space\"></span><br>\n" +
    "        <del>删除线 (&lt;del&gt;|.text-delete)</del> <span class=\"text-space\"></span><br>\n" +
    "        <mark>高亮文本 (&lt;mark&gt;|.text-mark)</mark> <span class=\"text-space\"></span><br>\n" +
    "        <em>斜体ABCdef012345678 (&lt;em&gt;|.text-italic)</em>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>&lt;u&gt;</span>\n" +
    "      <span>.text-underline</span>\n" +
    "      <span>&lt;del&gt;</span>\n" +
    "      <span>.text-delete</span>\n" +
    "      <span>&lt;mark&gt;</span>\n" +
    "      <span>.text-mark</span>\n" +
    "      <span>&lt;em&gt;</span>\n" +
    "      <span>.text-italic</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("text.title.html",
    "<div>\n" +
    "  <div preview>\n" +
    "    <h1>H1标题ABCdef032-.!@#&amp;*，：。！《春秋》“”</h1>\n" +
    "    <h2>H2标题ABCdef024-.!@#&amp;*，：。！《礼记》“”</h2>\n" +
    "    <h3>H3标题ABCdef020-.!@#&amp;*，：。！《楚辞》“”</h3>\n" +
    "    <h4>H4标题ABCdef016-.!@#&amp;*，：。！《时令》“”</h4>\n" +
    "    <h5>H5标题ABCdef014-.!@#&amp;*，：。！《天文》“”</h5>\n" +
    "    <h6>H6标题ABCdef012-.!@#&amp;*，：。！《地理》“”</h6>\n" +
    "  </div>\n" +
    "  <div selector>\n" +
    "    <span>&lt;h1&gt;</span>\n" +
    "    <span>&lt;h2&gt;</span>\n" +
    "    <span>&lt;h3&gt;</span>\n" +
    "    <span>&lt;h4&gt;</span>\n" +
    "    <span>&lt;h5&gt;</span>\n" +
    "    <span>&lt;h6&gt;</span>\n" +
    "  </div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("text.typeset.html",
    "<div>\n" +
    "  <div passage=\"对齐\">\n" +
    "    <div preview>\n" +
    "      <p class=\"text-left\">左对齐(默认) (.text-left)</p>\n" +
    "      <p class=\"text-center\">居中对齐 (.text-center)</p>\n" +
    "      <p class=\"text-right\">右对齐 (.text-right)</p>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>.text-left</span>\n" +
    "      <span>.text-center</span>\n" +
    "      <span>.text-right</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div passage=\"缩进\">\n" +
    "    <div preview>\n" +
    "      <p class=\"text-indent\">在当代，字体排印学的相关研究和实践范围相当广，包含了文字设计及其应用的所有领域。将段落的第一行从左向右缩进一定的距离，首行外的各行都保持不变，便于阅读和区分文章整体结构。使用 .text-indent 可以使段落文字缩进两个字符。</p>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>.text-indent</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- <div passage=\"引用\"></div> -->\n" +
    "\n" +
    "  <div passage=\"折行\">\n" +
    "    <div preview>\n" +
    "      <p>使用.text-nowrap可以将inline元素强制在一行显示。</p>\n" +
    "      <p>使用.text-break可以将不间断的inline元素强制折行以适应宽度。</p>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>.text-nowrap</span>\n" +
    "      <span>.text-break</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div passage=\"分隔\">\n" +
    "    <p>\n" +
    "      <em>.text-space</em> 可以用来在字符串间插入一个有间距的分隔符\n" +
    "    </p>\n" +
    "    <div preview>\n" +
    "      <p>\n" +
    "        尼古拉斯<span class=\"text-space\">·</span>赵四\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        <a href=\"javascript:;\">添加</a>\n" +
    "        <span class=\"text-space\">|</span>\n" +
    "        <a href=\"javascript:;\">编辑</a>\n" +
    "        <span class=\"text-space\">|</span>\n" +
    "        <a href=\"javascript:;\">删除</a>\n" +
    "      </p>\n" +
    "      <p class=\"text-small\">\n" +
    "        <strong>当前位置：</strong>\n" +
    "        <a href=\"javascript:;\">首页</a>\n" +
    "        <span class=\"text-space\">&gt;</span>\n" +
    "        <a href=\"javascript:;\">列表</a>\n" +
    "        <span class=\"text-space\">&gt;</span>\n" +
    "        <span>查看详情</span>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div selector>\n" +
    "      <span>.text-space</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
})();
