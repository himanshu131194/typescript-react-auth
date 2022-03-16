/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */

import melodyLogo from '@images/melody-logo.png';

import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-redux';
import { reset } from '../../store/slices/game-process/game-process';

function Result() {
	const { mistakes, step } = useAppSelector(({ PROCESS }) => PROCESS);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const correctlyQuestionsCount = step - mistakes;

	return (
		<section className="result">
			<div className="result-logout__wrapper">
				<a className="result-logout__link" href="#">
					Выход
				</a>
			</div>
			<div className="result__logo">
				<img
					src={melodyLogo}
					alt="Угадай мелодию"
					width="186"
					height="83"
				/>
			</div>
			<h2 className="result__title">Вы настоящий меломан!</h2>
			<p className="result__total">
				Вы ответили правильно на {correctlyQuestionsCount} вопросов и
				совершили {mistakes} ошибки
			</p>
			<button
				onClick={() => {
					dispatch(reset());
					navigate(AppRoute.Game);
				}}
				className="replay"
				type="button"
			>
				Сыграть ещё раз
			</button>
		</section>
	);
}

export default Result;
