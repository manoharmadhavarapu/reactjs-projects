import useWindowResize from "."


export default function UseWindowResizeCustomHook() {

    const windowSize = useWindowResize();

    return (
        <div>
            <h1>Use Window resize Hook</h1>
            <p>Width is {windowSize.width}</p>
            <p>Height is {windowSize.height}</p>
        </div>
    )
}