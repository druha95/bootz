import React, { Component } from 'react';
import Select from "@material-ui/core/es/Select/Select";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Input from "@material-ui/core/es/Input/Input";
import './OrderingSelect.scss';

export default class OrderingSelect extends Component {
    constructor() {
        super();
        this.state = {
            ordering: 'none'
        }
    }

    handleChange = event => {
        this.setState({ordering: event.target.value });
        this.props.onOrderingChanged(event.target.value)
    };

    render() {
        return (
            <div className={'ordering-select'}>
                <div className={'ordering-select__label'}>
                    <InputLabel htmlFor="age-helper">{this.props.label}</InputLabel>
                </div>
                <div className={'ordering-select__select'}>
                    <Select value={this.state.ordering}
                            onChange={this.handleChange}
                            input={<Input name="order" id="order" />}>

                        <MenuItem value={'none'}>None</MenuItem>
                        <MenuItem value={'asc'}>Ascending</MenuItem>
                        <MenuItem value={'desc'}>Descending</MenuItem>
                    </Select>
                </div>
            </div>
        )
    }
}
