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
import '@material/icon-toggle/mdc-icon-toggle.scss';

/**
 * Create the component.
 */
class IconToggle extends Component {

  constructor() {
    super();
    this.state = {
      pressed: false
    };
  }

  handleClick = (e) => {
    let pressed = !this.state.pressed;
    this.setState({pressed: pressed});
    this.props.onClick && this.props.onClick(e, pressed);
  };

  render({
           'class': className,
           children,
           disabled,
           primary,
           accent,
           icon,
           iconPressed,
           label,
           labelPressed,
           onClick,
           ...props
         }, {
           pressed
         }, context) {

    const classes = classnames('mdc-icon-toggle material-icons', {
      'mdc-icon-toggle--disabled': disabled,
      'mdc-icon-toggle--primary': primary,
      'mdc-icon-toggle--accent': accent,
    }, className);

    return (
      <i class={classes}
         role="button"
         aria-pressed={pressed}
         aria-label={pressed ? labelPressed : label}
         tabindex="0"
         onClick={this.handleClick}
         ref={e => this.rippleElement = e}
         {...props}
      >
        {pressed ? iconPressed : icon}
      </i>
    );
  }
}

/**
 * Export the component.
 */
export default IconToggle;
