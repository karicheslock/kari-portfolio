import React from 'react'
import Iubenda from 'react-iubenda-policy'

const PrivacyPolicy = () => {
  const myPolicy = 44983278 // your policy id
  return (
    <div>

      {/* Renders the Privacy Policy link with the text 'Privacy Policy' */}
      <Iubenda id={myPolicy}/>

      <Iubenda id={myPolicy} type='terms-and-conditions' styling='nostyle'>
        Terms and conditions
      </Iubenda>

      <Iubenda id={myPolicy} type='privacy' styling='white'>
        Privacy Policy
      </Iubenda>

      <Iubenda id={myPolicy} type='cookie' styling='black'>
        Cookie Policy
      </Iubenda>
    </div>
  )
}

export default PrivacyPolicy;