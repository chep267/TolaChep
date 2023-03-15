/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';

/** components */
import FallbackDefault from './FallbackDefault';

export default class ErrorBoundary extends React.Component<
    { children: React.ReactNode; elementFallBack?: React.FunctionComponent; isAutoReload?: boolean },
    { hasError: boolean }
> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log('Tola - error: ', error, '\n--\n', errorInfo, '\n--');
    }

    render() {
        const { hasError } = this.state;
        const { children, elementFallBack: FallBack = FallbackDefault, isAutoReload = true } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return <FallBack isAutoReload={isAutoReload} />;
        }
        // return <FallBack isAutoReload={isAutoReload} />;
        return children;
    }
}
