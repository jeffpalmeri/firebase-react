export default function validateCreateLink(values) {
  let errors = {};

  // description errors
  if(!values.description) {
    errors.description = 'Description Required';
  } else if(values.description.length < 6) {
    errors.description = "Description must be at least 6 characters";
  }
  // url errors.
  if(!values.url) {
    errors.url = "URL Required";
  } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "URL must be valid";
  }

  return errors;
}
