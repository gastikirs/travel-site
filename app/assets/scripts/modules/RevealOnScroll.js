import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; //Paquete para trabajar con scrolleos. No tiene nombre el paquete.

class RevealOnScroll {
	constructor(els, offset) {
		this.itemsToReveal = els;
		this.hideInitially();
		this.offsetPercentage = offset;
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints(offset) {
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem, //Elemento DOM
				handler: function() { // //Que queremos que pase cuando se scrollea a ese elemento
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercentage //Elijo cuando se ejecuta el handler
			}); //Creo un waypoint por cada elemento
		});
	}
}

export default RevealOnScroll;