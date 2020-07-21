import React from 'react';
import { Pagination, Card } from 'antd';

const PaginationItem = (props) => {
    const paginationNumber = []
    for (let i = 1; i <= Math.ceil(props.totalItem / props.perPage); i++) {
        paginationNumber.push(i)
    }
    console.log(props.pageNo, 'hello pagination')
    return (
        <div>
            {/* <li onClick={}>{paginationNumber}</li> */}
            {paginationNumber.map((value) => {
                return (
                    <h1 key={value} onClick={() => props.pageNo(value)}>{value}</h1>
                )
            })}
            <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Pagination defaultCurrent={1} total={50} />,
        </div>
    )
};
export default PaginationItem;


