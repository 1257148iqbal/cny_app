import React from 'react';
import JumboAppContext from "@jumbo/components/JumboApp/JumboAppContext";

const JumboApp = (props) => {
    const [activeLayout, setActiveLayout] = React.useState(props.activeLayout);

    const appContextValue = React.useMemo(() => {
        return {
            activeLayout,
            setActiveLayout,
        }
    }, [activeLayout, setActiveLayout]);

    return (
        <JumboAppContext.Provider value={appContextValue}>
            {props?.children}
        </JumboAppContext.Provider>
    );
};

export default JumboApp;