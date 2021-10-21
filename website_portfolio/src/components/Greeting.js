import React, { useState, useRef, useEffect, useCallback, useTransition } from 'react';
import { Button, Pane, Heading } from 'evergreen-ui'
import '../css/Greeting.css';
import { slideInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { useSpring, animated } from 'react-spring'
import { For } from 'react-loops'




function Greeting() {
    const xStyles = useSpring({
        loop: true,
        config: { duration: 5000 },
        from: { x: 100 },
        to: { x: 1500 },
    })
    const xStylesReverse = useSpring({
        loop: true,
        config: { duration: 5000 },
        from: { x: 0 },
        to: { x: 1500 },
    })
    const yStyles = useSpring({
        loop: true,
        config: { duration: 1000 },
        from: { y: 0 },
        to: { y: 400 },
    })
    const yStylesReverse = useSpring({
        loop: true,
        config: { duration: 1000 },
        from: { y: 400 },
        to: { y: 0 },
    })
    return (
        <>
            <Pane width={500} height={700}>

                <animated.div
                    style={{
                        width: 80,
                        height: 80,
                        backgroundColor: '#46e891',
                        borderRadius: 16,
                        ...xStyles,
                    }}
                />
                <animated.div
                    style={{
                        width: 80,
                        height: 80,
                        backgroundColor: '#46e891',
                        borderRadius: 16,
                        margin: 15,
                        ...xStylesReverse,
                    }}
                />

                {/*} <animated.div
                    style={{
                        width: 80,
                        height: 80,
                        backgroundColor: '#46e891',
                        borderRadius: 16,
                        ...yStyles,
                    }}
                />
                <animated.div
                    style={{
                        width: 80,
                        height: 80,
                        backgroundColor: '#46e891',
                        borderRadius: 16,
                        ...yStylesReverse,
                    }}
                /> */}
            </Pane>


            {/* 
            <For of={colors}>
                    {color =>
                        <animated.div style={{
                            width: 40,
                            height: 40,
                            float: `left`,
                            borderRadius: '50%',
                            background: `${color}`,
                            position: 'relative',
                            display: `flex`,
                            flexDirection: 'column',
                            margin: 20,
                            padding: 40,
                            ...circleBStyle,
                        }}>

                        </animated.div>
                    }
                </For> 
             <div style={{
                    width: 240,
                    height: 240,
                    borderRadius: '50%',
                    background: `grey`,
                    position: 'relative',
                    paddingRight: 20,
                    paddingLeft: 30,
                    marginBottom: 20,
                    marginTop: 30,
                    marginRight: 50,
                    marginLeft: 30,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: 'center',
                    flexDirection: 'column',
                    ...styles,
                }}></div> 
             <For of={colors}>
                    {color =>
                        <animated.div style={{
                            width: 240,
                            height: 240,
                            borderRadius: '50%',
                            background: `${color}`,
                            position: 'relative',
                            paddingRight: 20,
                            paddingLeft: 30,
                            marginBottom: 20,
                            marginTop: 30,
                            marginRight: 50,
                            marginLeft: 30,
                            display: `flex`,
                            justifyContent: `center`,
                            alignItems: 'center',
                            flexDirection: 'column',
                            ...styles,
                        }}></animated.div>}
                </For> 
            </Pane> */}
            {/* 
            <Pane padding={300}>
                <Heading size="900">
                    HELLO THERE
                </Heading>
            </Pane> */}
        </>

    )
}
export default Greeting