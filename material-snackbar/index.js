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
import '@material/snackbar/mdc-snackbar.scss';

/**
 * Create the component.
 */
export default class Snackbar extends Component {

  render({
           'class': className,
           children,
           active,
           text,
           multiline,
           actionOnBottom,
           ...props
         }, state, context) {
    const classes = classnames('mdc-snackbar', {
      'mdc-snackbar--active': active,
      'mdc-snackbar--multiline': multiline,
      'mdc-snackbar--action-on-bottom': actionOnBottom,
    }, className);
    return (
      <div class={classes} aria-live="assertive" aria-atomic="true" aria-hidden={!active} {...props}>
        <div class="mdc-snackbar__text">{text}</div>
        <div class="mdc-snackbar__action-wrapper">
          {children}
        </div>
      </div>
    );
  }
}
