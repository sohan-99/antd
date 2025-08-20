import { ThemeConfig, theme } from 'antd';

export const antdTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#ff4d4f', // Default blue
    colorBgLayout: 'red',
    fontSize: 14,
    borderRadius: 4,
  },
  components: {
    Layout: {
      headerBg: '#ffffff', // White header
      footerBg: '#ffffff', // White footer
      bodyBg: '#ffffff', // White body
    },
  },
};