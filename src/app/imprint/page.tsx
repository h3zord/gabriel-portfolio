import { Metadata } from 'next'
import { ImprintContainer, ImprintContent } from './styles'

export const metadata: Metadata = {
  title: 'Imprint',
}

export default function Imprint() {
  return (
    <ImprintContainer>
      <h3>Imprint</h3>

      <ImprintContent>
        <div>
          <p>
            If you need this in a another language, please contact us via.
            email. hotelcreatorclub@gmail.com
          </p>
          <p>Information according to § 5 TMG</p>
        </div>

        <div>
          <p>Toni Fischer</p>
          <p>Ringstraße 6A</p>
          <p>04720 Döbeln, Germany</p>
        </div>

        <div>
          <p>Represented by: </p>
          <p>Toni Fischer</p>
        </div>

        <div>
          <p>Contact: </p>
          <p>Phone: +491621755063</p>
          <p>E-mail: tonifisher.collab@gmail.com</p>
        </div>
      </ImprintContent>
    </ImprintContainer>
  )
}
