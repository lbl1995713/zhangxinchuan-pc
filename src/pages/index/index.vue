<template>
  <div class="layout">
    <header>
      <div class="logo">
         lbl-WebUI
      </div>
      <div class="user">
      	 <mu-avatar 
      	 src="../../../static/userHeader.jpg"
      	 :size="52"/>
      	  <mu-icon-menu 
      	  icon="more_vert" 
      	  :anchorOrigin="{vertical: 'top',horizontal: 'right'}"
	      :targetOrigin="{vertical: 'bottom',horizontal: 'right'}"
      	  style="color:#fff" 
      	  slot="right"
      	  tooltip="操作">
		      <mu-menu-item title="设置" leftIcon="settings"/>
			  <mu-menu-item title="帮助" leftIcon="help_outline"/>
			  <mu-divider/>
			  <mu-menu-item title="退出" leftIcon="power_settings_new"/>
		  </mu-icon-menu>
      </div>
    </header>

    <div class="content">
    	<nav>
    		<muse-ui-navPlatForm/>
    	</nav>
    	<div class="main">
    		<router-view/>
    	</div>
    </div>
   <!--  <footer>
    	
    </footer> -->

  </div>
</template>
<script>
export {default}  from './indexController'
</script>
<style scoped>
.layout{
  background-color: rgb(236, 236, 236);
  height: 100%;
  position: relative;
}

header{
  background-color: #474a4f;
  display: flex;
  justify-content: space-between;
}

.logo{
  font-size: 24px;
  color: white;
  padding: 10px 20px;
  margin: 0;
}

.user{
  margin-right: 30px;
  display: flex;
}

.content{
  width: 100%;
  height: calc(100% - 56px);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.content nav{
	height: 100%;
	min-width: 14%;
	background-color: #fff;
	margin: 0;
}

.content .main{
	width: 100%;
	margin: 20px;
	padding:  20px;
	background-color: #fff;
}

footer{
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
}
</style>