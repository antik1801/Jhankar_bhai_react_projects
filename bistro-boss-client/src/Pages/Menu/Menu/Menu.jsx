import React from "react";
import Cover from "../../Shared/Cover/Cover";
import menuBG from "../../../assets/menu/banner3.jpg";
import dessertBG from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladBG from "../../../assets/menu/salad-bg.jpg";
import soupBG from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import Button from "../../../components/Button";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offereds = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <title>Bistro - Menu</title>
      <Cover img={menuBG} title={"Our menu"}></Cover>
      <SectionTitle
        heading={"Don't Miss"}
        subheading={"Don't Miss"}
      ></SectionTitle>
      <MenuCategory items={offereds}></MenuCategory>
      <Button
        details={"Order Your Favourite Food"}
        link="/order/dessert"
      ></Button>
      {/* Dessert menu items */}
      <Cover title={"Desserts"} img={dessertBG}></Cover>
      <MenuCategory items={desserts}></MenuCategory>
      <Button
        details={"Order Your Favourite Food"}
        link="/order/dessert"
      ></Button>
      {/* Pizza Section */}
      <Cover title={"Pizza"} img={pizzaImg}></Cover>
      <MenuCategory items={pizzas}></MenuCategory>
      <Button
        details={"Order Your Favourite Food"}
        link="/order/pizza"
      ></Button>
      {/* Salads */}
      <Cover title={"Salad"} img={saladBG}></Cover>
      <MenuCategory items={salads}></MenuCategory>
      <Button
        details={"Order Your Favourite Food"}
        link="/order/salad"
      ></Button>
      {/* Soup BG */}
      <Cover title={"Soup"} img={soupBG}></Cover>
      <MenuCategory items={soups}></MenuCategory>
      <Button details={"Order Your Favourite Food"} link="/order/soup"></Button>
    </div>
  );
};

export default Menu;
