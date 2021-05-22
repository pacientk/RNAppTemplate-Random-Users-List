import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import computeProps from '../Utils/computeProps';

const DEFAULT_GUTTER = 9;

export default class RowNB extends Component {
    prepareRootProps() {
        const { gutter } = this.props;
        let type = {
            flexDirection: this.props.isScreenReaderEnabled ? 'row-reverse' : 'row',
            flex: this.props.size ? this.props.size : this.props.style && this.props.style.height ? 0 : 1,
            marginRight: !isNaN(gutter) ? -gutter : -DEFAULT_GUTTER,
            marginLeft: !isNaN(gutter) ? -gutter : -DEFAULT_GUTTER,
        };

        let defaultProps = {
            style: type,
        };
        return computeProps(this.props, defaultProps);
    }

    setNativ;
    eProps(nativeProps) {
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
