// Utility to get the correct asset path for GitHub Pages
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Chef_Oscar_Silva' : '';
  return `${basePath}${path}`;
};
