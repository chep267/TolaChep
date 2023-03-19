/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';

export default class PureContainer extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    constructor(props: any) {
        super(props);
    }

    shouldComponentUpdate(): boolean {
        return false;
    }

    render() {
        const { children = null, ...divProps } = this.props;
        return <div {...divProps}>{children}</div>;
    }
}
