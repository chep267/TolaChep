/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';

/** components */
import { SafeLayout } from '@module-base/components/Layout';

const View = styled(SafeLayout)({
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
});

export default function StartScreen() {
    return (
        <View>
            <h1>Start</h1>
        </View>
    );
}
