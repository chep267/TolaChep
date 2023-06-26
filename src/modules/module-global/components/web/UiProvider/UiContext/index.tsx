/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { createContext, useContext } from 'react';

/** types */
import type { FunctionComponent } from 'react';
type UiProps = {
    appBar: {
        visible: boolean;
        toggleVisible: () => void;
    };
};

const initialState: UiProps = {
    appBar: {
        visible: true,
        toggleVisible: () => null,
    },
};

const UiContext = createContext<UiProps>(initialState);

const useGlobalUI = () => useContext<UiProps>(UiContext);

function withGlobalUI(WrappedComponent: FunctionComponent) {
    return function EnhancedComponent<Props>(props: Props) {
        const ui = useGlobalUI();
        return <WrappedComponent {...props} useGlobalUI={ui} />;
    };
}

export type { UiProps };
export { withGlobalUI, useGlobalUI, UiContext };
