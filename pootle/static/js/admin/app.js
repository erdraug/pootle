/*
 * Copyright (C) Pootle contributors.
 *
 * This file is a part of the Pootle project. It is distributed under the GPL3
 * or later license. See the LICENSE file for a copy of the license and the
 * AUTHORS file for copyright and authorship information.
 */

'use strict';


import 'backbone-queryparams';
import 'backbone-queryparams-shim';
import 'imports?Backbone=>require("backbone")!backbone-move';

import Backbone from 'backbone';
import React from 'react';

import AdminController from './components/AdminController';
import AdminRouter from './routers';


window.PTL = window.PTL || {};


const itemTypes = {
  user: require('./components/user'),
  language: require('./components/language'),
  project: require('./components/project'),
};


PTL.admin = {

  init(opts) {
    if (!itemTypes.hasOwnProperty(opts.itemType)) {
      throw new Error('Invalid `itemType`.');
    }

    React.render(
      <AdminController
        adminModule={itemTypes[opts.itemType]}
        appRoot={opts.appRoot}
        formChoices={opts.formChoices || {}}
        router={new AdminRouter()}
      />,
      document.querySelector(opts.el || '.js-admin-app')
    );
  }

};
