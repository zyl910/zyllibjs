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


// == PersonInfo class ==

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
				//
			}
		}
		// event
		if (!this.noevent) {
		}
		// selectTo
		this.selectTo(this.selectIndex);
		// done.
		this.m_inited = true;
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
		//
		this.m_inited = true;
		return rt;
	};
	
})();

