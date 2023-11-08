import userMenu from "../helpers/data/user-menu.json";

export const getMenuItems = (role) => {
    if(!userMenu || !role) return [];
    const menu = userMenu[role.toLowerCase()];
    return menu;    
}