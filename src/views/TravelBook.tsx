import React from 'react';
import BookDetails from '../components/BookDetails';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import {useRecords} from '../lib/useRecords';
import RecordItem from '../components/RecordItem';

const TravelBook: React.FC = (props) => {
	const {records, getAmount} = useRecords();
	const travelItems = records.filter(item => item.iconName === 'travel');
	const amount = getAmount('travel')
	
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
