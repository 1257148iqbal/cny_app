import { createTheme } from '@mui/material';
import React from 'react';
import JumboThemeFooterContext from "./JumboThemeFooterContext";

const JumboThemeFooter = ({children, init}) => {
    const [footerTheme, setFooterTheme] = React.useState(init);

    const themeFooterContextValue = React.useMemo(() => ({
        footerTheme: createTheme(footerTheme),
        setFooterTheme: setFooterTheme,
    }), [footerTheme, setFooterTheme]);

    return (
        <JumboThemeFooterContext.Provider value={themeFooterContextValue}>
            {children}
        </JumboThemeFooterContext.Provider>
    );
};

export default JumboThemeFooter;