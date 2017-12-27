import ProgressVue from './Progress.vue'
let Progress = {}

Progress.install = (Vue, options) =>{

	Vue.prototype.$progress = (options) =>{

		if(document.getElementsByClassName('progress').length){
            // 如果progress还在，则不再执行
            return;
        }

        let progressConstructor = Vue.extend(ProgressVue),
	        tpl = new progressConstructor().$mount()

	    tpl.show = true;

	    Vue.nextTick(()=>{
            document.body.appendChild(tpl.$el);
        })

        Vue.prototype.$done = ()=>{
        	tpl.show = false;
        	document.body.removeChild(tpl.$el);
        }

	}
}

export default Progress