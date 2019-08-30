import React, { useState } from 'react';
import { Input, Table } from 'antd';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park'
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

  const FilterByNameInput = (
    <>
      <Input
        placeholder="Search Name"
        value={value}
        onChange={e => {
          const currValue = e.target.value;
          setValue(currValue);
          const filteredData = data.filter(entry =>
            entry.name.includes(currValue)
          );
          setDataSource(filteredData);
        }}
      />
    </>
  );

  const columns = [
    {
      title: FilterByNameInput,
      dataIndex: 'name',
      key: '1'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: '2'
    },
    {
      title: 'Adress',
      dataIndex: 'address',
      key: '3'
    }
  ];

  return (
    <>
      {
        segment === 'tableSearch' && (

          <FlexBox>
            <Table columns={columns} dataSource={dataSource} />
          </FlexBox>
        )
      }
      </>
  )
}

export default Antd;
