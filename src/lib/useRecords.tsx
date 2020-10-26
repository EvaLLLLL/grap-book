import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {createID} from './createId';

export type RecordItem = {
	id: number
	iconName: string,
	title: string,
	notes: string,
	amount: number,
	createdAt?: string
};

type newRecordItem = Omit<RecordItem, 'cretedAt'>

const useRecords = () => {
	const [records, setRecords] = useState<RecordItem[]>([]);
	
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
		setRecords(localRecords);
	}, []);
	
	useUpdate(() => {
		window.localStorage.setItem('records', JSON.stringify(records));
	}, [records]);
	
	const addRecord = (newRecord: newRecordItem) => {
		if (newRecord.amount <= 0) {
			return false;
		}
		const record = {...newRecord, createdAt: (new Date()).toISOString()};
		setRecords([...records, record]);
		return true;
	};
	
	const addNewBook = (iconName: string, title: string) => {
		const newBook = {
			id: createID(),
			iconName: 'travel',
			title: title,
			notes: '',
			amount: 0,
			createdAt: (new Date()).toISOString()
		};
		setRecords([...records, newBook]);
	};
	
	return {records, addNewBook, addRecord};
};

export {useRecords};
