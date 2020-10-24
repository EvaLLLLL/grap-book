import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
	color: black;
	background: white;
	position: fixed;
	bottom: 20px;
	left: 50%;
	width: 320px;
	padding: 15px 0;
	transform: translateX(-160px);
	text-align: center;
	border-radius: 10px;
`;

type Props = {
	content: string
} & React.HtmlHTMLAttributes<HTMLDivElement>

const Button: React.FC<Props> = (props) => {
	const {content} = props;
	return (
		<ButtonWrapper onClick={props.onClick}>{content}</ButtonWrapper>
	);
};

export default Button;
