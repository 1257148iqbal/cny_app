import {
    SIDEBAR_ANCHOR_POSITIONS,
    SIDEBAR_SCROLL_TYPES,
    SIDEBAR_STYLES,
    SIDEBAR_VARIANTS,
    SIDEBAR_VIEWS
} from "@jumbo/utils/constants/layout";

const layoutConfig = {
    sidebar: {
        open: true,
        hide: false,
        variant: SIDEBAR_VARIANTS.PERSISTENT,
        style: SIDEBAR_STYLES.FULL_HEIGHT,
        view: SIDEBAR_VIEWS.FULL,
        scrollType: SIDEBAR_SCROLL_TYPES.FIXED,
        anchor: SIDEBAR_ANCHOR_POSITIONS.LEFT,
    },
    header: {
        hide: false,
        fixed: true,
    },
    footer: {
        hide: false,
    },
    root: {

    }
};

export default layoutConfig;