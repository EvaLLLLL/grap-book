import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Icon from '../components/Icon';
import AddBook from '../components/AddBook';
import HomeBookItem from '../components/HomeBookItem';
import {useBooks} from '../lib/useBooks';

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
	const {books, addNewBook} = useBooks();
	
	const addBookVisible = () => {
		setHideAddBook(!hideAddBook);
	};
	
	const addBookItem = (iconName: string, title: string) => {
		const names = books.map((item: any) => {
			return item.iconName;
		});
		if (names.indexOf(iconName) < 0) {
			addNewBook(iconName, title);
		} else {
			alert(`已创建过${title}账本！`);
		}
	};
	
	return (
		<Wrapper>
			<div className="title">
				<span>葡萄记账</span>
				<Icon name="grap"
				      className="icon"/>
			</div>
			<HomeBookItem bookContent={books}/>
			<Button content={'+ 添加账本'}
			        onClick={addBookVisible}/>
			{
				hideAddBook ? '' :
					<AddBook hideAdd={addBookVisible} addBookItem={addBookItem}/>
			}
		</Wrapper>);
};
export default Home;
