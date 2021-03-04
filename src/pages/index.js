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
  const [language, setLanguage] = useState('en');
  const [randomCounter, setRandomCounter] = useState(0);
  const [isMonochrome, setIsMonochrome] = useState(false);
  const [isUpsideDown, setIsUpsideDown] = useState(false);

  return (
    <main>
      <Menu
        language={language}
        isMonochrome={isMonochrome}
        onChangeLanguage={val => setLanguage(val)}
        onChangeBackground={() => setRandomCounter(randomCounter + 1)}
        onChangeMonochrome={() => setIsMonochrome(!isMonochrome)}
        onRotateText={() => setIsUpsideDown(!isUpsideDown)}
      />
      <Container variant="top">
        {companyValues.map(i => (
          <Block
            key={i.id}
            title={i[language].title}
            text={i[language].description}
            randomCounter={randomCounter}
            isMonochrome={isMonochrome}
            isUpsideDown={isUpsideDown}
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
            randomCounter={randomCounter}
            isMonochrome={isMonochrome}
            isUpsideDown={isUpsideDown}
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
