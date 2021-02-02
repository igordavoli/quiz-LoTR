import styled from 'styled-components';
import db from '../../../db.json';

const Widget = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  margin: 24px 0  24px 0;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background-color: ${db.theme.colors.mainBg}dd;
  border-radius: 7px;
  overflow: hidden; 
  color: ${db.theme.colors.contrastText};

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0; 
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;
Widget.header = styled.header`
  justify-content: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;
Widget.content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
  margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0; 
  }
`;

Widget.topic = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}90`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
