<template>
<div class="container rounded">
  <p class="p-1"></p>
 <b-navbar variant="light" type="light" toggleable="md" style="font-weight: 600;">
    <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
    <b-navbar-brand>
        <!--<span>Believe</span> -->
        <img src="@/assets/CSI_logo.jpg" class="align-top" height="80" width="80" alt/>
        <!-- <b-img src="@/static/CSI_logo.jpg" /> -->
        <!--<span>St. Peter's, Bangalore</span>-->
    </b-navbar-brand>
    <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav class="ml-auto">
              <b-nav-item>
                <router-link to="/" exact active-class="activeHome" style="color: #353535;">Home</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/" exact style="color: #353535;">Ministries</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/" exact style="color: #353535;">Sermons</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/" exact style="color: #353535;">Events</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link  to="/zkj4dnhstd3hdhd7fhd4fvwsg7" exact style="color: #353535;">Communication</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/" exact style="color: #353535;">Contacts</router-link>
              </b-nav-item>
            </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'HeaderContainer'
}
</script>

<style>
.activeHome {
  color: red !important;
}
/*********************************
Header Content
*********************************/

.header_container {
  width: 100%;
  background: #ffffff;
}
.header_content {
  -webkit-transition: all 400ms ease;
  -moz-transition: all 400ms ease;
  -ms-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
}
/*********************************
3.3 Logo
*********************************/
.logo a img
{
  display: inline-block;
  vertical-align: text-bottom;
}

/*********************************
Main Navigation
*********************************/

.main_nav {
  display: inline-block;
}
.main_nav ul li {
  display: inline-block;
  margin-right: 38px;
}
.main_nav ul li:last-child{
  margin-right: 0;
}
.main_nav ul li a{
  font-weight: 600;
  color: #353535;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.main_nav ul li a:hover{
  color: #eb4141;
}
.main_nav ul li.active{
  color: #eb4141;
}
/*********************************
Hamburger
*********************************/

.hamburger {
  display: none;
  cursor: pointer;
  margin-right: 10px;
}
.hamburger i {
  font-size: 20px;
  color: #353535;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.hamburger:hover i {
  color: #eb4141;
}
</style>
