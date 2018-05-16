export default {
	duration: {
		type: Number || Function,
		default: 1000
	},
	delay: {
		type: Number || Function,
		default: 0
	},
	easing: {
		type: String || Array,
		default: 'easeOutElastic'
	},
	elasticity: {
		type:Number || Function,
		default: 500
	},
	animateProperties: {
		type: Object,
		default: function() {
			return {}
		}
	},
	autoplay: {
		type: Boolean,
		default: true
	},
	tag: {
		type: String,
		default: 'div'
	},
	groupTag: {
		type: String,
		default: 'div'
	}
}