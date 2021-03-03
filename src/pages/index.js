import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import Block from '../components/block';
import Logo from '../components/logo';
import Menu from '../components/menu';

const Main = ({
  data: {
    allCompanyValue: { nodes: companyValues },
    allOffice: { nodes: offices },
  },
}) => {
  // TODO
  const [language, setLanguage] = useState('en');
  const [backgroundColor, setBackgroundColor] = useState();
  const [isMonochrome, setIsMonochrome] = useState(false);
  const [isUpsideDown, setIsUpsideDown] = useState(false);

  return (
    <main>
      <Menu
        language={language}
        setLanguage={setLanguage}
        setBackgroundColor={setBackgroundColor}
        isMonochrome={isMonochrome}
        setIsMonochrome={setIsMonochrome}
        isUpsideDown={isUpsideDown}
        setIsUpsideDown={setIsUpsideDown}
      />
      <Container variant="top">
        {companyValues.map(i => (
          <Block
            key={i.id}
            title={i[language].title}
            text={i[language].description}
          />
        ))}
        <Logo />
      </Container>
      <Container variant="bottom">
        {offices.map(i => (
          <Block
            key={i.id}
            title={i.country}
            text={i.address}
          />
        ))}
      </Container>
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
