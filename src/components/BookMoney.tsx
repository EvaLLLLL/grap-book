import React from 'react';
import BookDetails from '../components/BookDetails';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import {useRecords} from '../lib/useRecords';
import {RecordItemType} from '../lib/useRecords';
import RecordItem from '../components/RecordItem';
import dayjs from 'dayjs';
import styled from 'styled-components';

type Props = {
	iconName: string,
	title: string
}

const Date = styled.div`
	text-align: right;
	color: #999;
	font-style: italic;
	font-size: 0.5em;
	padding: 4px 20px 10px 0;
`;

const ItemWrapper = styled.div`
	margin-bottom: 20vh;
`

const BookMoney: React.FC<Props> = (props) => {
	const {records, getAmount} = useRecords();
	const amount = getAmount(props.iconName);
	const hash: { [K: string]: RecordItemType[] } = {};
	
	const Items = records.filter(item => item.iconName === props.iconName);
	
	Items.forEach((item) => {
		const key = dayjs(item.createdAt).format('YYYY-MM-DD');
		if (!(key in hash)) {
			hash[key] = [];
		}
		hash[key].push(item);
	});
	
	const array = Object.entries(hash).sort((a, b) => {
		if (a[0] === b[0]) {
			return 0;
		} else if (a[0] > b[0]) {
			return -1;
		} else {
			return 1;
		}
	});
	
	const beautifyDate = (date: string) => {
		const day = dayjs(date);
		const now = dayjs();
		if (day.isSame(now, 'day')) {
			return '今天';
		} else if (day.isSame(now.subtract(1, 'day'), 'day')) {
			return '昨天';
		} else {
			return dayjs(date).format('MM-DD');
		}
	};
	
	return (
		<div>
			<BookDetails number={amount} title={props.title} iconName={props.iconName}>
				<ItemWrapper>
					{array.map(([date, itemArray]) => {
						return (
							<div>
								
								{itemArray.map((item) =>
									<RecordItem key={item.id}>
										<span className="note">{item.notes}</span>
										<span className="money">￥{item.recordMoney}</span>
									</RecordItem>
								)}
								<Date>
									{beautifyDate(date)}
								</Date>
							</div>
						);
					})}
				</ItemWrapper>
			</BookDetails>
			<Link to={`/money/${props.iconName}/edit`}>
				<Button content={'+ 记一笔'}/>
			</Link>
		</div>
	);
};
export default BookMoney;
