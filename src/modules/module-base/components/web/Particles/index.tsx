/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';

/** utils */
import { comparePure, getOption } from '@module-base/constants';
import { useTheme } from '@module-theme/utils';

function Particle({ options }: { options?: ISourceOptions }) {
    const { theme, mode } = useTheme();

    const particlesInit = React.useCallback(async (engine: Engine) => {
        // console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = React.useCallback(async (container: Container | undefined) => {
        // await console.log(container);
    }, []);

    const option = options || React.useMemo(() => getOption(theme), [mode]);

    return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={option} />;
}

export default React.memo(Particle, comparePure());
