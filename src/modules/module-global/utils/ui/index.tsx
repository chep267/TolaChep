/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

export interface UiProps {
    appBar: {
        visible: boolean;
        toggleVisible: () => void;
    };
}

const initialState = {
    appBar: {
        visible: true,
        toggleVisible: () => null,
    },
};

export const UiContext = React.createContext<UiProps>(initialState);

export const useGlobalUI: () => UiProps = () => React.useContext(UiContext);

export function withGlobalUI(WrappedComponent) {
    return function EnhancedComponent(props) {
        const ui = useGlobalUI();
        return <WrappedComponent {...props} useGlobalUI={ui} />;
    };
}
