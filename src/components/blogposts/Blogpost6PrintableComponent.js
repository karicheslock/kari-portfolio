import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

function Blogpost6PrintableComponent() {

  let componentRef = useRef();

  return (
    <div>
      <ReactToPrint 
          trigger={() => {
              return <button className='flex bg-gray-200 border-2 border-black mx-auto rounded px-2 py-1 mb-8'>Print this out</button>
          }}
          content={() => componentRef.current}
      />
      <div ref={componentRef}>
      <style type="text/css" media="print">{"\
            @page { size: portrait; }\
            "}</style>
          <div className='container flex items-center justify-center mt-10'>
              <img src='../images/blogpost6images/doggies.jpg' alt='Two adorable puppies in the backseat of a car' className='w-1/2' />
          </div>
      </div>
    </div>
  )
}


export default Blogpost6PrintableComponent;