import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import Block from '../components/block';

const Main = ({
  data: {
    allCompanyValue: { nodes: companyValues },
    allOffice: { nodes: offices },
  },
}) => {
  const [language, setLanguage] = useState('en');
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [isMonochrome, setIsMonochrome] = useState(false);
  const [isUpsideDown, setIsUpsideDown] = useState(false);

  return (
    <main>
      <div>
        {companyValues.map(i => (
          <Block
            key={i.id}
            primary={i[language].title}
            secondary={i[language].description}
          />
        ))}
        <StaticImage
          src="../images/gig-logo.png"
          alt="Gaming Innovation Group company logo"
        />
      </div>
      <div>
        {offices.map(i => (
          <Block
            key={i.id}
            primary={i.country}
            secondary={i.address}
            small
          />
        ))}
      </div>
    </main>
  );
};

export const query = graphql`
  {
    allCompanyValue {
      nodes {
        en {
          description
          title
        }
        id
        sv {
          description
          title
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
