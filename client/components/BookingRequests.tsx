import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function BookingRequests(props: { proId }) {
  const [request, setRequest] = useState([])
  const [pendingRequest, setPendingRequest] = useState([])
  const [acceptedRequest, setAcceptedRequest] = useState([])
  // const [error, setError] = useState(null)
  useEffect(() => fetchData(), [])
  useEffect(() => filterRequests(), [request])
  const { query } = useRouter();
  query.id = props.proId;

  // Get request booking table all bookings that have pending ?
  // There's a problem in here somewhere the data is not consistent
  // It shows up randomly
  const fetchData = () => {
    fetch(`/api/bookings/${props.proId}`)
      .then(res => res.json())
      .then(data => setRequest(data));
  }

  const filterRequests = () => {
    const pendingStatus = request.filter(p => p.pending);
    const acceptedStatus = request.filter(p => p.accepted)
    setPendingRequest(pendingStatus)
    setAcceptedRequest(acceptedStatus)
  }



  // This works beautifully
  const togglePending = (id) => {
    fetch(`/api/bookings`, {
      method: 'PATCH',
      body: JSON.stringify(id)
    })
      .then(res => res.json())
      .then(() => fetchData())
  }

  console.log("PENDING", acceptedRequest)
  // console.log("GET DB info: ", request)
  // const pendingStatus = request.filter(p=>p.pending);
  // const acceptedStatus = request.filter(p=>p.accepted)
  // const pendingStatusTrue = (pendingStatus !== false)
  // console.log('Pending Status: ', pendingStatus)
  // console.log('Pending Status True: ', pendingStatusTrue)
  // console.log('Accepted Status: ', acceptedStatus);

  // button that's going to make an update request change pending to accepted ?
  // check over requests to see if there's a pending request
  // if pending request is true, we need to set it to false
  // after that it is set to false we need to set accepted to true

  // Needs two section 
  // Pending requests
  // Accepted requests

  return (
    <>
      <div className='container'>
        <h1 className='text-center'>Booking requests</h1>
        <div className='contents text text-xl'>
          Total Pending requests: {pendingRequest.length}
        </div>
        <div>
          {pendingRequest && pendingRequest.map((booking) => (
            <div key={booking.id} >
              <p>Pending from: {booking.clients.firstName} {booking.clients.lastName}</p>
              <p>For {booking.dateFrom}</p>
              <button
                className='btn btn-primary'
                onClick={() => {
                  togglePending(booking.id)
                }}
              >Accept booking</button>
            </div>
          ))}
          <div className='text text-xl'>
            Accepted requests: {acceptedRequest.length}
            {acceptedRequest.map((booking) => (
              <div>
                <div>Request History: </div><div>
                  <h2>{booking.clients.firstName} {booking.clients.lastName}</h2>
                  <p> {booking.dateFrom}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingRequests;

