// Utility to get the correct asset path for GitHub Pages
export const getAssetPath = (path: string): string => {
  // No basePath needed since gh-pages handles the subdirectory
  return path;
};
