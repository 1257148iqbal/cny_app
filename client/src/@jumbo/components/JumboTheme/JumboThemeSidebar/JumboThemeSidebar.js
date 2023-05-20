import { createTheme } from '@mui/material';
import React from 'react';
import JumboThemeSidebarContext from "./JumboThemeSidebarContext";

const JumboThemeSidebar = ({children, init}) => {
    const [sidebarTheme, setSidebarTheme] = React.useState(init);

    const themeSidebarContextValue = React.useMemo(() => ({
        sidebarTheme: createTheme(sidebarTheme),
        setSidebarTheme: setSidebarTheme,
    }), [sidebarTheme]);

    return (
        <JumboThemeSidebarContext.Provider value={themeSidebarContextValue}>
            {children}
        </JumboThemeSidebarContext.Provider>
    );
};

export default JumboThemeSidebar;