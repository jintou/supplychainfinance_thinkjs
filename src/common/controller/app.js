'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }

  createAction(appData){}

  addPermitAction(permitData){}

  addPermitRoleAction(permitRoleData){}

  listAppPermitAction(filterData){}

  listPermitRoleAction(filterData){}

  listUserPermitAction(filterData){}

  checkRolePermitAction(roleData, permitData){}

  checkUserPermitAction(userData, permitData){}
}