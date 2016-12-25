import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; //Paquete para trabajar con scrolleos. No tiene nombre el paquete.
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor(){
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.large-hero__title');
		this.createHeaderWaypoint();

		//De aca para abajo es para colorear la seccion actual en la que estas
		this.pageSections = $('.page-section');
		this.headerLinks = $('.primary-nav a');
		this.createPageSectionWaypoints();

		//Agrego smooth
		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},

				offset: "18%" //El default es 0% siendo el top de la pagina
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},

				offset: "-40%" //El default es 0% siendo el top de la pagina
			});
		})
	}

}

export default StickyHeader;