import CommandCenter from "./CommandCenter";

export default () => <CommandCenter
  name="Madison"
  address={[
    '1374 W Base St',
    'Madison, FL 32340-1416'
  ]}
  campingAddress={[
    'Lanier Field',
    '281 NW Crane Ave',
    'Madison, FL 32340'
  ]}
  email="nase.command1@gmail.com"
  assignedStakes={[
    'Columbus, GA',
    'Macon, GA',
    'Panama City, FL',
    'Powder Springs, GA',
    'Tallahassee, FL',
  ]}
  phoneNumber="(352) 247-2490"
  registrationLink="https://forms.gle/7w9VKh49DNtSZ24o6"
  closeoutFormLink="https://forms.gle/L59YpSxU4RAtpxVb8"
  areaOversight={[
    {
      name: 'Krista Donohoe',
      phoneNumber: '(850) 982-8499'
    },
    {
      name: 'Mike Dohm',
      phoneNumber: '(985) 718-9753'
    }
  ]}
  director={{
    name: 'Pres. Aaron Holloway',
    phoneNumber: '(850) 694-8555'
  }}
  sacramentLocation='campsite'
/>
