'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('nodeEcommerceApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
