import React from 'react';
import Particles from "react-tsparticles";
import particleConfig from './particleConfig';

const ParticleBg = () => {
    return (
        <div>
            <Particles params={particleConfig}></Particles>
        </div>
    );
};

export default ParticleBg;