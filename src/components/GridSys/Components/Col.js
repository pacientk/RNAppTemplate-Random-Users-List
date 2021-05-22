import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import computeProps from '../Utils/computeProps';

const DEFAULT_GUTTER = 9;

export default class ColumnNB extends Component {
    prepareRootProps() {
        const { gutter } = this.props;
        const type = {
            flexDirection: 'column',
            flex: this.props.size ? this.props.size : this.props.style && this.props.style.width ? 0 : 1,
            paddingRight: !isNaN(gutter) ? gutter : DEFAULT_GUTTER,
            paddingLeft: !isNaN(gutter) ? gutter : DEFAULT_GUTTER,
        };

        const defaultProps = {
            style: type,
        };
        return computeProps(this.props, defaultProps);
    }

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        if (this.props.onPress) {
            return (
                <TouchableOpacity onPress={this.props.onPress} {...this.prepareRootProps()}>
                    <View ref={(component) => (this._root = component)} {...this.props} {...this.prepareRootProps()}>
                        {this.props.children}
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <View ref={(component) => (this._root = component)} {...this.props} {...this.prepareRootProps()}>
                    {this.props.children}
                </View>
            );
        }
    }
}
