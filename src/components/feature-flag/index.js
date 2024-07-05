import { useContext } from "react"
import Accordian from "../accordian"
import LightDarkMode from "../light-dark-mode"
import RandomColor from "../random-color"
import TicTacToe from "../tic-tac-toe"
import TreeView from "../tree-view"
import { FeatureFlagsContext } from "./context"
import menus from "../tree-view/data"

export default function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key:'showLightAndDarkMode',
            component: <LightDarkMode/>
        },
        {
            key:'showTicTacToeBoard',
            component: <TicTacToe/>
        },
        {
            key:'showRandomColorGenerator',
            component: <RandomColor/>
        },
        {
            key:'showAccordian',
            component: <Accordian/>
        },
        {
            key:'showTreeView',
            component: <TreeView menus={menus}/>
        }
    ]

    function checkEnabledFlags(getCurrentkey) {
        return enabledFlags[getCurrentkey];
    }

    if(loading) {
        return <h1>Loading Data! Please Wait</h1>
    }

    return (
        <div style={{backgroundColor:'gray'}}>
            <h1>Feature Flags -- Based on the api response we got, we are showing/rendering those features/components in UI</h1>
            {
                componentsToRender.map((componentItem)=>{
                    return checkEnabledFlags(componentItem.key) ? componentItem.component : null
                })
            }
        </div>
    )
}