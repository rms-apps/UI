import { ColorName, Theme } from '../types';

export const DEFAULT_COLORS: Record<Theme, Record<ColorName, string>> = {
  light: {
    themed_text: '#3777FF',
    themed_text_error: '#f87171',
    themed_background: 'rgba(55, 119, 255, 0.15)',

    text_primary: '#0F172A',
    text_secondary: '#64748B',
    text_tertiary: '#94A3B8',

    background_primary: '#1E1E2E',
    background_secondary: '#1E293B',
    background_tertiary: '#B2C4D4',

    text_input_caret: '#3777FF',
    text_input_border: '#64748B',
    text_input_content: '#E6ECF3',
    text_input_border_focus: '#3777FF',
    text_input_placeholder: '#64748B',

    button_bg_primary_filled: '#3777FF',
    button_bg_primary_gradient: 'rgba(55, 119, 255, 0.15)',
    button_text_primary_hollow: '#3777FF',
    button_text_primary_filled: '#FFFFFF',
    button_text_primary_gradient: '#3777FF',

    button_bg_secondary_filled: '#1DA193',
    button_bg_secondary_gradient: 'rgba(41, 227, 180, 0.15)',
    button_text_secondary_hollow: '#29E3B4',
    button_text_secondary_filled: '#FFFFFF',
    button_text_secondary_gradient: '#29E3B4',

    button_bg_tertiary_filled: '#1A2433',
    button_bg_tertiary_gradient: 'rgba(26, 36, 51, 0.15)',
    button_text_tertiary_hollow: '#1A2433',
    button_text_tertiary_filled: '#E6ECF3',
    button_text_tertiary_gradient: '#1A2433',

    button_bg_danger_filled: '#EF4444',
    button_bg_danger_gradient: 'rgba(239, 68, 68, 0.15)',
    button_text_danger_filled: '#FFFFFF',
    button_text_danger_hollow: '#EF4444',
    button_text_danger_gradient: '#EF4444',

    icon_active: '#3777FF',
    icon_default: '#94A3B8',

    divider: '#475569',
  },

  dark: {
    themed_text: '#1DA193',
    themed_text_error: '#fca5a5',
    themed_background: 'rgba(41, 227, 180, 0.15)',

    text_primary: '#E6ECF3',
    text_secondary: '#A5B4CB',
    text_tertiary: '#7085A1',

    background_primary: '#0F172A',
    background_secondary: '#091524',
    background_tertiary: '#1F2B3C',

    text_input_caret: '#1DA193',
    text_input_border: '#2F3F55',
    text_input_content: '#E6ECF3',
    text_input_border_focus: '#1DA193',
    text_input_placeholder: '#A5B4CB',

    button_bg_primary_filled: '#3777FF',
    button_bg_primary_gradient: 'rgba(55, 119, 255, 0.15)',
    button_text_primary_hollow: '#3777FF',
    button_text_primary_filled: '#FFFFFF',
    button_text_primary_gradient: '#3777FF',

    button_bg_secondary_filled: '#1DA193',
    button_bg_secondary_gradient: 'rgba(41, 227, 180, 0.15)',
    button_text_secondary_hollow: '#29E3B4',
    button_text_secondary_filled: '#FFFFFF',
    button_text_secondary_gradient: '#29E3B4',

    button_bg_tertiary_filled: '#1A2433',
    button_bg_tertiary_gradient: 'rgba(26, 36, 51, 0.15)',
    button_text_tertiary_hollow: '#1A2433',
    button_text_tertiary_filled: '#E6ECF3',
    button_text_tertiary_gradient: '#1A2433',

    button_bg_danger_filled: '#DC2626',
    button_bg_danger_gradient: 'rgba(220, 38, 38, 0.15)',
    button_text_danger_filled: '#FFFFFF',
    button_text_danger_hollow: '#FCA5A5',
    button_text_danger_gradient: '#DC2626',

    icon_active: '#29E3B4',
    icon_default: '#A5B4CB',

    divider: '#2A3A50',
  },
};
