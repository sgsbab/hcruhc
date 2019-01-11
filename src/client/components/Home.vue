<template>
  <div id="topbar_headercontainer">
    <TopBar></TopBar>
    <HeaderContainer></HeaderContainer>
    <!-- <HomeCarousel></HomeCarousel> -->
    <AboutChurch></AboutChurch>
  </div>
</template>

<script>
import TopBar from './TopBar'
import HeaderContainer from './HeaderContainer'
// import HomeCarousel from './HomeCarousel'
import Communication from './Communication'
import CreateMsg from './CreateMsg'
import AboutChurch from './AboutChurch'

export default {
  name: 'Home',
  components: {TopBar, HeaderContainer, Communication, CreateMsg, AboutChurch}
}
</script>

<style>

</style>
