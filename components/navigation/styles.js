import styled from 'styled-components';

const NavigationStyle = styled.div`
  && {
    .ant-layout-header {
      padding: 0;
      display: flex;
      box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
      transition: background .3s,width .2s;
    }

    .ant-menu {
      position: relative;
      width: 100%;
      height: 64px;
      padding-left: 24px;
      display: flex;
    }
  }
`;

export default NavigationStyle;