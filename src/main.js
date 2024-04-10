import _ from "lodash";
import crc32 from "crc-32";

const reverse = (str) => {
  let newStr = "";
  return `${str.slice(-1)}${str.slice(0, -1)}`;
};

console.log(reverse("sstr"));
