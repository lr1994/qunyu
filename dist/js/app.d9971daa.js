(function(t){function e(e){for(var s,c,o=e[0],r=e[1],l=e[2],u=0,p=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);v&&v(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(s=!1)}s&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},i={app:0},a=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var v=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("bf02"),i=n.n(s);i.a},"0677":function(t,e,n){"use strict";var s=n("0bb8"),i=n.n(s);i.a},"0bb8":function(t,e,n){},1975:function(t,e,n){"use strict";var s=n("ab23"),i=n.n(s);i.a},2007:function(t,e,n){},2671:function(t,e,n){"use strict";var s=n("9bdd"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("dac5"),n("6e26"),n("9604"),n("df67");var s=n("6e6d"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",class:t.showNext?"showNext":"",attrs:{id:"app"}},[n("myheader",{on:{userProto:t.userProto,contactUs:t.contactUs}}),t.showNext?n("contactUsContent"):n("contents"),n("mybottom",{attrs:{showNext:t.showNext}}),t.showDialog?n("mydialog",{on:{closeDialog:t.closeDialog}}):t._e()],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("span",{staticClass:"slogan"}),n("div",{staticClass:"rightPart"},[n("span",{class:0==t.curIndex?"active":"",on:{click:t.homeIndex}},[t._v("首页")]),n("span",{class:1==t.curIndex?"active":"",on:{click:t.contactUs}},[t._v("联系我们")]),n("span",{class:2==t.curIndex?"active":"",on:{click:t.userProto}},[t._v("用户协议")])])])},o=[],r={data:function(){return{curIndex:0}},methods:{userProto:function(){this.curIndex=2,this.$emit("userProto")},homeIndex:function(){this.curIndex=0,this.$emit("contactUs",!1)},contactUs:function(){this.curIndex=1,this.$emit("contactUs",!0)}}},l=r,v=(n("bed6"),n("6691")),u=Object(v["a"])(l,c,o,!1,null,"a0f2be78",null),p=u.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents"})},d=[],f=(n("2671"),{}),h=Object(v["a"])(f,_,d,!1,null,"299f7788",null),b=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom"},[t.showNext?t._e():n("div",{staticClass:"ewm"},[t._m(0),t._m(1)]),t._m(2)])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ios"},[s("div",{staticClass:"pic"},[t._v("iPhone")]),s("div",{staticClass:"download"},[s("img",{attrs:{src:n("b477")}}),s("div",[s("p",[t._v("扫一扫")]),s("p",[t._v("下载")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"android"},[s("div",{staticClass:"pic"},[t._v("Android")]),s("div",{staticClass:"download"},[s("img",{attrs:{src:n("b477")}}),s("div",[s("p",[t._v("扫一扫")]),s("p",[t._v("下载")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"copyright"},[t._v("©️2019 杭州小指针科技有限公司  版权所有 | "),n("a",{staticClass:"links",attrs:{href:"http://www.beian.miit.gov.cn"}},[t._v("浙ICP备 19012610号-2")])])}],g={props:["showNext"]},x=g,w=(n("86ec"),Object(v["a"])(x,m,C,!1,null,"64ec54a2",null)),y=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"shadow"}),n("div",{staticClass:"dialog"},[n("div",{staticClass:"title"},[t._v("用户隐私协议"),n("div",{staticClass:"closeBtn",on:{click:t.closeDialog}})]),n("p",[t._v("杭州小指针科技有限公司（以下简称“小指针科技”）在此特别提醒您在注册使用“群语”软件及服务成为用户时，请认真阅读并遵守《用户隐私协议》（以下简称“协议”），并确保您已经充分理解协议各条款内容，特别免除或者限制责任的条款。请您审慎阅读并选择接受或不接受本协议。在您选择接受本协议所有条款前，您可以选择游客模式登录进行体验试用本软件。您的注册、登录、使用等行为将视为您已阅读、充分理解协议，并接受协议各项条款的约束。否则，您无权注册、登录或使用本协议所涉服务。新注册用户将以弹窗信息提示的形式，强制用户阅读本协议。")]),n("p",[t._v("本协议约定小指针科技与用户之间关于“群语”软件服务（以下简称“服务”）的权利义务。“用户”是指注册、登录、使用本服务的个人。本协议将由小指针科技做定期更新，用户可在本网站查阅最新版协议条款，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知。在小指针科技修改协议条款后，如果用户不接受修改后的条款，也将立即终止使用小指针科技提供的服务，用户继续使用小指针科技提供的服务将被视为接受修改后的协议。")]),n("p",[t._v("一、账号注册")]),n("p",[t._v("1.用户在使用服务前需要注册一个“群语”账号。“群语”账号应当使用手机号码绑定注册，请用户使用尚未与“群语”账号绑定的手机号码，以及未被小指针科技根据本协议封禁的手机号码注册“群语”账号。小指针科技可以根据用户需求或产品需要对账号注册和绑定的方式进行变更，而无须事先通知用户。")]),n("p",[t._v("2.“群语”系基于地理位置的移动社交产品，用户注册时应当授权小指针科技公开及使用其地理位置信息方可成功注册“群语”账号。故用户完成注册即表明用户同意小指针科技提取、公开及使用用户的地理位置信息。如用户需要终止向其他用户公开其地理位置信息，可自行注销账号，“群语”保留未注销账号用户最后一次向其他用户公开的地理位置信息。")]),n("p",[t._v("3.鉴于“群语”账号的绑定注册方式，您同意小指针科技在注册时将使用您提供的手机号码及/或自动提取您的手机号码及自动提取您的手机设备识别码等信息用于注册。")]),n("p",[t._v("4.在用户注册及使用本服务时，小指针科技需要搜集能识别用户身份的个人信息以便小指针科技可以在必要时联系用户，或为用户提供更好的使用体验。小指针科技搜集的信息包括但不限于用户的姓名、性别、年龄、出生日期、身份证号码、地址、学校情况、公司情况、所属行业、兴趣爱好、常出没的地方、个人说明。小指针科技同意对这些信息的使用将受限于第三条用户个人隐私信息保护的约束。因部分用户可能存在发送不良敏感信息和轻微成人，低俗暗示信息等违规行为，产品仅限于18岁+及以上用户进行注册和使用。")]),n("p",[t._v("二、服务内容")]),n("p",[t._v("1.本服务的具体内容由小指针科技根据实际情况提供，包括但不限于授权用户通过其账号进行即时通讯、添加好友、加入群组、关注他人、发布留言。小指针科技可以对其提供的服务予以变更，且小指针科技提供的服务内容可能随时变更。小指针科技变更服务内容时，用户将会收到关于服务变更的通知。")]),n("p",[t._v("三、用户个人隐私信息保护")]),n("p",[t._v("1.用户在注册账号或使用本服务的过程中，可能需要填写或提交一些必要的信息，包括但不限于法律法规、规章等规范性文件（以下称“法律法规”）规定的需要填写的身份信息。如用户提交的信息不完整或不符合法律法规的规定，则用户可能无法使用本服务或在使用本服务的过程中受到限制。")]),n("p",[t._v("2.个人隐私信息是指涉及用户个人身份或个人隐私的信息，包括但不限于用户真实姓名、身份证号码、手机号码、手机设备识别码、IP地址、用户聊天记录等。非个人隐私信息是指用户对本服务的操作状态以及使用习惯等明确且客观反映在小指针科技服务器端的基本记录信息、个人隐私信息范围外的其他普通信息，以及用户同意公开的上述隐私信息。")]),n("p",[t._v("3.尊重并保护用户个人隐私信息是小指针科技的一贯制度与坚持，小指针科技将采取技术措施和其他必要措施，确保用户个人隐私信息安全，防止在本服务中收集的用户个人隐私信息泄露、毁损或丢失。在发生前述情形或者发现存在发生前述情形的可能时，小指针科技将及时采取补救措施。")]),n("p",[t._v("4.小指针科技未经用户同意不向任何第三方公开、 透露用户个人隐私信息。但是，以下特定情形除外：")]),n("p",[t._v("(1) 小指针科技根据法律法规规定或有权机关的指示提供用户的个人隐私信息；")]),n("p",[t._v("(2) 由于用户将其用户密码告知他人或与他人共享注册账户与密码，由此导致的任何个人信息的泄漏，或其他非因小指针科技原因导致的个人隐私信息的泄露；")]),n("p",[t._v("(3) 用户自行向第三方公开其个人隐私信息；")]),n("p",[t._v("(4) 用户与小指针科技及合作单位之间就用户个人隐私信息的使用公开达成约定，蓝莓科技因此向合作单位公开用户个人隐私信息；")]),n("p",[t._v("(5) 任何由于黑客攻击、电脑病毒侵入及其他不可抗力事件导致用户个人隐私信息的泄露。")]),n("p",[t._v("5.用户同意小指针科技可在以下事项中使用用户的个人隐私信息：")]),n("p",[t._v("(1) 小指针科技向用户及时发送重要通知，如软件更新、本协议条款的变更；")]),n("p",[t._v("(2) 小指针科技内部进行审计、数据分析和研究等，以改进小指针科技的产品、服务和与用户之间的沟通；")]),n("p",[t._v("(3) 依本协议约定，小指针科技管理、审查用户信息及进行处理措施；")]),n("p",[t._v("(4) 适用法律法规规定的其他事项。")]),n("p",[t._v("除上述事项外，如未取得用户事先同意，小指针科技不会将用户个人隐私信息使用于任何其他用途。")]),n("p",[t._v('6.小指针科技重视对未成年人个人隐私信息的保护。小指针科技将依赖用户提供的个人信息判断用户是否为未成年人。任何18岁以下的未成年人注册账号或使用本服务应事先取得家长或其法定监护人（以下简称"监护人"）的书面同意。除根据法律法规的规定及有权机关的指示披露外，蓝莓科技不会使用或向任何第三方透露未成年人的聊天记录及其他个人隐私信息。除本协议约定的例外情形外，未经监护人事先同意，小指针科技不会使用或向任何第三方透露未成年人的个人隐私信息。任何不满18周岁的用户不得下载和使用蓝莓科技通过“群语”软件提供的网络游戏。')]),n("p",[t._v("7.用户确认，其地理位置信息为非个人隐私信息，用户成功注册“群语”账号视为确认授权蓝莓科技提取、公开及使用用户的地理位置信息。用户地理位置信息将作为用户公开资料之一，由蓝莓科技向其他用户公开。如用户需要终止向其他用户公开其地理位置信息，可自行注销账号，“积目”保留未注销账号用户最后一次向其他用户公开的地理位置信息。")]),n("p",[t._v("8.为了改善小指针科技的技术和服务，向用户提供更好的服务体验，小指针科技或可会自行收集使用或向第三方提供用户的非个人隐私信息。")]),n("p",[t._v("四、内容规范")]),n("p",[t._v("1.本条所述内容是指用户使用本服务过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于账号头像、名称、用户说明等注册信息及认证资料，或文字、语音、图片、视频、图文等发送、回复或自动回复消息和相关链接页面，以及其他使用账号或本服务所产生的内容。用户发布UGC内容，不得包含违法违规内容或伤害到其他用户的信息，否则，我们会在内容审核和收到举报信息的24小时内，删除UGC内容并对发布UGC者进行封号处理。")]),n("p",[t._v("2.用户不得利用“群语”账号或本服务制作、上载、复制、发布、传播如下法律法规和国家政策禁止的内容：")]),t._m(0),n("p",[t._v("3.用户不得利用“群语”账号或本服务制作、上载、复制、发布、传播如下干扰“积目”正常运营，以及侵犯其他用户或第三方合法权益的内容：群语")])])])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("(1) 反对宪法所确定的基本原则的；"),n("br"),t._v("(2) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；"),n("br"),t._v("(3) 损害国家荣誉和利益的；"),n("br"),t._v("(4) 煽动民族仇恨、民族歧视，破坏民族团结的；"),n("br"),t._v("(5) 破坏国家宗教政策，宣扬邪教和封建迷信的；"),n("br"),t._v("(6) 散布谣言，扰乱社会秩序，破坏社会稳定的；"),n("br"),t._v("(7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；"),n("br"),t._v("(8) 侮辱或者诽谤他人，侵害他人合法权益的；"),n("br"),t._v("(9) 不遵守法律法规底线、社会主义制度底线、国家利益底线、公民合法权益底线、社会公共秩序底线、道德风尚底线和信息真实性底线的“七条底线”要求的"),n("br"),t._v("(10) 含有法律法规禁止的其他内容的信息。")])}],j={methods:{closeDialog:function(){this.$emit("closeDialog")}}},$=j,U=(n("0677"),Object(v["a"])($,O,P,!1,null,"fdd32140",null)),E=U.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contents"},[s("div",{staticClass:"left boxwrap"},[s("div",{staticClass:"innerBox"},[s("div",{staticClass:"title"},[t._v("联系我们")]),s("p",[t._v("联系地址："),s("span",[t._v("浙江省杭州市萧山区党湾镇幸福村爱华创意谷文化创意园3号楼A区3068")])]),s("p",[t._v("联系电话："),s("span",[t._v("13880678652")])]),s("p",[t._v("商务合作："),s("span",[t._v("yuanxiaoliang@szhizhen.com，xlyuan86@163.com")])]),s("div",{staticClass:"ewm"},[s("div",{staticClass:"item"},[s("img",{attrs:{src:n("b477")}}),s("div",[t._v("新浪微博")])]),s("div",{staticClass:"item"},[s("img",{attrs:{src:n("b477")}}),s("div",[t._v("微信公众号")])])])])]),s("div",{staticClass:"right boxwrap"},[s("div",{staticClass:"title"},[t._v("留言")]),s("div",{staticClass:"form"},[s("div",{staticClass:"item"},[s("label",[t._v("姓名")]),s("input")]),s("div",{staticClass:"item"},[s("label",[t._v("电话")]),s("input")]),s("div",{staticClass:"item"},[s("label",[t._v("邮箱")]),s("input")]),s("div",{staticClass:"item"},[s("label",[t._v("留言")]),s("textarea")]),s("button",{staticClass:"submit"},[t._v("提交")])])])])}],N=(n("1975"),{}),k=Object(v["a"])(N,I,D,!1,null,"7a4628f6",null),S=k.exports,M={name:"app",data:function(){return{showDialog:!1,showNext:!1}},components:{myheader:p,mybottom:y,contents:b,mydialog:E,contactUsContent:S},methods:{closeDialog:function(){this.showDialog=!1},userProto:function(){this.showDialog=!0},contactUs:function(t){this.showNext=t}}},G=M,T=(n("034f"),n("f4c6"),Object(v["a"])(G,i,a,!1,null,"1c30ab39",null)),z=T.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(z)}}).$mount("#app")},"86ec":function(t,e,n){"use strict";var s=n("2007"),i=n.n(s);i.a},"9bdd":function(t,e,n){},ab23:function(t,e,n){},b477:function(t,e,n){t.exports=n.p+"img/qyewm.d099a20b.jpeg"},bed6:function(t,e,n){"use strict";var s=n("fe0f"),i=n.n(s);i.a},bf02:function(t,e,n){},c132:function(t,e,n){},f4c6:function(t,e,n){"use strict";var s=n("c132"),i=n.n(s);i.a},fe0f:function(t,e,n){}});
//# sourceMappingURL=app.d9971daa.js.map