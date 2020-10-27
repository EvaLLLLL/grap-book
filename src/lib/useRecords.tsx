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
		const localRecords = JSON.parse(window.localStorage.getItem('records') || '[]')
		setRecords(localRecords)
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
		return true;
	};
	
	const getAmount = (iconName: string) => {
		const currentItems = records.filter(item => item.iconName === iconName);
		const recordMoneyArray = currentItems.map(item => item.recordMoney);
		
		const sumArray = (arr: number[]) => {
			return arr.reduce((pre, cur) => {
				return pre + cur;
			}, 0);
		};
		return sumArray(recordMoneyArray);
	}
	
	const getNotesNumber = (iconName: string) => {
		const current = records.filter(item => item.iconName === iconName);
		return current.length
	}
	
	return {records, addRecords, getAmount, getNotesNumber};
};

export {useRecords};
