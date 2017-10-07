import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Dan from '@/components/dan/Dan';
import Sean from '@/components/Sean';
import Jon from '@/components/Jon';
import Pho from '@/components/Pho';
import Craig from '@/components/Craig';
import Music from '@/components/Music';

import Header from '@/components/Header';
import Weather from '@/components/Weather'
Vue.use(Router);

// Components
Vue.component('header', Header);
Vue.component('weather', Weather);

const routes = {
	'/': Hello,
	'/dan': Dan,
	'/sean': Sean,
	'/Jon': Jon,
	'/Pho': Pho,
	'/Craig': Craig,
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/dan',
      component: Dan,
		},
		{
			path: '/sean',
			component: Sean,
		},
		{
			path: '/jon',
			component: Jon,
		},
		{
			path: '/pho',
			component: Pho,
		}, 
		{
			path: '/craig',
			component: Craig,
		},
		{
			path: '/music',
			component: Music,
		},
  ],
});

