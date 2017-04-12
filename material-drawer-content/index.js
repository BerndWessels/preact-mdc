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
export default class DrawerContent extends Component {
  render({
           'class': className,
           children,
           permanent,
           ...props
         }, state, context) {
    const classes = classnames({
      'mdc-permanent-drawer__content': permanent,
      'mdc-temporary-drawer__content': !permanent
    }, className);
    return (
      <div class={classes} {...props}>{children}</div>
    );
  }
}
