import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const products = [
    getAssetPath(`${ASSET_IMAGES}/products/product1.png`, "200x230"),
    getAssetPath(`${ASSET_IMAGES}/products/product2.png`, "200x230"),
    getAssetPath(`${ASSET_IMAGES}/products/product3.png`, "200x230"),
];
