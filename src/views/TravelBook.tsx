import React from 'react';
import BookDetails from '../components/BookDetails';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import {useRecords} from '../lib/useRecords';

const TravelBook: React.FC = (props) => {
	const {records, addRecords} = useRecords();
	console.log(records);
	const number = 123;
	
	return (
		<div>
			<BookDetails number={number} title='旅行' iconName='travel'>
				{records.length === 0 ? '' :
					<div>
						<div className="recordItem">
							<span className="note">这是一条备注</span>
							<span className="money">￥128</span>
						</div>
						<div className="recordItem">
							<span className="note">这是一条备注</span>
							<span className="money">￥128</span>
						</div>
					</div>
				}
			</BookDetails>
			<Link to='/money/travel/:id'>
				<Button content={'+ 记一笔'}/>
			</Link>
		</div>
	);
};
export default TravelBook;
