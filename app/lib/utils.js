export function getSizeName(value) {
  switch (value) {
    case "xs":
      return "X-Small";
    case "sm":
      return "Small";
    case "md":
      return "Medium";
    case "lg":
      return "Large";
    case "xl":
      return "X-Large";
    case "one-size":
      return "One Size";
    default:
      return value;
  }
}
