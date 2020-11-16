import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {createID} from './createId';

export type BookItem = {
	id: number
	iconName: string,
	title: string,
	notesNumber: number,
	amount: number,
};


const useBooks = () => {
	const [books, setBooks] = useState<BookItem[]>([]);
	
	useEffect(() => {
		let localBooks = JSON.parse(window.localStorage.getItem('books') || '[]');
		if (localBooks.length === 0) {
			localBooks = [
				{
					id: 1,
					iconName: 'pets',
					title: '宠物',
					notesNumber: 0,
					amount: 0,
				}
			];
		}
		setBooks(localBooks);
	}, []);
	
	useUpdate(() => {
		window.localStorage.setItem('books', JSON.stringify(books));
	}, [books]);
	
	const addNewBook = (iconName: string, title: string) => {
		const newBook = {
			id: createID(),
			iconName: iconName,
			title: title,
			notesNumber: 0,
			amount: 0,
		};
		setBooks([...books, newBook]);
	};
	
	return {books, addNewBook};
};

export {useBooks};
