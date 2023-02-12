const handleErrors = (error: any) => {
  // specific errors

  if (error.response && error.response.status === 401) {
    return error.response.data.message;
  }
  if (error.response && error.response.status === 404) {
    return error.response.data.message;
  }
  if (error.response && error.response.status === 400) {
    return error.response.data.message;
  }

  // general errors
  return error.message;
};
export default handleErrors;
