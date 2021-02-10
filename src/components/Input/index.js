import PropTypes from 'prop-types'
import styled from 'styled-components';

const Input = styled.input`
  width: 250px;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

export default function InputFunc({ onChange, placeholder }) {
  return(
    <div>
      <Input onChange={onChange} placeholder={ placeholder }/>
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