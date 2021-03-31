<template>
  <ul class="sidebar__list">
    <li
      v-for="(item, idx) in list_data"
      :key="`item-${idx}`"
      class="sidebar__item"
    >
      <router-link
        active-class="sidebar__link_active"
        :to="item.link_to_page"
        :exact="item.exact"
        class="sidebar__link"
      >
        <i class="sidebar__icon">
          <components
            :is="`svg-${item.icon}`"
            class="sidebar__svg"
          />
        </i>
        <span class="sidebar__text">
          {{ item.text }}
        </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import SvgAnalytics from '@images/svg/sidebar/analytics.svg';
import SvgProducts from '@images/svg/sidebar/products.svg';
import SvgUsers from '@images/svg/sidebar/users.svg';
import SvgBuilder from '@images/svg/sidebar/builder.svg';
import SvgBroadcast from '@images/svg/sidebar/broadcast.svg';
import SvgNewsletter from '@images/svg/sidebar/newsletter.svg';
import SvgMarketing from '@images/svg/sidebar/marketing.svg';
import SvgPayments from '@images/svg/sidebar/payments.svg';
import SvgSettings from '@images/svg/sidebar/settings.svg';

export default {
  name: 'SidebarList',

  components: {
    SvgAnalytics,
    SvgProducts,
    SvgUsers,
    SvgBuilder,
    SvgBroadcast,
    SvgNewsletter,
    SvgMarketing,
    SvgPayments,
    SvgSettings,
  },

  data: () => ({
    list_data: [
      {
        icon: 'Analytics',
        text: 'Аналитика',
        link_to_page: '/analytics',
        exact: true,
      },
      {
        icon: 'Products',
        text: 'Продукт',
        link_to_page: '/products',
      },
      {
        icon: 'Users',
        text: 'Пользователи',
        link_to_page: '/users',
      },
      {
        icon: 'Builder',
        text: 'Констурктор сайта',
        link_to_page: '/builder',
      },
      {
        icon: 'Broadcast',
        text: 'Трансляции',
        link_to_page: '/broadcast',
      },
      {
        icon: 'Newsletter',
        text: 'Рассылка',
        link_to_page: '/newsletter',
      },
      {
        icon: 'Marketing',
        text: 'Маркетинг',
        link_to_page: '/marketing',
      },
      {
        icon: 'Payments',
        text: 'Платежи',
        link_to_page: '/payments',
      },
      {
        icon: 'Settings',
        text: 'Настройки',
        link_to_page: '/settings',
      },
    ],
  }),
};
</script>
