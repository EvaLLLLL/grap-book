import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Icon from '../components/Icon';

const Wrapper = styled.div`
	color: white;
	position: relative;
	background: black;
	height: 100vh;
	> .titleWrapper {
			> .title {
			display: flex;
			align-items: center;
			margin: 0 20px;
			> span {
				font-size: 2em;
				padding: 15px 0;
			}
			> .icon {
			width: 2.5em;
			height: 2.5em;
			margin-right: 5px;
			}
			> .goback {
			width: 1.5em;
			height: 1.5em;
			margin-right: 20px;
			}
		}
	}
	> .amount {
		text-align: right;
		padding: 20px;
		> span {
			color: #999999;
			&.number {
				margin-left: 5px;
				color: white;
				font-size: 2em;
			}
		}
	}
	> .content {
		> .records > .recordItem {
			background: #1c1c1e;
			border: 1px solid #343436;
			padding: 10px 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			> .note {
				color: #999;
			}
			> .money {}
		}
	}
`;

const TravelBook: React.FC = (props) => {
	return (
		<Wrapper>
			<div className="titleWrapper">
				<div className="title">
					<Icon name="goback" className="goback"/>
					<Icon name="travel" className="icon"/>
					<span>旅行</span>
				</div>
			</div>
			<div className="amount">
				<span>总支出</span>
				<span className="number">￥15280</span>
			</div>
			<div className="content">
				<div className="records">
					<div className="recordItem">
						<span className="note oneLine">这是一条备注这是一条备注这是一条备注这是一条备注这是一条备注这是一条备注这是一条备注</span>
						<span className="money">￥4353453</span>
					</div>
					<div className="recordItem">
						<span className="note">这是一条备注</span>
						<span className="money">￥128</span>
					</div>
					<div className="recordItem">
						<span className="note">这是一条备注</span>
						<span className="money">￥128</span>
					</div>
					<div className="recordItem">
						<span className="note">这是一条备注</span>
						<span className="money">￥128</span>
					</div>
					<div className="recordItem">
						<span className="note">这是一条备注</span>
						<span className="money">￥128</span>
					</div>
					<div className="recordItem">
						<span className="note">这是一条备注</span>
						<span className="money">￥128</span>
					</div>
					<div className="recordItem">
						<span className="note">这是一条备注</span>
						<span className="money">￥128</span>
					</div>
					<div className="recordItem">
						<span className="note">这是一条备注</span>
						<span className="money">￥128</span>
					</div>
					<div className="recordItem">
						<span className="note">这是一条备注</span>
						<span className="money">￥128</span>
					</div>
				</div>
			</div>
			<Button content={'+ 记一笔'}/>
		</Wrapper>);
};
export default TravelBook;
