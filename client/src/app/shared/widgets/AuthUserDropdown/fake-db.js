import {ASSET_AVATARS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const authUser = {
    email: "chalamannewyork@gmail.com",
    name: "Developer",
    profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `60x60`),
    handle: "chalamannewyork@gmail.com",
    job_title: "Software Eng."
};
