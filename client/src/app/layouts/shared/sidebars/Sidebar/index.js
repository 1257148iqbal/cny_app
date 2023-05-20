import React, {Suspense} from 'react';
import {IconButton} from "@mui/material";
import menus from "./menus";
import JumboVerticalNavbar from "@jumbo/components/JumboVerticalNavbar/JumboVerticalNavbar";
import {DrawerHeader} from "@jumbo/components/JumboLayout/style";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {useJumboLayoutSidebar, useJumboSidebarTheme} from "@jumbo/hooks";
import {SIDEBAR_STYLES, SIDEBAR_VIEWS} from "@jumbo/utils/constants/layout";
import Logo from "../../../../shared/Logo";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Zoom from "@mui/material/Zoom";
import Div from "@jumbo/shared/Div";
import SidebarSkeleton from "./SidebarSkeleton";

const Sidebar = () => {
    return (
        <React.Fragment>
            <SidebarHeader/>
            <JumboScrollbar
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <Suspense
                    fallback={
                        <Div
                            sx={{
                                display: 'flex',
                                minWidth: 0,
                                alignItems: 'center',
                                alignContent: 'center',
                                px: 3
                            }}
                        >
                            <SidebarSkeleton/>
                        </Div>
                    }
                >
                    <JumboVerticalNavbar translate items={menus}/>
                </Suspense>
            </JumboScrollbar>
        </React.Fragment>
    );
};

const SidebarHeader = () => {
    const {sidebarOptions, setSidebarOptions} = useJumboLayoutSidebar();
    const {sidebarTheme} = useJumboSidebarTheme();

    const isMiniAndClosed = React.useMemo(() => {
        return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
    }, [sidebarOptions.view, sidebarOptions.open]);


    return (
        <React.Fragment>
            {
                sidebarOptions?.style !== SIDEBAR_STYLES.CLIPPED_UNDER_HEADER &&
                <DrawerHeader>
                    <Logo mini={isMiniAndClosed} mode={sidebarTheme.type}/>
                    {
                        <Zoom in={sidebarOptions?.open}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ml: 0, mr: -1.5}}
                                onClick={() => setSidebarOptions({open: false})}
                            >
                                <MenuOpenIcon/>
                            </IconButton>
                        </Zoom>
                    }
                </DrawerHeader>
            }
        </React.Fragment>
    )
};

export default Sidebar;
