import React from 'react';
import { StyleSheet } from 'react-native';
import _ from 'lodash';

function computeProps(incomingProps, defaultProps) {
    // External props has a higher precedence
    let computedProps = {};

    incomingProps = _.clone(incomingProps);
    delete incomingProps.children;

    let incomingPropsStyle = incomingProps.style;
    delete incomingProps.style;

    if (incomingProps) {
        _.merge(computedProps, defaultProps, incomingProps);
    } else {
        computedProps = defaultProps;
    }

    // Pass the merged Style Object instead
    if (incomingPropsStyle) {
        let computedPropsStyle = {};
        computedProps.style = {};
        if (Array.isArray(incomingPropsStyle)) {
            _.forEach(incomingPropsStyle, (style) => {
                if (typeof style === 'number') {
                    _.merge(computedPropsStyle, StyleSheet.flatten(style));
                } else {
                    _.merge(computedPropsStyle, style);
                }
            });
        } else {
            if (typeof incomingPropsStyle === 'number') {
                computedPropsStyle = StyleSheet.flatten(incomingPropsStyle);
            } else {
                computedPropsStyle = incomingPropsStyle;
            }
        }

        _.merge(computedProps.style, defaultProps.style, computedPropsStyle);
    }

    return computedProps;
}

export default computeProps;
