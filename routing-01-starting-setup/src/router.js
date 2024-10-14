import {createRouter, createWebHistory} from "vue-router";
import TeamsList from "@/components/pages/TeamsList.vue";
import TeamsFooter from "@/components/pages/TeamsFooter.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";
import UsersList from "@/components/pages/UsersList.vue";
import UsersFooter from "@/components/pages/UsersFooter.vue";
import NotFound from "@/components/pages/NotFound.vue";

const vueRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        // {path: '/teams', component: TeamsList, alias: '/'},
        {
            path: '/teams',
            name: 'teams',
            meta: {needsAuth: true},
            components: {default: TeamsList, footer: TeamsFooter},
            children: [
                {
                    path: '/teams/:teamId', name: 'team-members', component: TeamMembers
                },
            ]
        },
        {
            path: '/users',
            components: {default: UsersList, footer: UsersFooter},
            beforeEnter: (to, from, next) => {
                next();
            },
        },
        {path: '/:notFound(.*)', component: NotFound}
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        return {left: 0, top: 0};
    }
});

vueRouter.beforeEach(function (to, from, next) {
    if (to.meta.needsAuth) {
        next();
    } else {
        next();
    }
});

vueRouter.afterEach(function (to, from) {
    // send analytics data
    console.log(to, from);
})


export default vueRouter;