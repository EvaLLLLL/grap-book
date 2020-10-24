import React from 'react';
import styled from 'styled-components';

const BookWrapper = styled.div`
	width: 320px;
	position: absolute;
	margin-top: 20px;
	left: 50%;
	transform: translateX(-160px);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	overflow: scroll;
`;

const BookItem = styled.div`
width: 150px;
border-radius: 10px;
background: #26282a;
color: white;
padding: 10px;
margin: 10px 0;
`;

const Title = styled.div`
color: #999;
`;
const Money = styled.div`
font-size: 1.5em;
margin: 10px 0;
`;

const BookNumber = styled.div`
color: #999;
margin-top: 40px;
`;

const Book = () => {
	return (
		<BookWrapper>
			<BookItem>
				<Title>
					旅行
				</Title>
				<Money>
					￥ 12584
				</Money>
				<BookNumber>
					8 条记录
				</BookNumber>
			</BookItem>
			<BookItem>
				<Title>
					旅行
				</Title>
				<Money>
					￥ 12584
				</Money>
				<BookNumber>
					4 条记录
				</BookNumber>
			</BookItem>
			<BookItem>
				<Title>
					旅行
				</Title>
				<Money>
					￥ 12584
				</Money>
				<BookNumber>
					4 条记录
				</BookNumber>
			</BookItem>
			<BookItem>
				<Title>
					旅行
				</Title>
				<Money>
					￥ 12584
				</Money>
				<BookNumber>
					4 条记录
				</BookNumber>
			</BookItem>
			<BookItem>
				<Title>
					旅行
				</Title>
				<Money>
					￥ 12584
				</Money>
				<BookNumber>
					4 条记录
				</BookNumber>
			</BookItem>
		</BookWrapper>
	);
};

export default Book;
