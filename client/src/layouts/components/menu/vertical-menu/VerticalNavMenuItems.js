// ** Vertical Menu Components
// ** Utils
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@layouts/utils';
import VerticalNavMenuGroup from './VerticalNavMenuGroup';
import VerticalNavMenuLink from './VerticalNavMenuLink';
import VerticalNavMenuSectionHeader from './VerticalNavMenuSectionHeader';


const VerticalMenuNavItems = props => {
  // ** Components Object
  const Components = {
    VerticalNavMenuSectionHeader,
    VerticalNavMenuGroup,
    VerticalNavMenuLink
  };

  // ** Render Nav Menu Items
  const RenderNavItems = props.items.map( ( item, index ) => {
    const TagName = Components[resolveNavItemComponent( item )];

    return <TagName key={item.id || item.header} item={item} {...props} />;
  } );

  return RenderNavItems;
};

export default VerticalMenuNavItems;
