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
import '@material/list/mdc-list.scss';

/**
 * Create the component.
 */
export default class List extends Component {
  render({
           'class': className,
           children,
           links,
           dense,
           twoLine,
           avatar,
           ...props
         }, state, context) {
    const classes = classnames('mdc-list', {
      'mdc-list--dense': dense,
      'mdc-list--two-line': twoLine,
      'mdc-list--avatar-list': avatar
    }, className);
    return links ? <div class={classes} {...props}>{children}</div> : <ul class={classes} {...props}>{children}</ul>;
  }
}
