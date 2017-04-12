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
import ripple from '../material-ripple';

/**
 * Import local dependencies.
 */

/**
 * Import styles.
 */
import '@material/fab/mdc-fab.scss';

/**
 * Create the component.
 */
export default class Fab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      ripple: false,
      style: ''
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      const rippleInstance = ripple(this.root_);
      this.setState({style: rippleInstance.style});
    });
  };

  handleFocus = (e) => {
    this.setState({focus: true});
    this.props.onFocus && this.props.onFocus(e);
  };

  handleBlur = (e) => {
    this.setState({focus: false});
    this.props.onBlur && this.props.onBlur(e);
  };

  handleClick = (e) => {
    const rippleInstance = ripple(this.root_);
    this.setState({ripple: true, style: rippleInstance.style});
    setTimeout(() => {
      this.setState({ripple: false});
    }, rippleInstance.duration);
    this.props.onClick && this.props.onClick(e);
  };

  render({
           'class': className,
           children,
           icon,
           plain,
           mini,
           onFocus,
           onBlur,
           onClick,
           ...props
         }, {
           focus,
           ripple,
           style
         }, context) {

    const classes = classnames('mdc-fab mdc-ripple-upgraded mdc-ripple-upgraded--unbounded material-icons', {
      'mdc-fab--plain': plain,
      'mdc-fab--mini': mini,
      'mdc-ripple-upgraded--background-active-fill': ripple,
      'mdc-ripple-upgraded--foreground-activation': ripple,
      'mdc-ripple-upgraded--foreground-deactivation': !ripple,
      'mdc-ripple-upgraded--background-focused': focus
    }, className);

    return (
      <button class={classes}
              aria-label={icon}
              style={style}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onClick={this.handleClick}
              {...props}
              ref={e => this.root_ = e}>
        <span class='mdc-fab__icon'>
          {icon}
        </span>
      </button>
    );
  }
}
