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
import '@material/textfield/mdc-textfield.scss';

/**
 * Create the component.
 */
export default class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      valueInternal: this.props.value,
      validInternal: true
    };
  }

  componentWillReceiveProps(nextProps) {
    let {value} = this.props;
    if (nextProps.value !== value) {
      this.setState({valueInternal: nextProps.value});
    }
  }

  handleFocus = (e) => {
    this.setState({focused: true});
    this.props.onFocus && this.props.onFocus(e);
  };

  handleBlur = (e) => {
    console.log(e.target.validity); // TODO: find a way to match this with custom provided helptext.
    this.setState({focused: false});
    this.props.onBlur && this.props.onBlur(e);
  };

  handleChange = (e) => {
    this.setState({valueInternal: e.target.value, validInternal: e.target.checkValidity()});
    this.props.onChange && this.props.onChange(e);
  };

  render({
           id,
           type,
           value,
           label,
           placeholder,
           disabled,
           dense,
           required,
           pattern,
           helpText,
           helpTextPersistent,
           helpTextValidation,
           onFocus,
           onBlur,
           onChange,
           ...props
         }, {
           focused,
           valueInternal,
           validInternal
         }, context) {
    const classes = classnames('mdc-textfield mdc-textfield--upgraded', {
      'mdc-textfield--dense': dense,
      'mdc-textfield--disabled': disabled,
      'mdc-textfield--focused': focused,
      'mdc-textfield--invalid': !validInternal
    });
    const classesLabel = classnames('mdc-textfield__label', {
      'mdc-textfield__label--float-above': focused || (valueInternal && valueInternal.length)
    });
    const classesHelptext = classnames('mdc-textfield-helptext', {
      'mdc-textfield-helptext--persistent': helpTextPersistent,
      'mdc-textfield-helptext--validation-msg': helpTextValidation
    });
    const idInternal = id ? id : `${new Date().getTime()}.${Math.floor(Math.random() * 100)}`;
    return (
      <div>
        <label class={classes}>
          <input class="mdc-textfield__input"
                 id={idInternal}
                 type={type}
                 value={valueInternal}
                 placeholder={focused ? placeholder : false}
                 disabled={disabled}
                 required={required}
                 pattern={pattern}
                 aria-controls={`${idInternal}-validation-msg`}
                 onFocus={this.handleFocus}
                 onBlur={this.handleBlur}
                 onChange={this.handleChange}
                 {...props}
          />
          <span class={classesLabel}>{label}</span>
        </label>
        <p id={`${idInternal}-validation-msg`} class={classesHelptext}>{helpText}</p>
      </div>
    );
  }
}
