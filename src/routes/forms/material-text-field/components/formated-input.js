import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default class FormattedInputs extends React.Component {
  state = {
    textmask: '(112) 121-2121',
    numberformat: '1320',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-6 col-xl-4">
          <Input fullWidth value={this.state.textmask} inputComponent={TextMaskCustom}
            onChange={this.handleChange('textmask')}
            inputProps={{ 'aria-label': 'Description', }}
          />
        </div>
        <div className="col-sm-6 col-md-6 col-xl-4">
          <Input fullWidth value={this.state.numberformat} onChange={this.handleChange('numberformat')}
            inputComponent={NumberFormatCustom}
            inputProps={{ 'aria-label': 'Description', }}
          />
        </div>
        <div className="col-sm-6 col-md-6 col-xl-4">
            <FormControl fullWidth>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								id="adornment-password"
								type={this.state.showPassword ? 'text' : 'password'}
								value={this.state.password}
								onChange={this.handleChange('password')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											onClick={this.handleClickShowPasssword}
											onMouseDown={this.handleMouseDownPassword}
										>
											{this.state.showPassword ? <i className="zmdi zmdi-eye-off"></i> : <i className="zmdi zmdi-eye"></i>}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
        </div>
      </div>
    );
  }
}
