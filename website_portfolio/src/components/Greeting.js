import React, { useState, useRef } from 'react';
import { Button, Pane, Heading } from 'evergreen-ui'
import '../css/Greeting.css';
import { slideInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { useSpring, animated } from 'react-spring'




function Greeting(props) {
    // const styles = StyleSheet.create({
    //     Circle: {
    //         width: `25px`,
    //         height: `25px`,
    //         borderRadius: `50%`,
    //         background: `#214C3C`,
    //         padding: `20px`,
    //         margin: `30px`
    //     }, slide: {
    //         animationName: slideInRight,
    //         animationDuration: '5s'
    //     }
    // })
    const n = useRef(0)
    const styles = useSpring({
        loop: () => 0 > n.current++,
        config: { duration: 2000 },
        from: { x: 0 },
        to: { x: 500 },

    })


    // const numbers = [4, 16, 32, 48, 70, 100]
    // const [widthHeight, setWidthHeight] = useState(1)
    // const [borderRadius, setBorderRadius] = useState(String)
    // const [color, setColor] = useState(String)
    // const [paddingMargin, setPaddingMargin] = useState(String)
    // const colors = ["#214C3C", "#BAE5D5", "#996A13", " #FFB020", "#6E62B6", "#E7E4F9",
    //     "#0F5156", "#D3F5F7", " #696f8c", "#101840"]

    // var style = {
    //     Circle: {
    //         width: `${widthHeight}`,
    //         height: `${widthHeight}`,
    //         borderRadius: `${borderRadius}`,
    //         background: `${color}`,
    //         position: "relative",
    //         padding: `${paddingMargin}`,
    //         margin: `${paddingMargin}`
    //     }
    // }

    // function createCircles() {
    //     const style = numbers.map((number) => (
    //         setWidthHeight(number),
    //         setBorderRadius((number + "px").toString()),
    //         setColor(colors[0]),
    //         setPaddingMargin((number + "px").toString())
    //     ))
    //     return (
    //         <div style={style.Circle}></div>
    //     )
    // }

    return (
        <>
            <animated.div
                style={{
                    width: 25,
                    height: 25,
                    borderRadius: '50%',
                    background: '#A73636',
                    position: 'relative',
                    padding: 20,
                    margin: 30,
                    ...styles,
                }}
            />

            <Pane padding={300}>
                <Heading size="900">
                    HELLO THERE
                </Heading>
            </Pane>
        </>

    )
}
export default Greeting