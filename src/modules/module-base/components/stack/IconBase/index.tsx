/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';

const Icons = {
    menu: React.lazy(() => import('./SVG/Menu')),
    // search: require('./images/Search').default,
    // messenger: require('./images/Messenger').default,
};

export type IconsType = keyof typeof Icons;

interface Props extends React.SVGProps<any> {
    name: IconsType;
    size?: number;
    fill?: string;
    stroke?: string;
    style?: React.CSSProperties;
    className?: string;
}

function IconsBase(props: Props) {
    const { name, size = 20, ...other } = props;
    const Icon = Icons[name];
    return (
        <React.Suspense fallback={null}>
            <Icon width={size} height={size} {...other} />
        </React.Suspense>
    );
}

export default React.memo(IconsBase, () => true);
