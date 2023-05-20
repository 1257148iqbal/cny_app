import React from "react";
import {useJumboApp} from "@jumbo/hooks";
import {LAYOUTS} from "../../app/layouts/layouts";

export const useJumboActiveLayoutConfig = () => {
    const {activeLayout} = useJumboApp();

    let layoutConfig = {};
    LAYOUTS.forEach(layout => {
        if(layout.name === activeLayout) {
            layoutConfig = {...layout};
        }
    });

    return layoutConfig;
};