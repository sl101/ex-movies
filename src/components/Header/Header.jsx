import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import { AppRoutes } from '../../constants/routes';

export const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.header__wrapper}>
				<div className={'container'}>
					<div className={style.header__menu}>
						<div className={clsx(style.header__logo, 'logo')}></div>
						<nav className={clsx(style.header__nav, style.nav)}>
							<ul className={style.nav__list}>
								<li className={style.nav__item}>
									<NavLink className={'link'} to={AppRoutes.Home}>
										home
									</NavLink>
								</li>
								<li className={style.nav__item}>
									<NavLink className={'link'} to={AppRoutes.Movies}>
										movies
									</NavLink>
								</li>
								<li className={style.nav__item}>
									<NavLink className={'link'} to={AppRoutes.Books}>
										books
									</NavLink>
								</li>
								<li className={style.nav__item}>
									<NavLink className={'link'} to={AppRoutes.Games}>
										games
									</NavLink>
								</li>
							</ul>
						</nav>
						<div className={clsx(style.header__social, style.social)}>
							<div className={style.social__account}>user</div>
							<div className={style.social__favorites}>favorites</div>
							<div className={style.social__search}>search</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
