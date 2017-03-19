'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    //return this.display();
  }

  createAction(permitData){}


  addChildAction(parentData,childData){}

  /**
   *
   * @param mode leaf-获取所有根节点; all-获取所有子节点; next-获取下一级子节点,默认为next
   */
  getChildrenAction(parentData,mode){}

  /**
   *
   * @param mode upper-上一级父节点，all-所有父节点
   */
  getParentAction(childData,mode){}
}