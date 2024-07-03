import MenuList from "./menu-list";
import './styles.css';

export default function TreeView({menus=[]}) {
    return (
        <div className="tree-view-container">
            <h2>Tree View Component/ Menu UI Component/ Recursive Navigation Menu</h2>
            <MenuList list={menus}/>
        </div>
    )
}