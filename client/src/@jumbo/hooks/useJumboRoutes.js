import {useRoutes} from "react-router-dom";
import {buildRoutes} from "@jumbo/utils";

let isRouteTreeGenerated = false;
let generatedRoutes = [];

const useJumboRoutes = (routes) => {
    if(!isRouteTreeGenerated) {
        generatedRoutes = buildRoutes([...routes]);
        isRouteTreeGenerated = true;
    }
    return useRoutes(generatedRoutes);
};

export default useJumboRoutes;