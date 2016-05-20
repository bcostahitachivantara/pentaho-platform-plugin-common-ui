/*!
 * Copyright 2010 - 2016 Pentaho Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
  "../cartesianAbstract/model",
  "pentaho/i18n!../abstract/i18n/model"
], function(cartesianAbstractModelFactory, bundle) {

  "use strict";

  return function(context) {

    var CartesianAbstract = context.get(cartesianAbstractModelFactory);

    return CartesianAbstract.extend({
      type: {
        id: "pentaho/visual/ccc/categoricalContinuousAbstract",
        isAbstract: true,

        props: [
          {
            name: "measures", //VISUAL_ROLE
            type: {
              base: "pentaho/visual/role/quantitative",
              dataType: "number"
            }
          }
        ]
      }
    })
    .implement({type: bundle.structured["categoricalContinuousAbstract"]});
  };
});
