import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-left: 75px;
`;

export const LogoContainer = styled(Link)`
  margin-left: -100px;
  padding-top: 3px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bolder;
  margin-right: 75px;
  color: #501882;
`;

export const OptionLink = styled(Link)`
  padding: 25px 10px;
  margin-top: 35px;
  cursor: pointer;
`;
