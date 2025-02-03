import pagesData from '../data/pages.json';

export const getPages = () => {
  return pagesData.pages;
};

export const getPageById = (id) => {
  return pagesData.pages.find(page => page.id === id);
};

export const getPublishedPages = () => {
  return pagesData.pages.filter(page => page.status === 'published');
};

export const getPageByPath = (path) => {
  return pagesData.pages.find(page => page.path === path);
};
