/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
import { loadSlim } from 'tsparticles-slim';

/** constants */
import { comparePure, getOption } from '@module-base/constants';

/** utils */
import { useTheme } from '@module-theme/utils';

/** types */
import type { Container, Engine, ISourceOptions } from 'tsparticles-engine';

function Particle({ options }: { options?: ISourceOptions }) {
    const { mode } = useTheme();
    const id = React.useId();
    const ParticlesContainer = React.useRef<Container>();

    React.useEffect(() => {
        if (ParticlesContainer && ParticlesContainer.current) {
            // console.log('ParticlesContainer.current: ', ParticlesContainer.current?.loadTheme);
            // ParticlesContainer.current.loadTheme(mode);
        }
    }, [mode]);

    const particlesInit = React.useCallback(async (engine: Engine) => {
        // console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = React.useCallback(async (container: Container | undefined) => {
        // await console.log(container);
        ParticlesContainer.current = container;
    }, []);

    const optionsFinal = React.useMemo(() => options || getOption(), []);

    return <Particles id={id} init={particlesInit} loaded={particlesLoaded} options={optionsFinal} />;
}

export default React.memo(Particle, comparePure());
