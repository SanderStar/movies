sap.ui.define([], function () {
	"use strict";
	return {
		getImagePath: function() {
			return jQuery.sap.getModulePath("opensap.movies") + "/images/MoviesHeader.png";
		},
		
		formatDate: function (sValue) {
			if (!sValue) {
				return null;
			}
			return new Date(sValue);
		}
	};
});