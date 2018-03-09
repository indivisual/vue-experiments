<template>
	<gmap-map class="map-container" :center="{lat:1.38, lng:103.8}" :zoom="12" :options="{styles: styles}">
		<gmap-marker :position="{lat:1.38, lng:103.8}" :icon="icon"></gmap-marker>
		<gmap-info-window :position="{lat:1.38, lng:103.8}">
			Hello world!
		</gmap-info-window>
	</gmap-map>
</template>


<script>
import mapStyles from './map.style.js'


export default {
	name: 'minsait-map',
	data() {
		return {
			styles: mapStyles,
			icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
		}
	}
}
</script>


<style lang="scss" scoped>
.map-container {
	width: 100%;
	height: 400px;
}
</style>