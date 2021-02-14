import PropTypes from 'prop-types'
import styled from 'styled-components';

const Input = styled.input`
  width: 260px;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.contrastText}DD;
    opacity: 1; /* Firefox */
  }
`;

export default function InputFunc({ onChange, placeholder, ...props }) {
  return(
    <div>
    <Input
      placeholder={placeholder}
      onChange={onChange}
      // eslint-disable-next-line react/jsx-props-no-spreading

    />
  </div> 
   
  )
} 

InputFunc.defaultProps = {
  value: '',
};

InputFunc.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  value: PropTypes.string,
};