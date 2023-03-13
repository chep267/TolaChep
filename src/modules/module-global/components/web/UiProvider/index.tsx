/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { ReactNode, useState } from 'react';

// Themes
import { UiContext } from '@module-global/utils';

/** utils */

type Props = {
    children: ReactNode | undefined;
};

function UiProvider({ children }: Props) {
    const [visible, setVisible] = useState(true);

    const toggleVisible = () => setVisible((value) => !value);

    const store = React.useMemo(
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
