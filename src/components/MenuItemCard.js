import { CDN_URL } from "../utils/constants";
const MenuItemCard = ({ itemInfo }) => {
  // console.log(itemInfo);
  const { name, description, price } = itemInfo;

  return (
    <li>
      <h4 className="item-name">{name}</h4>
      <ul>
        <li>{description}</li>
        <li>{price / 100} For Two</li>
      </ul>
    </li>
  );
};
export default MenuItemCard;
