import { User } from './User'
import { Company } from './Company'

/** Instructions to every other class on how they can be and argument to 'addMarker  */
export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(elementID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementID), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }

  addMarker(mappable: Mappable): void {
    let markerPos = new google.maps.LatLng(mappable.location.lat, mappable.location.lng, false)
    console.log(mappable.location.lat, mappable.location.lng, markerPos)
    const marker = new google.maps.Marker({ map: this.googleMap, position: markerPos })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}
