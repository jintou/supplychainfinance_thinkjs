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

  createAction(spaceData){}

  addAppAction(appData){}

  addRoleAction(roleData){}

  addUserAction(userData, roleData){}

  listUserSpace(filterData){}

  listAppAction(filterData){}

  listRoleAction(filterData){}

  listUserAction(filterData){}

  listUserAppAction(filterData){}

  listUserRoleAction(filterData){}


}