import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {createID} from './createId';

export type BookItem = {
	id: number
	iconName: string,
	title: string,
	notes: string,
	amount: number,
	createdAt?: string
};

const useBooks = () => {
	const [books, setBooks] = useState<BookItem[]>([]);
	
	useEffect(() => {
		let localRecords = JSON.parse(window.localStorage.getItem('records') || '[]');
		if (localRecords.length === 0) {
			localRecords = [
				{
					id: 1,
					iconName: 'travel',
					title: '旅行',
					note: '',
					amount: 0,
				}
			];
		}
		setBooks(localRecords);
	}, []);
	
	useUpdate(() => {
		window.localStorage.setItem('records', JSON.stringify(books));
	}, [books]);
	
	const addRecord = (newBookItem: BookItem) => {
		const record = {...newBookItem, createdAt: (new Date()).toISOString()};
		setBooks([...books, record]);
		return true;
	};
	
	const addNewBook = (iconName: string, title: string) => {
		const newBook = {
			id: createID(),
			iconName: iconName,
			title: title,
			notes: '',
			amount: 0,
			createdAt: (new Date()).toISOString()
		};
		setBooks([...books, newBook]);
	};
	
	return {books, addNewBook, addRecord};
};

export {useBooks};
