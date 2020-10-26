import React from 'react';
import BookDetails from '../components/BookDetails';
import {Link} from 'react-router-dom';
import Button from '../components/Button';

const ClothesBook: React.FC = (props) => {
	const number = 1234;
	return (
		<div>
			<BookDetails number={number} title='衣服' iconName='clothes'>
				<div className="recordItem">
					<span className="note">这是一条备注</span>
					<span className="money">￥128</span>
				</div>
				<div className="recordItem">
					<span className="note">这是一条备注</span>
					<span className="money">￥128</span>
				</div>
			</BookDetails>
			<Link to='/money/clothes/:id'>
				<Button content={'+ 记一笔'}/>
			</Link>
		</div>
	);
};
export default ClothesBook;
