/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { comparePure } from '@module-base/constants';

const Icons = {
    menu: React.lazy(() => import('./svg/Menu')),
    logoApp: React.lazy(() => import('./svg/LogoApp')),
};

export type IconsType = keyof typeof Icons;

interface Props extends React.SVGProps<SVGSVGElement> {
    name: IconsType;
    size?: number;
}

const IconsBase = React.memo((props: Props) => {
    const { name, size = 24, viewBox = '0 0 24 24', style, className } = props;
    const Icon: React.LazyExoticComponent<(props: Props) => JSX.Element> = Icons[name];

    return (
        <React.Suspense fallback={null}>
            <Icon key={name} name={name} width={size} viewBox={viewBox} height={size} style={style} className={className} />
        </React.Suspense>
    );
}, comparePure());

export default IconsBase;
