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
import '@material/form-field/mdc-form-field.scss';

/**
 * Create the component.
 */
export default class FormField extends Component {
  render({
           'class': className,
           children,
           alignEnd,
           ...props
         }, state, context) {
    const classes = classnames('mdc-form-field', {
      'mdc-form-field--align-end': alignEnd
    }, className);
    return (
      <div className={classes} {...props}>
        {children}
      </div>
    );
  }
}
