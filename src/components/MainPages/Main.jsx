import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { Books } from './Books/Books';
import { Games } from './Games/Games';
import { AppRoutes } from '../../constants/routes';

export const Main = () => {
	return (
		<main className="appContain">
			<div className="container">
				<Routes>
					<Route path={AppRoutes.Home} element={<Home />} />
					<Route path={AppRoutes.Movies} element={<Movies />} />
					<Route path={AppRoutes.Books} element={<Books />} />
					<Route path={AppRoutes.Games} element={<Games />} />
				</Routes>
			</div>
		</main>
	);
};
