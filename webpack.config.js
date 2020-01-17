console.log('hi');
module.export = {
	//默认 false，也就是不不开启
	watch: true,
	wathcOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 300,
		poll: 1000
	}
}