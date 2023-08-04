/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

/** components */
import { FallBackLayout, Container, ButtonRetry, TextAutoReload, Title, Content } from './styles';

/** utils */
import { errorMessage } from '@module-error/utils';
import Logo from '@module-error/assets/svg/error.jpeg';
import { useCountDown } from '@module-global/utils';

/** constants */
import { SECOND_COUNT_DOWN_ERROR } from '@module-error/constants';
import { getOptionStar } from '@module-base/constants';

/** components lazy */
const ToLaParticle = React.lazy(() => import('@modules/module-base/components/web/Particles'));

function FallbackDefault({ isAutoReload }: { isAutoReload: boolean }) {
    const reloadWindow = React.useCallback(() => {
        window.location.reload();
    }, []);

    const { second } = useCountDown({ callback: reloadWindow, numberCountDown: SECOND_COUNT_DOWN_ERROR });

    return (
        <FallBackLayout>
            <Container>
                <img src={Logo} alt="err" />
                <Title message={errorMessage['module.error.fallback.title']} textProps={{ type: 'danger', strong: true }} />
                <Content
                    message={errorMessage['module.error.fallback.content']}
                    textProps={{ type: 'danger', strong: true }}
                />
                <ButtonRetry onClick={reloadWindow} type="primary" danger size="large">
                    <FormattedMessage {...errorMessage['module.error.fallback.retry']} />
                </ButtonRetry>
            </Container>
            {isAutoReload ? (
                <TextAutoReload
                    message={errorMessage['module.error.fallback.autoReload']}
                    messageOption={{ value: `${second}` }}
                />
            ) : null}
            <React.Suspense fallback={null}>
                <ToLaParticle options={getOptionStar()} />
            </React.Suspense>
        </FallBackLayout>
    );
}

export default FallbackDefault;
