export const ROUTES = {
  HOME: '/',
  BLOG: '/blog/:slug',
}

export const ENVIRONMENT = {
  baseUrl: process.env.BASE_URL ?? '',
  email: {
    authUser: process.env.EMAIL_AUTH_USER,
    authPassword: process.env.EMAIL_AUTH_PASSWORD,
    recipients: process.env.EMAIL_RECIPIENTS,
  },
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
}

export const CONTRACT_US = {
  LINE: { LABEL: '@273axokg', HREF: 'https://page.line.me/273axokg' },
  EMAIL: { LABEL: 'newmoneycompany888@gmail.com', HREF: 'mailto:newmoneycompany888@gmail.com' },
  TEL: { LABEL: '098-3456489', HREF: 'tel:0983456489' },
  TEL2: { LABEL: '092-6487395', HREF: 'tel:0926487395' },
  ADDRESS: { LABEL: '16/65 ม.2 บางบอน 3 บางบอน กทม 10150', HREF: '#' },
}
