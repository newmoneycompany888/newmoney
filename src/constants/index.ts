export const ROUTES = {
  HOME: '/',
}

export const environment = {
  email: {
    authUser: process.env.EMAIL_AUTH_USER,
    authPassword: process.env.EMAIL_AUTH_PASSWORD,
    recipients: process.env.EMAIL_RECIPIENTS,
  },
}
