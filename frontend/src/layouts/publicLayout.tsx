import NavbarPublic from '../components/navbarPublic'
import ContainerCapsule from '../components/container'
import Qr from '../assets/qr.png'; // Adjust the path based on your project structure
import useAuthStore from '../store/authStore';

const PublicLayout = () => {
  const { login } = useAuthStore()

  return (
    <div className='bg-whatsapp-background select-none h-screen '>
      <NavbarPublic />
      <ContainerCapsule>
        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-4/12 p-4 flex justify-center items-center">
            <div><img src={Qr} alt="QR Code" />
              <input type='checkbox'
                onChange={() => login('ananda', 'demo')}
              /> stay logged in on this browser
            </div>
          </div>
          <div className="w-full md:w-8/12 p-4">
            <h5 className='text-2xl'>Login to WhatsApp Web</h5>
            <p>Message privately with friends and family using WhatsApp on your browser</p>
            <div className='mb-4'>
              <ol style={{ "listStyleType": "decimal" }}>
                <li>Open WhatsApp on your phone</li>
                <li>Tap Menu ... on Android, or Settigns O on Iphone </li>
                <li>Tap Linked devices and then Link a device</li>
                <li>Point your phone at this screen to scan the QR code</li>
              </ol>
            </div>
            <a className='underline block'>Need help getting started?</a>
            <a className='underline block'>Log in with phone number</a>
          </div>
        </div>

      </ContainerCapsule>
<p className='text-center'>Your personal messages are end-to-end encrypted</p>
    </div>
  )
}

export default PublicLayout