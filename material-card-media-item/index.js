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
export default class CardMediaItem extends Component {
  render({
           'class': className,
           children,
           x1dot5,
           x2,
           x3,
           ...props
         }, state, context) {
    const classes = classnames('mdc-card__media-item', {
      'mdc-card__media-item--1dot5x': x1dot5,
      'mdc-card__media-item--2x': x2,
      'mdc-card__media-item--3x': x3
    }, className);
    return (
      <section class={classes} {...props}>{children}</section>
    );
  }
}
