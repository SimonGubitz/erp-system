import { ChevronRight } from "lucide-react";
import React, { useState, ReactNode, MouseEvent, useEffect, useRef } from "react";
import ReactDOM from "react-dom";


interface MenuItem {
    label: string;
    icon: React.ReactNode;
    action: (...args: any[]) => void;
    submenu?: MenuGroup;
}

interface MenuGroup {
    groupName: string;
    groupIcon?: React.ReactNode;
    items: MenuItem[];
}

interface ContextMenuProps {
    children: ReactNode;
    menuGroups: MenuGroup[];
    submenuVisible: { submenuLabel: string, visible: Boolean };
    setSubmenuVisible: any;
    onLeftClick?: boolean;

    className?: string;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ children, menuGroups, submenuVisible, setSubmenuVisible, className, onLeftClick }) => {

    const menuRef = useRef<HTMLDivElement>(null);

    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

    const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        

        // in pixels
        const menuWidth = 256;
        const menuHeight = menuRef.current?.clientHeight || 0;
        let menuX = event.pageX, menuY = event.pageY;if (menuX + menuWidth > window.innerWidth) { menuX -= menuWidth; }
        if (menuY + menuHeight > window.screen.availHeight) { menuY -= menuHeight; }

        setMenuPosition({ x: menuX, y: menuY });
        setMenuVisible(true);
    };
    
    // Handler to close context menu on any outside click
    const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (menuRef.current && !target.closest('.menu-container-class')) {
            console.log("setting menu invisible");
            setMenuVisible(false);
        }
    };
    
    

    // Open context menu on left click if `onLeftClick` is true
    const handleLeftClick = (event: MouseEvent) => {
        console.log(`left click on contextmenu, onLeftClick?: ${onLeftClick}`);
        if (onLeftClick) {
            handleContextMenu(event);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setMenuVisible(false)
        });
        document.addEventListener("click", handleClick as unknown as EventListener);
        return () => {
            window.removeEventListener("resize", () => {setMenuVisible(false)});
            document.removeEventListener("click", handleClick as unknown as EventListener);
        };
    }, []);


    /* useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!menuVisible) return; // Do nothing if the menu isn’t open

            switch (event.key) {
                case "Escape":
                    setSubmenuVisible(null); // Close submenu if open
                    if (!submenuVisible) setMenuVisible(false); // Close main menu if no submenu
                    break;

                case "ArrowDown":
                    setFocusedIndex((prev) =>
                        prev === null ? 0 : Math.min(prev + 1, menuOptions.length - 1)
                    );
                    break;

                case "ArrowUp":
                    setFocusedIndex((prev) =>
                        prev === null ? 0 : Math.max(prev - 1, 0)
                    );
                    break;

                case "ArrowRight":
                    if (focusedIndex !== null && menuOptions[focusedIndex].items[0].submenus) {
                        setSubmenuVisible(menuOptions[focusedIndex].items[0].label);
                    }
                    break;

                case "ArrowLeft":
                    setSubmenuVisible(null); // Close submenu on left arrow
                    break;

                case "Enter":
                    if (focusedIndex !== null) {
                        const item = menuOptions[focusedIndex].items[0];
                        if (item.action) item.action(); // Trigger action on Enter
                        setMenuVisible(false);
                    }
                    break;

                default:
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [menuVisible, submenuVisible, focusedIndex]);*/

    const combinedClassName = `${className ?? ""} relative`;
    return (
        <div onContextMenu={handleContextMenu} onClick={handleLeftClick} className={combinedClassName}>
            {/* Render children as right-clickable element */}
            {children}

            {/* Render custom context menu if visible */}
            {menuVisible && ReactDOM.createPortal(
                 <div
                    ref={menuRef}
                    className="p-2.5 rounded-lg border-solid border border-slate-500 bg-zinc-900 text-zinc-900 w-64 max-h-80 overflow-auto scrollbar-custom"
                    style={{ position: "absolute", top: menuPosition.y, left: menuPosition.x, zIndex: 1000 }}
                >
                    <ul className="divide-y divide-solid divide-zinc-300 rounded scroll-smooth bg-inherit" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {menuGroups.map((group, groupIndex) => {
                            return (
                                <div key={groupIndex} className={menuGroups.length !== groupIndex ? "mb-2" : ""}>
                                    <p className="text-left text-zinc-300 font-medium text-xs">{group.groupName}</p>
                                    <ul className="my-1">
                                        {group.items.map((item, itemIndex) => (
                                            <li
                                                className="text-zinc-300 rounded-md text-sm font-medium hover:font-bold flex items-center cursor-pointer hover:bg-blue-800"
                                                key={itemIndex}
                                                onClick={(event : MouseEvent) => {
                                                    event.stopPropagation();
                                                    item.action();
                                                    handleClick(event);
                                                } }
                                                style={{ padding: "4px 8px" }}
                                            >
                                                {item.icon}
                                                <span className="ml-2">{item.label}</span>
                                                {item.submenu && submenuVisible.visible && submenuVisible.submenuLabel === item.submenu.groupName && <div className="text-right">
                                                    <ChevronRight size={16} />
                                                </div>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </ul>
                </div>
                , document.body)}
        </div>
    );
};

export default ContextMenu;
// export default { ContextMenuGroup };
