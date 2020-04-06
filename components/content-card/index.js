import { Card, Typography } from 'antd';
import PropTypes from 'prop-types';

const { Title } = Typography;

const ContentCard = ({ heading, value }) => {
  return (
    <Card>
      <span>{heading}</span>
      <Title level={3}>{value}</Title>
    </Card>
  )
}

ContentCard.propTypes = {
  heading: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default ContentCard;