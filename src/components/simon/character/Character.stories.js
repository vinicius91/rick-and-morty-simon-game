import React from "react";
import { color, text, boolean, number } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import { Character } from "./Character";

storiesOf("Character", module)
  .addWithJSX("Rick", () => (
    <Character
      img={text(
        "text",
        "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      )}
      color={color("color", "#5FD382")}
      colorDark={color("colorDark", "#4ca868")}
      active={boolean("disabled", false)}
      size={number("size", 300)}
    />
  ))
  .addWithJSX("Morty", () => (
    <Character
      img={text(
        "text",
        "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      )}
      color={color("color", "#dc5245")}
      colorDark={color("colorDark", "#b04137")}
      active={boolean("disabled", true)}
      size={number("size", 300)}
    />
  ))
  .addWithJSX("Summer", () => (
    <Character
      img={text(
        "text",
        "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      )}
      color={color("color", "#e6e564")}
      colorDark={color("colorDark", "#cfce5a")}
      active={boolean("disabled", false)}
      size={number("size", 300)}
    />
  ))
  .addWithJSX("Beth", () => (
    <Character
      img={text(
        "text",
        "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
      )}
      color={color("color", "#038fe4")}
      colorDark={color("colorDark", "#0272b6")}
      active={boolean("disabled", true)}
      size={number("size", 300)}
    />
  ));
