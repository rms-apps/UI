import { format } from 'date-fns';
import { PasswordRules } from './types';

export function cn(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(' ');
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = ({
  password,
  passwordRules,
}: {
  password: string;
  passwordRules: PasswordRules;
}): boolean => {
  const { minLength, minLowerCase, minUpperCase, minSpecialChars } =
    passwordRules;
  const lower = (password.match(/[a-z]/g) || []).length;
  const upper = (password.match(/[A-Z]/g) || []).length;
  const special = (password.match(/[^a-zA-Z0-9]/g) || []).length;
  return (
    password.length >= minLength &&
    lower >= minLowerCase &&
    upper >= minUpperCase &&
    special >= minSpecialChars
  );
};

export const toTitleCase = (value: string = '') => {
  return value
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const toSentenceCase = (value: string = '') => {
  const trimmed = value.trim();
  if (!trimmed) return '';
  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
};

export const isValidProtocol = ({
  url,
  withErrorLog = false,
}: {
  url?: string | null;
  withErrorLog?: boolean;
}): boolean => {
  if (!url) {
    if (withErrorLog) console.error('No URL passed');
    return false;
  }
  try {
    const fullUrl = new URL(url);
    return fullUrl.protocol === 'http:' || fullUrl.protocol === 'https:';
  } catch (error) {
    if (withErrorLog) console.error('Invalid URL:', error);
    return false;
  }
};

export const formatDateToMonthDay = (date: string) => {
  const dt = new Date(date || new Date());
  return {
    month: format(dt, 'MMMM'),
    day: format(dt, 'dd'),
  };
};

export const isValidIndianPhone = (phone: string) => {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(phone);
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const toNumberRecord = (
  obj: Record<string, string>,
): Record<string, number> =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, Number(v) || 0]));
