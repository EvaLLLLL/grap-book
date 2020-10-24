import React from 'react';
import styled from 'styled-components';
import Book from '../components/Book';
import Button from '../components/Button';

const Wrapper = styled.div`
	color: white;
	position: relative;
	background: black;
	height: 100vh;
	> h1 {
		padding: 15px 0;
		width: 320px;
		margin: auto;
	}
`;

const Home = () => {
	return (
		<Wrapper>
			<h1>葡萄记账</h1>
			<Book/>
			<Button content={"+ 添加账本"}/>
		</Wrapper>
	);
};

export default Home;
