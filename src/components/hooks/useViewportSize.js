import {useState, useRef, useEffect} from "react";
import {useWindowEvent} from "./useWindowEvent";



export function useViewportSize () {
    const windowElement = useRef(window)

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useWindowEvent('load', function () {
        setWidth(windowElement.current.innerWidth)
        setHeight(windowElement.current.innerHeight)
    }, {
        capture: true,
    })

    useWindowEvent('resize', function () {
        setWidth(windowElement.current.innerWidth)
        setHeight(windowElement.current.innerHeight)
    }, {
        capture: true,
    })



    return {width, height}
}