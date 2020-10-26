import React from 'react';
import styled from 'styled-components';

const MoneyWrapper = styled.div`
	position: relative;
	background: black;
	height: 100vh;
	display: grid;
	grid-template-rows: 35% 25% auto;
	> .note {
		> textarea {
			font-size: 1.2em;
			white-space: pre-wrap;
			padding: 20px;
			color: white;
			background: black;
			width: 100%;
			height: 100%;
			border: 1px solid #999999;
			resize: none;
		}
	}
	> .output {
		border-left: 1px solid #999;
		border-right: 1px solid #999;
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
		position: absolute;
		bottom: 0;
		width: 100%;
		> button {
			background: #717273;
			float: left;
			color: white;
			font-size: 1.2em;
			width: 25%;
			height: 70px;
			border: 1px solid #999999;
			&.ok {
				height: 140px;
				float: right;
			}
			&.dot {
				width: 50%;
			}
		}
	}
`;

const Money = () => {
	return (
		<MoneyWrapper>
			<div className="note">
				<textarea placeholder="点击输入备注"/>
			</div>
			<div className="output">
				<span className="yuan">￥</span>
				<span className="number">0</span>
			</div>
			<div className="buttonWrapper">
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
				<button className="ok">OK</button>
				<button>0</button>
				<button className="dot">.</button>
			</div>
		</MoneyWrapper>
	);
};

export default Money;
