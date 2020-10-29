import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './FullPageSpinner.less';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default class FullPageSpinner extends React.Component {
  render() {
    return (
      <div className={styles.spinner}>
        <Spin indicator={antIcon} />
      </div>
    );
  }
}
