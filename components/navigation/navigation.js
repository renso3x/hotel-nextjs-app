import { Layout, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import NavigationStyle from './styles';

const { Header } = Layout;
const { SubMenu } = Menu;

const Navigation = ({ logout }) => {
  return (
    <NavigationStyle>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} theme="light" className="main-menu">
          <Menu.Item key="1">DASHBOARD</Menu.Item>
          <Menu.Item key="3">RESERVATION</Menu.Item>
          <Menu.Item key="4">RATES</Menu.Item>
          {/* Must go to the right */}
          <SubMenu
            key="sub2"
            title={
              <span>
                <SettingOutlined />
              </span>
            }
          >
            <Menu.Item key="9">Account</Menu.Item>
            <Menu.Item key="10" onClick={logout}>Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    </NavigationStyle>
  );
}

export default Navigation;