import { configure, setAddon, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import JSXAddon from "storybook-addon-jsx";

addDecorator(withInfo);
addDecorator(withKnobs);

setAddon(JSXAddon);

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
