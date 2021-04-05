import React, { useEffect, useState } from "react"
import "./App.css"
import firebase from "./lib/firebase"
import UserRepository from "./repository/UserRepository"

function App() {
  const [pushToken, setPushToken] = useState("")
  useEffect(() => {
    const messaging = firebase.messaging()

    messaging
      .getToken({
        vapidKey:
          "BL9iTyUrNkxK0wZIBGD8IxoVqnxp8iPWGF3Qq9_0Wa2Q357TdlWYd8UqUdmWPNtm1cNTVVXUcWkoP2mQB8uNPBU"
      })
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken)

          setPushToken(currentToken)
          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          )
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err)
        // ...
      })
  }, [])

  useEffect(() => {
    UserRepository.findAll()
      .then((doc) => {
        console.log(doc.docs[0].data())
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return <div className="App">Push token: {pushToken}</div>
}

export default App
