import { MenuOption } from "naive-ui";
import { RouterLink, RouteRecordRaw, RouteRecordName } from "vue-router";
import { Icon } from "~/components/Icon";
import { h } from "vue";

export const renderIcon = (icon: string) => {
  return () => h(Icon, { icon: icon });
};

export const renderRouterLink = (name: RouteRecordName, path: string) => {
  return () => h(RouterLink, { to: { path: path } }, { default: () => name });
};

export const convertMenusToMenuOption = (
  menus: RouteRecordRaw[]
): MenuOption[] => {
  const menuOptions: MenuOption[] = [];
  for (let menu of menus) {
    let children: MenuOption[] = [];
    if (menu.children) {
      children = convertMenusToMenuOption(menu.children);
    }
    const iconName: string = menu.meta ? menu.meta.icon : "";
    menuOptions.push({
      key: menu.path,
      label: renderRouterLink(menu.name ? menu.name : "", menu.path),
      icon: renderIcon(iconName),
      children: children,
    });
  }
  return menuOptions;
};
