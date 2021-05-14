import { useStaticQuery, graphql } from "gatsby";

const flatListToHierarchical = (
    data = [],
    {idKey='id',parentKey='parentId',childrenKey='children'} = {}
) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
        const newItem = {...item};
        const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
        childrenOf[id] = childrenOf[id] || [];
        newItem[childrenKey] = childrenOf[id];
        parentId
            ? (
                childrenOf[parentId] = childrenOf[parentId] || []
            ).push(newItem)
            : tree.push(newItem);
    });
    return tree;
};

export const GetMenuItems = () => {
    const { primaryNav, footerNav } = useStaticQuery(graphql`
        query footerMenuItemsAndPrimaryMenuItems {
          primaryNav: wpgraphql {
            menuItems(where: {location: PRIMARY_MENU}, first: 100) {
              nodes {
                id
                parentId
                label
                path
              }
            }
          }
          footerNav: wpgraphql {
            menuItems(where: {location: FOOTER_MENU}, first: 100) {
              nodes {
                path
                label
              }
            }
          }
        }
    `)
    return {
        primaryNav: flatListToHierarchical(primaryNav.menuItems.nodes),
        footerNav: footerNav.menuItems.nodes
    }
}
