import React, { useState } from 'react';
import { graphql } from 'gatsby';

const Main = ({
  data: {
    allCompanyValue: { nodes: companyValues },
    allOffice: { nodes: offices },
  },
}) => {
  const [language, setLanguage] = useState('en');
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [isMonochrome, setIsMonochrome] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  console.log('companyValues: ', companyValues);
  console.log('offices: ', offices);

  return (
    <div>
      Hello, I'm main page
    </div>
  );
};

export const query = graphql`
  {
    allCompanyValue {
      nodes {
        en {
          id
        }
        id
        sv {
          id
        }
      }
    }
    allOffice {
      nodes {
        address
        country
        id
      }
    }
  }
`

export default Main;
