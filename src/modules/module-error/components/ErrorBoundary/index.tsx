/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** types */
import type { ReactNode, FunctionComponent, ErrorInfo } from 'react';

type Props = {
    children: ReactNode;
    fallback?: FunctionComponent;
    isAutoReload?: boolean;
};
type States = {
    hasError: boolean;
};

/** components */
const FallbackDefault = React.lazy(() => import('./FallbackDefault'));

class ErrorBoundary extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log('Tola - error: ', error, '\n--\n', errorInfo, '\n--');
    }

    render() {
        const { children, fallback: FallBack = FallbackDefault, isAutoReload = true } = this.props;
        const { hasError } = this.state;

        return (
            <React.Suspense fallback={null}>{hasError ? <FallBack isAutoReload={isAutoReload} /> : children}</React.Suspense>
        );
    }
}

export default ErrorBoundary;
