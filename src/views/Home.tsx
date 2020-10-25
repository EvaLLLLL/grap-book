import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Icon from '../components/Icon';
import AddBook from '../components/AddBook';
import BookItem from '../components/BookItem';

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
	> .hideAddBook {
		display: none;
	}
`;

const Home: React.FC = (props) => {
	const [hideAddBook, setHideAddBook] = useState(true);
	const addBookVisible = () => {
		setHideAddBook(!hideAddBook);
	};
	
	const bookContent = [
		{iconName: 'travel', title: '旅行'},
		{iconName: 'food', title: '食物'},
		{iconName: 'pets', title: '宠物'},
		{iconName: 'clothes', title: '衣服'},
	]
	
	return (
		<Wrapper>
			<div className="title">
				<span>葡萄记账</span>
				<Icon name="grap"
				      className="icon"/>
			</div>
			<BookItem bookContent={bookContent}/>
			<Button content={'+ 添加账本'}
			        onClick={addBookVisible}/>
			{hideAddBook ? '' : <AddBook hideAdd={addBookVisible}/>}
		</Wrapper>);
};
export default Home;
