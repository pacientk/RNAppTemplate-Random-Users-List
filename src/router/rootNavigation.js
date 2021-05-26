import * as React from 'react';

export const navigationRef = React.createRef();

// Allowing access to navigation prop in components that does not have access to it (such as in saga components)
export const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
};
