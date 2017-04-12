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
import '@material/card/mdc-card.scss';

/**
 * Create the component.
 */
export default class CardActions extends Component {
  render({
           'class': className,
           children,
           vertical,
           ...props
         }, state, context) {
    const classes = classnames('mdc-card__actions', {
      'mdc-card__actions--vertical': vertical
    }, className);
    return (
      <section class={classes} {...props}>{children}</section>
    );
  }
}
