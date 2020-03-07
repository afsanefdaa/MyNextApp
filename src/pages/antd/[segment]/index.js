import React, { useState } from 'react';
import { Input, Table, InputNumber } from 'antd';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Layout } from '../../../components';
import { withAuthSync } from '../../../hoc/withAuth';

const FlexBox = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid palevioletred;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      margin: 20px;
    }
  `;

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Rachel Green',
    age: 52,
    address: 'Korea, 10 Downing Street',
  },
  {
    key: '4',
    name: 'Joey Tribianee',
    age: 62,
    address: 'Italy, 10 Downing Street',
  },
  {
    key: '5',
    name: 'Afsane Fadaei',
    age: 72,
    address: 'Iran, Tehran, 10 Downing Street',
  },
];

const Antd = () => {
  const router = useRouter();
  const { segment } = router.query;
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState('');
  const [number, setNumber] = useState(3);

  const FilterByNameInput = (
    <>
      <Input
        placeholder="Search Name"
        value={value}
        onChange={(e) => {
          const currValue = e.target.value;
          setValue(currValue);
          const filteredData = data.filter((entry) => entry.name.includes(currValue));
          setDataSource(filteredData);
        }}
      />
    </>
  );

  const columns = [
    {
      title: FilterByNameInput,
      dataIndex: 'name',
      key: '1',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: '2',
    },
    {
      title: 'Adress',
      dataIndex: 'address',
      key: '3',
    },
  ];

  function onChange(vl) {
    console.log(vl);
    // setNumber(vl);
  }

  function formatter(vl) {
    // console.log(typeof vl, '--f');
    return `${vl}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function parser(vl) {
    if (Number(vl.split(',').join(''))) {
      return vl.replace(/\$\s?|(,*)/g, '');
    }
    const a = vl.match(/\d+/g).map(Number).join('');
    return a.replace(/\$\s?|(,*)/g, '');
  }

  return (
    <>
      {
        segment === 'tableSearch' && (

          <FlexBox>
            <Table columns={columns} dataSource={dataSource} />
          </FlexBox>
        )
      }
      {
        segment === 'inputNumber' && (
          [
            <h2>{number}</h2>,
            <InputNumber
              min={1}
              max={10}
              defaultValue={1000}
              formatter={formatter}
              parser={parser}
              onChange={onChange}
              style={{ width: '500px' }}
            />,
          ]
        )
      }
    </>
  );
};

Antd.Layout = Layout;
export default withAuthSync(Antd);
