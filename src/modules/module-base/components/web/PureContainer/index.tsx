/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** types */
import type { HTMLAttributes } from 'react';

class PureContainer extends React.Component<HTMLAttributes<HTMLDivElement>> {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { children = null, ...divProps } = this.props;
        return <div {...divProps}>{children}</div>;
    }
}

export default PureContainer;
