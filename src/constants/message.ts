const error = {
  require: '{field} is a required field.。',
  emailInvalid: 'The email address you entered is in an incorrect format.。',
  passwordValidate:
    'Your password must be between 8 and 15 characters long and consist of only letters, numbers, lowercase letters, uppercase letters, and special characters.',
  requiredImages: 'You must upload at least one map image.。',
  requestTimeOut: 'Request Timeout',
};

const info = {
  createSuccess: 'Create successfull',
  updateSuccess: 'Update successfull',
  uploadSuccess: 'Upload successfull',
  createError: 'Create error',
  updateError: 'Update error',
  uploadError: 'Upload error',
};

const form = {};

const Message = { info, error, form };

export default Message;
