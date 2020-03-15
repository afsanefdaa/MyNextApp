import React from 'react';
import { Tabs, ConfigProvider } from 'antd';
import style from './AntTab.module.scss';


const { TabPane } = Tabs;

class AntTab extends React.Component {
  render() {
    return (
      <div className={style.body}>
        <ConfigProvider direction="rtl">
          <Tabs
            className={style.tab}
            defaultActiveKey="0"
            tabPosition="top"
            style={{ height: 220 }}
          >
            {[...Array(30).keys()].map((i) => (
              <TabPane tab={`تب${i}`} key={i}>
                محتویات
                {i}
              </TabPane>
            ))}
          </Tabs>
        </ConfigProvider>
      </div>
    );
  }
}

export default AntTab;
