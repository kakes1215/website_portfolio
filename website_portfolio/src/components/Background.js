import React, { } from 'react';
import ParticlesBg from 'particles-bg'

function Background() {
    let config = {
        num: [4, 7, 9, 15],
        rps: 0.1,
        radius: [10, 40, 80, 100],
        life: [1.5, 5, 10, 20],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.9, 1, 1.1],
        position: "all",
        color: ["#6FFFB0", "#FD6FFF", "#81FCED", "#FFCA58"],
        cross: "dead",
        random: 10
    };

    return (
        <ParticlesBg
            type='custom'
            config={config}
            num={10}
        />
    );
}
export default Background;