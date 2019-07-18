import Button from "./packages/button/index";
import Input from "./packages/input/index";
import Collapse from "./packages/Collapse/index";
import Panel from "./packages/panel/index";

const components = [Button, Input, Collapse, Panel];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Input,
  Collapse,
  Panel
};
