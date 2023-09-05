import { s3Url } from '../../lib/s3';
import CommandCenter from './CommandCenter';

export const ValdostaCC = () => <CommandCenter 
  address={[
    '2500 Jerry Jones Drive',
    'Valdosta, GA 31602-1250'
  ]}
  areaOversight={[
    {
      name: 'Michael Lavoie',
      phoneNumber: '(352) 672-0455'
    }
  ]}
  assignedStakes={[
    'Atlanta, GA',
    'Conyers, GA',
    'Marietta, GA East',
    'Newnan, GA',
    'Roswell, GA',
    'Sugar Hill, GA',
    'Tifton, GA',
    'Winder, GA',
  ]}
  email='nase.idalia2+valdosta@gmail.com'
  name='Valdosta'
  phoneNumber='(352) 320-3239'
  registrationLink='https://forms.gle/31ZNjz3rhE8GHCkG6'
  closeoutFormLink='https://forms.gle/wiLnTMtpVBLJ2eXU7'
  campingAddress={[
    '120 Prison Farm Rd',
    'Valdosta, GA 31601'
  ]}
  // director={{
  //   name: 'Pres. Jordan Jewkes',
  //   phoneNumber: '(404) 803-1832',
  // }}
  sacramentLocation='command-center'
  sacramentTime='8:00 AM'
  additionalInformation={
    <section>
      <h3>Command Center Layout</h3>
      <img src={s3Url('/idalia/valdosta-cc-layout.jpg')} alt="Valdosta Command Center Layout" style={{maxWidth: '100%'}} />
    </section>
  }
/>
export default ValdostaCC