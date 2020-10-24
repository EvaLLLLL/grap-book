import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const AddBookWrapper = styled.div`
	position: fixed;
	z-index: 10;
	> .overlay {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(120, 120, 120, 0.9);
		z-index: 1;
	}
	> .dialog {
		background: black;
		border-radius: 10px;
		position: fixed;
		z-index: 2;
		width: 260px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		> .nav {
			height: 30px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 10px;
			> .title {
				color: #999;
			}
			> .close {
			position: relative;
			display: inline-block;
			width: 16px;
			height: 16px;
			cursor: pointer;
			&::before,
			&::after {
			content: '';
			position: absolute;
			height: 1px;
			background: #999;
			width: 100%;
			top: 50%;
			left: 50%;
			}
			&::before {
				transform: translate(-50%, -50%) rotate(-45deg);
			}
			&::after {
				transform: translate(-50%, -50%) rotate(45deg);
			}
		}
	}
	> .content {
			width: 100%;
			padding: 10px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			> .item {
				width: 70px;
				height: 90px;
				border-radius: 10px;
				background: #26282b;
				margin-bottom: 10px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				padding: 15px;
				> .icon {
				}
				> span {
				}
			}
		}
	}
`;

type Props = {
	hideAdd: () => void
}

const AddBook: React.FC<Props> = (props) => {
		return (
			<AddBookWrapper>
				<div className="overlay" onClick={props.hideAdd}/>
				<div className="dialog">
					<div className="nav">
						<span className="dontshow"/>
						<span className="title">添加账本</span>
						<span className="close" onClick={props.hideAdd}/>
					</div>
					<div className="content">
						<div className="item">
							<Icon name="food" className="icon"/>
							<span>食物</span>
						</div>
						<div className="item">
							<Icon name="traffic" className="icon"/>
							<span>交通</span>
						</div>
						<div className="item">
							<Icon name="travel" className="icon"/>
							<span>旅行</span>
						</div>
						<div className="item">
							<Icon name="pets" className="icon"/>
							<span>宠物</span>
						</div>
						<div className="item">
							<Icon name="clothes" className="icon"/>
							<span>衣服</span>
						</div>
						<div className="item">
							<Icon name="learn" className="icon"/>
							<span>学习</span>
						</div>
					</div>
				</div>
			</AddBookWrapper>
		);
	}
;

export default AddBook;
