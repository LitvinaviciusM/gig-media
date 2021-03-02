const { getCompanyValues, getOffices } = require('./src/api');

export const createPages = async x => {
  console.log(x);
  const { actions: { createPage, setPageData } } = x;
  const comapnyValues = await getCompanyValues();
  const offices = await getOffices();

  setPageData()
  createPage({
    path: `/`,
    component: require.resolve('./src/pages/index.js'),
    context: { offices, comapnyValues },
  })
}