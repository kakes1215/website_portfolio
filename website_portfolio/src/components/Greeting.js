import React, { useState, useRef } from 'react';
import { Button, Pane, Heading } from 'evergreen-ui'
import '../css/Greeting.css';
import { slideInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { useSpring, animated } from 'react-spring'
import { For } from 'react-loops'




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
        to: { x: 90 },

    })


    // const numbers = [4, 16, 32, 48, 70, 100]
    // const [widthHeight, setWidthHeight] = useState(1)
    // const [borderRadius, setBorderRadius] = useState(String)
    // const [color, setColor] = useState(String)
    // const [paddingMargin, setPaddingMargin] = useState(String)
    const colors = ["#214C3C", "#BAE5D5", "#996A13", " #FFB020", "#6E62B6", "#E7E4F9",
        "#0F5156", "#D3F5F7", " #696f8c", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840", "#101840"]
    // const circleColorGenerator = colors.map((color) => (
    //     <animated.div
    //         style={{
    //             width: 25,
    //             height: 25,
    //             borderRadius: '50%',
    //             background: { color },
    //             position: 'relative',
    //             padding: 20,
    //             margin: 30,
    //             ...styles,
    //         }}
    //     />
    // ));


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
            <Pane>
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
                            ...styles,
                        }}>

                        </animated.div>
                    }
                </For>
                {/* <div style={{
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
                }}></div> */}
                {/* <For of={colors}>
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
                </For> */}
            </Pane>

            <Pane padding={300}>
                <Heading size="900">
                    HELLO THERE
                </Heading>
            </Pane>
        </>

    )
}
export default Greeting