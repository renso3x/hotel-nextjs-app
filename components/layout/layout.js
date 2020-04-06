import { Layout } from 'antd';
import Navigation from '../navigation';
import { withAuthSync, logout } from '../../utils/auth';

import StyledLayout from './styles';
const { Content } = Layout;

const BaseLayout = ({ children  }) => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Navigation logout={logout} />
      <StyledLayout>
        <Content>
          <div className="site-layout-content">{children}</div>
        </Content>
      </StyledLayout>
    </Layout>
  );
}

export default withAuthSync(BaseLayout);
