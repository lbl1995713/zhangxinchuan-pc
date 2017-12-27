<template>
	<div class="container">
		<div class="loginFram">
			<h2>登录</h2>
			<div class="main">
				<muse-ui-form
				:definition="definition"
				:model="model"/>

				<mu-raised-button 
				label="登录"
				secondary
				@click="login"
				fullWidth/>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export {default} from './loginController'
</script>


<style type="text/css" scoped="">

	.container{
		width: 100%;
		/*height: 100%;*/
		min-height: 100%;
		background-color: #f1f1f1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.loginFram{
		/*height: 50%;*/
		width: 40%;
		position: relative;
		padding: 3%;
		margin: 0 auto;
	}
	.loginFram:before{
		content: "";
		background-color: #fff;
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		opacity: .5;
		top: 0;
		left: 0;
	}
	.main{
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 2;
	}

</style>