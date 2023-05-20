import React from 'react';
import PropTypes from "prop-types";

import JumboLayoutSidebarContext from "./JumboLayoutSidebar/JumboLayoutSidebarContext";
import JumboLayoutHeaderContext from "./JumboLayoutHeader/JumboLayoutHeaderContext";
import JumboLayoutFooterContext from "./JumboLayoutFooter/JumboLayoutFooterContext";
import {LAYOUT_ACTIONS, SIDEBAR_SCROLL_TYPES, SIDEBAR_STYLES, SIDEBAR_VARIANTS} from "@jumbo/utils/constants/layout";
import JumboLayoutRootContext from "@jumbo/components/JumboLayout/JumboLayoutRoot/JumboLayoutRootContext";
import JumboLayoutContentContext from "@jumbo/components/JumboLayout/JumboLayoutContent/JumboLayoutContentContext";

const init = (activeLayoutConfig) => {
    return (
        {
            header: {
                hide: false,
                ...(activeLayoutConfig?.layoutOptions?.header ? activeLayoutConfig?.layoutOptions?.header : {}),
            },
            sidebar: {
                hide: false,
                width: 240,
                minWidth: 80,
                variant: SIDEBAR_VARIANTS.PERSISTENT,
                style: SIDEBAR_STYLES.FULL_HEIGHT,
                scrollType: SIDEBAR_SCROLL_TYPES.FIXED,
                ...(activeLayoutConfig?.layoutOptions?.sidebar ? activeLayoutConfig?.layoutOptions?.sidebar : {}),
            },
            footer: {
                hide: false,
                ...(activeLayoutConfig?.layoutOptions?.footer ? activeLayoutConfig?.layoutOptions?.footer : {}),
            },
            content: {
                ...(activeLayoutConfig?.layoutOptions?.content ? activeLayoutConfig?.layoutOptions?.content : {}),
            }
        }
    );
};

const jumboLayoutReducer = (state, action) => {
    switch (action.type) {
        case LAYOUT_ACTIONS.SET_HEADER_OPTIONS:
            return {
                ...state,
                header: {
                    ...state?.header,
                    ...action?.payload,
                }
            };


        case LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS:
            return {
                ...state,
                sidebar: {
                    ...state?.sidebar,
                    ...action?.payload,
                }
            };

        case LAYOUT_ACTIONS.SET_CONTENT_OPTIONS:
            return {
                ...state,
                content: {
                    ...state?.content,
                    ...action?.payload
                }
            };

        case LAYOUT_ACTIONS.SET_FOOTER_OPTIONS:
            return {
                ...state,
                footer: {
                    ...state?.footer,
                    ...action?.payload,
                }
            };


        case LAYOUT_ACTIONS.SET_ROOT_OPTIONS:
            return {
                ...state,
                root: {
                    ...state?.root,
                    ...action?.payload
                }
            };

        case LAYOUT_ACTIONS.SET_OPTIONS:
            return {
                ...state,
                ...action.payload,
            };


        default:
            return state;
    }
};

const JumboLayoutProvider = ({children}) => {
    const [layoutOptions, setLayoutOptions] = React.useReducer(
        jumboLayoutReducer,
        {},
        init
    );

    const setHeaderOptions = React.useCallback((options) => {
        setLayoutOptions({type: LAYOUT_ACTIONS.SET_HEADER_OPTIONS, payload: options});
    }, [setLayoutOptions]);

    const setSidebarOptions = React.useCallback((options) => {
        setLayoutOptions({type: LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS, payload: options});
    }, [setLayoutOptions]);

    const setFooterOptions = React.useCallback((options) => {
        setLayoutOptions({type: LAYOUT_ACTIONS.SET_FOOTER_OPTIONS, payload: options});
    }, [setLayoutOptions]);

    const setRootOptions = React.useCallback((options) => {
        setLayoutOptions({type: LAYOUT_ACTIONS.SET_ROOT_OPTIONS, payload: options})
    }, [setLayoutOptions]);

    const setContentOptions = React.useCallback((options) => {
        setLayoutOptions({type: LAYOUT_ACTIONS.SET_CONTENT_OPTIONS, payload: options})
    }, [setLayoutOptions]);

    const contentContextValue = React.useMemo(() => ({
        contentOptions: layoutOptions?.content,
        setContentOptions: setContentOptions,
    }), [layoutOptions?.content]);

    const sidebarContextValue = React.useMemo(() => ({
        sidebarOptions: layoutOptions?.sidebar,
        setSidebarOptions: setSidebarOptions,
    }), [layoutOptions?.sidebar]);

    const headerContextValue = React.useMemo(() => ({
        headerOptions: layoutOptions?.header,
        setHeaderOptions: setHeaderOptions,
    }), [layoutOptions?.header]);

    const footerContextValue = React.useMemo(() => ({
        footerOptions: layoutOptions?.footer,
        setFooterOptions: setFooterOptions,
    }), [layoutOptions?.footer]);

    const rootContextValue = React.useMemo(() => {
        return ({
            rootOptions: layoutOptions?.root,
            setRootOptions: setRootOptions,
        });
    }, [layoutOptions?.root]);


    return (
        <JumboLayoutRootContext.Provider value={rootContextValue}>
            <JumboLayoutSidebarContext.Provider value={sidebarContextValue}>
                <JumboLayoutHeaderContext.Provider value={headerContextValue}>
                    <JumboLayoutFooterContext.Provider value={footerContextValue}>
                        <JumboLayoutContentContext.Provider value={contentContextValue}>
                            {children}
                        </JumboLayoutContentContext.Provider>
                    </JumboLayoutFooterContext.Provider>
                </JumboLayoutHeaderContext.Provider>
            </JumboLayoutSidebarContext.Provider>
        </JumboLayoutRootContext.Provider>
    );
};

JumboLayoutProvider.propTypes = {
    children: PropTypes.node
};

export default JumboLayoutProvider;