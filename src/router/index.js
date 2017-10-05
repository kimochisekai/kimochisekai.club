import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Dan from '@/components/Dan';
import Sean from '@/components/Sean';
import Jon from '@/components/Jon';
import Pho from '@/components/Pho';

Vue.use(Router);

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
		}
  ],
});
