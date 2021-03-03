// export const API_HOST = 'https://localhost:5001' || 'http://localhost:3030';
export const API_HOST = 'http://localhost:3030';
export const STRIPE_PUBLIC_KEY = 'hfbkhjadsfbajkhdfb';
export const COOKIE_NAME = 'tf-auth';
export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
};
export const MESSAGES = {
  PLEASE_LOGIN: 'Please login.',
  NOT_IN_PLAN: 'You are not currently enrolled in a plan',
  VIEW_PRODUCTS: 'View Plans',
  CREATE_PRODUCT_BUTTON_TEXT: 'Create Plan',
  PRODUCT_CREATE_TITLE: 'Create Plan',
  PRODUCT_SELECT_TITLE: 'Plan Select',
};
export const ERRORS = {
  ALREADY_REGISTERED: 'A user has already registered with that email address.',
  BAD_LOGIN: 'Your login details could not be verified. Please try again.',
  INVALID_EMAIL: 'You must enter a valid email address.',
  INVALID_ENTRY: 'You have not filled out all the required fields.',
  INVALID_NAME: 'You must enter a full name.',
  INVALID_PASSWORD: 'You must enter a password.',
  JWT_EXPIRED: 'For your safety, your session has expired. Please log back in and try your request again.',
  NO_PERMISSION: 'You do not have permission to access this content.',
  PASSWORD_CONFIRM_FAIL: 'Your passwords did not match. Please attempt your request again.',
  PASSWORD_MUST_MATCH: 'Your passwords must match.',
  PASSWORD_RESET_EXPIRED: 'Your password reset request may have expired. Please attempt to reset your password again.',
  PASSWORD_TOO_SHORT: 'Your password must be at least eight characters long.',
  USER_NOT_FOUND: 'No user was found.',
};

export const ACTIONS = {
  TAB_LABEL: 'Promises',
  TAB_ICON: 'checkmark',
  TITLE: 'Promises',
  TITLE_SINGULAR: 'Promise',
  TITLE_PLURAL: 'Promises',
  CREATE_ACTION_TITLE: 'Create Promise',
};

export const PLANS = {
  TAB_LABEL: 'Plans',
  TAB_ICON: 'checkmark',
  TITLE: 'Plans',
  TITLE_SINGULAR: 'Plan',
  TITLE_PLURAL: 'Plans',
  CREATE_PLAN_TITLE: 'Create Plan',
  PLAN_SELECT_TITLE: 'Select a Plan',
  NOT_IN_PLAN: 'You are not currently enrolled in a plan.',
};

export const PROGRESS = ['Ready to go...', 'Good start...', 'Doing great!', 'Almost there!', 'Complete. Great work!'];
