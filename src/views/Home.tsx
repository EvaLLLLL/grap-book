import React from 'react';
import styled from 'styled-components';
import Book from '../components/Book';
import Button from '../components/Button';
import Icon from '../components/Icon';

const Wrapper = styled.div`
	color: white;
	position: relative;
	background: black;
	height: 100vh;
	> .title {
	display: flex;
	align-items: center;
	width: 320px;
	margin: auto;
	> span {
		font-size: 2em;
		padding: 15px 0;
	}
	> .icon {
	width: 3em;
	height: 3em;
	margin-left: 5px;
	transform: translateY(-4px);
	}
	}
`;

const Home = () => {
	return (
		<Wrapper>
			<div className="title">
				<span>葡萄记账</span>
				<Icon name="grap" className="icon"/>
			</div>
			<Book/>
			<Button content={'+ 添加账本'}/>
		</Wrapper>
	);
};

export default Home;
