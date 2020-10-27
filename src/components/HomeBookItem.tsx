import styled from 'styled-components';
import Icon from './Icon';
import React from 'react';
import {Link} from 'react-router-dom';
import {BookItem} from '../lib/useBooks';
import {useRecords} from '../lib/useRecords';

const BookWrapper = styled.div`
	padding: 0 10px;
	@media(max-height: 600px){
		padding: 0 15px;
	}
	width: 320px;
	position: absolute;
	left: 50%;
	transform: translateX(-160px);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	overflow: scroll;
`;

const BookItemWrapper = styled.div`
width: 140px;
border-radius: 10px;
background: #26282a;
color: white;
padding: 10px;
margin: 5px 0;
`;
const Title = styled.div`
	color: #999;
	display: flex;
	align-items: center;
	> .icon {
		width: 1.5em;
		height: 1.5em;
		margin-right: 1em;
	}
`;
const Money = styled.div`
font-size: 1.5em;
margin: 10px 0;
	> div {
		margin-top: 0.5em;
		color: #999;
		font-style: italic;
		font-size: 0.5em;
	}
`;
const BookNumber = styled.div`
color: #999;
margin-top: 40px;
@media (max-height: 600px){
margin-top: 10px;
}
`;

type Props = {
	bookContent: Array<BookItem>
}

const HomeBookItem: React.FC<Props> = (props) => {
	const bookContent = props.bookContent;
	const {getAmount, getNotesNumber} = useRecords();
	
	return (
		<BookWrapper>
			{bookContent.map((item) => {
				return (
					<Link to={`/money/${item.iconName}`} key={item.title}>
						<BookItemWrapper>
							<Title>
								<Icon name={item.iconName} className="icon"/>
								<span>{item.title}</span>
							</Title>
							<Money>
								￥ {getAmount(item.iconName)}
								<div>总支出</div>
							</Money>
							<BookNumber>
								{getNotesNumber(item.iconName)} 条记录
							</BookNumber>
						</BookItemWrapper>
					</Link>
				);
			})}
		</BookWrapper>
	);
};

export default HomeBookItem;
