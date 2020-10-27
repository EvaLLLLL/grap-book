import React, {useEffect} from 'react';
import BookDetails from '../components/BookDetails';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import {useRecords} from '../lib/useRecords';
import styled from 'styled-components';

const RecordItem = styled.div`
background: #1c1c1e;
			border: 1px solid #343436;
			padding: 10px 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			> .note {
				color: #999;
			}
`;

const TravelBook: React.FC = (props) => {
	const {records} = useRecords();
	const travelItems = records.filter(item => item.iconName === 'travel');
	const sumArray = (arr: number[]) => {
		return arr.reduce((pre, cur) => {
			return pre + cur;
		}, 0);
	};
	const recordMoneyArray = travelItems.map(item => item.recordMoney);
	const amount = sumArray(recordMoneyArray);
	
	return (
		<div>
			<BookDetails number={amount} title='旅行' iconName='travel'>
				{travelItems.map((item) =>
					<RecordItem key={item.id}>
						<span className="note">{item.notes}</span>
						<span className="money">￥{item.recordMoney}</span>
					</RecordItem>
				)}
			</BookDetails>
			<Link to='/money/travel/:id'>
				<Button content={'+ 记一笔'}/>
			</Link>
		</div>
	);
};
export default TravelBook;
