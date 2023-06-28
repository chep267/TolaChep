/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** utils */
import { UiContext } from '@module-global/utils';

/** types */
import type { ReactNode } from 'react';
import type { UiProps } from '@module-global/utils';

type Props = {
    children: ReactNode | undefined;
};

function UiProvider({ children }: Props) {
    const [visible, setVisible] = React.useState(true);

    const toggleVisible = () => setVisible((value) => !value);

    const store = React.useMemo<UiProps>(
        () => ({
            appBar: {
                visible,
                toggleVisible,
            },
        }),
        [visible]
    );

    return <UiContext.Provider value={store}>{children}</UiContext.Provider>;
}

export default UiProvider;
