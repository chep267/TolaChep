/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { Component, lazy, Suspense } from 'react';

/** types */
import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    fallback?: ReactNode;
    isAutoReload?: boolean;
};
type States = {
    hasError: boolean;
};

/** components */
const FallbackDefault = lazy(() => import('./FallbackDefault'));

export default class ErrorBoundary extends Component<Props, States> {
    constructor(props: Props) {
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
        const { children, fallback: FallBack = FallbackDefault, isAutoReload = true } = this.props;
        const { hasError } = this.state;

        return <Suspense fallback={null}>{hasError ? <FallBack isAutoReload={isAutoReload} /> : children}</Suspense>;
    }
}
