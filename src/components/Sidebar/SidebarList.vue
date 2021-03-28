<template>
  <ul class="sidebar__list">
    <sidebar-item
      v-for="(item, idx) in list_data"
      :key="`item-${idx}`"
      :link="item.link"
      :text="item.text"
    >
      <components
        :is="`svg-${item.icon}`"
        class="sidebar__svg"
      />
    </sidebar-item>
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
import SidebarItem from './SidebarItem.vue';

export default {
  name: 'SidebarList',

  components: {
    SidebarItem,
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
        link_to_page: '#',
      },
      {
        icon: 'Products',
        text: 'Продукт',
        link_to_page: '#',
      },
      {
        icon: 'Users',
        text: 'Пользователи',
        link_to_page: '#',
      },
      {
        icon: 'Builder',
        text: 'Констурктор сайта',
        link_to_page: '#',
      },
      {
        icon: 'Broadcast',
        text: 'Трансляции',
        link_to_page: '#',
      },
      {
        icon: 'Newsletter',
        text: 'Рассылка',
        link_to_page: '#',
      },
      {
        icon: 'Marketing',
        text: 'Маркетинг',
        link_to_page: '#',
      },
      {
        icon: 'Payments',
        text: 'Платежи',
        link_to_page: '#',
      },
      {
        icon: 'Settings',
        text: 'Настройки',
        link_to_page: '#',
      },
    ],
  }),
};
</script>
