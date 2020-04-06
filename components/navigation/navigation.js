import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Navigation = ({ logout }) => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">DASHBOARD</Menu.Item>
        <Menu.Item key="2">FRONT DESK</Menu.Item>
        <Menu.Item key="3">RESERVATION</Menu.Item>
        <Menu.Item key="4">RATES</Menu.Item>
        <Menu.Item key="0" onClick={logout}>Logout</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navigation;