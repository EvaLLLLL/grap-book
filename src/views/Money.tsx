import React, {ChangeEventHandler, useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {generateOutput} from '../lib/generateOutput';
import Icon from '../components/Icon';
import {createID} from '../lib/createId';
import {useRecords} from '../lib/useRecords';

const MoneyWrapper = styled.div`
	position: relative;
	background: black;
	height: 100vh;
	display: grid;
	grid-template-rows: 35% 25% 40%;
	> .note {
		> .test {
			color: white;
		}
		border: 1px solid #999;
		> textarea {
			font-size: 1.2em;
			white-space: pre-wrap;
			padding: 20px 40px 20px 20px;
			color: white;
			background: black;
			width: 100%;
			height: 100%;
			resize: none;
		}
		> .icon {
			width: 1.5em;
			position: fixed;
			right: 16px;
			top: 20px;
			transform: translateY(-2px);
		}
	}
	> .output {
		border: 1px solid #999;
		color: white;
		font-size: 2em;
		background: #26282b;
		display: flex;
		align-items: center;
		> .yuan {
			border-right: 1px solid #999999;
			padding: 10px;
		}
		> .number {
			padding: 20px;
		}
	}
	> .buttonWrapper {
		border: 1px solid #999;
		width: 100%;
		height: 100%;
		> button {
			background: #717273;
			float: left;
			color: white;
			font-size: 1.2em;
			width: 25%;
			height: 25%;
			border: 1px solid #999999;
			&.ok {
				height: 50%;
				float: right;
			}
			&.dot {
				width: 50%;
			}
		}
	}
`;


const Money = () => {
	const [output, setOutput] = useState('0');
	const {records, addRecords} = useRecords();
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const id = createID();
	
	const [newRecord, setNewRecord] = useState({
		id: id,
		iconName: 'travel',
		notes: '',
		recordMoney: 0
	});
	
	const onClickButtonWrapper = (e: React.MouseEvent) => {
		const text = (e.target as HTMLButtonElement).textContent || '0';
		if (text === 'OK') {
			return;
		}
		setOutput(generateOutput(text, output));
		setNewRecord({...newRecord, recordMoney: parseFloat(generateOutput(text, output))});
	};
	
	const addNotes: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		setNewRecord({...newRecord, notes: e.target.value});
	};
	
	const submit = () => {
		if (newRecord.recordMoney !== 0) {
			if (addRecords(newRecord)) {
				alert('保存成功');
			}
		} else {
			alert('请输入大于 0 的金额');
		}
		setOutput('0');
		(inputRef.current || {value: ''}).value = '';
	};
	
	const history = useHistory();
	const goBack = () => {
		history.goBack();
	};
	
	return (
		<MoneyWrapper>
			<div className="note">
				<div className="test">
				</div>
				<textarea placeholder="点击输入备注" onChange={addNotes} ref={inputRef}/>
				<Icon name="close" className="icon" onClick={goBack}/>
			</div>
			<div className="output">
				<span className="yuan">￥</span>
				<span className="number">{output}</span>
			</div>
			<div className="buttonWrapper" onClick={onClickButtonWrapper}>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>删除</button>
				<button>4</button>
				<button>5</button>
				<button>6</button>
				<button>清空</button>
				<button>7</button>
				<button>8</button>
				<button>9</button>
				<button className="ok" onClick={submit}>OK</button>
				<button>0</button>
				<button className="dot">.</button>
			</div>
		</MoneyWrapper>
	);
};

export default Money;
