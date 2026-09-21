export const ROLE = {
  ADMIN: 'admin',
  CUSTOMER: 'customer',
  CATERER: 'caterer',
} as const;


export type Role = (typeof ROLE)[keyof typeof ROLE];