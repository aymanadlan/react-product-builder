/**
 * Validates the fields of a product object and returns an object containing any validation errors.
 *
 * @param {Object} product - The product object to validate.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageURL - The URL of the product's image.
 * @param {string} product.price - The price of the product as a string.
 * @returns {Object} An object containing error messages for each field. If a field is valid, its corresponding value will be an empty string.
 * @returns {string} [errors.title] - Error message for the title field.
 * @returns {string} [errors.description] - Error message for the description field.
 * @returns {string} [errors.imageURL] - Error message for the imageURL field.
 * @returns {string} [errors.price] - Error message for the price field.
 */
export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  //* RETURNS AN OBJECT
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  //const validURL = /^(ftp|http|https):\/\/[^'"]+$/.test(product.imageURL);
  const validURL = /^(ftp|http|https):\/\/[^\s/$.?#].[^\s]*$/.test(
    product.imageURL
  );

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 characters!";
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 80
  ) {
    errors.description =
      "Product Description must be between 10 and 80 characters!";
  }

  if (!product.imageURL.trim() || !validURL) {
    errors.imageURL = "Valid Image URL is required";
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Valid price is required";
  }
  return errors;
};
