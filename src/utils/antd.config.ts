import { ThemeConfig, theme } from 'antd';

export const antdTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#7C5CFC', 
    colorBgLayout: '#1D1178', 
    fontSize: 14,
    borderRadius: 4,
  },
  components: {
    Layout: {
      headerBg: '#FFFFFF', 
      footerBg: '#FFFFFF', 
      bodyBg: '#FFFFFF', 

    },
    Menu: {
      itemSelectedBg: '#7C5CFC', // Default 600
      itemHoverBg: '#B49DFE', // Light 400
      itemSelectedColor: '#FFFFFF', // White text for selected item
    },
  },
};