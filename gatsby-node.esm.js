import { getCompanyValues, getOffices } from './src/api';
import { v4 as uuidv4 } from 'uuid';

export const sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  // Company values
  const comapnyValuesEn = await getCompanyValues('en');
  const comapnyValuesSv = await getCompanyValues('sv');
  comapnyValuesEn.forEach((i, idx) => {
    const companyValueNode = {
      id: uuidv4(),
      parent: null,
      children: [],
      internal: {
        type: 'companyValue',
        contentDigest: createContentDigest([...comapnyValuesEn, ...comapnyValuesSv]),
      },
      en: i,
      sv: comapnyValuesSv[idx],
    };
    createNode(companyValueNode);
  });

  // Offices
  const offices = await getOffices();
  offices.forEach(i => {
    const officeNode = {
      parent: null,
      children: [],
      internal: {
        type: 'office',
        contentDigest: createContentDigest(i),
      },
      ...i,
      id: uuidv4(), // overriding i.id
    };
    createNode(officeNode);
  })
};
