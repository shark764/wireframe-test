export function log(type, msg, ...args) {
  switch (type) {
    case 'info':
      console.log(`%c${msg}`, 'color: #00529B; background-color: #BDE5F8;', ...args);
      break;
    case 'success':
      console.log(`%c${msg}`, 'color: #4F8A10; background-color: #DFF2BF;', ...args);
      break;
    case 'warning':
      console.log(`%c${msg}`, 'color: #9F6000; background-color: #FEEFB3;', ...args);
      break;
    case 'error':
      console.log(`%c${msg}`, 'color: #D8000C; background-color: #FFD2D2;', ...args);
      break;
    default:
      console.log(`%c${msg}`, 'background: LightGoldenRodYellow; color: darkslategray;', ...args);
      break;
  }
}

export const theme = {
  colors: {
    brand: '#07487a',
    primary: '#07487a',
    secondary: '#a3acbd',
    'accent-1': '#3498db',
    'accent-2': '#e6f5ff',
    'accent-3': '#ffffff',
  },
};
