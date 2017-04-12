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
import '@material/switch/mdc-switch.scss';

/**
 * Create the component.
 */
export default class Switch extends Component {

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

  handleChange = (e) => {
    const rippleInstance = ripple(this.root_);
    this.setState({ripple: true, style: rippleInstance.style});
    setTimeout(() => {
      this.setState({ripple: false});
    }, rippleInstance.duration);
    this.props.onChange && this.props.onChange(e);
  };

  render({
           'class': className,
           children,
           disabled,
           onFocus,
           onBlur,
           onChange,
           ...props
         }, {
           focus,
           ripple,
           style
         }, context) {
    let classes = classnames('mdc-switch mdc-ripple-upgraded mdc-ripple-upgraded--unbounded', {
      'mdc-switch--disabled': disabled,
      'mdc-ripple-upgraded--background-active-fill': ripple,
      'mdc-ripple-upgraded--foreground-activation': ripple,
      'mdc-ripple-upgraded--foreground-deactivation': !ripple,
      'mdc-ripple-upgraded--background-focused': focus
    }, className);
    return (
      <div class={classes}
           style={style}
           ref={e => this.root_ = e}>
        <input class="mdc-switch__native-control"
               type="checkbox"
               disabled={disabled}
               onFocus={this.handleFocus}
               onBlur={this.handleBlur}
               onChange={this.handleChange}
               {...props}
        />
        <div className='mdc-switch__background'>
          <div className='mdc-switch__knob'/>
        </div>
      </div>
    );
  }
}
