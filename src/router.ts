import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignInView from '@/views/SignInView.vue';
import SignUpView from '@/views/SignUpView.vue';
import ProfileView from '@/views/ProfileView.vue';
import WalletCard from '@/components/WalletCard.vue';
import NftMintView from './views/NftMintView.vue';

const routes = [
  { path: '/sign-in', name: 'sign-in', component: SignInView },
  { path: '/', name: 'home', component: HomeView },
  { path: '/sign-up', name: 'sign-up', component: SignUpView },
  { path: '/profile', name: 'profile', component: ProfileView, },
  { path: '/nft-mint', name: 'nftMint', component: NftMintView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
