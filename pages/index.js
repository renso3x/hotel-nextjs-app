import { Col, Row } from 'antd';

import Layout from '../components/layout';
import ContentCard from '../components/content-card';

const Home = () => {
  return (
    <Layout>
      <Row gutter={16}>
        <Col span={8}>
          <ContentCard heading={"RESERVATIONS"} value={"30"} />
        </Col>
        <Col span={8}>
          <ContentCard heading={"OCCUPIED"} value={"20%"} />
        </Col>
        <Col span={8}>
          <ContentCard heading={"TOTAL"} value={"PHP 12,345"} />
        </Col>
      </Row>
      <h1>Welcome User!</h1>
    </Layout>
  )
}

export default Home;