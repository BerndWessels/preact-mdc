/**
 * Bernd Wessels (https://github.com/BerndWessels/)
 *
 * Copyright © 2016 Bernd Wessels. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Import dependencies.
 */
import {h, Component} from 'preact';
import classnames from 'classnames/dedupe';

/**
 * Import local dependencies.
 */

/**
 * Import styles.
 */
import '@material/drawer/mdc-drawer.scss';

/**
 * Create the component.
 */
export default class Drawer extends Component {
  render({
           'class': className,
           permanent,
           open,
           children,
           ...props
         }, state, context) {
    const classes = classnames({
      'mdc-permanent-drawer': permanent,
      'mdc-temporary-drawer': !permanent,
      'mdc-temporary-drawer--animating': !permanent,
      'mdc-temporary-drawer--open': !permanent && open
    }, className);
    if (permanent) {
      return (
        <div class={classes} {...props}>
          {children}
        </div>
      );
    } else {
      return (
        <aside class={classes} {...props}>
          <div class="mdc-temporary-drawer__drawer">{children}</div>
        </aside>
      );
    }
  }
}
