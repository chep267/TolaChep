/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** components */
import { FallBackLayout, Container, ButtonRetry, TextAutoReload, Title, Content } from './styles';
import { getTextIntl } from '@module-base/components/web';

/** utils */
import { errorMessage } from '@module-error/utils';
import { getOptionStar } from '@module-base/constants';
import Logo from '@module-error/assets/svg/error.jpeg';

/** components lazy */
const ToLaParticle = React.lazy(() => import('@modules/module-base/components/web/Particles'));

function FallbackDefault({ isAutoReload }: { isAutoReload: boolean }) {
    const [second, setSecond] = React.useState(99);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setSecond((s) => s - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    React.useEffect(() => {
        if (second === 0) {
            reloadWindow();
        }
    }, [second]);

    const reloadWindow = React.useCallback(() => {
        window.location.reload();
    }, []);

    return (
        <FallBackLayout>
            <Container>
                <img src={Logo} alt="err" />
                <Title type="danger" strong message={errorMessage['module.error.fallback.title']} />
                <Content type="danger" strong message={errorMessage['module.error.fallback.content']} />
                <ButtonRetry onClick={reloadWindow} type="primary" danger size="large">
                    {getTextIntl({ message: errorMessage['module.error.fallback.retry'] })}
                </ButtonRetry>
            </Container>
            {isAutoReload ? (
                <TextAutoReload
                    message={errorMessage['module.error.fallback.autoReload']}
                    messageOption={{ value: second }}
                />
            ) : null}
            <React.Suspense fallback={null}>
                <ToLaParticle options={getOptionStar()} />
            </React.Suspense>
        </FallBackLayout>
    );
}

export default FallbackDefault;
