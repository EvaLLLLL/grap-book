import React from 'react';
import BookDetails from '../components/BookDetails';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import {useRecords} from '../lib/useRecords';
import RecordItem from '../components/RecordItem';

type Props = {
	iconName: string,
	title: string
}

const BookMoney: React.FC<Props> = (props) => {
	const {records, getAmount} = useRecords();
	const Items = records.filter(item => item.iconName === props.iconName);
	const amount = getAmount(props.iconName);
	
	return (
		<div>
			<BookDetails number={amount} title={props.title} iconName={props.iconName}>
				{Items.map((item) =>
					<RecordItem key={item.id}>
						<span className="note">{item.notes}</span>
						<span className="money">￥{item.recordMoney}</span>
					</RecordItem>
				)}
			</BookDetails>
			<Link to={`/money/${props.iconName}/:id`}>
				<Button content={'+ 记一笔'}/>
			</Link>
		</div>
	);
};
export default BookMoney;
