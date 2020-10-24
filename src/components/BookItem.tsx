import styled from 'styled-components';
import Icon from './Icon';
import React from 'react';

const BookItemWrapper = styled.div`
width: 150px;
border-radius: 10px;
background: #26282a;
color: white;
padding: 10px;
margin: 10px 0;
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
`;
const BookWrapper = styled.div`
	width: 320px;
	position: absolute;
	left: 50%;
	transform: translateX(-160px);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	overflow: scroll;
`;

const BookItem = () => {
	return (
		<BookWrapper>
			<BookItemWrapper>
				<Title>
					<Icon name="travel" className="icon"/>
					<span>旅行</span>
				</Title>
				<Money>
					￥ 12584
					<div>总支出</div>
				</Money>
				<BookNumber>
					8 条记录
				</BookNumber>
			</BookItemWrapper>
		</BookWrapper>
	);
};

export default BookItem;