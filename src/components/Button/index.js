import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid;
  border-color: ${({ theme}) => theme.colors.secondary };
  width: 100%;
  padding: 10px 16px;
  margin: 5px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary}cc;
  }
  &:disabled {
    background-color: ${({ theme}) => theme.colors.mainBg };
    border: 1px solid ;
    border-color: ${({ theme}) => theme.colors.secondary };
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;