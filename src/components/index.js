import demo from './demo/index.js'
import users from './users/index.js'
const components = [ demo , users ]
const install = function( Vue, opts = {} ) {
	components.forEach( component => {
	    Vue.component( component.name , component )
    })
}
if (typeof window !== 'undefined' && window.Vue) {
  install( window.Vue )
}
 
export default {
	install ,
	demo ,
	users
}