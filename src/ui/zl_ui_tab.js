/*! @file zl_ui_tab.js
 * Tab 切换.
 *
 * @author zhouyuelin
 * @version v1.0
 */

/** @class
 * zl 命名空间.
 * @abstract
 */
var zl = window.zl || {};

/** @class
 * 界面 命名空间.
 * @abstract
 */
zl.ui = window.zl.ui || {};


// == TabDivManager class ==

/** @class
 * Tab div 的切换管理.
 */
zl.ui.TabDivManager = function(cfg) {
	cfg = cfg || {};
	/** @property {Number} 选择项目的索引. */
	this.selectIndex = cfg["selectIndex"] || 0;
	/** @property {Boolean} 不自动绑定事件. */
	this.noevent = cfg["noevent"] || false;
	/** @property {String[]} Tab标签id的数组. */
	this.idnavs = cfg["idnavs"] || [];
	/** @property {String[]} Tab内容id的数组. */
	this.idcontents = cfg["idcontents"] || [];
	/** @property {String} 激活状态的CSS类. */
	this.classActive = cfg["classActive"] || '';
	// -- 自身字段. --
	/** @property {Boolean} 是否初始化成功.  */
	this.m_inited = 0;
	/** @property {Object[]} Tab项目的列表. nav(标签的对象), content(内容的对象).  */
	this.m_list = [];
	// init.
	this.init();
};
(function(){
	
	/**
	 * 输出日志.
	 * 
	 * @param	{String}	o	日志信息.
	 */
	zl.ui.TabDivManager.prototype.log = function(o){
	    if (!!window["console"]) {
	        console.log(o);
	    }
	};

	/**
	 * 初始化.
	 *
	 * @return  {Boolean}	是否成功.
	 */
	zl.ui.TabDivManager.prototype.init = function() {
		var rt =false;
		// m_list
		this.m_list = [];
		if (!!this.idnavs) {
			for(var i=0; i<this.idnavs.length; ++i) {
				var idnav = this.idnavs[i];
				if (!idnav) continue;
				var p = {}
				p.nav = document.getElementById(idnav);
				p.content = null;
				var idcontent = null;
				if (!!this.idcontents && i<this.idcontents.length) {
					idcontent = this.idcontents[i];
					p.content = document.getElementById(idcontent);
				}
				this.m_list.push(p);
			}
		}
		// event
		if (!this.noevent) {
			var athis = this;
			for(var i=0; i<this.m_list.length; ++i) {
				var p = this.m_list[i];
				if (!p) continue;
				if (!p.nav) continue;
				(function(){
					var idx = i; // 解决循环中的闭包变量传递问题, 即再加了一层闭包.
					p.nav.onclick = function(){
						athis.selectTo(idx);
					};
				})();
			}
		}
		// selectTo
		this.m_inited = true;
		this.selectTo(this.selectIndex);
		// done.
		rt = true;
		return rt;
	};
	
	/**
	 * Tab切换选择.
	 *
	 * @param {jsnamespace.GenderCode}	idx	索引.
	 * @return  {Boolean}	是否成功.
	 */
	zl.ui.TabDivManager.prototype.selectTo = function(idx) {
		var rt =false;
		if (!this.m_inited) return rt;
		this.selectIndex = idx;
		var sActive = this.classActive || "active";
		var displayShow = "block";
		var displayHide = "none";
		for(var i=0; i<this.m_list.length; ++i) {
			var p = this.m_list[i];
			if (!p) continue;
			if (!p.nav) continue;
			var isactive = (i==idx);
			p.nav.className = isactive?sActive:"";
			if (!!p.content) {
				p.content.style.display = isactive?displayShow:displayHide;
			}
		}
		// done.
		rt = true;
		return rt;
	};
	
})();

