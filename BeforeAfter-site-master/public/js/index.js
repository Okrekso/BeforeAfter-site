import "../scss/global.scss";
import $ from "jquery";
import render from "../jsx/render";

$(document).ready(() => {
  console.log("ready");
  render($("#container")[0]);
});
