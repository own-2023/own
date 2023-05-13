import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignInView from '@/views/SignInView.vue';
import SignUpView from '@/views/SignUpView.vue';
import ProfileView from '@/views/ProfileView.vue';
import WalletCard from '@/components/WalletCard.vue';

const routes = [
  { path: '/sign-in', name: 'sign-in', component: SignInView },
  { path: '/', name: 'home', component: HomeView },
  { path: '/sign-up', name: 'sign-up', component: SignUpView },
  {
    path: '/profile', name: 'profile', component: ProfileView, children: [
      {
        path: 'wallet',
        name: 'wallet',
        component: WalletCard,
      },
      {
        path: 'owned-NFTs',
        name: 'ownedNFTs',
        component: WalletCard,
      },
      {
        path: 'NFTs-on-market',
        name: 'NFTsOnMarket',
        component: WalletCard
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
