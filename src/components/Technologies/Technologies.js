import React from 'react';
import { DiFirebase, DiAws, DiDatabase,DiJsBadge, DiJava, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="skills">
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies & Tools</SectionTitle>
    <SectionText>
      I've worked on different range of technologies, from Design, Cloud Computing, to Backend and Frontend with different tools ranging from AWS, Docker, Terraform, Jenkins to Java, Python, JavaScript to frameworks like Django, SpringBoot, React
    </SectionText>
    <List>
      <ListItem>
        <DiJsBadge size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with<br/>
            React.js, HTML/CSS, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="4rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with<br/>
            Java, SpringBoot, Python, Django
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="4rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with<br/>
            MySql, Postgres, Mongo,
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="4rem" />
        <ListContainer>
          <ListTitle>Cloud Services</ListTitle>
          <ListParagraph>
            Experience with<br/>
            AWS, Docker, Jenkins, Terraform
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
