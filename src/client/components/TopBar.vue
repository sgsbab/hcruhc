<template>
  <div class="mx-5" align="left">
    <!-- Header -->
    <header class="header">
      <!-- Top Bar -->
      <div class="p-3 mb-2 top_bar text-yellow">
                  <span>Next Big Event: Candlemas in 2019 is on the Saturday, 2nd of Feb (2/02/2019)</span>
      </div>
              <!-- <div class="donations_button ml-auto">
                <a href="">Send Donations</a>
              </div> -->
    </header>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style>
.super_container {
  width: 100%;
  overflow: hidden;
}
.text-yellow {
  color: #bbff00;
}

/*********************************
3. Header
*********************************/

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  -webkit-transition: all 400ms ease;
  -moz-transition: all 400ms ease;
  -ms-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
}
.header.scrolled {
  top: -57px;
}
.header.scrolled .header_content {
  height: 92px;
}

/*********************************
 Top Bar
*********************************/

.top_bar {
  width: 100%;
  background: #032649;
}
.top_bar_content {
  width: 100%;
  height: 57px;
}
.nextBigEvent span {
    color: #ffd600;
}

/*********************************
   Send Donation button
*********************************/

.donations_button {
  width: 157px;
  height: 57px;
  background: #eb4141;
  text-align: center;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.donations_button a {
  display: block;
  color: #ffffff;
  line-height: 57px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.donations_button:hover {
  background: #ffffff;
}
.donations_button:hover a {
  color: #eb4141;
}
</style>
