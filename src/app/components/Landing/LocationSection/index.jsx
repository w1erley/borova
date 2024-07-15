import React from 'react'
import Title from '../../Title'

export default function LocationSection() {
  return (
    <section className={`py-[100px]`} id="location">
      <div className={`container`}>
        <div className='mx-auto text-center text-2xl'>
          <Title title={"Location"}/>
          {/* <Members/> */}
          <div class="contact">
            <div class="gmap">
              <div id="map" class="map height-500">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20442.72161792874!2d30.086291943279825!3d50.173475219966484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ac168cac870f%3A0x15d1c4efa907090c!2z0JHQvtGA0L7QstCw0Y8sINCa0LjQtdCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDA4NTIx!5e0!3m2!1sru!2sua!4v1612020348554!5m2!1sru!2sua" width="100%" height="550" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
