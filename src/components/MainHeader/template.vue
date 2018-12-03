<template lang="pug">
  header.main-header
    nav.header-navbar(
      :class="{ 'header-navbar_show' : show }"
    )
      .header-navbar__row
        .header-navbar__logo-col
          router-link.header-navbar__logo(to="/")
            img.header-navbar__logo-img(
              src="/img/logo.svg"
              alt="Fugue"
            )
        .header-navbar__toggler-col
          .header-navbar__toggler(
            :class="{'header-navbar__toggler_active': show }"
            type="button"
            @click="handlerToggler"
          )
            span.header-navbar__toggler-icon
            span.header-navbar__toggler-icon
            span.header-navbar__toggler-icon
        .header-navbar__content-col
          .header-navbar__items-row
            .header-navbar__items.header-navbar__items_left
              router-link.header-navbar__items-link(to="/") About
              router-link.header-navbar__items-link(to="/") Buy
            .header-navbar__items.header-navbar__items_right
              router-link.header-navbar__items-link(to="/") Login
              router-link.header-navbar__items-link(to="/") Register
</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>
