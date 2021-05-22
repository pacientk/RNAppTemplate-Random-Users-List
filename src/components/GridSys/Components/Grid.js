import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import computeProps from '../Utils/computeProps';
import Row from './Row';

const DEFAULT_GUTTER = 18;

export default class GridNB extends Component {
    prepareRootProps() {
        const { gutter } = this.props;
        let type = {
            flex: 1,
            flexDirection: this.ifRow() ? 'column' : 'row',
            paddingRight: !isNaN(gutter) ? gutter : DEFAULT_GUTTER,
            paddingLeft: !isNaN(gutter) ? gutter : DEFAULT_GUTTER,
        };

        let defaultProps = {
            style: type,
        };

        return computeProps(this.props, defaultProps);
    }

    ifRow() {
        let row = false;
        React.Children.forEach(this.props.children, function (child) {
            if (child && child.type === Row) {
                row = true;
            }
        });
        return row;
    }

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        if (this.props.onPress) {
            return (
                <TouchableOpacity onPress={this.props.onPress}>
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
