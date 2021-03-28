<template>
  <header class="header js-header">
    <nav class="navbar">
      <a href="#" class="navbar__brand brand">
        <svg-logo class="brand__icon"/>
        <span>Beta</span>
      </a>

      <ul class="navbar__nav-list nav-list">
        <li class="nav-list__item reminder">
          <a href="#" class="nav-list__link">
            <svg-reminder class="nav-list__icon"/>
          </a>
        </li>
        <li class="nav-list__item account">
          <button type="button">
            Артем <span class="arrow"></span>
          </button>
        </li>
        <li class="nav-list__item search">
          <a href="#" class="nav-list__link">
            <svg-search class="nav-list__icon"/>
          </a>
        </li>
        <li class="nav-list__item langs">
          <button type="button">
            Ru <span class="arrow"></span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import SvgLogo from '@images/svg/logo.svg';
import SvgReminder from '@images/svg/reminder.svg';
import SvgSearch from '@images/svg/search.svg';

export default {
  name: 'HeaderPage',

  components: {
    SvgLogo,
    SvgReminder,
    SvgSearch,
  },
};
</script>
