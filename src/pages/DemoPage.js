
import {useViewportSize} from "../components/hooks/useViewportSize";

export function DemoPage() {
    const { height, width } = useViewportSize();

    return (
        <>
            Width: {width}, height: {height}
        </>
    );
}