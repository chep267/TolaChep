/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { lazy, memo, Suspense } from 'react';

/** utils */
import { comparePure } from '@module-base/constants';

/** types */
import type { SVGProps, LazyExoticComponent } from 'react';
type IconBaseType = keyof typeof Icons;

interface IconBaseProps extends SVGProps<SVGSVGElement> {
    name: IconBaseType;
    size?: number;
}

const Icons = Object.freeze({
    /** app bar icon */
    feed: lazy(() => import('./svg/Feed')),
    messenger: lazy(() => import('./svg/Messenger')),
    task: lazy(() => import('./svg/Task')),

    /** app icon */
    menu: lazy(() => import('./svg/Menu')),
    logoApp: lazy(() => import('./svg/LogoApp')),
});

const IconBase = memo((props: IconBaseProps) => {
    const { name, size = 24, viewBox = '0 0 24 24', ...iconProps } = props;
    const Icon: LazyExoticComponent<(props: IconBaseProps) => JSX.Element> = Icons[name];

    return (
        <Suspense fallback={null}>
            <Icon name={name} width={size} viewBox={viewBox} height={size} {...iconProps} />
        </Suspense>
    );
}, comparePure());

IconBase.displayName = 'IconBase';
export type { IconBaseProps, IconBaseType };
export default IconBase;
