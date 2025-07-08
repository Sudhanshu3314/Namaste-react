import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

const Loader = () => {
    const [spinning, setSpinning] = useState(false);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        setSpinning(true);
        let ptg = -10;
        const interval = setInterval(() => {
            ptg += 5;
            setPercent(ptg);
            if (ptg > 120) {
                clearInterval(interval);
                setSpinning(false);
                setPercent(0);
            }
        }, 100);

        // Clean up interval on re-render or unmount
        return () => clearInterval(interval);
    });

    return (
        <>
            <Spin spinning={spinning} percent={percent} fullscreen />
        </>
    );
};

export default Loader;
