import {useEffect, useState} from 'react';
import {createID} from './createId';
import {useUpdate} from './useUpdate';

export type RecordItem = {
	id: number
	iconName: string,
	recordMoney: number,
	notes: string,
	createdAt?: string
};

const useRecords = () => {
	const [records, setRecords] = useState<RecordItem[]>([]);
	
	useEffect(() => {
		JSON.parse(window.localStorage.getItem('records') || '[]');
	}, []);
	
	useUpdate(() => {
		window.localStorage.setItem('records', JSON.stringify(records));
	}, [records]);
	
	const addRecords = (newRecordItem: RecordItem) => {
			const newRecord = {
				id: createID(),
				iconName: newRecordItem.iconName,
				recordMoney: newRecordItem.recordMoney,
				notes: newRecordItem.notes,
				createdAt: (new Date()).toISOString()
			};
			setRecords([...records, newRecord]);
			return true
	};
	
	return {records, addRecords};
};

export {useRecords};
